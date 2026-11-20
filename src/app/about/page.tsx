import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { About } from "@/components/sites/cubebrush/pages/About";

export const metadata: Metadata = { title: "About · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="about" bodyClass="dc-port dc-page-about" mainClass="ab-page dc-main dc-about" />
      <About />
      <PageBehavior />
    </>
  );
}
