import AppKit
import PDFKit

let usage = """
  Usage: swift scripts/inspect-resume-pdf.swift <pdf>

  Inspect an existing résumé PDF using macOS PDFKit and AppKit.
  Writes <name>-page-N.png, <name>.txt, and <name>-pdf.json beside the PDF.
  Prints the JSON page summary to stdo ut. Existing output files are replaced.
  """

func fail(_ message: String) -> Never {
  FileHandle.standardError.write(Data("\(message)\n".utf8))
  exit(1)
}

let arguments = Array(CommandLine.arguments.dropFirst())
if arguments == ["--help"] || arguments == ["-h"] {
  print(usage)
  exit(0)
}
guard arguments.count == 1, !arguments[0].hasPrefix("-") else {
  fail(usage)
}

let input = URL(fileURLWithPath: arguments[0])
guard let document = PDFDocument(url: input) else {
  fail("Cannot read PDF: \(input.path)")
}
guard !document.isLocked, document.pageCount > 0 else {
  fail("PDF is locked or has no pages: \(input.path)")
}

let prefix = input.deletingPathExtension().path
var pages: [[String: Any]] = []

do {
  for index in 0..<document.pageCount {
    guard let page = document.page(at: index) else {
      fail("Cannot read page \(index + 1).")
    }
    let text = page.string ?? ""
    // PDFKit can insert spaces within a heading, such as "T echnical".
    let compactText = text.filter { !$0.isWhitespace }
    let headings = ["Technical", "Experience", "Open Source", "Education"].filter {
      compactText.contains($0.filter { !$0.isWhitespace })
    }
    pages.append(["page": index + 1, "characters": text.count, "headings": headings])

    let image = page.thumbnail(of: NSSize(width: 1224, height: 1584), for: .mediaBox)
    guard let tiff = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: tiff),
      let png = bitmap.representation(using: .png, properties: [:])
    else {
      fail("Cannot render page \(index + 1).")
    }
    try png.write(to: URL(fileURLWithPath: "\(prefix)-page-\(index + 1).png"))
  }

  try (document.string ?? "").write(
    toFile: "\(prefix).txt", atomically: true, encoding: .utf8
  )
  let summary = try JSONSerialization.data(
    withJSONObject: ["pageCount": document.pageCount, "pages": pages],
    options: [.prettyPrinted, .sortedKeys]
  )
  try summary.write(to: URL(fileURLWithPath: "\(prefix)-pdf.json"))
  print(String(decoding: summary, as: UTF8.self))
} catch {
  fail("Could not write PDF inspection output: \(error.localizedDescription)")
}
