import { SiteDocument, siteMetadata } from "@/components/sites/cubebrush/layout/SiteDocument";

export const metadata = siteMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument bodyClass="dc-port" pageCss="library">{children}</SiteDocument>;
}
