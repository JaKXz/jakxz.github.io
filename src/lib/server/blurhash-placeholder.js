import { deflateSync } from "node:zlib";

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~";
const width = 32;
const height = 18;
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function decode83(hash) {
  let value = 0;
  for (const character of hash) {
    const digit = alphabet.indexOf(character);
    if (digit === -1) return null;
    value = value * 83 + digit;
  }
  return value;
}

function srgbToLinear(value) {
  const color = value / 255;
  return color <= 0.04045 ? color / 12.92 : ((color + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(value) {
  const color = Math.max(0, Math.min(1, value));
  return Math.round(
    255 * (color <= 0.0031308 ? color * 12.92 : 1.055 * color ** (1 / 2.4) - 0.055),
  );
}

function signedSquare(value) {
  return Math.sign(value) * value * value;
}

function decodeColors(hash) {
  if (typeof hash !== "string" || hash.length < 6) return null;

  const size = decode83(hash[0]);
  if (size === null) return null;
  const columns = (size % 9) + 1;
  const rows = Math.floor(size / 9) + 1;
  if (rows > 9 || hash.length !== 4 + 2 * columns * rows) return null;

  const quantizedMaximum = decode83(hash[1]);
  if (quantizedMaximum === null) return null;
  const maximum = (quantizedMaximum + 1) / 166;

  const colors = [];
  for (let index = 0; index < columns * rows; index += 1) {
    if (index === 0) {
      const value = decode83(hash.slice(2, 6));
      if (value === null || value > 0xffffff) return null;
      colors.push([
        srgbToLinear(value >> 16),
        srgbToLinear((value >> 8) & 255),
        srgbToLinear(value & 255),
      ]);
    } else {
      const value = decode83(hash.slice(4 + index * 2, 6 + index * 2));
      if (value === null || value >= 19 ** 3) return null;
      colors.push([
        (signedSquare(Math.floor(value / (19 * 19)) - 9) / 81) * maximum,
        (signedSquare((Math.floor(value / 19) % 19) - 9) / 81) * maximum,
        (signedSquare((value % 19) - 9) / 81) * maximum,
      ]);
    }
  }

  return { colors, columns, rows };
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  chunk.write(type, 4, 4, "ascii");
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(chunk.subarray(4, 8 + data.length)), 8 + data.length);
  return chunk;
}

/**
 * Decode an Unsplash BlurHash into a tiny, server-generated PNG data URL.
 * 'borrowed' from https://github.com/woltapp/blurhash/tree/master/TypeScript
 */
export function blurhashPlaceholder(hash) {
  const decoded = decodeColors(hash);
  if (!decoded) return null;

  const { colors, columns, rows } = decoded;
  const pixels = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const channels = [0, 0, 0];
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const basis =
            Math.cos((Math.PI * x * column) / width) * Math.cos((Math.PI * y * row) / height);
          const color = colors[row * columns + column];
          for (let channel = 0; channel < 3; channel += 1) {
            channels[channel] += color[channel] * basis;
          }
        }
      }
      const offset = y * (1 + width * 3) + 1 + x * 3;
      for (let channel = 0; channel < 3; channel += 1) {
        pixels[offset + channel] = linearToSrgb(channels[channel]);
      }
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8; // 8-bit RGB, with no interlace or special filters.
  header[9] = 2;

  const png = Buffer.concat([
    pngSignature,
    pngChunk("IHDR", header),
    pngChunk("IDAT", deflateSync(pixels)),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
  return `data:image/png;base64,${png.toString("base64")}`;
}
