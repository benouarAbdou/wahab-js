"use client";

import { useState } from "react";
import { Check, Copy, Monitor, Tablet, Smartphone } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { cn } from "@/lib/cn";

const VIEWPORTS = {
  desktop: { icon: Monitor, width: "100%", label: "Desktop" },
  tablet: { icon: Tablet, width: "768px", label: "Tablet" },
  mobile: { icon: Smartphone, width: "375px", label: "Mobile" },
};

export default function ComponentPreview({
  title,
  description,
  code,
  center = false,
  children,
}) {
  const [tab, setTab] = useState("preview");
  const [viewport, setViewport] = useState("desktop");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-950 px-4 py-3">
        <div>
          <h3 className="text-sm font-medium text-white">{title}</h3>
          {description && (
            <p className="mt-0.5 text-xs text-neutral-500">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {tab === "preview" && (
            <div className="flex items-center rounded-md border border-neutral-800 p-0.5">
              {Object.entries(VIEWPORTS).map(([key, v]) => {
                const Icon = v.icon;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setViewport(key)}
                    aria-label={v.label}
                    className={cn(
                      "rounded p-1.5 text-neutral-500 transition-colors hover:text-white",
                      viewport === key && "bg-neutral-800 text-white"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>
          )}
          <div className="flex items-center rounded-md border border-neutral-800 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={cn(
                "rounded px-2.5 py-1 text-neutral-500 transition-colors hover:text-white",
                tab === "preview" && "bg-neutral-800 text-white"
              )}
            >
              Preview
            </button>
            <button
              type="button"
              onClick={() => setTab("code")}
              className={cn(
                "rounded px-2.5 py-1 text-neutral-500 transition-colors hover:text-white",
                tab === "code" && "bg-neutral-800 text-white"
              )}
            >
              Code
            </button>
          </div>
        </div>
      </div>

      {tab === "preview" ? (
        <div
          className="overflow-auto p-6"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: "radial-gradient(circle, #262626 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <div
            className={cn(
              "mx-auto transition-all duration-300",
              viewport !== "desktop" &&
                "overflow-hidden rounded-md border border-neutral-800 shadow-2xl"
            )}
            style={{ width: VIEWPORTS[viewport].width, maxWidth: "100%" }}
          >
            <div
              className={cn(
                "overflow-auto",
                center && "flex items-center justify-center p-6"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-xs text-neutral-300 transition-colors hover:text-white"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
}
