import ComponentPreview from "@/components/preview/ComponentPreview";
import { getComponentSource } from "@/lib/getComponentSource";

export const metadata = { title: "Map — UI Library" };

const variants = [
  { title: "Glowing Pins (Dark)", file: "elements/map/Variant1.jsx" },
  { title: "Numbered Legend Map (Light)", file: "elements/map/Variant2.jsx" },
  { title: "Flight-Path Network Map", file: "elements/map/Variant3.jsx" },
];

export default function MapPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Map</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Pure SVG/CSS location maps with pins — no API key or external tiles
          required. Built with the dot-matrix world data from{" "}
          <code className="rounded bg-neutral-900 px-1 py-0.5 text-xs">dotted-map</code>.
          Hover or tap a pin for details.
        </p>
      </div>
      <div className="space-y-10">
        {variants.map((v, i) => (
          <ComponentPreview
            key={v.file}
            title={v.title}
            code={getComponentSource(v.file)}
            category="elements"
            type="map"
            variant={i + 1}
            center
          />
        ))}
      </div>
    </div>
  );
}
