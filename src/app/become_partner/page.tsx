import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { BecomePartner } from "@/components/sites/cubebrush/pages/BecomePartner";

export const metadata: Metadata = { title: "Become a partner · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="become-a-partner partner-library-cover" bodyClass="dc-port dc-page-become-a-partner" mainClass="dc-main dc-become-a-partner" />
      <BecomePartner />
      <PageBehavior />
    </>
  );
}
