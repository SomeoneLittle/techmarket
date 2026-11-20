import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function MarketplaceResults() {
  return (
    <>
      <section aria-labelledby="mp-results-title" className="dmp-results">
        <div role="group" aria-label="NSFW categories" hidden className="ps-nsfw-categories">
          <button className="ps-category" type="button" aria-pressed="true">
            All NSFW
          </button>
          <button className="ps-category" type="button" aria-pressed="false">
            Art & Figure References
          </button>
          <button className="ps-category" type="button" aria-pressed="false">
            Illustrations & Fan Art
          </button>
          <button className="ps-category" type="button" aria-pressed="false">
            Cosplay & Photo Sets
          </button>
          <button className="ps-category" type="button" aria-pressed="false">
            Adult 3D & Mods
          </button>
        </div>
        <div id="mp-results">
          <div id="mp-results-alert" />
          <div className="dmp-meta">
            <div id="mp-results-title">
              <b data-f-count="">
                10,000
              </b>
              {" products "}
              <span data-f-crumb="" />
            </div>
          </div>
          <ul aria-label="Products" className="dh-grid" id="mp-grid">
            <li>
              <ProductCard p={products["0dpzeg"]} />
            </li>
            <li>
              <ProductCard p={products["x5h1wq"]} />
            </li>
            <li>
              <ProductCard p={products["m2ri4q"]} />
            </li>
            <li>
              <ProductCard p={products["pzos7g"]} />
            </li>
            <li>
              <ProductCard p={products["u7muw"]} />
            </li>
            <li>
              <ProductCard p={products["1mgcqq"]} />
            </li>
            <li>
              <ProductCard p={products["j1fhhq"]} />
            </li>
            <li>
              <ProductCard p={products["p8ynjq"]} />
            </li>
            <li>
              <ProductCard p={products["ae75sq"]} />
            </li>
            <li>
              <ProductCard p={products["qbhdg"]} />
            </li>
            <li>
              <ProductCard p={products["vyxjza"]} />
            </li>
            <li>
              <ProductCard p={products["cc7brw"]} />
            </li>
            <li>
              <ProductCard p={products["isuesw"]} />
            </li>
            <li>
              <ProductCard p={products["trita"]} />
            </li>
            <li>
              <ProductCard p={products["lkt2tq"]} />
            </li>
            <li>
              <ProductCard p={products["k1wn0a"]} />
            </li>
            <li>
              <ProductCard p={products["ah0xva"]} />
            </li>
            <li>
              <ProductCard p={products["mzba"]} />
            </li>
            <li>
              <ProductCard p={products["ulqq8w"]} />
            </li>
            <li>
              <ProductCard p={products["cq6zza"]} />
            </li>
          </ul>
          <div id="products_page_2">
            <div className="dh-center">
              <button className="dh-outline" data-f-more="" type="button">
                Load more
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
