import Link from "next/link";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function Product2() {
  return (
    <>
      <div className="dpp-wrap dpt-wrap" data-desktop-listing="">
        <div id="op-owned-ae75sq" />
        <div className="dpp-cols dpt-cols dpp-product-layout">
          <section aria-label="Product gallery" className="pp-gallery">
            <div className="pp-gallery-frame" id="pp-gallery" style={{"--pp-cover-ratio": "2000 / 1575"} as React.CSSProperties}>
              <div aria-hidden="false" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 1 of 11" className="pp-gallery-slide is-active" data-ratio="2000/1575" id="pp-slide-1" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_big_5dfb2c4ed8-1d3cf594.webp")}')`} as React.CSSProperties} tabIndex={0} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 2 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-2" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_33cb6f3a37-f5c78d80.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 3 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-3" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_9e104b257e-dbff0766.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 4 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-4" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_828fb05861-2d5938db.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 5 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-5" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_1c926a96e1-928e592f.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 6 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-6" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_b28687393a-88d9a0f7.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 7 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-7" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_3f042d2946-7a4a918e.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 8 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-8" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_6836642973-14cf1b87.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 9 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-9" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_d0dbfeb7cf-1291a0e7.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 10 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-10" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_a0b5cc1874-66dd779c.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-hidden="true" aria-label="GestureFlow 1.1.2 - Gesture Drawing & Reference Study, preview 11 of 11" className="pp-gallery-slide" data-ratio="16/9" id="pp-slide-11" role="button" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/big_0a31c5d0b8-b00a9ae8.jpg")}')`} as React.CSSProperties} tabIndex={-1} />
              <div aria-label="Gallery pagination" className="pp-gallery-dots" role="group">
                <button aria-controls="pp-slide-1" aria-label="Preview 1 of 11" aria-pressed="true" className="pp-gallery-dot is-active" type="button" />
                <button aria-controls="pp-slide-2" aria-label="Preview 2 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-3" aria-label="Preview 3 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-4" aria-label="Preview 4 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-5" aria-label="Preview 5 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-6" aria-label="Preview 6 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-7" aria-label="Preview 7 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-8" aria-label="Preview 8 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-9" aria-label="Preview 9 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-10" aria-label="Preview 10 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
                <button aria-controls="pp-slide-11" aria-label="Preview 11 of 11" aria-pressed="false" className="pp-gallery-dot" type="button" />
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
                <button aria-label="Show preview 1 of 11" aria-pressed="true" className="pp-thumb is-active" data-idx="0" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/webp_wide_thumb_5dfb2c4ed8-81a9d369.webp")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 2 of 11" aria-pressed="false" className="pp-thumb" data-idx="1" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_33cb6f3a37-c0147069.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 3 of 11" aria-pressed="false" className="pp-thumb" data-idx="2" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_9e104b257e-f65b08ca.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 4 of 11" aria-pressed="false" className="pp-thumb" data-idx="3" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_828fb05861-9436a700.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 5 of 11" aria-pressed="false" className="pp-thumb" data-idx="4" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_1c926a96e1-dd676f13.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 6 of 11" aria-pressed="false" className="pp-thumb" data-idx="5" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_b28687393a-6478a165.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 7 of 11" aria-pressed="false" className="pp-thumb" data-idx="6" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_3f042d2946-5e991048.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 8 of 11" aria-pressed="false" className="pp-thumb" data-idx="7" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_6836642973-07e0be42.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 9 of 11" aria-pressed="false" className="pp-thumb" data-idx="8" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_d0dbfeb7cf-23354f14.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 10 of 11" aria-pressed="false" className="pp-thumb" data-idx="9" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_a0b5cc1874-4412cb9d.jpg")}')`} as React.CSSProperties} type="button" />
                <button aria-label="Show preview 11 of 11" aria-pressed="false" className="pp-thumb" data-idx="10" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_0a31c5d0b8-e78a2ce9.jpg")}')`} as React.CSSProperties} type="button" />
              </div>
              <div aria-hidden="true" className="pp-thumbs-fade pp-thumbs-fade-l" />
              <div aria-hidden="true" className="pp-thumbs-fade pp-thumbs-fade-r" />
            </div>
          </section>
          <aside aria-label="Purchase" className="dpp-side">
            <header className="pp-header">
              <div id="dpt-seller">
                <section aria-label="Seller" className="pp-seller dpp-seller">
                  <Link tabIndex={-1} aria-hidden="true" className="pp-seller-avatar" href="/alwayshungry">
                    <img src={asset("/sites/cubebrush/img/small_366960ee37-81134adc.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                  </Link>
                  <div className="pp-seller-info">
                    <div className="dpp-seller-by">
                      {"by "}
                      <Link href="/alwayshungry">
                        Arthur Zugrov
                      </Link>
                    </div>
                    <div className="dpp-seller-by">
                      {"in "}
                      <Link href="/marketplace">
                        Applications
                      </Link>
                    </div>
                  </div>
                  <div className="dpp-seller-tags" title="Applications, tools, Pose & Figure Reference">
                    Applications, tools, Pose & Figure Reference
                  </div>
                  <div className="dpp-seller-actions">
                    <a className="dpp-pill is-ghost" href="https://cubebrush.co/conversations?to=alwayshungry" title="Message seller">
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
                GestureFlow 1.1.2 - Gesture Drawing & Reference Study
              </h1>
              <div className="pp-rating-row">
                <span aria-label="Not enough ratings" className="cb-stars" style={{"--fill": "0.0%"} as React.CSSProperties}>
                  <span aria-hidden="true" className="cb-stars-fill" />
                </span>
                <span aria-hidden="true">
                  Not enough ratings
                </span>
                <span>
                  (2 ratings)
                </span>
              </div>
              <div className="pp-bottom-row">
                <button aria-pressed="false" className="pp-wishlist" data-wishlist-label="Add to wishlist" data-wishlist-product="ae75sq" data-wishlist-saved-label="Saved to wishlist" type="button">
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
                    17 sales
                  </span>
                  <span className="pp-stat-rotator" id="pp-stat-rotator">
                    <span className="pp-stat-rot is-active" data-stat="views">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-06693f23-ns")} />
                      </svg>
                      1.07K views
                    </span>
                    <span className="pp-stat-rot" data-stat="likes">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#heart-reaction-e0cb3e51-ns")} />
                      </svg>
                      25 likes
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
              <button aria-controls="pp-license-menu" aria-expanded="false" aria-haspopup="listbox" className="pp-license-toggle" data-pp-own-only="none" id="pp-license-toggle" type="button">
                <span className="lbl">
                  <span className="kind" id="pp-license-kind">
                    Basic license
                  </span>
                  <span className="price" id="pp-license-price">
                    $15+
                  </span>
                </span>
                <svg viewBox="0 0 24 24" height="12" width="12" className="chev cb-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" data-pp-licensing-only="both" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                </svg>
              </button>
              <div aria-labelledby="pp-license-toggle" className="pp-license-menu" data-pp-own-only="none" id="pp-license-menu" role="listbox">
                <button aria-selected="true" className="pp-license-option is-selected" data-license="basic" data-price="15.0" role="option" tabIndex={-1} type="button">
                  <div>
                    <div className="head">
                      Basic license
                    </div>
                    <div className="desc">
                      Personal use in unlimited projects. Commercial use in 1 project, up to 1,000 sales.
                    </div>
                  </div>
                  <span className="opt-price">
                    $15+
                  </span>
                </button>
              </div>
              <div className="pp-pwyw" data-pp-own-only="none" data-pp-pwyw="">
                <label className="pp-pwyw-label" htmlFor="pp-pwyw-amount">
                  Pay what you want
                </label>
                <div className="pp-pwyw-field">
                  <span aria-hidden="true" className="pp-pwyw-currency">
                    $
                  </span>
                  <input aria-describedby="pp-pwyw-hint" className="pp-pwyw-input" data-pp-pwyw-error="Enter $15 or more." id="pp-pwyw-amount" inputMode="decimal" min="15" step="0.01" type="number" defaultValue="15" />
                </div>
                <p className="pp-pwyw-hint" id="pp-pwyw-hint">
                  $15 or more. Suggested $15.
                </p>
                <p className="pp-pwyw-error" hidden role="alert" />
              </div>
              <a className="pp-buy-now" data-pp-own-only="none" href="https://cubebrush.co/checkout?ids=ae75sq" id="pp-buy-now" rel="nofollow">
                Buy now · $
                <span id="pp-buy-now-price">
                  15
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
                  <div id="v3_tip_ae75sq" style={{"display": "block"} as React.CSSProperties}>
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
                    3.75
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
                  cubebrush.co/alwayshungry/products/ae75sq/gestureflow-1-1-2-gesture-drawing-reference-study
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
                  <button className="pp-tab" type="button" data-tab="brushes" role="tab" aria-selected="false" aria-controls="pp-tab-brushes" tabIndex={-1}>
                    Brush set
                  </button>
                  <button className="pp-tab" type="button" data-tab="comments" role="tab" aria-selected="false" aria-controls="pp-tab-comments" tabIndex={-1}>
                    Comments (1)
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
                      <h2>
                        GestureFlow is free until August 17, 2026!
                      </h2>
                      {" "}
                      <p>
                        Get the full version, use it in your practice, and let me know what you think. The regular $14.99 price returns after the promotion.
                      </p>
                      {" "}
                      <h2>
                        Stop switching tabs. Just draw.
                      </h2>
                      {" "}
                      <p>
                        You sit down to practice. Then you spend the first chunk of time finding references, setting a timer, and trying to remember which folder had the hand studies. By the time you're actually drawing, you've lost half your motivation.
                      </p>
                      {" "}
                      <p>
                        <strong>
                          GestureFlow
                        </strong>
                        {" replaces the chaos. Your references, your session structure, your study tools, and your progress tracking — all in one place. Open it and draw."}
                      </p>
                      {" "}
                      <h2>
                        <strong>
                          <a href="http://cbr.sh/qseikr">
                            Download Free Trial
                          </a>
                        </strong>
                      </h2>
                      {" "}
                      <h3>
                        Four ways to practice. One app.
                      </h3>
                      {" "}
                      <ul>
                        {" "}
                        <li>
                          <strong>
                            Quick Sketch
                          </strong>
                          {" — Zero setup. Start in seconds. Pick a folder, set a time per image, hit Start. Good for daily warm-ups, anatomy drills, or any session where you just want to get moving. Zen Mode available if you'd rather draw without a timer at all. Smart breaks built in — rest every N images or every N minutes, however you prefer to work."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Studio Class
                          </strong>
                          {" — A full session, already planned. Not sure what to practice today? Choose Warm-Up, Daily Core, Deep Study, or Master Class. GestureFlow handles the structure — how many poses, how long each block, where the breaks fall. You see the full program before you start. Then you just draw."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Focused Mode
                          </strong>
                          {" — One reference. No rush. Found something worth studying? Drag it straight from your browser, paste from clipboard, or drop from a folder. No timer. Zoom, pan, mirror, grid, proportion tool, value study — everything available when you need it. A proper study environment, not just an image viewer."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Creative Builder
                          </strong>
                          {" — Your routine, your rules. Stack drawing blocks and breaks in any order. A 15-minute warm-up before work. A 90-minute anatomy session on weekends. A mixed class with two subjects and a rest in the middle. Save it, come back to it, launch it in one click."}
                        </li>
                        {" "}
                      </ul>
                      {" "}
                      <h3>
                        Study the reference. Don't just look at it.
                      </h3>
                      {" "}
                      <p>
                        Most gesture apps show you an image and count down. GestureFlow lets you actually analyze what you're looking at.
                      </p>
                      {" "}
                      <ul>
                        {" "}
                        <li>
                          <strong>
                            Proportion Tool
                          </strong>
                          {" — Set a base unit, lock it, measure everything else against it. Check if the torso reads right. Catch proportion mistakes before they land on the canvas."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Value Study
                          </strong>
                          {" — Reduce any reference to 2–6 values. See the big shapes and light structure before you get lost in details."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Grid
                          </strong>
                          {" — Adjustable rows, columns, diagonals, color, and thickness. Use it for construction, composition analysis, or breaking a complex pose into manageable pieces."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Zoom and Pan
                          </strong>
                          {" — Move through a reference like it's a canvas. Study the hand, check the full silhouette, come back — without losing your place."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Mirror and Grayscale
                          </strong>
                          {" — Essential controls that seem small until you realize you needed them every session."}
                        </li>
                        {" "}
                        <li>
                          <strong>
                            Progress Bar
                          </strong>
                          {" — Shows either your overall session progress or the timer for the current reference. Switch between the two depending on how you like to work: some artists want to know how much of the session is left, others want to see exactly how many seconds remain on this pose."}
                        </li>
                        {" "}
                      </ul>
                      {" "}
                      <h3>
                        Your references, organized.
                      </h3>
                      {" "}
                      <p>
                        Stop hunting through folders every time you want to draw. Create a preset for full-body gestures. Another for hands. One for portraits, one for animals. Preview what's in each before you start. Switch between them in two clicks. Everything saves automatically.
                      </p>
                      {" "}
                      <h3>
                        See your consistency. Edit it when life gets in the way.
                      </h3>
                      {" "}
                      <p>
                        {"GestureFlow tracks your practice time, session count, references drawn, and streak. The yearly heatmap fills in as you work — watching it grow is its own kind of motivation. "}
                        <strong>
                          And because real life happens:
                        </strong>
                      </p>
                      {" "}
                      <ul>
                        {" "}
                        <li>
                          Practiced on paper today? Add the time manually — your streak stays intact.
                        </li>
                        {" "}
                        <li>
                          Need a rest day? Mark it. It won't count against you.
                        </li>
                        {" "}
                        <li>
                          Moving to a new computer? Export your data and pick up where you left off.
                        </li>
                        {" "}
                        <li>
                          Prefer not to track at all? Turn statistics off completely.
                        </li>
                        {" "}
                      </ul>
                      {" "}
                      <h3>
                        Built for artists who practice seriously.
                      </h3>
                      {" "}
                      <p>
                        GestureFlow is for illustrators, concept artists, character artists, animators, and students who draw from references — and who are tired of assembling a practice setup from five different tools. If you've ever wanted one place to practice with your own references, study them properly, and actually build a consistent habit — this is it.
                      </p>
                      {" "}
                      <h3>
                        Free trial. No account. No subscription.
                      </h3>
                      {" "}
                      <p>
                        Download, open, drag in a reference folder, and see how it feels.
                      </p>
                      {" "}
                      <h2>
                        <strong>
                          <a href="http://cbr.sh/qseikr">
                            Download Free Trial
                          </a>
                        </strong>
                      </h2>
                      {" "}
                      <p>
                        <strong>
                          Windows 10/11
                        </strong>
                      </p>
                      {" "}
                      <p>
                        <strong>
                          Supported Formats:
                        </strong>
                        {" JPG PNG BMP GIF WebP"}
                      </p>
                      {" "}
                      <p>
                        Version History:
                      </p>
                      {" "}
                      <p>
                        1.1.0: Better responsive design for session New overlay mode with opacity settings - now you can use a proportion tool over your favorite program - Photoshop, Krita, etc New visibility settings for session Bugfixes
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
                    Instant download · 1 file · 50.8 MB total
                  </p>
                  <div className="pp-files-list" id="pp-files-list">
                    <div className="pp-file">
                      <span data-ext="7Z" className="pp-file-icon">
                        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
                          <use href={asset("/sites/cubebrush/icons.svg#file-document")} fill="#5fa756" />
                          <use href={asset("/sites/cubebrush/icons.svg#glyph-5c722a6a")} />
                          <text x="14.5" y="16" textAnchor="middle" dominantBaseline="central" fontFamily="Mulish, sans-serif" fontWeight="800" fontSize="8.5" fill="#fff" letterSpacing=".2">
                            7Z
                          </text>
                        </svg>
                      </span>
                      <div className="pp-file-body">
                        <div className="pp-file-name">
                          GestureFlow 1.1.2 - Win Portable.7z
                        </div>
                        <div className="pp-file-size">
                          7Z · 50.8 MB
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div id="pp-tab-brushes" role="tabpanel" hidden>
                <section aria-label="Previews" className="dpt-mod is-deep">
                  <div className="dpt-sub">
                    Previews · 10 images
                  </div>
                  <div aria-label="Preview images" className="dpt-sheet">
                    <button aria-label="Preview 1" className="dpt-cell" data-n="0001" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_33cb6f3a37-c0147069.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 2" className="dpt-cell" data-n="0002" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_9e104b257e-f65b08ca.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 3" className="dpt-cell" data-n="0003" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_828fb05861-9436a700.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 4" className="dpt-cell" data-n="0004" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_1c926a96e1-dd676f13.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 5" className="dpt-cell" data-n="0005" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_b28687393a-6478a165.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 6" className="dpt-cell" data-n="0006" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_3f042d2946-5e991048.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 7" className="dpt-cell" data-n="0007" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_6836642973-07e0be42.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 8" className="dpt-cell" data-n="0008" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_d0dbfeb7cf-23354f14.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 9" className="dpt-cell" data-n="0009" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_a0b5cc1874-4412cb9d.jpg")}')`} as React.CSSProperties} type="button" />
                    <button aria-label="Preview 10" className="dpt-cell" data-n="0010" style={{"backgroundImage": `url('${asset("/sites/cubebrush/img/thumb_0a31c5d0b8-e78a2ce9.jpg")}')`} as React.CSSProperties} type="button" />
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
                cubebrush.co/alwayshungry/products/ae75sq/gestureflow-1-1-2-gesture-drawing-reference-study
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
            More from Arthur Zugrov
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
          <ul aria-label="More products by Arthur Zugrov" className="dh-rail">
            <li>
              <ProductCard p={products["wof7vq"]} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
