import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { Terms } from "@/components/sites/cubebrush/pages/Terms";

export const metadata: Metadata = { title: "Terms of Service · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="terms" bodyClass="dc-port dc-page-legal" mainClass="dc-main dc-legal" />
      <Terms />
      <PageBehavior />
    </>
  );
}
