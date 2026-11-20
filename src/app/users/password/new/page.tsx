import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { PasswordNewSection } from "@/components/sites/cubebrush/pages/PasswordNewSection";

export const metadata: Metadata = { title: "Forgot your password? · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="forgot-password u11_recovery" bodyClass="dc-port dc-page-auth" mainClass="dc-main dc-auth" />
      <PasswordNewSection />
      <PageBehavior />
    </>
  );
}
