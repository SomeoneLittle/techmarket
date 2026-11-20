import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Product1 } from "@/components/sites/cubebrush/product/Product1";
import { Product2 } from "@/components/sites/cubebrush/product/Product2";
import { ProductBehavior } from "@/components/sites/cubebrush/product/ProductBehavior";

const PAGES = {
  rwe03q: { store: "theartgun", slug: "gunquin-the-virtual-art-mannequin", title: "Gunquin the Virtual Art Mannequin", Page: Product1 },
  ae75sq: { store: "alwayshungry", slug: "gestureflow-1-1-2-gesture-drawing-reference-study", title: "GestureFlow 1.1.2 - Gesture Drawing & Reference Study", Page: Product2 },
} as const;

type Params = { store: string; id: string; slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.entries(PAGES).map(([id, p]) => ({ store: p.store, id, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const p = PAGES[id as keyof typeof PAGES];
  return { title: p ? `${p.title} | Cubebrush` : "Cubebrush" };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { id, store, slug } = await params;
  const p = PAGES[id as keyof typeof PAGES];
  if (!p || p.store !== store || p.slug !== slug) notFound();
  const { Page } = p;
  return (
    <>
      <Page />
      <ProductBehavior />
    </>
  );
}
