"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map/without-countries";
import mapData from "./mapData.json";

const offices = [
  { lat: 40.7128, lng: -74.006, name: "New York", people: 84 },
  { lat: 52.52, lng: 13.405, name: "Berlin", people: 31 },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", people: 22 },
  { lat: -1.2921, lng: 36.8219, name: "Nairobi", people: 9 },
];

export default function Variant2() {
  const { svg, points } = useMemo(() => {
    const map = new DottedMap({ map: mapData });
    const svg = map.getSVG({
      radius: 0.25,
      color: "#cbd5e1",
      shape: "circle",
      backgroundColor: "transparent",
    });
    offices.forEach((o) => map.addPin({ lat: o.lat, lng: o.lng, data: o }));
    const points = map.getPoints().filter((p) => p.data);
    return { svg, points };
  }, []);

  return (
    <div className="flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-6 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <div className="[&>svg]:h-auto [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />
        {points.map((p, i) => (
          <div
            key={p.data.name}
            className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white ring-4 ring-white"
            style={{
              left: `${(p.x / mapData.width) * 100}%`,
              top: `${(p.y / mapData.height) * 100}%`,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="shrink-0 space-y-3 sm:w-48">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Our offices
        </p>
        {offices.map((o, i) => (
          <div key={o.name} className="flex items-center gap-2 text-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <p className="font-medium text-slate-900">{o.name}</p>
              <p className="text-xs text-slate-500">{o.people} people</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
