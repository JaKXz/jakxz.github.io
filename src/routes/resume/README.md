## Résumé PDFs

With dependencies installed and `RESUME_EMAIL` and `RESUME_PHONE` set in `.env`, run:

```sh
pnpm run resume:pdf
```

This builds the site, starts a temporary local preview, and uses headless Chrome to
save `resume-pdfs/resume-letter.pdf` and `resume-pdfs/resume-a4.pdf`. It waits for
fonts and images, includes background graphics, prints at 100% scale with 0.45-inch
margins, and omits browser headers and footers. The generated directory is ignored
by Git. Chrome and the preview server stop when the command finishes.

The default browser is Google Chrome installed in `/Applications` on macOS. Set
`CHROME_PATH` to a Chrome or Chromium executable for another installation. The
script uses Node's built-in WebSocket client and the project's existing dependencies.

Use `pnpm run resume:pdf --output-dir /path/to/output` to choose another directory,
or `pnpm run resume:pdf --help` for usage.

To inspect a generated PDF on macOS with Swift installed:

```sh
swift scripts/inspect-resume-pdf.swift resume-pdfs/resume-letter.pdf
```

The Swift helper uses PDFKit and AppKit to render each page as a PNG, extract text,
and report page counts and detected résumé headings. It saves
`resume-letter-page-N.png`, `resume-letter.txt`, and `resume-letter-pdf.json` beside
the input PDF, replacing matching output files on subsequent runs. The JSON summary
is also printed to stdout. Use `--help` for usage; PDF generation remains in the Node script.
