import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "PDF Viewer — UI Library" };

const variants = [
  { title: "Minimal Toolbar Viewer", file: "elements/pdf-viewer/Variant1.jsx" },
  { title: "Thumbnail Sidebar Viewer", file: "elements/pdf-viewer/Variant2.jsx" },
  { title: "Continuous Scroll Viewer", file: "elements/pdf-viewer/Variant3.jsx" },
];

export default function PdfViewerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">PDF Viewer</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Real in-browser PDF rendering powered by{" "}
          <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">react-pdf</code>{" "}
          (pdf.js). Each variant renders the same sample document.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="pdf-viewer"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
