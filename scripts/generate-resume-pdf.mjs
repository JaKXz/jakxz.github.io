import { spawn } from "node:child_process";
import { once } from "node:events";
import { constants } from "node:fs";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { preview } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const controller = new AbortController();

async function main() {
  const { values } = parseArgs({
    options: {
      help: { type: "boolean", short: "h" },
      "output-dir": { type: "string" },
    },
  });
  if (values.help) {
    console.log(`Usage: pnpm run resume:pdf [--output-dir <directory>]

Build the site and export Letter and A4 résumé PDFs with background graphics,
100% scale, and no browser headers or footers. Waits for fonts and images.

Outputs: resume-pdfs/resume-letter.pdf and resume-pdfs/resume-a4.pdf
Requires Google Chrome on macOS, or CHROME_PATH pointing to a Chrome/Chromium executable.
The build reads RESUME_EMAIL and RESUME_PHONE from the existing .env configuration.`);
    return;
  }

  const outputDir = values["output-dir"]
    ? resolve(values["output-dir"])
    : join(root, "resume-pdfs");
  const chromePath =
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  try {
    await access(chromePath, constants.X_OK);
  } catch {
    throw new Error(
      `Chrome is not executable at ${chromePath}. Set CHROME_PATH to its executable.`,
    );
  }

  const interrupt = () => controller.abort(new Error("PDF generation interrupted."));
  process.once("SIGINT", interrupt);
  process.once("SIGTERM", interrupt);
  const { signal } = controller;
  let server;
  let profile;
  let chrome;
  let socket;
  try {
    process.chdir(root);
    const build = spawn("pnpm", ["run", "build"], { cwd: root, stdio: "inherit", signal });
    const [code] = await once(build, "exit");
    if (code !== 0) throw new Error(`Site build failed (exit ${code}).`);

    server = await preview({
      logLevel: "silent",
      preview: { host: "127.0.0.1", port: 0, open: false },
    });
    signal.throwIfAborted();
    const { port } = server.httpServer.address();
    profile = await mkdtemp(join(tmpdir(), "resume-pdf-chrome-"));
    chrome = spawn(
      chromePath,
      [
        "--headless=new",
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-background-networking",
        "--disable-sync",
        "--remote-debugging-port=0",
        `--user-data-dir=${profile}`,
        "about:blank",
      ],
      { stdio: ["ignore", "ignore", "pipe"], signal },
    );
    const endpoint = await new Promise((resolveEndpoint, reject) => {
      const timer = setTimeout(() => reject(new Error("Chrome startup timed out.")), 15_000);
      let output = "";
      chrome.stderr.on("data", (chunk) => {
        output = (output + chunk).slice(-4096);
        const match = output.match(/DevTools listening on (ws:\/\/\S+)/);
        if (match) {
          clearTimeout(timer);
          resolveEndpoint(match[1]);
        }
      });
      chrome.once("error", (error) => {
        clearTimeout(timer);
        reject(error);
      });
      chrome.once("exit", (exitCode) => {
        clearTimeout(timer);
        reject(new Error(`Chrome exited before connecting (exit ${exitCode}).`));
      });
    });

    socket = new WebSocket(endpoint);
    await once(socket, "open", { signal: AbortSignal.any([signal, AbortSignal.timeout(15_000)]) });
    let nextId = 0;
    const pending = new Map();
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      const entry = pending.get(message.id);
      if (!entry) return;
      pending.delete(message.id);
      clearTimeout(entry.timer);
      if (message.error) entry.reject(new Error(message.error.message));
      else entry.resolve(message.result);
    });
    socket.addEventListener("close", () => {
      for (const entry of pending.values()) {
        clearTimeout(entry.timer);
        entry.reject(new Error("Chrome disconnected before PDF generation completed."));
      }
      pending.clear();
    });
    function send(method, params = {}, sessionId) {
      signal.throwIfAborted();
      return new Promise((resolveCommand, reject) => {
        const id = ++nextId;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(new Error(`${method} timed out.`));
        }, 20_000);
        pending.set(id, { resolve: resolveCommand, reject, timer });
        socket.send(JSON.stringify({ id, method, params, sessionId }));
      });
    }
    const { targetId } = await send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
    const command = (method, params) => send(method, params, sessionId);
    const evaluate = async (expression) => {
      const result = await command("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      if (result.exceptionDetails) {
        throw new Error(
          result.exceptionDetails.exception?.description || result.exceptionDetails.text,
        );
      }
      return result.result.value;
    };

    await command("Page.enable");
    await command("Emulation.setEmulatedMedia", {
      media: "print",
      features: [{ name: "prefers-color-scheme", value: "light" }],
    });
    const navigation = await command("Page.navigate", { url: `http://127.0.0.1:${port}/resume/` });
    if (navigation.errorText) throw new Error(navigation.errorText);
    let ready = false;
    for (let attempt = 0; attempt < 150; attempt++) {
      ready = await evaluate(
        `document.readyState === "complete" && !!document.querySelector(".print-title h1") && !!document.querySelector("article")`,
      );
      if (ready) break;
      await delay(100, undefined, { signal });
    }
    if (!ready) throw new Error("The résumé did not finish loading.");
    await evaluate(`Promise.all([
      document.fonts.ready,
      ...Array.from(document.images, image => image.decode()),
    ]).then(() => true)`);

    await mkdir(outputDir, { recursive: true });
    for (const [name, width, height] of [
      ["letter", 8.5, 11],
      ["a4", 210 / 25.4, 297 / 25.4],
    ]) {
      const { data } = await command("Page.printToPDF", {
        printBackground: true,
        displayHeaderFooter: false,
        preferCSSPageSize: true,
        scale: 1,
        paperWidth: width,
        paperHeight: height,
        marginTop: 0.45,
        marginBottom: 0.45,
        marginLeft: 0.45,
        marginRight: 0.45,
      });
      const path = join(outputDir, `resume-${name}.pdf`);
      await writeFile(path, Buffer.from(data, "base64"));
      console.log(`Saved ${path}`);
    }
  } finally {
    // Stop Chrome before removing its disposable profile, including on failed exports.
    socket?.close();
    if (chrome && chrome.pid && chrome.exitCode === null && chrome.signalCode === null) {
      const exited = once(chrome, "exit");
      chrome.kill("SIGTERM");
      const timer = setTimeout(() => chrome.kill("SIGKILL"), 3000);
      try {
        await exited;
      } finally {
        clearTimeout(timer);
      }
    }
    await server?.close();
    if (profile) await rm(profile, { recursive: true, force: true });
    process.removeListener("SIGINT", interrupt);
    process.removeListener("SIGTERM", interrupt);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = controller.signal.aborted ? 130 : 1;
});
