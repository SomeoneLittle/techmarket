import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { Privacy } from "@/components/sites/cubebrush/pages/Privacy";

export const metadata: Metadata = { title: "Privacy Policy · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="privacy" bodyClass="dc-port dc-page-legal" mainClass="dc-main dc-legal" />
      <Privacy />
      <PageBehavior />
    </>
  );
}
