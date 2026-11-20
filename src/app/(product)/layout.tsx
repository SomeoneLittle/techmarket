import { SiteDocument, siteMetadata } from "@/components/sites/cubebrush/layout/SiteDocument";

export const metadata = siteMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument bodyClass="pp-own-none pp-lic-both" pageCss="product">{children}</SiteDocument>;
}
