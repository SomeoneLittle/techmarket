import { HomeAllProducts } from "@/components/sites/cubebrush/home/HomeAllProducts";
import { HomeCategories } from "@/components/sites/cubebrush/home/HomeCategories";
import { HomeFreebies } from "@/components/sites/cubebrush/home/HomeFreebies";
import { HomeHero } from "@/components/sites/cubebrush/home/HomeHero";
import { HomeMore } from "@/components/sites/cubebrush/home/HomeMore";
import { HomeSellBand } from "@/components/sites/cubebrush/home/HomeSellBand";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFreebies />
      <HomeCategories />
      <HomeSellBand />
      <HomeAllProducts />
      <HomeMore />
    </>
  );
}
