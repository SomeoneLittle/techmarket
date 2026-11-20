import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { Licenses } from "@/components/sites/cubebrush/pages/Licenses";

export const metadata: Metadata = { title: "Licenses · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="licenses" bodyClass="dc-port dc-page-legal" mainClass="dc-main dc-legal" />
      <Licenses />
      <PageBehavior />
    </>
  );
}
