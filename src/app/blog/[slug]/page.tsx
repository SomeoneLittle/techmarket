import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { BlogPostGameReady } from "@/components/sites/cubebrush/pages/BlogPostGameReady";
import { BlogPostAffiliate } from "@/components/sites/cubebrush/pages/BlogPostAffiliate";

const PAGES = {
  "what-makes-an-asset-game-ready": { title: "What Makes an Asset “Game-Ready”? (A Practical Checklist) · Cubebrush Blog", attrs: { pageCss: "blog-post", bodyClass: "dc-port dc-page-article", mainClass: "dc-main dc-article" }, Page: BlogPostGameReady },
  "earn-as-a-cubebrush-affiliate": { title: "Earn 20% as a Cubebrush Affiliate · Cubebrush Blog", attrs: { pageCss: "blog-post", bodyClass: "dc-port dc-page-article", mainClass: "dc-main dc-article" }, Page: BlogPostAffiliate },
} as const;

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = PAGES[(await params).slug as keyof typeof PAGES];
  return { title: p?.title ?? "Cubebrush" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = PAGES[(await params).slug as keyof typeof PAGES];
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
