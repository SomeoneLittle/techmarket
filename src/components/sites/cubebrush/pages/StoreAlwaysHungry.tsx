import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function StoreAlwaysHungry() {
  return (
    <>
      <div>
        <section aria-label="Store identity" className="ms-identity">
          <div aria-hidden="true" className="ms-cover">
            <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" className="ms-cover-art" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="msc-sky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#0b1722" />
                  <stop offset=".55" stopColor="#223545" />
                  <stop offset="1" stopColor="#5a6a78" />
                </linearGradient>
                <linearGradient id="msc-mist" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#e8d2a6" stopOpacity="0" />
                  <stop offset=".6" stopColor="#e8c59a" stopOpacity=".55" />
                  <stop offset="1" stopColor="#d9b088" stopOpacity=".85" />
                </linearGradient>
                <linearGradient id="msc-vig" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#000" stopOpacity="0" />
                  <stop offset="1" stopColor="#000" stopOpacity=".55" />
                </linearGradient>
              </defs>
              <rect width="800" height="480" fill="url(#msc-sky)" />
              <polygon points="0,300 120,220 240,280 360,200 500,260 640,210 800,280 800,480 0,480" fill="#1b2b3a" opacity=".85" />
              <polygon points="0,340 90,280 220,320 320,270 450,310 580,260 720,300 800,290 800,480 0,480" fill="#253848" opacity=".9" />
              <polygon points="0,380 140,330 260,360 400,320 540,360 680,330 800,360 800,480 0,480" fill="#2e4354" />
              <rect x="0" y="240" width="800" height="220" fill="url(#msc-mist)" />
              <g transform="translate(520 280)" fill="#111922">
                <ellipse cx="0" cy="-6" rx="12" ry="14" />
                <path d="M-22 10 q22 -14 44 0 L40 100 q-40 14 -80 0 Z" />
              </g>
              <g fill="#e8d2a6" opacity=".5">
                <circle cx="380" cy="180" r="1.4" />
                <circle cx="420" cy="220" r="1" />
                <circle cx="460" cy="260" r="1.4" />
                <circle cx="500" cy="210" r="1.2" />
                <circle cx="600" cy="240" r="1" />
                <circle cx="650" cy="200" r="1.2" />
              </g>
              <rect x="0" y="260" width="800" height="220" fill="url(#msc-vig)" />
            </svg>
            {" "}
          </div>
          <div aria-hidden="true" className="ms-cover-tint" style={{"backgroundColor": "rgba(34, 38, 49, .5)"} as React.CSSProperties} />
          <div aria-hidden="true" className="ms-cover-scrim" />
          <div className="ms-identity-inner">
            <div aria-hidden="true" className="ms-avatar" data-cb-avatar-kind="store">
              <img src={asset("/sites/cubebrush/img/normal_366960ee37-150d7356.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
            </div>
            <h1 className="ms-name">
              Arthur Zugrov
            </h1>
            <div className="ms-stats">
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-766d8081-ns")} />
                </svg>
                19 Followers
              </span>
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-64cf7f8e-ns")} />
                </svg>
                26 Sales
              </span>
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-ee4db8d1-ns")} />
                </svg>
                @alwayshungry
              </span>
            </div>
            <div className="ms-actions">
              <button className="ms-btn ms-btn-message" type="button">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-56977f5c-ns")} />
                </svg>
                Message
              </button>
              <button aria-pressed="false" className="ms-btn ms-btn-follow" data-cb-follow="" type="button">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" className="ms-follow-add" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#ms-follow-add-07ceb920-ns")} />
                </svg>
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="ms-follow-check" display="none" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-check-0a1a95d3-ns")} />
                </svg>
                <span className="ms-follow-label">
                  Follow
                </span>
              </button>
            </div>
          </div>
        </section>
        <div data-ms-store-content="">
          <section aria-label="Store navigation" className="ms-band dh-toolbar is-static">
            <div className="dh-toolbar-inner">
              <div role="tablist" aria-label="Store sections" data-tab-rainbow="" data-tab-slider="" className="ms-crumb-tabs dh-tabs">
                <button className="ms-crumb-tab dh-tab is-active" type="button" role="tab" aria-selected="true" data-ms-pane="store">
                  Store
                </button>
                <button className="ms-crumb-tab dh-tab" type="button" role="tab" aria-selected="false" data-ms-pane="posts" data-tab-color="#39b3e6">
                  Posts
                </button>
                <button className="ms-crumb-tab dh-tab" type="button" role="tab" aria-selected="false" data-ms-pane="bundles" data-tab-color="#8b80e0">
                  Bundles
                </button>
              </div>
              <div className="dh-toolbar-right">
                <form action="/alwayshungry" className="dh-search-pill" id="ms-search-bar" method="get" role="search">
                  <label className="cb-sr" htmlFor="ms-q">
                    Search Arthur Zugrov's store
                  </label>
                  <input aria-autocomplete="list" aria-controls="ms-q-suggestions" aria-expanded="false" autoComplete="off" id="ms-q" name="q" placeholder="Search this store" role="combobox" type="search" />
                  <button aria-label="Search" type="submit">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#search-6fa128b3-ns")} />
                    </svg>
                  </button>
                  <div aria-label="Search suggestions" className="cb-suggest cb-dd-menu" hidden id="ms-q-suggestions" role="listbox" />
                  <span aria-live="polite" className="cb-sr" data-none="No suggestions" data-one="1 suggestion" data-other={"{count} suggestions"} role="status" />
                </form>
                <div className="ms-sort-wrap" data-ms-sort="" data-value="">
                  <button className="ms-sort cb-dd-trigger cb-dd-toolbar" aria-haspopup="listbox" aria-expanded="false" aria-controls="ms-sort-menu" type="button">
                    <span className="ms-sort-value">
                      Featured
                    </span>
                    <svg viewBox="0 0 24 24" height="10" width="10" className="ms-sort-chev cb-chevron cb-dd-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                    </svg>
                  </button>
                  <div aria-label="Sort products" className="ms-sort-menu cb-dd-menu" hidden id="ms-sort-menu" role="listbox">
                    <button className="ms-sort-opt cb-dd-option is-selected" role="option" type="button" aria-selected="true" data-value="">
                      Featured
                    </button>
                    <button className="ms-sort-opt cb-dd-option" role="option" type="button" aria-selected="false" data-value="recent">
                      Most recent
                    </button>
                    <button className="ms-sort-opt cb-dd-option" role="option" type="button" aria-selected="false" data-value="popular">
                      Best sellers
                    </button>
                  </div>
                </div>
                <button aria-label="Share store" className="dh-ftoggle" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-894b543d-ns")} />
                  </svg>
                  Share
                </button>
                <button aria-controls="dh-filters" aria-expanded="false" aria-label="Filter this store" className="dh-ftoggle dh-filter-toggle" data-dh-filters-grid="[data-ms-pane=store] .dh-grid" type="button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#filter-02eb0adc-ns")} />
                  </svg>
                  <span data-f-ftoggle-label="">
                    Filters
                  </span>
                  <span className="n" data-f-fcount="" hidden>
                    0
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section aria-hidden="true" aria-label="Filters" className="dh-filters is-closed" data-category="All categories" data-dh-filters="" id="dh-filters" inert role="region">
            <div className="dh-filters-clip">
              <div className="dh-filters-inner">
                <div className="dh-fhead">
                  <div className="title">
                    Filters
                  </div>
                  <button className="dh-reset" data-f-reset="" disabled type="button">
                    Reset filters
                  </button>
                </div>
                <div className="dh-fblock">
                  <div className="dh-flabel">
                    Category
                  </div>
                  <div data-filter-group="single" data-f-cat-picker="" className="dh-chips">
                    <button className="dh-chip" type="button" aria-pressed="true" data-cat-pick="All categories">
                      All categories
                    </button>
                    <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="Tools">
                      Tools
                    </button>
                  </div>
                </div>
                <input aria-label="Search categories" autoComplete="off" className="dh-fsearch" hidden placeholder="Search categories" type="search" />
                <p className="dh-fsearch-empty" hidden role="status">
                  No categories match
                </p>
                <div className="dh-fsections">
                  <section className="dh-fsection" data-cats="Tutorials Tools" data-key="focus" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Focus
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-segment" data-filter-group="single">
                        <button aria-pressed="false" type="button">
                          2D
                        </button>
                        <button aria-pressed="false" type="button">
                          3D
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="Tutorials 3D-Assets 2D-Assets Audio Other Tools" data-key="pack" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Bundle
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-segment" data-filter-group="single">
                        <button aria-pressed="false" type="button">
                          Single
                        </button>
                        <button aria-pressed="false" type="button">
                          Pack
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="Tutorials" data-key="tut-skill" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Skill level
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-chips" data-filter-group="single">
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Beginner
                        </button>
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Advanced
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="2D-Assets" data-key="2d-assetType" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Asset type
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-chips">
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Stock Photos
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="2D-Assets" data-key="2d-subject" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Subject
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-chips">
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Pose & Figure Reference
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="Tools" data-key="tools-toolType" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Tool type
                      </span>
                      <span className="count" hidden>
                        0
                      </span>
                      <svg viewBox="0 0 12 12" height="12" width="12" className="chev" aria-hidden="true">
                        <use href={asset("/sites/cubebrush/icons.svg#chev-451a2662")} />
                      </svg>
                    </button>
                    <div className="dh-fsection-body">
                      <div className="dh-chips">
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Applications
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="dh-frow">
                  <div className="dh-fgroup">
                    <div className="dh-flabel">
                      Price
                    </div>
                    <div className="dh-price">
                      <label className="lo cb-price-min">
                        <span>
                          $
                        </span>
                        <input aria-label="Minimum price" inputMode="numeric" max="5000" min="1" step="1" type="number" defaultValue="1" />
                      </label>
                      <div className="dh-range" style={{"--hi": "100.0%"} as React.CSSProperties}>
                        <div className="dh-range-track" />
                        <div className="dh-range-fill" />
                        <input aria-label="Maximum price" data-f-max="" max="5000" min="1" type="range" defaultValue="5000" />
                      </div>
                      <span data-f-hi="">
                        $5,000
                      </span>
                    </div>
                  </div>
                  <div className="dh-fgroup">
                    <div className="dh-flabel">
                      Rating
                    </div>
                    <div aria-label="Minimum rating" className="dh-rating" data-filter-group="single" role="radiogroup">
                      <button aria-pressed="false" data-rating="1" type="button">
                        <span className="star">
                          ★
                        </span>
                        1+
                      </button>
                      <button aria-pressed="false" data-rating="2" type="button">
                        <span className="star">
                          ★
                        </span>
                        2+
                      </button>
                      <button aria-pressed="false" data-rating="3" type="button">
                        <span className="star">
                          ★
                        </span>
                        3+
                      </button>
                      <button aria-pressed="false" data-rating="4" type="button">
                        <span className="star">
                          ★
                        </span>
                        4+
                      </button>
                      <button aria-pressed="false" data-rating="5" type="button">
                        <span className="star">
                          ★
                        </span>
                        5+
                      </button>
                    </div>
                  </div>
                  <div className="dh-fgroup">
                    <div className="dh-flabel">
                      Sort by
                    </div>
                    <div data-filter-group="single" data-default-sort="" data-f-sort="" className="dh-chips">
                      <button className="dh-chip" type="button" aria-pressed="false">
                        Popular
                      </button>
                      <button className="dh-chip" type="button" aria-pressed="false">
                        Newest
                      </button>
                      <button className="dh-chip" type="button" aria-pressed="false">
                        Price ↑
                      </button>
                      <button className="dh-chip" type="button" aria-pressed="false">
                        Price ↓
                      </button>
                      <button className="dh-chip" type="button" aria-pressed="false">
                        Rating
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="ms-pane is-active" data-ms-pane="store">
            <section aria-labelledby="ms-feed-title" className="ms-feed">
              <h2 className="cb-sr" id="ms-feed-title">
                Arthur Zugrov's products
              </h2>
              <div id="mp-results">
                <div id="mp-results-alert" />
                <ul aria-label="Products" className="dh-grid" id="mp-grid">
                  <li>
                    <ProductCard p={products["wof7vq"]} />
                  </li>
                  <li>
                    <ProductCard p={products["ae75sq"]} />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="ms-pane" data-ms-pane="posts" hidden>
            <section aria-label="Updates from Arthur Zugrov" className="ms-posts" id="ms-posts">
              <div aria-live="polite" className="cb-empty" data-empty-kind="posts">
                <div aria-hidden="true" className="cb-empty-icon">
                  <svg aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4d2dcd07")} />
                  </svg>
                </div>
                <h2 className="cb-empty-title">
                  No posts yet
                </h2>
                <p className="cb-empty-copy">
                  Updates and works in progress from this creator will appear here.
                </p>
                <div className="cb-empty-actions">
                  <button data-empty-action="follow" data-empty-follow-label="Follow this creator" type="button" className="cb-empty-action">
                    Follow this creator
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="ms-pane" data-ms-pane="bundles" hidden>
            <section aria-label="Arthur Zugrov's bundles" className="ms-bundles">
              <div aria-live="polite" className="cb-empty" data-empty-kind="collection">
                <div aria-hidden="true" className="cb-empty-icon">
                  <svg aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-1c583247")} />
                  </svg>
                </div>
                <h2 className="cb-empty-title">
                  No bundles yet
                </h2>
                <p className="cb-empty-copy">
                  This creator hasn't put together any bundles yet. Explore their individual products instead.
                </p>
                <div className="cb-empty-actions">
                  <a href="#store" className="cb-empty-action">
                    Explore products
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <dialog aria-label="Share store" aria-modal="true" className="ms-modal-host" hidden id="ms-share-modal">
        <div className="ms-modal-backdrop cb-sheet-backdrop" />
        <div className="ms-modal">
          <div className="ms-modal-head">
            <span className="spacer" />
            <h2 className="ms-modal-title">
              Share store
            </h2>
            <span className="spacer" style={{"textAlign": "right"} as React.CSSProperties}>
              <button aria-label="Close share" className="ms-modal-close" type="button">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
                </svg>
              </button>
            </span>
          </div>
          <div className="ms-modal-body">
            <div className="ms-share-label">
              Link to store
            </div>
            <input className="ms-share-input" id="ms-share-url" readOnly type="text" defaultValue="http://cbr.sh/gg7cpm" />
            <div className="ms-share-grid">
              <button className="ms-share-btn fb" id="ms-share-fb" type="button">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-a386a3ee-ns")} />
                </svg>
                Share
              </button>
              <button className="ms-share-btn x" id="ms-share-x" type="button">
                <svg viewBox="0 0 24 24" height="13" width="13" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-033acdaa-ns")} />
                </svg>
                Post
              </button>
            </div>
            <button className="ms-share-copy" id="ms-share-copy" type="button">
              Copy link
            </button>
          </div>
        </div>
      </dialog>
      <dialog aria-label="Message Arthur Zugrov" aria-modal="true" className="ms-modal-host" hidden id="ms-msg-modal">
        <div className="ms-modal-backdrop cb-sheet-backdrop" />
        <div className="ms-modal">
          <div className="ms-modal-head">
            <span className="spacer" />
            <h2 className="ms-modal-title">
              <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-56977f5c-ns")} />
              </svg>
              Send message
            </h2>
            <span className="spacer" style={{"textAlign": "right"} as React.CSSProperties}>
              <button aria-label="Close message" className="ms-modal-close" type="button">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
                </svg>
              </button>
            </span>
          </div>
          <div className="ms-modal-body" id="ms-msg-body-host">
            <div id="ms-msg-form">
              <p className="ms-msg-intro">
                {"Send a private message to "}
                <strong>
                  Arthur Zugrov
                </strong>
                .
              </p>
              <div className="ms-msg-labelrow">
                <label htmlFor="ms-msg-text">
                  Message
                </label>
                <span className="ms-msg-counter" id="ms-msg-counter">
                  0/1000
                </span>
              </div>
              <textarea className="ms-msg-area" id="ms-msg-text" maxLength={1000} placeholder="Write your message…" rows={6} />
              <div />
              <div className="ms-msg-actions">
                <button className="ms-msg-cancel" type="button">
                  Cancel
                </button>
                <button className="ms-msg-send" disabled id="ms-msg-send" type="button">
                  Send
                </button>
              </div>
            </div>
            <div className="ms-msg-success" hidden id="ms-msg-success">
              <div className="ms-msg-success-mark">
                <svg viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-check-0a1a95d3-ns")} />
                </svg>
              </div>
              <div className="ms-msg-success-title">
                Message sent
              </div>
              <div className="ms-msg-success-sub">
                Arthur Zugrov will reply by email. You'll also see their response in your inbox.
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <dialog aria-label="Share post" aria-modal="true" className="ms-modal-host" hidden id="ms-post-share-modal">
        <div className="ms-modal-backdrop cb-sheet-backdrop" />
        <div className="ms-modal">
          <div className="ms-modal-head">
            <span className="spacer" />
            <h2 className="ms-modal-title">
              Share post
            </h2>
            <span className="spacer" style={{"textAlign": "right"} as React.CSSProperties}>
              <button aria-label="Close share" className="ms-modal-close" type="button">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
                </svg>
              </button>
            </span>
          </div>
          <div className="ms-modal-body">
            <div className="ms-share-label">
              Link to this post
            </div>
            <input className="ms-share-input" id="ms-post-share-url" readOnly type="text" />
            <div className="ms-share-grid">
              <button className="ms-share-btn fb" id="ms-post-share-fb" type="button">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-a386a3ee-ns")} />
                </svg>
                Share
              </button>
              <button className="ms-share-btn x" id="ms-post-share-x" type="button">
                <svg viewBox="0 0 24 24" height="13" width="13" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-033acdaa-ns")} />
                </svg>
                Post
              </button>
            </div>
            <button className="ms-share-copy" id="ms-post-share-copy" type="button">
              Copy link
            </button>
          </div>
        </div>
      </dialog>
      <div className="cb-sheet-host" hidden id="ms-post-comments-sheet" inert>
        <div className="cb-sheet-backdrop" />
        <div aria-label="Post comments" aria-modal="true" className="cb-sheet" role="dialog">
          <div className="cb-sheet-handle" />
          <div className="ms-comments-head">
            <div className="ms-comments-head-title" id="ms-comments-context">
              Comments
            </div>
            <span className="ms-comments-head-count" id="ms-comments-count" />
            <button aria-label="Close comments" className="ms-comments-close" type="button">
              <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
              </svg>
            </button>
          </div>
          <div className="ms-comments-scroll">
            <div id="ms-post-comments" />
          </div>
        </div>
      </div>
    </>
  );
}
