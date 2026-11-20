import type { Metadata } from "next";
import { PageAttrs } from "@/components/sites/cubebrush/layout/PageAttrs";
import { PageBehavior } from "@/components/sites/cubebrush/pages/PageBehavior";
import { Contacts } from "@/components/sites/cubebrush/pages/Contacts";

export const metadata: Metadata = { title: "Contact us · Cubebrush" };

export default function Page() {
  return (
    <>
      <PageAttrs pageCss="contact" bodyClass="dc-port dc-page-contact" mainClass="dc-main dc-contact" />
      <Contacts />
      <PageBehavior />
    </>
  );
}
