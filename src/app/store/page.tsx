import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { OfficialStore } from "@/components/sites/cubebrush/pages/OfficialStore";

export const metadata: Metadata = { title: "Cubebrush Official Store | Digital products & software" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="store" />
      <OfficialStore />
      <PageBehavior />
    </>
  );
}
