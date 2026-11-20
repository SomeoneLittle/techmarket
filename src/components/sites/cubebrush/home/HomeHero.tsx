import Link from "next/link";
import { asset } from "@/lib/asset";

export function HomeHero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="dh-hero">
        <div aria-hidden="true" className="dh-hero-photo" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/retina_12814c8024-c69589bf.jpg")}')`} as React.CSSProperties} />
        <div aria-hidden="true" className="dh-hero-blob a" />
        <div aria-hidden="true" className="dh-hero-blob b" />
        <div aria-hidden="true" className="dh-hero-hatch" />
        <div aria-hidden="true" className="dh-hero-fade" />
        <div className="dh-hero-inner">
          <div className="dh-eyebrow-pill">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" vectorEffect="non-scaling-stroke" />
              <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" vectorEffect="non-scaling-stroke" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" vectorEffect="non-scaling-stroke" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" vectorEffect="non-scaling-stroke" />
            </svg>
            <span>
              100% human-made marketplace · No AI content
            </span>
          </div>
          <h1 id="hero-title">
            {"Art resources. "}
            <b>
              Made by artists.
            </b>
          </h1>
          <p className="dh-hero-sub">
            Find brushes, 3D assets, references and tutorials for your next project.
          </p>
          <div className="dh-intents">
            <Link className="dh-intent" data-intent="shop" href="/marketplace" style={{"--tint": "#40b3de", "--grad": "linear-gradient(155deg,rgba(64,179,222,.18),rgba(31,127,204,.08) 65%,transparent)"} as React.CSSProperties}>
              <div className="dh-intent-art">
                <img alt="" height="600" loading="eager" src={asset("/sites/cubebrush/img/home-hero-shop-f79b277a22b528cbd25f8e7f0-9412e4ce.svg")} width="800" />
              </div>
              <div className="dh-intent-body">
                <div className="dh-intent-eyebrow">
                  I want to shop
                </div>
                <div className="dh-intent-title">
                  Find your next favorite asset.
                </div>
                <div className="dh-intent-copy">
                  Brushes, 3D models, tutorials, references, sound. Explore 12,466 artist stores.
                </div>
                <span className="dh-hero-cta">
                  Browse marketplace
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                  </svg>
                </span>
              </div>
            </Link>
            <Link className="dh-intent" data-intent="sell" style={{"--tint": "#7bc178", "--grad": "linear-gradient(155deg,rgba(123,193,120,.18),rgba(95,167,86,.08) 65%,transparent)"} as React.CSSProperties} href="/open_store">
              <div className="dh-intent-art">
                <img alt="" height="1300" loading="eager" src={asset("/sites/cubebrush/img/home-hero-sell-2af1682bb318beb94b810ad12-0bd84b99.svg")} width="1500" />
              </div>
              <div className="dh-intent-body">
                <div className="dh-intent-eyebrow">
                  I want to sell
                </div>
                <div className="dh-intent-title">
                  Sell your work. Keep up to 95%.
                </div>
                <div className="dh-intent-copy">
                  Cubebrush is a curated marketplace. Apply once, then list freely to 1,673,926 members.
                </div>
                <span className="dh-hero-cta">
                  Apply to sell
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                  </svg>
                </span>
              </div>
            </Link>
            <Link className="dh-intent" data-intent="earn" style={{"--tint": "#f3a649", "--grad": "linear-gradient(155deg,rgba(243,166,73,.2),rgba(232,151,18,.08) 65%,transparent)"} as React.CSSProperties} href="/become_partner">
              <div className="dh-intent-art">
                <img alt="" height="600" loading="eager" src={asset("/sites/cubebrush/img/home-hero-partner-c1934b86bb6910fa4ea986-477163de.svg")} width="800" />
              </div>
              <div className="dh-intent-body">
                <div className="dh-intent-eyebrow">
                  I want to earn
                </div>
                <div className="dh-intent-title">
                  Earn 20% on every link.
                </div>
                <div className="dh-intent-copy">
                  Already recommending the resources you use? Earn on every sale. 30-day cookie.
                </div>
                <span className="dh-hero-cta">
                  Become a partner
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
