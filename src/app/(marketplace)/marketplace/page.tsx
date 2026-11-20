import type { Metadata } from "next";
import { MarketplaceHero } from "@/components/sites/cubebrush/marketplace/MarketplaceHero";
import { MarketplaceResults } from "@/components/sites/cubebrush/marketplace/MarketplaceResults";
import { MarketplaceToolbar } from "@/components/sites/cubebrush/marketplace/MarketplaceToolbar";
import { MarketplaceBehavior } from "@/components/sites/cubebrush/marketplace/MarketplaceBehavior";

export const metadata: Metadata = { title: "Marketplace | Cubebrush" };

export default function MarketplacePage() {
  return (
    <>
      <MarketplaceHero />
      <div>
        <MarketplaceToolbar />
        <MarketplaceResults />
      </div>
      <MarketplaceBehavior />
    </>
  );
}
