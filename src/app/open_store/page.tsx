import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { OpenStore } from "@/components/sites/cubebrush/pages/OpenStore";

export const metadata: Metadata = { title: "Open a store · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="open-store" bodyClass="dc-port dc-page-open-store" mainClass="dc-main dc-open-store" />
      <OpenStore />
      <PageBehavior />
    </>
  );
}
