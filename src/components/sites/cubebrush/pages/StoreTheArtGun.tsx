import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function StoreTheArtGun() {
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
              <img src={asset("/sites/cubebrush/img/normal_e4a7e71fae-c86e8561.png")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
            </div>
            <h1 className="ms-name">
              TheArtGun
              <span className="ms-topseller" title="Top 100 seller of 2026">
                <svg aria-hidden="true" className="cb-ico-li" viewBox="0 0 20 20">
                  <path d="M19 7.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.55 0.298 1.032 0.741 1.293-0.279 1.116-1.011 4.163-1.431 7.089-0.594-0.205-1.409-0.353-2.307-0.453 0.050-2.665 0.673-7.978 0.854-9.472 0.655-0.161 1.143-0.753 1.143-1.457 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.599 0.353 1.117 0.861 1.357-0.186 1.528-0.796 6.726-0.856 9.481-0.668-0.049-1.353-0.075-2.005-0.084v-12.339c0.582-0.206 1-0.762 1-1.414 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.652 0.418 1.208 1 1.414v12.339c-0.652 0.009-1.337 0.036-2.005 0.084-0.060-2.755-0.671-7.953-0.856-9.481 0.508-0.24 0.861-0.758 0.861-1.357 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.704 0.488 1.296 1.143 1.457 0.181 1.494 0.804 6.807 0.854 9.472-0.898 0.101-1.713 0.248-2.307 0.453-0.421-2.926-1.152-5.973-1.431-7.089 0.443-0.261 0.741-0.743 0.741-1.293 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.751 0.554 1.374 1.275 1.483 0.373 1.493 1.725 7.146 1.725 10.517 0 0.173 0.090 0.334 0.237 0.425s0.331 0.099 0.486 0.022c0.834-0.417 3.155-0.697 5.776-0.697s4.942 0.28 5.776 0.697c0.071 0.035 0.147 0.053 0.224 0.053 0.091 0 0.183-0.025 0.263-0.075 0.147-0.091 0.237-0.252 0.237-0.425 0-3.371 1.353-9.024 1.725-10.517 0.721-0.109 1.275-0.733 1.275-1.483zM13.5 4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM5.5 4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM9.5 1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM1 7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM9.5 18.25c-1.865 0-4.131 0.147-5.517 0.541-0.026-0.594-0.083-1.233-0.16-1.89 0.908-0.391 3.153-0.651 5.677-0.651s4.768 0.26 5.677 0.651c-0.077 0.657-0.134 1.295-0.16 1.89-1.386-0.393-3.652-0.541-5.517-0.541zM17.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z" />
                </svg>
                Top seller
              </span>
            </h1>
            <div className="ms-stats">
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-766d8081-ns")} />
                </svg>
                977 Followers
              </span>
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-64cf7f8e-ns")} />
                </svg>
                870 Sales
              </span>
              <span className="ms-stat">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-ee4db8d1-ns")} />
                </svg>
                @theartgun
              </span>
            </div>
            <div className="ms-bio">
              <p>
                A 2D/3D artist who primarily works with virtual characters.
              </p>
              {" "}
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
            <div aria-label="TheArtGun's social profiles" className="ms-socials">
              <a aria-label="X (Twitter)" className="ms-social" href="https://twitter.com/TheArtGun" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="#fff" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-033acdaa-ns")} />
                </svg>
              </a>
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
                <form action="/theartgun" className="dh-search-pill" id="ms-search-bar" method="get" role="search">
                  <label className="cb-sr" htmlFor="ms-q">
                    Search TheArtGun's store
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
                    <button className="dh-chip" type="button" aria-pressed="false" data-cat-pick="3D Assets">
                      3D Assets
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
                  <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-assetType" data-open="false" hidden>
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
                          Render Scenes
                        </button>
                        <button aria-pressed="false" className="dh-chip" type="button">
                          Rigs
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-subject" data-open="false" hidden>
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
                          Characters and Anatomy
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="dh-fsection" data-cats="3D-Assets" data-key="3d-software" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        Software
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
                          Blender
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
                  <section className="dh-fsection" data-cats="Tools" data-key="tools-software2d" data-open="false" hidden>
                    <button aria-expanded="false" className="dh-fsection-head" type="button">
                      <span className="label">
                        2D Software
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
                          Other
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
                TheArtGun's products
              </h2>
              <div id="mp-results">
                <div id="mp-results-alert" />
                <ul aria-label="Products" className="dh-grid" id="mp-grid">
                  <li>
                    <ProductCard p={products["5m5rda"]} />
                  </li>
                  <li>
                    <ProductCard p={products["rwe03q"]} />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="ms-pane" data-ms-pane="posts" hidden>
            <section aria-label="Updates from TheArtGun" className="ms-posts" id="ms-posts">
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
            <section aria-label="TheArtGun's bundles" className="ms-bundles">
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
            <input className="ms-share-input" id="ms-share-url" readOnly type="text" defaultValue="http://cbr.sh/ekttc" />
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
      <dialog aria-label="Message TheArtGun" aria-modal="true" className="ms-modal-host" hidden id="ms-msg-modal">
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
                  TheArtGun
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
                TheArtGun will reply by email. You'll also see their response in your inbox.
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
