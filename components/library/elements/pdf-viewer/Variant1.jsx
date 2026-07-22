"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  standardFontDataUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export default function Variant1() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="flex h-7 w-7 items-center justify-center rounded text-slate-500 hover:bg-slate-200 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-1 text-xs text-slate-600">
            Page {pageNumber} of {numPages ?? "–"}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages ?? p, p + 1))}
            disabled={pageNumber >= (numPages ?? 1)}
            className="flex h-7 w-7 items-center justify-center rounded text-slate-500 hover:bg-slate-200 disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}
            className="flex h-7 w-7 items-center justify-center rounded text-slate-500 hover:bg-slate-200"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.2))}
            className="flex h-7 w-7 items-center justify-center rounded text-slate-500 hover:bg-slate-200"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex max-h-96 justify-center overflow-auto bg-slate-100 p-4">
        <Document
          file="/sample.pdf"
          options={options}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="p-8 text-sm text-slate-500">Loading document…</p>}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
}
