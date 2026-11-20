import Link from "next/link";
import { asset } from "@/lib/asset";

export function MarketplaceHero() {
  return (
    <>
      <section aria-labelledby="mp-feat-title" className="dmp-hero">
        <div className="dmp-hero-inner">
          <div className="dh-sechead">
            <div>
              <div className="dh-eyebrow">
                Featured products
              </div>
              <h1 id="mp-feat-title">
                Marketplace
              </h1>
            </div>
            <div aria-label="Featured slides" className="dmp-dots" id="mp-featured-dots" role="tablist">
              <button aria-label="Slide 1" aria-selected="true" data-index="0" role="tab" type="button" />
              <button aria-label="Slide 2" aria-selected="false" data-index="1" role="tab" type="button" />
              <button aria-label="Slide 3" aria-selected="false" data-index="2" role="tab" type="button" />
              <button aria-label="Slide 4" aria-selected="false" data-index="3" role="tab" type="button" />
              <button aria-label="Slide 5" aria-selected="false" data-index="4" role="tab" type="button" />
            </div>
          </div>
          <div aria-label="Featured products" aria-roledescription="carousel" className="dmp-carousel">
            <button aria-label="Previous slide" className="dh-arrow prev" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-1d7b396a-ns")} />
              </svg>
            </button>
            <button aria-label="Next slide" className="dh-arrow next" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-bf8ab71a-ns")} />
              </svg>
            </button>
            <ul className="dmp-slides">
              <li aria-current="true" className="dmp-slide" style={{"--img": `url('${asset("/sites/cubebrush/img/big_497f1dfb0b-a0f74ea8.jpg")}')`} as React.CSSProperties}>
                <div className="dmp-slide-img" />
                <div className="dmp-slide-wash" />
                <div className="dmp-slide-copy">
                  <span className="dh-feat-tag is-featured">
                    Featured
                  </span>
                  <h2>
                    Gunquin the Virtual Art Mannequin
                  </h2>
                  <p>
                    A stylized 3D Mannequin for posing, anatomy study, and draw-overs
                  </p>
                  <div className="dmp-slide-actions">
                    <Link className="dh-hero-cta" href="/theartgun/products/rwe03q/gunquin-the-virtual-art-mannequin" style={{"--tint": "#40b3de", "color": "#fff"} as React.CSSProperties}>
                      Get this
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                      </svg>
                    </Link>
                    <span className="dmp-slide-price">
                      $80
                    </span>
                  </div>
                </div>
              </li>
              <li className="dmp-slide">
                <div className="dmp-slide-img" />
                <div className="dmp-slide-wash" />
                <div className="dmp-slide-copy">
                  <span className="dh-feat-tag is-featured">
                    Featured
                  </span>
                  <h2>
                    690+ Daily Sketching Reference Pictures
                  </h2>
                  <p>
                    Beginner-friendly pack that features poses for gesture drawing, anatomy studies, fast sketching and more!
                  </p>
                  <div className="dmp-slide-actions">
                    <a className="dh-hero-cta" href="http://cbr.sh/m6wxnp" style={{"--tint": "#40b3de", "color": "#fff"} as React.CSSProperties}>
                      Shop now
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                      </svg>
                    </a>
                    <span className="dmp-slide-price">
                      $13
                    </span>
                  </div>
                </div>
              </li>
              <li className="dmp-slide">
                <div className="dmp-slide-img" />
                <div className="dmp-slide-wash" />
                <div className="dmp-slide-copy">
                  <span className="dh-feat-tag is-featured">
                    Featured
                  </span>
                  <h2>
                    Animalia - Bald and Golden Eagle
                  </h2>
                  <p>
                    Realistic Bald and Golden Eagle with animations authored at 60fps, 4K Textures, bone mesh and 64 animations
                  </p>
                  <div className="dmp-slide-actions">
                    <a className="dh-hero-cta" href="http://cbr.sh/l4u91q" style={{"--tint": "#40b3de", "color": "#fff"} as React.CSSProperties}>
                      Get this
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                      </svg>
                    </a>
                    <span className="dmp-slide-price">
                      $89
                    </span>
                  </div>
                </div>
              </li>
              <li className="dmp-slide">
                <div className="dmp-slide-img" />
                <div className="dmp-slide-wash" />
                <div className="dmp-slide-copy">
                  <span className="dh-feat-tag is-featured">
                    Featured
                  </span>
                  <h2>
                    Metro Wagon - Render Scene
                  </h2>
                  <p>
                    Beautiful metro scene ready to render in various applications with real life-like PBR materials
                  </p>
                  <div className="dmp-slide-actions">
                    <a className="dh-hero-cta" href="http://cbr.sh/ec5uit" style={{"--tint": "#40b3de", "color": "#fff"} as React.CSSProperties}>
                      see more
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                      </svg>
                    </a>
                    <span className="dmp-slide-price">
                      $99
                    </span>
                  </div>
                </div>
              </li>
              <li className="dmp-slide">
                <div className="dmp-slide-img" />
                <div className="dmp-slide-wash" />
                <div className="dmp-slide-copy">
                  <span className="dh-feat-tag is-featured">
                    Featured
                  </span>
                  <h2>
                    Animalia - White Rhinoceros
                  </h2>
                  <p>
                    Realistic male and young Rhinoceros with animations authored at 60fps, 4K Textures, bone meshes and 180 animations
                  </p>
                  <div className="dmp-slide-actions">
                    <a className="dh-hero-cta" href="http://cbr.sh/do5e15" style={{"--tint": "#40b3de", "color": "#fff"} as React.CSSProperties}>
                      Get this
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-d74dc90e-ns")} />
                      </svg>
                    </a>
                    <span className="dmp-slide-price">
                      $149
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
