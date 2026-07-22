"use client";

import { useMemo, useState } from "react";
import DottedMap from "dotted-map/without-countries";
import mapData from "./mapData.json";

const pins = [
  { lat: 37.7749, lng: -122.4194, name: "San Francisco", stat: "42 deploys today" },
  { lat: 51.5074, lng: -0.1278, name: "London", stat: "18 deploys today" },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo", stat: "27 deploys today" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney", stat: "9 deploys today" },
  { lat: -23.5505, lng: -46.6333, name: "São Paulo", stat: "14 deploys today" },
];

export default function Variant1() {
  const [active, setActive] = useState(null);

  const { svg, points } = useMemo(() => {
    const map = new DottedMap({ map: mapData });
    const svg = map.getSVG({
      radius: 0.22,
      color: "#2f3336",
      shape: "circle",
      backgroundColor: "transparent",
    });
    pins.forEach((pin) => map.addPin({ lat: pin.lat, lng: pin.lng, data: pin }));
    const points = map.getPoints().filter((p) => p.data);
    return { svg, points };
  }, []);

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-950 p-6">
      <div
        className="relative [&>svg]:h-auto [&>svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="pointer-events-none absolute inset-6">
        {points.map((p, i) => (
          <div
            key={p.data.name}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(p.x / mapData.width) * 100}%`,
              top: `${(p.y / mapData.height) * 100}%`,
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((a) => (a === i ? null : a))}
          >
            <button
              type="button"
              onClick={() => setActive((a) => (a === i ? null : i))}
              className="relative flex h-2.5 w-2.5 items-center justify-center"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            </button>
            {active === i && (
              <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs shadow-xl">
                <p className="font-medium text-white">{p.data.name}</p>
                <p className="text-neutral-400">{p.data.stat}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
