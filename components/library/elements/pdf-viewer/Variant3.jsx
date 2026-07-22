"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ZoomIn, ZoomOut, FileText } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  standardFontDataUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export default function Variant3() {
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(0.85);

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-neutral-800 bg-black">
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2.5">
        <FileText className="h-4 w-4 text-neutral-500" />
        <span className="text-xs text-neutral-400">sample.pdf</span>
        <span className="ml-auto text-xs text-neutral-600">{numPages} pages</span>
      </div>

      <div className="h-96 overflow-y-auto bg-neutral-950 py-6">
        <Document
          file="/sample.pdf"
          options={options}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="p-8 text-center text-sm text-neutral-500">Loading document…</p>}
        >
          <div className="flex flex-col items-center gap-6">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((num) => (
              <div key={num} className="overflow-hidden rounded-md shadow-2xl ring-1 ring-white/10">
                <Page pageNumber={num} scale={scale} />
              </div>
            ))}
          </div>
        </Document>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/90 px-2 py-1.5 shadow-xl backdrop-blur">
          <button
            onClick={() => setScale((s) => Math.max(0.4, +(s - 0.15).toFixed(2)))}
            className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="min-w-[3rem] text-center font-mono text-xs text-neutral-400">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(2, +(s + 0.15).toFixed(2)))}
            className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
