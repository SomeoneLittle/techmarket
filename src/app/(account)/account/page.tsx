import type { Metadata } from "next";
import { AccountDashboard } from "@/components/sites/cubebrush/account/AccountDashboard";

export const metadata: Metadata = { title: "My account | Cubebrush" };

export default function AccountPage() {
  return <AccountDashboard />;
}
