import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { MarketplaceHero } from "@/components/sites/cubebrush/marketplace/MarketplaceHero";
import { MarketplaceResults } from "@/components/sites/cubebrush/marketplace/MarketplaceResults";
import { MarketplaceToolbar } from "@/components/sites/cubebrush/marketplace/MarketplaceToolbar";
import { MarketplaceBehavior } from "@/components/sites/cubebrush/marketplace/MarketplaceBehavior";

export const metadata: Metadata = { title: "Marketplace | Cubebrush" };

export default function MarketplacePage() {
  return (
    <>
      <PageAttrs pageCss="marketplace" />
      <MarketplaceHero />
      <div>
        <MarketplaceToolbar />
        <MarketplaceResults />
      </div>
      <MarketplaceBehavior />
    </>
  );
}
