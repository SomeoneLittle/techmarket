import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { PartnerAgreement } from "@/components/sites/cubebrush/pages/PartnerAgreement";

export const metadata: Metadata = { title: "Partner Agreement · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="partner-agreement" bodyClass="dc-port dc-page-legal" mainClass="dc-main dc-legal" />
      <PartnerAgreement />
      <PageBehavior />
    </>
  );
}
