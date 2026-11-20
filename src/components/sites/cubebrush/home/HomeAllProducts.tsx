"use client";

import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

const POPULAR = ["0dpzeg", "x5h1wq", "pzos7g", "u7muw", "j1fhhq", "qbhdg", "ae75sq", "vyxjza", "cc7brw", "lkt2tq", "trita", "isuesw"];
const ALL = Object.values(products);
const TABS = [
  { id: "popular", label: "Popular", title: "Popular products" },
  { id: "recent", label: "Recent", title: "Recent products" },
  { id: "freebies", label: "Weekly freebies", title: "Weekly freebies" },
  { id: "sale", label: "On sale", title: "Products on sale" },
] as const;
type TabId = (typeof TABS)[number]["id"];

// Demo data: only the "Popular" set comes from the source page, the other tabs are filtered from the same local catalogue.
function productsFor(tab: TabId) {
  if (tab === "popular") return POPULAR.map((id) => products[id]);
  if (tab === "recent") return [...ALL].reverse().slice(0, 12);
  if (tab === "freebies") return ALL.filter((p) => p.price.kind === "free").slice(0, 12);
  return ALL.filter((p) => p.price.kind === "sale" || p.badge).slice(0, 12);
}

export function HomeAllProducts() {
  const [tab, setTab] = useState<TabId>("popular");
  const current = TABS.find((t) => t.id === tab) ?? TABS[0];
  const list = productsFor(tab);
  return (
    <>
      <section aria-labelledby="all-title" className="dh-section dh-paper-rule">
        <div className="dh-sechead">
          <div>
            <h2 data-dh-tab-title="" id="all-title">
              {current.title}
            </h2>
          </div>
          <Link className="dh-seeall" href="/marketplace">
            Browse marketplace
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
            </svg>
          </Link>
        </div>
        <div aria-label="All products filter" className="dh-tabs" data-tab-rainbow="" data-tab-slider="" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} aria-selected={tab === t.id} className="dh-tab" data-tab={t.id} data-title={t.title} role="tab" type="button" onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div id="home-all-products">
          <ul aria-label="All products" className="dh-grid is-2rows" id="all-grid">
            {list.map((p) => (
              <li key={p.id}>
                <ProductCard p={p} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dh-center">
          <Link className="dh-outline" href="/marketplace">
            Browse all products
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
