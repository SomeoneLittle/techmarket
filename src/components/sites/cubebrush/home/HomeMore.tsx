import Link from "next/link";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function HomeMore() {
  return (
    <>
      <section aria-labelledby="daily-title" className="dh-section dh-paper-rule">
        <div className="dh-sechead">
          <div>
            <div className="dh-eyebrow">
              Daily picks
            </div>
            <h2 id="daily-title">
              What we're loving today.
            </h2>
            <p>
              Refreshed every morning by the Cubebrush editors.
            </p>
          </div>
          <Link className="dh-seeall" href="/marketplace">
            See more picks
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
            </svg>
          </Link>
        </div>
        <ul aria-label="Daily picks" className="dh-grid is-2rows">
          <li>
            <ProductCard p={products["nivpmw"]} />
          </li>
          <li>
            <ProductCard p={products["2ehupa"]} />
          </li>
          <li>
            <ProductCard p={products["lq5q0a"]} />
          </li>
          <li>
            <ProductCard p={products["jftkng"]} />
          </li>
          <li>
            <ProductCard p={products["uqsnwg"]} />
          </li>
          <li>
            <ProductCard p={products["cnamjw"]} />
          </li>
        </ul>
      </section>
    </>
  );
}
