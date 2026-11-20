import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function HomeFreebies() {
  return (
    <>
      <section aria-labelledby="freebies-title" className="dh-section dh-freebies" id="freebies">
        <div className="dh-sechead">
          <h2 id="freebies-title">
            This week's freebies.
          </h2>
          <span className="dh-seeall">
            Next batch tomorrow →
          </span>
        </div>
        <div className="dh-rail-wrap">
          <button aria-controls="desktop-weekly-freebies" aria-label="Previous freebie" className="dh-arrow prev" disabled type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-1d7b396a-ns")} />
            </svg>
          </button>
          <button aria-controls="desktop-weekly-freebies" aria-label="Next freebie" className="dh-arrow next" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-bf8ab71a-ns")} />
            </svg>
          </button>
          <ul aria-label="This week's free products" className="dh-rail" data-min-freebies="6" id="desktop-weekly-freebies">
            <li>
              <ProductCard p={products["pfm8yq"]} />
            </li>
            <li>
              <ProductCard p={products["6qww5g"]} />
            </li>
            <li>
              <ProductCard p={products["7wpa6w"]} />
            </li>
            <li>
              <ProductCard p={products["4yqktg"]} />
            </li>
            <li>
              <ProductCard p={products["wzhqvg"]} />
            </li>
            <li>
              <ProductCard p={products["9tgcpq"]} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
