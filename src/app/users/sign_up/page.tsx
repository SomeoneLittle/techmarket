import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { SignUpSection } from "@/components/sites/cubebrush/pages/SignUpSection";

export const metadata: Metadata = { title: "Create your account · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="sign-up" bodyClass="dc-port dc-page-auth" mainClass="dc-main dc-auth" />
      <SignUpSection />
      <PageBehavior />
    </>
  );
}
