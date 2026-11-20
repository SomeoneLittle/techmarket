import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { BlogIndex } from "@/components/sites/cubebrush/pages/BlogIndex";

export const metadata: Metadata = { title: "Blog · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="blog" bodyClass="dc-port dc-page-blog" mainClass="dc-main dc-blog" />
      <BlogIndex />
      <PageBehavior />
    </>
  );
}
