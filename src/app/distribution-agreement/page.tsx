import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { DistributionAgreement } from "@/components/sites/cubebrush/pages/DistributionAgreement";

export const metadata: Metadata = { title: "Distribution Agreement · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="distribution-agreement" bodyClass="dc-port dc-page-legal" mainClass="dc-main dc-legal" />
      <DistributionAgreement />
      <PageBehavior />
    </>
  );
}
