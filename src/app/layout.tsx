import { SiteDocument, siteMetadata } from "@/components/sites/cubebrush/layout/SiteDocument";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}
