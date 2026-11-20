import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { SignInSection } from "@/components/sites/cubebrush/auth/SignInSection";

export const metadata: Metadata = { title: "Sign in | Cubebrush" };

export default function SignInPage() {
  return (
    <>
      <PageAttrs pageCss="sign-in" bodyClass="dc-port dc-page-auth" mainClass="dc-main dc-auth" />
      <SignInSection />
    </>
  );
}
