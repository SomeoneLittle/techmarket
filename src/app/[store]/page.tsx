import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { StoreTheArtGun } from "@/components/sites/cubebrush/pages/StoreTheArtGun";
import { StoreAlwaysHungry } from "@/components/sites/cubebrush/pages/StoreAlwaysHungry";

const PAGES = {
  "theartgun": { title: "TheArtGun · Cubebrush store", attrs: { pageCss: "store" }, Page: StoreTheArtGun },
  "alwayshungry": { title: "Arthur Zugrov · Cubebrush store", attrs: { pageCss: "store" }, Page: StoreAlwaysHungry },
} as const;

type Params = { store: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.keys(PAGES).map((store) => ({ store }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = PAGES[(await params).store as keyof typeof PAGES];
  return { title: p?.title ?? "Cubebrush" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = PAGES[(await params).store as keyof typeof PAGES];
  if (!p) notFound();
  const { Page: Content } = p;
  return (
    <>
      <PageAttrs {...p.attrs} />
      <Content />
      <PageBehavior />
    </>
  );
}
