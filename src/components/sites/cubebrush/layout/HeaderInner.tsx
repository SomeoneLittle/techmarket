"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { asset } from "@/lib/asset";

export type HeaderInnerProps = {
  marketOpen: boolean;
  onToggleMarket: () => void;
  onCloseMarket: () => void;
  onToggleTheme: () => void;
  onOpenDrawer: () => void;
  onSearch: (e: FormEvent<HTMLFormElement>) => void;
  user: { name: string } | null;
  drawerOpen: boolean;
};

export function HeaderInner({ marketOpen, onToggleMarket, onCloseMarket, onToggleTheme, onOpenDrawer, onSearch, user, drawerOpen }: HeaderInnerProps) {
  return (
    <>
      <Link aria-label="Cubebrush · home" className="dh-logo" href="/">
        <img alt="" width="36" height="36" src={asset("/sites/cubebrush/img/logo-mark-white-1065c7c23a516247b4dc0688-d7c8e97b.png")} />
        <span className="dh-wordmark">
          cubebrush
        </span>
      </Link>
      <nav aria-label="Primary" className="dh-nav">
        <button aria-controls="desktop-marketplace-menu" aria-expanded={marketOpen} className="dh-market-toggle" type="button" onClick={onToggleMarket}>
          Marketplace
          <svg viewBox="0 0 24 24" className="cb-dd-chevron" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
          </svg>
        </button>
        <div className={"dh-market-host" + (marketOpen ? " is-open" : "")} hidden={!marketOpen} id="desktop-marketplace-menu" inert={!marketOpen} onClick={(e) => { if ((e.target as HTMLElement).closest("a") || (e.target as HTMLElement).classList.contains("dh-market-backdrop")) onCloseMarket(); }}>
          <div aria-hidden="true" className="dh-market-backdrop" />
          <nav aria-label="Browse the marketplace" className="dh-market-panel">
            <div className="dh-market-head">
              <h2>
                <Link className="dh-market-title-link" href="/marketplace">
                  <span className="dh-market-title-text">
                    Explore the marketplace
                  </span>
                  <svg viewBox="0 0 24 24" className="dh-market-title-arrow" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                  </svg>
                </Link>
              </h2>
              <button aria-label="Close marketplace menu" className="dh-market-close" type="button" onClick={onCloseMarket}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#close-diagonal-fe54a4da-ns")} />
                </svg>
              </button>
            </div>
            <a className="cb-official-store-link" href="https://cubebrush.co/store">
              <span className="cb-official-store-mark">
                <img alt="" width="24" height="24" src={asset("/sites/cubebrush/img/logo-mark-white-1065c7c23a516247b4dc0688-d7c8e97b.png")} />
              </span>
              <span className="cb-official-store-label">
                Cubebrush Store
              </span>
              <span className="cb-official-store-badge">
                Official
              </span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
              </svg>
            </a>
            <Link className="dh-market-feature" href="/theartgun/products/rwe03q/gunquin-the-virtual-art-mannequin">
              <img alt="" height="90" src={asset("/sites/cubebrush/img/497f1dfb0b-d4ee8fd9.jpg")} width="160" />
              <span className="dh-market-feature-copy">
                <span className="dh-market-kicker">
                  Drop of the day
                </span>
                <strong>
                  Gunquin the Virtual Art Mannequin
                </strong>
                <span className="dh-market-byline">
                  by TheArtGun
                </span>
              </span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
              </svg>
            </Link>
            <div className="dh-market-grid">
              <section className="dh-market-group" style={{"--market-tint": "#8b80e0"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    Tutorials
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Digital Art
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Game Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Traditional Art
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Film Production
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Architectural Visualization
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="dh-market-group" style={{"--market-tint": "#7bc178"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    3D Assets
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Mods
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Game ready
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Base Meshes
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      High Poly Models
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      3D Print Models
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Rigs
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      KitBash
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Architectural Visualization
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Animations
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Render Scenes
                    </Link>
                  </li>
                </ul>
                <Link className="dh-market-more" href="/marketplace">
                  All 3D Assets
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                  </svg>
                </Link>
              </section>
              <section className="dh-market-group" style={{"--market-tint": "#39b3e6"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    2D Assets
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Stock Photos
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Materials
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Textures
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Illustrations
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      2D Game Assets
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      HDRi
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="dh-market-group is-half" style={{"--market-tint": "#c74ad6"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    Audio
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Sounds
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Music
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="dh-market-group is-half" style={{"--market-tint": "#40b3de"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    Tools
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Software Brushes
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Scripts & Plugins
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="dh-market-group" style={{"--market-tint": "#f5a623"} as React.CSSProperties}>
                <h3>
                  <Link href="/marketplace">
                    Other
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                    </svg>
                  </Link>
                </h3>
                <ul>
                  <li>
                    <Link href="/marketplace">
                      Illustrations
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Uncategorized
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Commissions - 3D
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Comics
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Commissions - 2D
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Photoshop Actions
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Promotional Artwork
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace">
                      Lightroom Presets
                    </Link>
                  </li>
                </ul>
                <Link className="dh-market-more" href="/marketplace">
                  All Other
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                  </svg>
                </Link>
              </section>
            </div>
            <div className="dh-market-foot">
              <Link className="dh-market-browse" href="/marketplace">
                Browse all products
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                </svg>
              </Link>
              <Link className="dh-market-freebies" href="/#freebies">
                This week's freebies
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#arrow-right-906d0151-ns")} />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
        <a href="https://cubebrush.co/blog">
          Blog
        </a>
        <a href="https://cubebrush.co/open_store">
          Sell
        </a>
        <a href="https://cubebrush.co/become_partner">
          Earn
        </a>
      </nav>
      <form aria-label="Site search" className="dh-search" role="search" onSubmit={onSearch}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <use href={asset("/sites/cubebrush/icons.svg#search-6fa128b3-ns")} />
        </svg>
        <input aria-autocomplete="list" aria-controls="dh-search-suggestions" aria-expanded="false" aria-label="Search" autoComplete="off" name="q" placeholder="Search 180,803 assets, brushes, models, tutorials…" role="combobox" type="search" />
        <span aria-hidden="true" className="dh-kbd">
          ⌘ K
        </span>
        <div aria-label="Search suggestions" className="cb-suggest cb-dd-menu cb-suggest--chrome" hidden id="dh-search-suggestions" role="listbox" />
        <span aria-live="polite" className="cb-sr" data-none="No suggestions" data-one="1 suggestion" data-other={"{count} suggestions"} role="status" />
      </form>
      <span className="dh-spacer" />
      <div className="dh-actions">
        <button aria-label="Toggle light / dark mode" className="dh-iconbtn" type="button" onClick={onToggleTheme}>
          <span data-cb-theme-icon="">
            <svg viewBox="0 0 24 24" className="cb-theme-sun" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#cb-theme-sun-e6ffc355-ns")} />
            </svg>
            <svg viewBox="0 0 24 24" className="cb-theme-moon" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#cb-theme-moon-f62539a5-ns")} />
            </svg>
          </span>
        </button>
        {user ? (
          <>
            <Link className="dh-signin" data-cb-text="" href="/account">
              My account
            </Link>
            <Link aria-label="Open account" className="dh-avatar" href="/account">
              <svg viewBox="0 0 38 38" aria-hidden="true">
                <circle cx="19" cy="19" r="19" fill="#34b6ea" />
                <text x="19" y="24.5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{user.name.slice(0, 1).toUpperCase()}</text>
              </svg>
            </Link>
          </>
        ) : (
          <>
            <Link className="dh-signin" data-cb-text="" href="/users/sign_in">
              Sign in
            </Link>
            <Link className="dh-signup" data-cb-btn="" href="/users/sign_in">
              Create account
            </Link>
          </>
        )}
        <button aria-controls="account-drawer" aria-expanded={drawerOpen} aria-label="Open menu" className="dh-hamburger" type="button" onClick={onOpenDrawer}>
          <svg aria-hidden="true" viewBox="0 0 28 20">
            <line className="dh-hb-top" x1="2" x2="26" y1="4" y2="4" />
            <line x1="2" x2="26" y1="10" y2="10" />
            <line x1="2" x2="26" y1="16" y2="16" />
          </svg>
        </button>
      </div>
    </>
  );
}
