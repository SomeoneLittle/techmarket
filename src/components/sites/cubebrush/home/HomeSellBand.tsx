import Link from "next/link";
import { asset } from "@/lib/asset";

export function HomeSellBand() {
  return (
    <>
      <section aria-label="Sell on Cubebrush" className="dh-slab fade-bottom">
        <div className="dh-band">
          <div aria-hidden="true" className="dh-band-dots" />
          <div className="dh-band-copy">
            <div className="dh-band-pill">
              Sell on cubebrush
            </div>
            <h2>
              {"Turn your portfolio into a "}
              <b>
                storefront.
              </b>
            </h2>
            <p>
              Curated. Apply once, then list freely. Keep up to 95% of every direct sale and reach 1,673,926 members from day one.
            </p>
            <div className="dh-band-actions">
              <Link className="dh-band-btn" href="/open_store">
                Apply to sell
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                </svg>
              </Link>
              <Link className="dh-band-link" href="/become_partner">
                Earn as a partner →
              </Link>
            </div>
          </div>
          <div className="dh-band-art">
            <img alt="" height="225" loading="lazy" src={asset("/sites/cubebrush/img/os-hero-art-bffca8b9b69cdbfdfa208d99b76f-09e5274f.svg")} width="400" />
          </div>
        </div>
      </section>
    </>
  );
}
