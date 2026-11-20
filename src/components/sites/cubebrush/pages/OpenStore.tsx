import Link from "next/link";
import { asset } from "@/lib/asset";

export function OpenStore() {
  return (
    <>
      <section className="os-hero">
        <div className="dc-program-copy">
          <div className="os-eyebrow">
            Open store · For creators
          </div>
          <h1 className="os-h1">
            Sell your work to a global community of creators.
          </h1>
          <p className="os-sub">
            {"Set up in minutes. Keep "}
            <strong>
              95%
            </strong>
            {" of every sale you make through your shareable store link."}
          </p>
          <Link className="os-cta os-cta-hero" href="/users/sign_in">
            Open store
          </Link>
          <p className="os-cta-foot">
            Free to open · No monthly fees
          </p>
        </div>
        <img alt="" aria-hidden="true" className="os-hero-art" src={asset("/sites/cubebrush/img/os-hero-art-bffca8b9b69cdbfdfa208d99b76f-09e5274f.svg")} />
      </section>
      <section aria-label="At a glance" className="os-proof">
        <div className="os-proof-cell">
          <div className="os-proof-num">
            180,803
          </div>
          <div className="os-proof-lbl">
            Products
          </div>
        </div>
        <div className="os-proof-cell">
          <div className="os-proof-num">
            1,673,926
          </div>
          <div className="os-proof-lbl">
            Members
          </div>
        </div>
        <div className="os-proof-cell">
          <div className="os-proof-num">
            12,466
          </div>
          <div className="os-proof-lbl">
            Stores
          </div>
        </div>
      </section>
      <section aria-label="Why Cubebrush" className="os-carousel-wrap">
        <div aria-label="Why Cubebrush" aria-roledescription="carousel" className="os-carousel" data-cb-os-carousel="">
          <div className="os-carousel-track" data-cb-os-track="">
            <div aria-hidden="false" className="os-slide">
              <div className="os-slide-eyebrow">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-91bd09d2-ns")} />
                </svg>
                <span>
                  Anything digital
                </span>
              </div>
              <h3 className="os-slide-title">
                Sell anything you make.
              </h3>
              <p className="os-slide-body">
                3D models, brushes, textures, sounds, tutorials. List it once, sell it forever.
              </p>
              <div className="os-vis">
                <img alt="" aria-hidden="true" className="os-vis-art" src={asset("/sites/cubebrush/img/os-slide-1-e652f830ab67d8cb037f90b8f531d-ea73652f.svg")} />
              </div>
            </div>
            <div aria-hidden="true" className="os-slide">
              <div className="os-slide-eyebrow">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-3cc8a269-ns")} />
                </svg>
                <span>
                  A storefront of your own
                </span>
              </div>
              <h3 className="os-slide-title">
                A page made for your work.
              </h3>
              <p className="os-slide-body">
                A clean, mobile-ready store page that puts your products front and center, not buried in a marketplace.
              </p>
              <div className="os-vis">
                <img alt="" aria-hidden="true" className="os-vis-art" src={asset("/sites/cubebrush/img/os-slide-2-b1522b18a5a1e4b645110124b1c38-9090095b.svg")} />
              </div>
            </div>
            <div aria-hidden="true" className="os-slide">
              <div className="os-slide-eyebrow">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-b1354de8-ns")} />
                </svg>
                <span>
                  Make it yours
                </span>
              </div>
              <h3 className="os-slide-title">
                Cover, avatar, bio, links.
              </h3>
              <p className="os-slide-body">
                Set a cover image, write a bio, and link your socials so visitors land somewhere that feels like you.
              </p>
              <div className="os-vis">
                <img alt="" aria-hidden="true" className="os-vis-art" src={asset("/sites/cubebrush/img/os-slide-3-86c6c05a5725aeba8e9660a666c09-422aa821.svg")} />
              </div>
            </div>
            <div aria-hidden="true" className="os-slide">
              <div className="os-slide-eyebrow">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-604c9518-ns")} />
                </svg>
                <span>
                  Marketing tools
                </span>
              </div>
              <h3 className="os-slide-title">
                Promotions that convert.
              </h3>
              <p className="os-slide-body">
                Coupons, sales, and email blasts are built in. No plugins.
              </p>
              <div className="os-vis">
                <img alt="" aria-hidden="true" className="os-vis-art" src={asset("/sites/cubebrush/img/os-slide-4-c0e1c204604bc847dfa8c72a6f3d2-add65d5d.svg")} />
              </div>
            </div>
            <div aria-hidden="true" className="os-slide">
              <div className="os-slide-eyebrow">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-6c18933c-ns")} />
                </svg>
                <span>
                  Community built-in
                </span>
              </div>
              <h3 className="os-slide-title">
                Talk directly with buyers.
              </h3>
              <p className="os-slide-body">
                Comments and private messages keep customers coming back.
              </p>
              <div className="os-vis">
                <img alt="" aria-hidden="true" className="os-vis-art" src={asset("/sites/cubebrush/img/os-slide-5-e70a64e446d50dea6ff400e8c70ed-fc37c934.svg")} />
              </div>
            </div>
          </div>
          <div className="os-carousel-dots" data-cb-os-dots="">
            <button aria-current="true" aria-label="Slide 1" className="os-dot is-active" data-index="0" type="button" />
            <button aria-current="false" aria-label="Slide 2" className="os-dot" data-index="1" type="button" />
            <button aria-current="false" aria-label="Slide 3" className="os-dot" data-index="2" type="button" />
            <button aria-current="false" aria-label="Slide 4" className="os-dot" data-index="3" type="button" />
            <button aria-current="false" aria-label="Slide 5" className="os-dot" data-index="4" type="button" />
          </div>
          <button aria-label="Previous benefit" className="dh-arrow prev" data-os-direction="-1" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-f86cacf9-ns")} />
            </svg>
          </button>
          <button aria-label="Next benefit" className="dh-arrow next" data-os-direction="1" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-44b64e37-ns")} />
            </svg>
          </button>
        </div>
      </section>
      <section aria-label="Payment methods" className="os-trust">
        <div className="os-trust-eyebrow">
          Never turn away a customer
        </div>
        <h2 className="os-trust-h">
          Cards, PayPal, and stablecoins.
          <br />
          All set up for you, day one.
        </h2>
        <div className="os-trust-marks">
          <span className="os-pm" style={{"color": "#1a1f71", "fontStyle": "italic"} as React.CSSProperties}>
            VISA
          </span>
          {" "}
          <span className="os-pm" style={{"color": "#003087"} as React.CSSProperties}>
            PayPal
          </span>
          {" "}
          <span className="os-pm" style={{"color": "#eb001b", "fontStyle": "normal", "letterSpacing": "0"} as React.CSSProperties}>
            mastercard
          </span>
          {" "}
          <span className="os-pm" style={{"color": "#006fcf"} as React.CSSProperties}>
            AMEX
          </span>
          {" "}
          <span className="os-pm" style={{"color": "#ff6000"} as React.CSSProperties}>
            DISCOVER
          </span>
          {" "}
          <span className="os-pm" style={{"color": "#0079be"} as React.CSSProperties}>
            DINERS
          </span>
        </div>
        <div className="os-trust-div">
          <span className="os-trust-line" />
          {" "}
          <span className="os-trust-mid">
            + Stablecoins
          </span>
          {" "}
          <span className="os-trust-line" />
        </div>
        <div className="os-trust-cryptos">
          <span className="os-coin">
            <i style={{"background": "#2775ca"} as React.CSSProperties}>
              $
            </i>
            <b>
              USDC
            </b>
          </span>
          {" "}
          <span className="os-coin">
            <i style={{"background": "#26a17b"} as React.CSSProperties}>
              $
            </i>
            <b>
              USDT
            </b>
          </span>
        </div>
      </section>
      <section className="os-value dc-revenue">
        <div className="dc-section-intro">
          <div className="os-eyebrow os-eyebrow-cta">
            How you get paid
          </div>
          <h3 className="os-value-h">
            Two rates. No hidden fees.
          </h3>
        </div>
        <div className="os-rev-grid">
          <div className="os-rev-row">
            <div className="os-rev-pct">
              95%
            </div>
            <div>
              <div className="os-rev-lede">
                When you bring the buyer.
              </div>
              <div className="os-rev-body">
                Share your store URL directly or post it on social. Every sale through your own link pays out 95%.
              </div>
            </div>
          </div>
          <div className="os-rev-row">
            <div className="os-rev-pct">
              70%
            </div>
            <div>
              <div className="os-rev-lede">
                When Cubebrush brings the buyer.
              </div>
              <div className="os-rev-body">
                Sales we drive through search, the marketplace, and discovery features pay out 70%.
              </div>
            </div>
          </div>
        </div>
        <p className="os-rev-foot">
          Every transaction also has a flat $0.50 processing fee.
        </p>
      </section>
      <div className="dc-seller-benefits">
        <section className="os-value">
          <div className="os-eyebrow os-eyebrow-cta">
            Big files welcome
          </div>
          <h3 className="os-value-h">
            Up to 16 GB per product.
          </h3>
          <p className="os-value-body">
            List source files, 4K texture packs, full project archives, without splitting them up. Drag a folder in to bulk-upload a whole catalog at once.
          </p>
        </section>
        <section className="os-value">
          <div className="os-eyebrow os-eyebrow-cta">
            Get paid often
          </div>
          <h3 className="os-value-h">
            Money out, fast.
          </h3>
          <p className="os-value-body">
            Payouts every two weeks once you clear $20. No invoices, no chasing. Funds land in PayPal automatically.
          </p>
        </section>
        <section className="os-value">
          <div className="os-eyebrow os-eyebrow-cta">
            Track everything
          </div>
          <h3 className="os-value-h">
            See what's working.
          </h3>
          <p className="os-value-body">
            A live dashboard shows your sales, views, and conversion, so you can see what's selling.
          </p>
          <div className="os-chart">
            <svg viewBox="0 0 320 64" preserveAspectRatio="none" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-421c6c2a")} />
            </svg>
          </div>
        </section>
      </div>
      <section className="os-cta-block">
        <Link className="os-cta" data-os-cta-secondary="" href="/users/sign_in">
          Open store
        </Link>
      </section>
      <section aria-label="Frequently asked questions" className="os-faq">
        <div className="os-faq-head">
          <div className="os-eyebrow">
            F.A.Q.
          </div>
          <a className="os-faq-all" href="https://support.cubebrush.co/hc/en-us">
            See all
          </a>
        </div>
        <details className="os-faq-row" open>
          <summary>
            How can I open a store on Cubebrush?
            <span aria-hidden="true" className="os-faq-chev">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-85465e52")} />
              </svg>
            </span>
          </summary>
          <div className="os-faq-body">
            Tap "Open store" on this page to request an invite. Links to products you already sell, or to a portfolio of relevant work, help your request.
          </div>
        </details>
        <details className="os-faq-row">
          <summary>
            How much does it cost?
            <span aria-hidden="true" className="os-faq-chev">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-85465e52")} />
              </svg>
            </span>
          </summary>
          <div className="os-faq-body">
            Opening a store is free, with no monthly fee and no listing fee. You earn 95% on sales through your own store link, and 70% on sales Cubebrush drives through search and discovery. Every transaction has a flat $0.50 processing fee.
          </div>
        </details>
        <details className="os-faq-row">
          <summary>
            How do I get paid?
            <span aria-hidden="true" className="os-faq-chev">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-85465e52")} />
              </svg>
            </span>
          </summary>
          <div className="os-faq-body">
            We pay out every two weeks via PayPal once your balance clears $20. Bank transfer is available in supported regions. Switch it on from your seller dashboard.
          </div>
        </details>
        <details className="os-faq-row">
          <summary>
            What can I sell?
            <span aria-hidden="true" className="os-faq-chev">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-85465e52")} />
              </svg>
            </span>
          </summary>
          <div className="os-faq-body">
            Anything digital you made yourself: 3D models, brushes, textures, sound effects, presets, tutorials, fonts, stock art, music. Physical products and resale of others' work aren't allowed.
          </div>
        </details>
        <details className="os-faq-row">
          <summary>
            Can I move my products if I leave?
            <span aria-hidden="true" className="os-faq-chev">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-85465e52")} />
              </svg>
            </span>
          </summary>
          <div className="os-faq-body">
            Always. Your files are yours, and you can download them any time, in bulk. We don't lock you in.
          </div>
        </details>
      </section>
      <div className="os-sticky-cta" data-cb-os-sticky="" hidden>
        <Link className="os-cta" href="/users/sign_in">
          Open store
        </Link>
      </div>
    </>
  );
}
