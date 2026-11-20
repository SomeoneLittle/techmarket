import type { Metadata } from "next";
import { SignInSection } from "@/components/sites/cubebrush/auth/SignInSection";

export const metadata: Metadata = { title: "Sign in | Cubebrush" };

export default function SignInPage() {
  return <SignInSection />;
}
