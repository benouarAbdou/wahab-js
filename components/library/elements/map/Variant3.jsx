"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map/without-countries";
import mapData from "./mapData.json";

const hub = { lat: 37.7749, lng: -122.4194, name: "San Francisco (HQ)" };
const routes = [
  { lat: 51.5074, lng: -0.1278, name: "London" },
  { lat: 25.2048, lng: 55.2708, name: "Dubai" },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
  { lat: -23.5505, lng: -46.6333, name: "São Paulo" },
];

function arcPath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / dist;
  const ny = dx / dist;
  const cx = mx + nx * dist * 0.22;
  const cy = my + ny * dist * 0.22;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export default function Variant3() {
  const { svg, hubPoint, routePoints } = useMemo(() => {
    const map = new DottedMap({ map: mapData });
    const svg = map.getSVG({
      radius: 0.22,
      color: "#312e81",
      shape: "circle",
      backgroundColor: "transparent",
    });
    map.addPin({ lat: hub.lat, lng: hub.lng, data: hub });
    routes.forEach((r) => map.addPin({ lat: r.lat, lng: r.lng, data: r }));
    const points = map.getPoints().filter((p) => p.data);
    const hubPoint = points.find((p) => p.data.name === hub.name);
    const routePoints = points.filter((p) => p.data.name !== hub.name);
    return { svg, hubPoint, routePoints };
  }, []);

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0a0a1a] p-6">
      <div className="relative [&>svg]:h-auto [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />

      <svg
        viewBox={`0 0 ${mapData.width} ${mapData.height}`}
        className="pointer-events-none absolute inset-6"
      >
        {routePoints.map((p) => (
          <path
            key={p.data.name}
            d={arcPath(hubPoint.x, hubPoint.y, p.x, p.y)}
            fill="none"
            stroke="#818cf8"
            strokeWidth="0.25"
            strokeDasharray="1.2 1.2"
            className="animate-[dash-flow_1.6s_linear_infinite] opacity-70"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-6">
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(hubPoint.x / mapData.width) * 100}%`, top: `${(hubPoint.y / mapData.height) * 100}%` }}
        >
          <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.5)]" />
          <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white">
            {hub.name}
          </span>
        </div>
        {routePoints.map((p) => (
          <div
            key={p.data.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(p.x / mapData.width) * 100}%`, top: `${(p.y / mapData.height) * 100}%` }}
          >
            <span className="relative flex h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_2px_rgba(129,140,248,0.6)]" />
            <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] text-indigo-200">
              {p.data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
