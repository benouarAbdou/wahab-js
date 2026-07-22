import { notFound } from "next/navigation";
import { registry } from "@/lib/variantRegistry";
import PreviewFrame from "@/components/preview/PreviewFrame";

export function generateStaticParams() {
  const params = [];
  for (const category of Object.keys(registry)) {
    for (const type of Object.keys(registry[category])) {
      registry[category][type].forEach((_, i) => {
        params.push({ category, type, variant: String(i + 1) });
      });
    }
  }
  return params;
}

export default async function PreviewPage({ params, searchParams }) {
  const { category, type, variant } = await params;
  const { center } = await searchParams;

  const list = registry[category]?.[type];
  const Component = list?.[Number(variant) - 1];

  if (!Component) notFound();

  return (
    <PreviewFrame center={center === "1"}>
      <Component />
    </PreviewFrame>
  );
}
