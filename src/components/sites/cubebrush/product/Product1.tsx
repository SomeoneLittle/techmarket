import Link from "next/link";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function Product1() {
  return (
    <>
      <div className="dpp-wrap dpt-wrap" data-desktop-listing="">
        <div id="op-owned-rwe03q" />
        <div className="dpp-cols dpt-cols dpp-product-layout">
          <section aria-label="Product gallery" className="pp-gallery">
            <div className="pp-gallery-frame" id="pp-gallery">
              <div aria-hidden="false" aria-label="Gunquin the Virtual Art Mannequin, preview 1 of 12" className="pp-gallery-slide is-active" data-ratio="16/9" id="pp-slide-1">
                <div className="pp-gallery-video">
                  <video controls id="vid" playsInline preload="none" src="https://d27nqrvkk22y65.cloudfront.net/covers/126330/fV9XzyTKGWpQ8xctjJJ9/h264_avc_1_720/PromoGunquin.mp4" poster={asset("/sites/cubebrush/img/webp_big_6a8ae1d625-4990aefd.webp")} />
                </div>
              </div>
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 2 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-2" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_c6fc29332c-df0ef6f8.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 3 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-3" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_705d63e0d4-1de0b243.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 4 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-4" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_b694d10cf4-30c3f1db.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 5 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-5" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_da7fe774d2-a8807b40.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 6 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-6" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_7d96700a0e-a93f5735.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 7 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-7" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_52a881468e-e84c7916.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 8 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-8" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_9a7329c3bb-66280518.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 9 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-9" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_f056d2d731-d2e1d8d5.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 10 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-10" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_94ebc3cd48-e605d9b3.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 11 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-11" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_47098406f1-eac9b4a9.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="Gunquin the Virtual Art Mannequin, preview 12 of 12" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-12" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_a76d7c19df-5d6b8c73.webp")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-label="Gallery pagination" className="pp-gallery-dots" role="group">
                <button aria-controls="pp-slide-1" aria-label="Preview 1 of 12" aria-pressed="true" className="pp-gallery-dot is-active" type="button" />
                <button aria-controls="pp-slide-2" aria-label="Preview 2 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-3" aria-label="Preview 3 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-4" aria-label="Preview 4 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-5" aria-label="Preview 5 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-6" aria-label="Preview 6 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-7" aria-label="Preview 7 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-8" aria-label="Preview 8 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-9" aria-label="Preview 9 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-10" aria-label="Preview 10 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-11" aria-label="Preview 11 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-12" aria-label="Preview 12 of 12" aria-pressed="false" className="pp-gallery-dot" type="button" />
              </div>
              <div aria-hidden="true" className="pp-purchased-stamp" data-pp-own-only="basic commercial">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#check-8732c19f-ns")} />
                </svg>
                Purchased
              </div>
            </div>
            <div className="pp-thumbs">
              <div className="pp-thumbs-rail" id="pp-thumbs">
                <button aria-label="Show preview 1 of 12" aria-pressed="true" className="pp-thumb is-active" data-idx="0" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_wide_thumb_6a8ae1d625-63b47165.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 2 of 12" aria-pressed="false" className="pp-thumb" data-idx="1" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_c6fc29332c-cbc1e6cd.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 3 of 12" aria-pressed="false" className="pp-thumb" data-idx="2" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_705d63e0d4-392cd5b3.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 4 of 12" aria-pressed="false" className="pp-thumb" data-idx="3" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_b694d10cf4-6db75003.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 5 of 12" aria-pressed="false" className="pp-thumb" data-idx="4" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_da7fe774d2-ebd1f5b1.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 6 of 12" aria-pressed="false" className="pp-thumb" data-idx="5" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_7d96700a0e-52fe798b.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 7 of 12" aria-pressed="false" className="pp-thumb" data-idx="6" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_52a881468e-6993c247.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 8 of 12" aria-pressed="false" className="pp-thumb" data-idx="7" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_9a7329c3bb-4a24db66.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 9 of 12" aria-pressed="false" className="pp-thumb" data-idx="8" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_f056d2d731-27bed0b5.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 10 of 12" aria-pressed="false" className="pp-thumb" data-idx="9" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_94ebc3cd48-32fd81dd.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 11 of 12" aria-pressed="false" className="pp-thumb" data-idx="10" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_47098406f1-591fbf23.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 12 of 12" aria-pressed="false" className="pp-thumb" data-idx="11" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_thumb_a76d7c19df-777f8661.webp")}')`} as React.CSSProperties} type="button" />
              </div>
              <div aria-hidden="true" className="pp-thumbs-fade pp-thumbs-fade-l" />
              <div aria-hidden="true" className="pp-thumbs-fade pp-thumbs-fade-r" />
            </div>
          </section>
          <aside aria-label="Purchase" className="dpp-side">
            <header className="pp-header">
              <div id="dpt-seller">
                <section aria-label="Seller" className="pp-seller dpp-seller">
                  <Link tabIndex={-1} aria-hidden="true" className="pp-seller-avatar" href="/theartgun">
                    <img src={asset("/sites/cubebrush/img/small_e4a7e71fae-172e72be.png")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                  </Link>
                  <div className="pp-seller-info">
                    <div className="dpp-seller-by">
                      {"by "}
                      <Link href="/theartgun">
                        TheArtGun
                      </Link>
                    </div>
                    <div className="dpp-seller-by">
                      {"in "}
                      <Link href="/marketplace">
                        Characters and Anatomy
                      </Link>
                    </div>
                  </div>
                  <div className="dpp-seller-tags" title="characters and anatomy, blender, rigs, Render Scenes, 3d assets">
                    characters and anatomy, blender, rigs, Render Scenes, 3d assets
                  </div>
                  <div className="dpp-seller-actions">
                    <a className="dpp-pill is-ghost" href="https://cubebrush.co/conversations?to=theartgun" title="Message seller">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-56977f5c-ns")} />
                      </svg>
                      <span>
                        Message
                      </span>
                    </a>
                    <button aria-pressed="false" className="dpp-pill" data-cb-follow="" title="Follow or unfollow seller" type="button">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#glyph-47358704-ns")} />
                      </svg>
                      <span data-follow-label="">
                        Follow
                      </span>
                    </button>
                  </div>
                </section>
              </div>
              <h1 className="pp-title">
                Gunquin the Virtual Art Mannequin
              </h1>
              <div className="pp-rating-row">
                <span aria-label="Rated 5.0 out of 5" className="cb-stars" style={{"--fill": "100.0%"} as React.CSSProperties}>
                  <span aria-hidden="true" className="cb-stars-fill" />
                </span>
                <span className="pp-rating-score">
                  5.0
                </span>
                <span>
                  (21 ratings)
                </span>
              </div>
              <div className="pp-bottom-row">
                <button aria-pressed="false" className="pp-wishlist" data-wishlist-label="Add to wishlist" data-wishlist-product="rwe03q" data-wishlist-saved-label="Saved to wishlist" type="button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#wishlist-3023943d-ns")} />
                  </svg>
                  <span>
                    Add to wishlist
                  </span>
                </button>
                <span className="pp-stats">
                  <span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#cart-glyph-add-aeee6d6d-ns")} />
                    </svg>
                    542 sales
                  </span>
                  <span className="pp-stat-rotator" id="pp-stat-rotator">
                    <span className="pp-stat-rot is-active" data-stat="views">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-06693f23-ns")} />
                      </svg>
                      45.1K views
                    </span>
                    <span className="pp-stat-rot" data-stat="likes">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#heart-reaction-e0cb3e51-ns")} />
                      </svg>
                      1.09K likes
                    </span>
                  </span>
                </span>
              </div>
            </header>
            <section className="pp-buy" id="pp-anchor">
              <button className="op-download-main" data-pp-own-only="basic commercial" type="button">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#download-b7b9e612-ns")} />
                </svg>
                Download files
              </button>
              <p className="op-download-caption" data-pp-own-only="basic">
                Included with your basic license
              </p>
              <p className="op-download-caption" data-pp-own-only="commercial">
                Included with your commercial license
              </p>
              <button aria-controls="pp-license-menu" aria-expanded="false" aria-haspopup="listbox" className="pp-license-toggle" data-pp-own-only="none" id="pp-license-toggle" type="button">
                <span className="lbl">
                  <span className="kind" id="pp-license-kind">
                    Basic license
                  </span>
                  <span className="price" id="pp-license-price">
                    $80
                  </span>
                </span>
                <svg viewBox="0 0 24 24" height="12" width="12" className="chev cb-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" data-pp-licensing-only="both" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                </svg>
              </button>
              <div aria-labelledby="pp-license-toggle" className="pp-license-menu" data-pp-own-only="none" id="pp-license-menu" role="listbox">
                <button aria-selected="true" className="pp-license-option is-selected" data-license="basic" data-price="80.0" role="option" tabIndex={-1} type="button">
                  <div>
                    <div className="head">
                      Basic license
                    </div>
                    <div className="desc">
                      Personal use in unlimited projects. Commercial use in 1 project, up to 1,000 sales.
                    </div>
                  </div>
                  <span className="opt-price">
                    $80
                  </span>
                </button>
                <button aria-selected="false" className="pp-license-option" data-license="commercial" data-pp-licensing-only="both" data-price="300.0" role="option" tabIndex={-1} type="button">
                  <div>
                    <div className="head">
                      Commercial license
                    </div>
                    <div className="desc">
                      Personal and commercial use in unlimited projects. Unlimited sales.
                    </div>
                  </div>
                  <span className="opt-price">
                    $300
                  </span>
                </button>
              </div>
              <a className="pp-buy-now" data-pp-own-only="none" href="https://cubebrush.co/checkout?ids=rwe03q" id="pp-buy-now" rel="nofollow">
                Buy now · $
                <span id="pp-buy-now-price">
                  80
                </span>
              </a>
              <button aria-label="Add to cart and save" className="pp-add-cart" data-cart-state="add" data-pp-own-only="none" type="button">
                <svg viewBox="0 0 24 24" className="cart-glyph-add" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#cart-glyph-add-aeee6d6d-ns")} />
                </svg>
                <svg viewBox="0 0 24 24" className="cart-glyph-check" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#pp-copy-check-bedb483d-ns")} />
                </svg>
                <svg viewBox="0 0 24 24" className="cart-glyph-x" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
                </svg>
                <span className="pp-add-cart-label">
                  Add to cart & save
                </span>
              </button>
              <div id="pp-viewer-state" />
              <div data-pp-own-only="basic">
                <div className="pp-owned-card">
                  <span aria-hidden="true" className="pp-owned-card-icon">
                    <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#check-8732c19f-ns")} />
                    </svg>
                  </span>
                  <div className="pp-owned-card-body">
                    <div className="pp-owned-card-title" data-pp-licensing-only="both">
                      You own the basic license
                    </div>
                    <div className="pp-owned-card-title" data-pp-licensing-only="basic-only">
                      You're all set, basic license owned
                    </div>
                    <div className="pp-owned-card-sub" data-pp-licensing-only="both">
                      Upgrade to commercial to use this in commercial work.
                    </div>
                    <div className="pp-owned-card-sub" data-pp-licensing-only="basic-only">
                      Use this in personal projects and non-commercial work. Re-download any time from your library.
                    </div>
                  </div>
                </div>
                <a className="pp-upgrade-cta" data-pp-licensing-only="both" href="https://cubebrush.co/checkout">
                  <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-c15b13e3-ns")} />
                  </svg>
                  Upgrade to commercial · $
                  <span id="pp-upgrade-price">
                    220
                  </span>
                </a>
                <a className="pp-gift-cta" href="https://cubebrush.co/checkout">
                  <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#ch-gift-input-icon-05ee5e46-ns")} />
                  </svg>
                  Buy as a gift
                </a>
              </div>
              <div data-pp-own-only="commercial">
                <div className="pp-owned-card">
                  <span aria-hidden="true" className="pp-owned-card-icon">
                    <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#check-8732c19f-ns")} />
                    </svg>
                  </span>
                  <div className="pp-owned-card-body">
                    <div className="pp-owned-card-title">
                      You own the commercial license
                    </div>
                    <div className="pp-owned-card-sub">
                      Cleared for commercial use. Re-download any time from your library.
                    </div>
                  </div>
                </div>
                <a className="pp-gift-cta" href="https://cubebrush.co/checkout">
                  <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#ch-gift-input-icon-05ee5e46-ns")} />
                  </svg>
                  Buy as a gift
                </a>
              </div>
              <details className="op-tip-disclosure" data-pp-own-only="basic commercial">
                <summary>
                  <svg viewBox="0 0 24 24" height="22" width="22" className="pp-tip-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#ch-gift-input-icon-05ee5e46-ns")} />
                  </svg>
                  <span>
                    Tip the creator
                  </span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                  </svg>
                </summary>
                <div className="pp-tip" data-pp-own-only="basic commercial">
                  <div id="v3_tip_rwe03q" style={{"display": "block"} as React.CSSProperties}>
                    <div aria-hidden="true" inert style={{"display": "contents"} as React.CSSProperties}>
                      <div className="pp-tip-head">
                        <svg viewBox="0 0 24 24" height="22" width="22" className="pp-tip-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#ch-gift-input-icon-05ee5e46-ns")} />
                        </svg>
                        <div>
                          <div className="pp-tip-title">
                            Tip the creator
                          </div>
                        </div>
                      </div>
                      <p className="pp-tip-sub">
                        Loved this product? Send a thank-you tip directly to the creator.
                      </p>
                      <div aria-label="Tip preset" className="pp-tip-presets" role="radiogroup">
                        <button aria-checked="false" className="pp-tip-preset" data-tip="3" role="radio" type="button">
                          $3
                        </button>
                        <button aria-checked="true" className="pp-tip-preset is-active" data-tip="5" role="radio" type="button">
                          $5
                        </button>
                        <button aria-checked="false" className="pp-tip-preset" data-tip="10" role="radio" type="button">
                          $10
                        </button>
                        <button aria-checked="false" className="pp-tip-preset" data-tip="25" role="radio" type="button">
                          $25
                        </button>
                      </div>
                      <div className="cb-num-row">
                        <span className="cb-num-prefix">
                          USD
                        </span>
                        <input aria-label="Custom tip amount" className="cb-num-input" id="pp-tip-input" inputMode="decimal" type="text" defaultValue="5" />
                        <div className="cb-num-stepper">
                          <button aria-label="Decrease tip" data-tip-step="-1" type="button">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <use href={asset("/sites/cubebrush/icons.svg#glyph-dd3373ad-ns")} />
                            </svg>
                          </button>
                          <button aria-label="Increase tip" data-tip-step="1" type="button">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <use href={asset("/sites/cubebrush/icons.svg#glyph-1b2885fb-ns")} />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button className="pp-tip-send" type="button">
                        <svg viewBox="0 0 24 24" height="15" width="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#ch-gift-input-icon-05ee5e46-ns")} />
                        </svg>
                        Send $
                        <span id="pp-tip-amount">
                          5
                        </span>
                        {" tip"}
                      </button>
                      <button className="pp-tip-download" data-pp-download-files="" type="button">
                        <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#download-b7b9e612-ns")} />
                        </svg>
                        Download files
                      </button>
                    </div>
                  </div>
                  <div id="v3_tip_modal" style={{"display": "contents"} as React.CSSProperties} />
                </div>
              </details>
              <div className="pp-paypal" data-pp-own-only="none">
                <span className="badge">
                  <i style={{"color": "#003087", "fontStyle": "italic", "fontWeight": "700"} as React.CSSProperties}>
                    PayPal
                  </i>
                </span>
                <span className="text">
                  Pay in 4 interest-free payments of $
                  <b id="pp-paypal-amount">
                    20.00
                  </b>
                  {". "}
                  <a href="https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later" rel="noopener" target="_blank">
                    Learn more
                  </a>
                </span>
              </div>
              <div className="pp-human" data-pp-own-only="none">
                <span aria-hidden="true" className="pp-human-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" vectorEffect="non-scaling-stroke" />
                    <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" vectorEffect="non-scaling-stroke" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" vectorEffect="non-scaling-stroke" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
                <div className="pp-human-body">
                  <b>
                    Made by a human.
                  </b>
                  {" Cubebrush is an AI-free marketplace. Every asset is hand-crafted by an artist."}
                </div>
              </div>
            </section>
            <div aria-label="Share" className="pp-social" data-pp-own-not="basic commercial">
              <div className="pp-social-row">
                <button className="pp-social-btn is-fb" type="button">
                  <svg viewBox="0 0 24 24" height="16" width="16" className="pp-social-glyph" fill="currentColor" stroke="none" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-ad9b4798-ns")} />
                  </svg>
                  Facebook
                </button>
                <button className="pp-social-btn is-x" type="button">
                  <svg viewBox="0 0 24 24" height="16" width="16" className="pp-social-glyph" fill="currentColor" stroke="none" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-1c9153bb-ns")} />
                  </svg>
                  Tweet
                </button>
              </div>
              <div className="pp-copylink" id="pp-copylink-host">
                <div className="pp-copylink-url">
                  cubebrush.co/theartgun/products/rwe03q/gunquin-the-virtual-art-mannequin
                </div>
                <button className="pp-copylink-btn" id="pp-copylink" type="button">
                  <svg viewBox="0 0 24 24" className="pp-copy-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#pp-copy-icon-9be8ecd4-ns")} />
                  </svg>
                  <svg viewBox="0 0 24 24" className="pp-copy-check" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#pp-copy-check-bedb483d-ns")} />
                  </svg>
                  <span id="pp-copylink-label">
                    Copy link
                  </span>
                </button>
              </div>
            </div>
            <div data-pp-own-not="basic commercial" className="ps-report-actions">
              <button type="button" className="ps-report-product">
                Report this product
              </button>
              <button type="button" className="ps-report-nsfw">
                Mark as NSFW
              </button>
            </div>
          </aside>
          <div className="dpp-main">
            <div id="dpt-tpl">
              <div className="pp-tabs-wrap">
                <div aria-label="Product details" className="pp-tabs has-indicator" data-tab-rainbow="" data-tab-slider="" role="tablist">
                  <button className="pp-tab" type="button" data-tab="details" role="tab" aria-selected="true" aria-controls="pp-tab-details" tabIndex={0}>
                    Product details
                  </button>
                  <button className="pp-tab" type="button" data-tab="model" role="tab" aria-selected="false" aria-controls="pp-tab-model" tabIndex={-1}>
                    Model details
                  </button>
                  <button className="pp-tab" type="button" data-tab="comments" role="tab" aria-selected="false" aria-controls="pp-tab-comments" tabIndex={-1}>
                    Comments (4)
                  </button>
                  <span aria-hidden="true" className="hm-tab-indicator" />
                </div>
              </div>
              <div id="pp-tab-details" role="tabpanel">
                <section aria-labelledby="pp-desc-title" className="pp-desc">
                  <h2 className="cb-sr" id="pp-desc-title">
                    Description
                  </h2>
                  <div>
                    <div className="pp-desc-body" id="pp-desc-body">
                      <p>
                        A stylized 3D Mannequin for posing, anatomy study, and draw-overs.
                      </p>
                      {" "}
                      <p>
                        Features:
                      </p>
                      {" "}
                      <ol>
                        {" "}
                        <li>
                          <p>
                            A Muscle system view that mimics real life muscle pinning with important muscles named and separated by material
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            A Skeleton view
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            A Combined Muscle and Fat view that includes fat pats for plus-sized characters
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            {"10+ Sliders to adjust arm length, head size, hand size, gender, etc. "}
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            Custom UI to help users new to blender
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            {"60+ pages worth of documentation, Wikified for your convenience! "}
                            <a href="https://github.com/TheArtGun/GunquinDocs/wiki">
                              https://github.com/TheArtGun/GunquinDocs/wiki
                            </a>
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            {"An animatable Rig using Blender's Rigify (IK/FK switching, parent switching) "}
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            A pose library with 30+ presets (Be sure to check the wiki for installation instructions)
                          </p>
                        </li>
                        {" "}
                      </ol>
                      {" "}
                      <p>
                        Requirements 1. It is recommended that you have a decent GPU(GTX 1080+) and CPU(i7+) with at least 16GB+ RAM for Cycles rendering
                      </p>
                      {" "}
                      <ol>
                        {" "}
                        <li>
                          <p>
                            If you don't have the Cycles requirements, you can always switch to EEVEE.
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            <strong>
                              Must have Blender Installed
                            </strong>
                            {" You may download it through Steam or the official Blender Foundation Website. It's completely free! "}
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            <strong>
                              The Documentation
                            </strong>
                            {" includes a startup guide, please check it out as there is a lot of important information included especially for first-time Blender users."}
                          </p>
                        </li>
                        {" "}
                      </ol>
                      {" "}
                      <p>
                        Usage 1. The Gunquin is intended as a base for draw overs, study, and posing. It's not a final product meant to be displayed directly in any produced material or displayed online via pose asset packs and the like.
                      </p>
                      {" "}
                      <ol>
                        {" "}
                        <li>
                          <p>
                            The included 3D meshes are not optimized for 3D workflows, and do not include animation-ready topology. It is only built to be a base and isn't intended for use in games or CGI shorts.
                          </p>
                        </li>
                        {" "}
                        <li>
                          <p>
                            Please credit the Gunquin with a #gunquin if you use it! We'd love to see your results!
                          </p>
                        </li>
                        {" "}
                      </ol>
                      {" "}
                      <p>
                        Resources:
                      </p>
                      {" "}
                      <p>
                        {"Wiki/Documentation: "}
                        <a href="https://github.com/TheArtGun/GunquinDocs/wiki">
                          https://github.com/TheArtGun/GunquinDocs/wiki
                        </a>
                      </p>
                      {" "}
                      <p>
                        {"Demo Video: "}
                        <a href="https://youtu.be/uU2fBiLVvs0">
                          https://youtu.be/uU2fBiLVvs0
                        </a>
                      </p>
                      {" "}
                      <p>
                        {"Overview/How To Video: "}
                        <a href="https://youtu.be/KsoeW8YuxhU">
                          https://youtu.be/KsoeW8YuxhU
                        </a>
                      </p>
                      {" "}
                      <p>
                        UPDATE 2.0
                      </p>
                      {" "}
                      <p>
                        Minor bug corrections- 1. Scaling the skeleton from the root will no longer have an odd effect on muscles 2. Missing Polygons on the lower Latissimus Dorsi in Soft Mode when simplify was turned off and in renders
                      </p>
                      {" "}
                      <p>
                        NOTE:
                        <br />
                        {" Blender 3.5.1 seems to be broken at times with the pose-library addon not containing necessary options. Try a previous version if you do not see the options as shown in the wiki."}
                      </p>
                      {" "}
                    </div>
                    <button aria-controls="pp-desc-body" aria-expanded="false" className="pp-desc-toggle" id="pp-desc-body-toggle" type="button">
                      <span id="pp-desc-body-toggle-label">
                        Show more
                      </span>
                      <svg viewBox="0 0 24 24" height="12" width="12" className="cb-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                      </svg>
                    </button>
                  </div>
                </section>
                <section aria-label="Files included" className="pp-files">
                  <h2 className="pp-files-head">
                    You will get 1 file
                  </h2>
                  <p className="pp-files-sub">
                    Instant download · 1 file · 319.5 MB total
                  </p>
                  <div className="pp-files-list" id="pp-files-list">
                    <div className="pp-file">
                      <span data-ext="ZIP" className="pp-file-icon">
                        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#file-document")} fill="#5fa756" />
                          <use href={asset("/sites/cubebrush/icons.svg#glyph-5c722a6a")} />
                          <text x="14.5" y="16" textAnchor="middle" dominantBaseline="central" fontFamily="Mulish, sans-serif" fontWeight="800" fontSize="8.5" fill="#fff" letterSpacing=".5">
                            ZIP
                          </text>
                        </svg>
                      </span>
                      <div className="pp-file-body">
                        <div className="pp-file-name">
                          Gunquin_V2.0.zip
                        </div>
                        <div className="pp-file-size">
                          ZIP · 155.9 MB
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div id="pp-tab-model" role="tabpanel" hidden>
                <section aria-label="At a glance" className="dpt-mod is-strip">
                  <div className="dpt-mod-head">
                    <h2 className="dpt-mod-title">
                      At a glance
                    </h2>
                    <span className="dpt-mod-spacer" />
                  </div>
                  <div className="dpt-stats">
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        Polygons
                      </div>
                      <div className="dpt-stat-v">
                        {"90 "}
                        <small>
                          total
                        </small>
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        Animated
                      </div>
                      <div className="dpt-stat-v">
                        No
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        Materials
                      </div>
                      <div className="dpt-stat-v">
                        No
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        Textures
                      </div>
                      <div className="dpt-stat-v">
                        No
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        Rigged
                      </div>
                      <div className="dpt-stat-v is-ok">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#glyph-234a77b8-ns")} />
                        </svg>
                        Included
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        UVs
                      </div>
                      <div className="dpt-stat-v">
                        No
                      </div>
                    </div>
                    <div className="dpt-stat">
                      <div className="dpt-stat-k">
                        3D Print Ready
                      </div>
                      <div className="dpt-stat-v">
                        No
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-label="Model details" className="dpt-mod is-deep">
                  <div className="dpt-mod-body">
                    <div className="dpt-sub">
                      Formats
                    </div>
                    <div className="dpt-chips">
                      <span className="dpt-chip">
                        <span className="ext">
                          BLEND
                        </span>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div id="pp-tab-comments" role="tabpanel" hidden>
                <div id="v3_comments" />
              </div>
            </div>
          </div>
        </div>
        <div id="op-share" className="op-utilities" data-pp-own-only="basic commercial">
          <div id="op-partner" hidden />
          <div aria-label="Share" className="pp-social">
            <div className="pp-social-row">
              <button className="pp-social-btn is-fb" type="button">
                <svg viewBox="0 0 24 24" height="16" width="16" className="pp-social-glyph" fill="currentColor" stroke="none" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-ad9b4798-ns")} />
                </svg>
                Facebook
              </button>
              <button className="pp-social-btn is-x" type="button">
                <svg viewBox="0 0 24 24" height="16" width="16" className="pp-social-glyph" fill="currentColor" stroke="none" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-1c9153bb-ns")} />
                </svg>
                Tweet
              </button>
            </div>
            <div className="pp-copylink">
              <div className="pp-copylink-url">
                cubebrush.co/theartgun/products/rwe03q/gunquin-the-virtual-art-mannequin
              </div>
              <button className="pp-copylink-btn" type="button">
                <svg viewBox="0 0 24 24" className="pp-copy-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#pp-copy-icon-9be8ecd4-ns")} />
                </svg>
                <svg viewBox="0 0 24 24" className="pp-copy-check" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#pp-copy-check-bedb483d-ns")} />
                </svg>
                <span>
                  Copy link
                </span>
              </button>
            </div>
          </div>
          <div className="ps-report-actions">
            <button type="button" className="ps-report-product">
              Report this product
            </button>
            <button type="button" className="ps-report-nsfw">
              Mark as NSFW
            </button>
          </div>
        </div>
      </div>
      <section aria-labelledby="more-title" className="dh-section dpp-rail">
        <div className="dh-sechead">
          <h2 id="more-title">
            More from TheArtGun
          </h2>
        </div>
        <div className="dh-rail-wrap">
          <button aria-label="Previous" className="dh-arrow prev" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-1d7b396a-ns")} />
            </svg>
          </button>
          <button aria-label="Next" className="dh-arrow next" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-bf8ab71a-ns")} />
            </svg>
          </button>
          <ul aria-label="More products by TheArtGun" className="dh-rail">
            <li>
              <ProductCard p={products["5m5rda"]} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
