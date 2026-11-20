import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { AccountDashboard } from "@/components/sites/cubebrush/account/AccountDashboard";

export const metadata: Metadata = { title: "My account | Cubebrush" };

export default function AccountPage() {
  return (
    <>
      <PageAttrs pageCss="library" bodyClass="dc-port" />
      <AccountDashboard />
    </>
  );
}
