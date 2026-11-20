import Link from "next/link";
import { asset } from "@/lib/asset";

export function Privacy() {
  return (
    <>
      <section aria-labelledby="pp-title" className="pp-page">
        <div className="pp-eyebrow">
          Legal · Cubebrush, LLC
        </div>
        <h1 className="pp-h1" id="pp-title">
          Privacy Policy
        </h1>
        <p className="pp-lede">
          Cubebrush, LLC ("Cubebrush," "we," or "us") knows that you care how information about you is used and shared. This Privacy Policy explains what information we collect, how we use it, who we share it with, and how you can access, correct, or delete it.
        </p>
        <p className="pp-lede">
          {"This Policy is incorporated into our "}
          <Link href="/terms">
            Terms of Service
          </Link>
          ; capitalized terms not defined here have the meaning given to them in the Terms.
        </p>
        <div className="pp-revstamp">
          <span aria-hidden="true" className="dot" />
          <span>
            {"Last revised "}
            <b>
              September 7, 2026
            </b>
            {" · first published "}
            <b>
              May 1, 2015
            </b>
          </span>
        </div>
        <section aria-labelledby="pp-tldr-h" className="pp-tldr">
          <span className="pp-tldr-pill">
            In plain English
          </span>
          <div className="pp-tldr-title" id="pp-tldr-h">
            The short version
          </div>
          <div className="pp-tldr-sub">
            A summary of the key promises. The full text below is the binding document if there's ever a conflict.
          </div>
          <ul>
            <li className="pp-tldr-no">
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  We never sell your personal information.
                </b>
                {" Not to advertisers, not to brokers, not to anyone, and we never have."}
              </span>
            </li>
            <li className="pp-tldr-no">
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  We never use your work or your personal info to train AI.
                </b>
                {" Not our models, not third-party models, not open-source models."}
              </span>
            </li>
            <li className="pp-tldr-yes">
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Cookies are minimal.
                </b>
                {" Sign-in, cart, and security. Our analytics (Plausible) is cookieless."}
              </span>
            </li>
            <li className="pp-tldr-yes">
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You can access, correct, or delete your data any time
                </b>
                {" from Settings → Privacy, or by emailing "}
                <a href="mailto:info@cubebrush.co">
                  info@cubebrush.co
                </a>
                .
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-0a6f763a-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Payment processors
                </b>
                {" (Stripe, PayPal, Klarna, Afterpay, Coinbase Business) see only what they need to charge your card or wallet. We don't see your full card number."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-1c9b71ee-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  EU/UK users:
                </b>
                {" we transfer your data to the US under "}
                <b>
                  Standard Contractual Clauses
                </b>
                {" (EU) and the "}
                <b>
                  UK International Data Transfer Agreement
                </b>
                .
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg aria-hidden="true" viewBox="0 0 20 20">
                  <path d="M9.5 15c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 7c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z M17.5 18h-16c-0.827 0-1.5-0.673-1.5-1.5v-10c0-0.827 0.673-1.5 1.5-1.5h1.5c0.415 0 1.060-0.267 1.354-0.561l0.586-0.586c0.487-0.487 1.373-0.854 2.061-0.854h5c0.688 0 1.574 0.367 2.061 0.854l0.586 0.586c0.293 0.293 0.939 0.561 1.354 0.561h1.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM1.5 6c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-1.5c-0.688 0-1.574-0.367-2.061-0.854l-0.586-0.586c-0.293-0.293-0.939-0.561-1.354-0.561h-5c-0.415 0-1.060 0.267-1.354 0.561l-0.586 0.586c-0.487 0.487-1.372 0.854-2.061 0.854h-1.5z" />
                </svg>
              </span>
              <span>
                <b>
                  We don't text you.
                </b>
                {" Cubebrush does not currently run any SMS marketing or transactional program; if that changes, we'll update this Policy and ask you to opt in."}
              </span>
            </li>
            <li className="pp-tldr-no">
              <span aria-hidden="true" className="pp-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  No cross-site advertising tracking.
                </b>
                {" We personalize your experience within Cubebrush. We do not use advertising pixels or track you across other websites for advertising."}
              </span>
            </li>
          </ul>
          <div className="pp-tldr-foot">
            {"Privacy requests: "}
            <a href="mailto:info@cubebrush.co">
              info@cubebrush.co
            </a>
            {" · general questions: "}
            <a href="mailto:hello@cubebrush.co">
              hello@cubebrush.co
            </a>
          </div>
        </section>
        <a className="pp-contact" href="mailto:info@cubebrush.co">
          <span aria-hidden="true" className="pp-contact-icon">
            <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-614e3188-ns")} />
            </svg>
          </span>
          <div>
            <div className="pp-contact-lbl">
              Privacy requests
            </div>
            <div className="pp-contact-mail">
              info@cubebrush.co
            </div>
          </div>
          <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#pp-contact-chev-c3f1fda7-ns")} />
          </svg>
        </a>
        <div className="pp-jump">
          <button aria-controls="pp-toc" aria-expanded="false" aria-haspopup="dialog" className="pp-jump-btn" type="button">
            <span className="pp-jump-btn-lbl">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-21ac43b3-ns")} />
              </svg>
              <span>
                01 · What we collect
              </span>
            </span>
            <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-dd98d7fe-ns")} />
            </svg>
          </button>
        </div>
        <div aria-label="Jump to section" aria-modal="true" className="pp-toc-host" id="pp-toc" inert role="dialog">
          <div className="pp-toc-scrim" />
          <div className="pp-toc-sheet">
            <div aria-hidden="true" className="pp-toc-handle">
              <span />
            </div>
            <div className="pp-toc-head">
              <div>
                <div className="pp-toc-eyebrow">
                  Contents
                </div>
                <h2>
                  Jump to section
                </h2>
              </div>
              <button aria-label="Close" className="pp-toc-close" type="button">
                <svg viewBox="0 0 24 24" height="20" width="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </button>
            </div>
            <nav aria-label="Sections of this page" className="pp-toc-nav">
              <a data-section="collect" href="#collect">
                <span className="pp-toc-num">
                  01
                </span>
                <span className="pp-toc-lbl">
                  What we collect
                </span>
              </a>
              <a data-section="how-we-collect" href="#how-we-collect">
                <span className="pp-toc-num">
                  02
                </span>
                <span className="pp-toc-lbl">
                  How we collect it
                </span>
              </a>
              <a data-section="how-we-use" href="#how-we-use">
                <span className="pp-toc-num">
                  03
                </span>
                <span className="pp-toc-lbl">
                  How we use it
                </span>
              </a>
              <a data-section="ai" href="#ai">
                <span className="pp-toc-num">
                  04
                </span>
                <span className="pp-toc-lbl">
                  AI & Machine Learning
                </span>
              </a>
              <a data-section="share" href="#share">
                <span className="pp-toc-num">
                  05
                </span>
                <span className="pp-toc-lbl">
                  Who we share it with
                </span>
              </a>
              <a data-section="transfers" href="#transfers">
                <span className="pp-toc-num">
                  06
                </span>
                <span className="pp-toc-lbl">
                  International data transfers
                </span>
              </a>
              <a data-section="cookies" href="#cookies">
                <span className="pp-toc-num">
                  07
                </span>
                <span className="pp-toc-lbl">
                  Cookies & similar technologies
                </span>
              </a>
              <a data-section="tracking" href="#tracking">
                <span className="pp-toc-num">
                  08
                </span>
                <span className="pp-toc-lbl">
                  Tracking & cross-site behavior
                </span>
              </a>
              <a data-section="rights" href="#rights">
                <span className="pp-toc-num">
                  09
                </span>
                <span className="pp-toc-lbl">
                  Your privacy rights
                </span>
              </a>
              <a data-section="children" href="#children">
                <span className="pp-toc-num">
                  10
                </span>
                <span className="pp-toc-lbl">
                  Children's privacy
                </span>
              </a>
              <a data-section="security" href="#security">
                <span className="pp-toc-num">
                  11
                </span>
                <span className="pp-toc-lbl">
                  Security
                </span>
              </a>
              <a data-section="retention" href="#retention">
                <span className="pp-toc-num">
                  12
                </span>
                <span className="pp-toc-lbl">
                  How long we keep it
                </span>
              </a>
              <a data-section="changes" href="#changes">
                <span className="pp-toc-num">
                  13
                </span>
                <span className="pp-toc-lbl">
                  Changes to this Policy
                </span>
              </a>
              <a data-section="contact" href="#contact">
                <span className="pp-toc-num">
                  14
                </span>
                <span className="pp-toc-lbl">
                  Contact
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="pp-body">
          <article className="pp-section" id="collect">
            <header className="pp-section-head">
              <span className="pp-section-num">
                01
              </span>
              <h2 className="pp-section-h">
                What we collect
              </h2>
            </header>
            <p>
              The categories of personal information we collect, organized by the categories defined under the California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA). For each category we list the typical examples, where we get it, and what we use it for. We do not collect any category not listed here.
            </p>
            <div className="pp-cats">
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    A
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Identifiers
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    Username, display name, email address, IP address, device identifiers, account ID.
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    You provide them at signup; IP/device collected automatically when you use the Service.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Account creation and sign-in; security and fraud prevention; sending Service-related notices.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    B
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Customer records
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    {"Display name; profile photo; for Sellers receiving payouts: business name and tax ID (W-9 / W-8BEN). We "}
                    <b>
                      do not
                    </b>
                    {" store full credit-card numbers; payment processors handle the card data and pass us only tokenized references and the last 4 digits."}
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    You; for tax forms, you upload them to Stripe directly.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Operating your account; processing payouts; legal reporting (e.g. 1099-K).
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    C
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Commercial information
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    Purchase history; items you've listed, wishlisted, or favorited; bundle and discount activity; refunds.
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    Generated as you use the Service.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Delivering Goods you bought; running your Library and Wishlists; surfacing recommendations on your account; financial reporting.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    D
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Internet / network activity
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    Pages requested, referring URLs, browser and OS, and aggregate usage information. Where permitted, on-site searches and product interactions also inform personalized discovery. Account-linked activity is kept separate from aggregate Plausible analytics.
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    Automated as you browse.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Debugging, security, capacity planning and improving discovery. Permitted first-party activity can inform recommendations; Plausible is used for aggregate measurement, not individual account profiles.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    E
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Coarse geolocation
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    Country and approximate region, inferred from IP address.
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    Automated.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Tax/VAT calculation; currency display; sanctions screening (so we don't serve embargoed regions).
                  </dd>
                </dl>
                <p style={{"paddingLeft": "0", "margin": "8px 0 0", "font": "400 12px/18px var(--cb-font-regular)", "color": "var(--cb-muted)"} as React.CSSProperties}>
                  {"We do "}
                  <b>
                    not
                  </b>
                  {" collect precise GPS-level geolocation."}
                </p>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    F
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Audio / visual
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    Profile photos; product covers; uploaded item files (3D models, brushes, textures, videos, audio, documents). This is your "User Content" under the Terms; you retain ownership.
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    You.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Displaying your listings and profile; delivering purchased files to buyers.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    G
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Professional / employment
                  </span>
                </div>
                <dl>
                  <dt>
                    Examples
                  </dt>
                  <dd>
                    For Sellers only: payout account name; tax-form identifiers; business address (if you operate as a business).
                  </dd>
                  <dt>
                    Source
                  </dt>
                  <dd>
                    You, when you connect a PayPal account (or bank account, for wire transfers where PayPal is unavailable) for payouts and (where applicable) submit a tax form.
                  </dd>
                  <dt>
                    Used for
                  </dt>
                  <dd>
                    Routing payouts via PayPal or bank wire; tax reporting; sanctions screening.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    H
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Inferences
                  </span>
                  {" "}
                  <span className="pp-cat-tag">
                    Personalization
                  </span>
                </div>
                <dl>
                  <dt>
                    Note
                  </dt>
                  <dd>
                    We infer product interests and preferences from your activity within Cubebrush, such as purchases, wishlists, follows and interests you provide, and from browsing or search activity where permitted. We use these inferences to personalize recommendations and discovery within Cubebrush, not to build cross-site advertising profiles. We do not infer sensitive characteristics such as health, religion or political views for recommendations. See §03 for the legal basis and §07 for consent and storage rules.
                  </dd>
                </dl>
              </div>
              <div className="pp-cat">
                <div className="pp-cat-h">
                  <span aria-hidden="true" className="pp-cat-letter">
                    I
                  </span>
                  {" "}
                  <span className="pp-cat-title">
                    Sensitive personal information
                  </span>
                  {" "}
                  <span className="pp-cat-tag pp-cat-tag--no">
                    Not collected
                  </span>
                </div>
                <dl>
                  <dt>
                    Note
                  </dt>
                  <dd>
                    We do not collect government-issued ID numbers (Social Security, driver's license, passport), precise geolocation, race or ethnicity, religious or philosophical beliefs, union membership, genetic data, biometric data, health data, sex life or sexual orientation, or the contents of mail, email, or text messages where Cubebrush is not the intended recipient. Tax-form identifiers required for Stripe payouts are collected by Stripe, not by us.
                  </dd>
                </dl>
              </div>
            </div>
          </article>
          <article className="pp-section" id="how-we-collect">
            <header className="pp-section-head">
              <span className="pp-section-num">
                02
              </span>
              <h2 className="pp-section-h">
                How we collect it
              </h2>
            </header>
            <p className="pp-lead">
              We collect personal information in three ways:
            </p>
            <ul className="pp-list">
              <li>
                <b>
                  Directly from you
                </b>
                {" when you create an account, edit your profile, list a product, place an order, message another user, file a support ticket, or sign up for our email list."}
              </li>
              <li>
                <b>
                  Automatically
                </b>
                {" when you use the Service: server logs (IP, browser, requested URL, timestamp), aggregated Plausible analytics, and the cookies described in §07 below."}
              </li>
              <li>
                <b>
                  From a small set of third parties
                </b>
                , only as needed to run the Service:
                <ul className="pp-list" style={{"marginTop": "8px", "paddingLeft": "18px"} as React.CSSProperties}>
                  <li>
                    <b>
                      Payment processors
                    </b>
                    {" (Stripe, PayPal, Klarna, Afterpay, Coinbase Business) confirm whether your payment succeeded and pass us transaction metadata. They handle your card or wallet directly; we do not see the full numbers."}
                  </li>
                  <li>
                    <b>
                      Sign-in providers
                    </b>
                    {" (Google, Facebook), only if you choose to sign in with one of them. We receive your name and email; nothing more is requested."}
                  </li>
                  <li>
                    <b>
                      Cloud-storage delivery providers
                    </b>
                    {" (Dropbox, Google Drive), only if you connect them to deliver purchased Goods to your own cloud storage. Cubebrush receives a scoped, revocable access token; we use it only to write the files you bought and do not read or retain anything else from your storage. You can revoke the token at any time from the third party's settings."}
                  </li>
                  <li>
                    <b>
                      Rights holders
                    </b>
                    {" may submit information about you in the course of a DMCA notice or platform-policy report. This is processed under §10 (Your rights) and the Terms §18."}
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="pp-section" id="how-we-use">
            <header className="pp-section-head">
              <span className="pp-section-num">
                03
              </span>
              <h2 className="pp-section-h">
                How we use it (and the legal basis)
              </h2>
            </header>
            <p>
              Under EU/UK GDPR, every use of personal data must have a lawful basis. For each purpose below, we name the basis we rely on. Categories of personal information are referenced by letter from §01.
            </p>
            <p className="pp-lead">
              Performance of a contract (GDPR Art. 6(1)(b)):
            </p>
            <ul className="pp-list">
              <li>
                {"Creating and operating your account; signing you in. "}
                <i>
                  (A, B)
                </i>
              </li>
              <li>
                {"Processing your purchases and payouts; delivering purchased files. "}
                <i>
                  (B, C, G)
                </i>
              </li>
              <li>
                {"Running messaging, comments, wishlists, library, and the resolution process between Buyers and Sellers. "}
                <i>
                  (A, C, F)
                </i>
              </li>
              <li>
                {"Sending Service-related notices (receipts, payout confirmations, security alerts, policy changes). "}
                <i>
                  (A)
                </i>
              </li>
            </ul>
            <p className="pp-lead">
              Legitimate interests (GDPR Art. 6(1)(f)):
            </p>
            <ul className="pp-list">
              <li>
                {"Security, fraud detection, abuse prevention, and rate limiting. "}
                <i>
                  (A, D, E)
                </i>
              </li>
              <li>
                {"Aggregate, non-identifying analytics for capacity planning, debugging, and product improvement. We use "}
                <b>
                  Plausible Analytics
                </b>
                {"; see §07. "}
                <i>
                  (D)
                </i>
              </li>
              <li>
                {"Tax, accounting, and financial reporting (e.g. issuing 1099s). "}
                <i>
                  (B, C, G)
                </i>
              </li>
              <li>
                {"Defending or enforcing our rights, responding to legal requests, and managing risk. "}
                <i>
                  (any)
                </i>
              </li>
            </ul>
            <p className="pp-lead">
              Compliance with a legal obligation (GDPR Art. 6(1)(c)):
            </p>
            <ul className="pp-list">
              <li>
                {"Tax filing and record retention (US, plus your local rules where applicable). "}
                <i>
                  (B, C, G)
                </i>
              </li>
              <li>
                {"Sanctions screening. We do not transact with persons or regions on OFAC or equivalent restricted-party lists. "}
                <i>
                  (A, E, G)
                </i>
              </li>
              <li>
                {"Responding to valid subpoenas, court orders, regulator requests, and DMCA / EU DSA notices. "}
                <i>
                  (any)
                </i>
              </li>
              <li>
                {"Honoring data-rights requests under GDPR, CCPA/CPRA, and equivalent laws. "}
                <i>
                  (any)
                </i>
              </li>
            </ul>
            <p className="pp-lead">
              Consent (GDPR Art. 6(1)(a)), only when you've explicitly opted in:
            </p>
            <ul className="pp-list">
              <li>
                {"Marketing emails about new features, drops, and promotions. You can opt out at any time from Settings → Notifications or via the unsubscribe link in every marketing email. "}
                <i>
                  (A)
                </i>
              </li>
              <li>
                Any future SMS program. We do not currently run one; if we ever do, we will obtain separate, specific opt-in consent before sending you any text.
              </li>
            </ul>
            <p>
              <b>
                Personalized discovery.
              </b>
              {" We use first-party account activity and inferred product interests to help you find relevant products. Where the law permits, we rely on our legitimate interest in providing useful recommendations after considering your rights and expectations. Where consent is required for tracking or the resulting profiling, we obtain it before that processing begins. You may withdraw consent or object to processing based on legitimate interests by contacting us using the details in §14. Refusing optional personalization does not prevent you from browsing or buying. "}
              <i>
                (A, C, D, H)
              </i>
            </p>
          </article>
          <article className="pp-section" id="ai">
            <header className="pp-section-head">
              <span className="pp-section-num">
                04
              </span>
              <h2 className="pp-section-h">
                AI & Machine Learning
              </h2>
            </header>
            <p className="pp-promise">
              <b>
                We do not use your personal information, or your User Content, to train AI.
              </b>
              {" We have never used any of it as training, fine-tuning, or evaluation data for any artificial-intelligence or machine-learning model, ours, a third party's, or an open-source model, and we will not do so."}
            </p>
            <p>
              We do not sell, license, or otherwise transfer your data to any third party for AI/ML training purposes, and we do not enter into bulk data-licensing arrangements that would expose your data to AI training.
            </p>
            <p>
              <b>
                AI-assisted features.
              </b>
              {" We may use AI to help with search and product recommendations, listing organization, seller-requested descriptions or translations, support triage, and abuse review. These features process limited information for a specific task; they do not authorize training on your work. Sellers review assisted listing text before publication. We do not use these tools to generate the artwork sold in the public marketplace."}
            </p>
            <p>
              We limit inputs to the information needed for the feature, such as product metadata, a question submitted to support, or material you select for assistance. We do not send payment credentials, tax documents or complete purchased asset archives to general-purpose AI services. Before a feature sends information to an AI provider, we identify the relevant provider and processing purpose and provide any required notice or choice. Provider contracts and settings must prohibit using that information for model training; retention and international transfers are covered by our provider disclosures.
            </p>
            <p>
              {"See "}
              <Link href="/terms#ai">
                Terms §09
              </Link>
              {" for the distinction between operational assistance and the public marketplace content policy."}
            </p>
          </article>
          <article className="pp-section" id="share">
            <header className="pp-section-head">
              <span className="pp-section-num">
                05
              </span>
              <h2 className="pp-section-h">
                Who we share it with
              </h2>
            </header>
            <p className="pp-promise">
              <b>
                We do not sell, rent, or share your personal information for monetization or for cross-context behavioral advertising.
              </b>
              {" We have never done so."}
            </p>
            <p>
              The only third parties who see your personal information are the service providers we use to run the Service - sometimes called "sub-processors." Each is contractually bound to use your data only for the purpose listed, and only on our instructions.
            </p>
            <div aria-label="Sub-processors" className="pp-procs" role="table">
              <div className="pp-proc-row" role="row">
                <div role="columnheader">
                  Provider
                </div>
                <div role="columnheader">
                  Purpose
                </div>
                <div role="columnheader">
                  Where
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://stripe.com/privacy" rel="noopener">
                    Stripe
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Card processing for Buyer payments at checkout.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.paypal.com/us/legalhub/privacy-full" rel="noopener">
                    PayPal
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  {"PayPal-account processing for Buyers at checkout, "}
                  <b>
                    and payouts to Sellers and Partners
                  </b>
                  {" (bank wire is offered where PayPal isn't supported in the recipient's region)."}
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.klarna.com/us/legal/privacy/" rel="noopener">
                    Klarna
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Buy-now-pay-later (BNPL) installments on eligible orders.
                </div>
                <div className="pp-proc-loc" role="cell">
                  Sweden / United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.afterpay.com/en-US/privacy-policy" rel="noopener">
                    Afterpay
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Buy-now-pay-later (BNPL) installments on eligible orders.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.coinbase.com/legal/privacy" rel="noopener">
                    Coinbase Business
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Cryptocurrency processing (USDC, USDT) for Buyers paying with crypto.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://plausible.io/data-policy" rel="noopener">
                    Plausible Analytics
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Cookieless, aggregate web analytics. No persistent visitor profiles; see §07 for request-data processing.
                </div>
                <div className="pp-proc-loc" role="cell">
                  Germany (EU)
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener">
                    Cloudflare
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  CDN, DDoS protection, bot detection, edge security.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://policies.google.com/privacy" rel="noopener">
                    Google
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Optional sign-in (OAuth). Optional Google Drive connection to deliver your purchases to your own Drive.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.facebook.com/privacy/policy/" rel="noopener">
                    Meta (Facebook)
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Optional sign-in (OAuth). We do not run a Meta Pixel or any other Meta advertising tag.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  <a href="https://www.dropbox.com/privacy" rel="noopener">
                    Dropbox
                  </a>
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Optional Dropbox connection to deliver your purchases to your own Dropbox. Scope-limited; revocable at any time.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States
                </div>
              </div>
              <div className="pp-proc-row" role="row">
                <div className="pp-proc-name" role="cell">
                  Hosting / transactional email
                </div>
                <div className="pp-proc-purpose" role="cell">
                  Underlying cloud hosting and transactional-email delivery (receipts, password resets, payout notices). These providers process data on our instructions; we update this list when we change a vendor.
                </div>
                <div className="pp-proc-loc" role="cell">
                  United States / EU
                </div>
              </div>
            </div>
            <p className="pp-lead">
              We may also disclose personal information to:
            </p>
            <ul className="pp-list">
              <li>
                <b>
                  Our professional advisers
                </b>
                {" (lawyers, accountants, auditors) under confidentiality, where necessary for managing the company."}
              </li>
              <li>
                <b>
                  Regulators and government authorities
                </b>
                , in response to lawful requests (subpoenas, court orders, regulator inquiries, DMCA notices, EU DSA notices). We review every request for validity and scope; we push back on overbroad demands.
              </li>
              <li>
                <b>
                  A purchaser or prospective purchaser of all or part of our business
                </b>
                , under confidentiality, if Cubebrush is sold or merged. We will notify users in advance of any such transfer of their data.
              </li>
              <li>
                <b>
                  The other party to a dispute
                </b>
                , where we are required to do so to enforce or defend our rights or yours, for example, sharing a Buyer's order details with a Seller during a refund dispute.
              </li>
            </ul>
          </article>
          <article className="pp-section" id="transfers">
            <header className="pp-section-head">
              <span className="pp-section-num">
                06
              </span>
              <h2 className="pp-section-h">
                International data transfers
              </h2>
            </header>
            <p>
              Cubebrush is established in the United States and our primary data processing happens here. When you use the Service from outside the US, your personal information will be transferred to and processed in the US, which may not have the same data-protection laws as your jurisdiction.
            </p>
            <p>
              {"For users in the European Economic Area, Switzerland, and Liechtenstein, we transfer personal information out of the EEA under the European Commission's "}
              <b>
                Standard Contractual Clauses (SCCs)
              </b>
              {" (Decision 2021/914), supplemented where necessary by technical and organizational safeguards."}
            </p>
            <p>
              {"For users in the United Kingdom, we use the UK "}
              <b>
                International Data Transfer Agreement (IDTA)
              </b>
              {" or the UK Addendum to the SCCs, as appropriate."}
            </p>
            <p>
              {"You may request a copy of the safeguards in place for your transfers by emailing "}
              <a href="mailto:info@cubebrush.co">
                info@cubebrush.co
              </a>
              .
            </p>
          </article>
          <article className="pp-section" id="cookies">
            <header className="pp-section-head">
              <span className="pp-section-num">
                07
              </span>
              <h2 className="pp-section-h">
                Cookies & similar technologies
              </h2>
            </header>
            <p>
              {"Our full cookies disclosure lives in "}
              <Link href="/terms#cookies">
                Terms §16
              </Link>
              {" and is summarized here. In short: we use a deliberately small set of cookies, and our analytics provider does not use cookies at all."}
            </p>
            <p className="pp-lead">
              Cubebrush uses cookies for:
            </p>
            <ul className="pp-list">
              <li>
                <b>
                  Authentication
                </b>
                {": keeping you signed in. "}
                <i>
                  First-party; limited to the requested function.
                </i>
              </li>
              <li>
                <b>
                  Functionality
                </b>
                {": remembering your cart, wishlist, theme, language. "}
                <i>
                  First-party; limited to the requested function.
                </i>
              </li>
              <li>
                <b>
                  Security
                </b>
                {": CSRF tokens; bot detection via Cloudflare. "}
                <i>
                  Limited to security and abuse prevention.
                </i>
              </li>
              <li>
                <b>
                  Payment
                </b>
                {": Stripe, PayPal, Klarna, Afterpay, and Coinbase Business each set the cookies required to run their checkout flow when you choose them. "}
                <i>
                  Third-party; set only when you actually use that payment method.
                </i>
              </li>
            </ul>
            <p>
              {"For analytics we use "}
              <b>
                Plausible
              </b>
              {" for aggregate measurement without cookies or persistent visitor profiles. Request information such as IP address and browser information is processed to produce aggregate statistics; Plausible does not retain raw IP addresses or user-agent strings. We do not send account identifiers or personal profile data to Plausible. Plausible's full data-collection practices are published at "}
              <a href="https://plausible.io/data-policy" rel="noopener">
                plausible.io/data-policy
              </a>
              .
            </p>
            <p className="pp-lead">
              {"We do "}
              <em>
                not
              </em>
              {" use:"}
            </p>
            <ul className="pp-list">
              <li>
                Google Analytics, the Meta Pixel, the TikTok pixel, or any other advertising or retargeting tag.
              </li>
              <li>
                Session-recording or screen-replay tools.
              </li>
              <li>
                Cross-site behavioral profiling, identity-graph, or data-broker cookies.
              </li>
              <li>
                Cookies that sell, rent, or share your personal information.
              </li>
            </ul>
            <p>
              <b>
                Attribution and optional features.
              </b>
              {" Partner referrals use a 30-day attribution cookie as described in the "}
              <Link href="/partner-agreement#compensation">
                Partner Agreement
              </Link>
              , subject to applicable consent requirements. Other optional features may involve personalization, embedded media or third-party storage. We explain the purpose and obtain consent before any storage, access or related processing that requires it. A first-party cookie, local storage or a server-side implementation is not automatically exempt. Declining optional processing keeps core browsing and purchasing available.
            </p>
          </article>
          <article className="pp-section" id="tracking">
            <header className="pp-section-head">
              <span className="pp-section-num">
                08
              </span>
              <h2 className="pp-section-h">
                Tracking & cross-site behavior
              </h2>
            </header>
            <p>
              <b>
                We do not track you across the web.
              </b>
              {" Cubebrush does not deploy cross-site tracking pixels or trackers, and we do not authorize the collection of personally identifiable information from our visitors for third-party advertising use."}
            </p>
            <p>
              <b>
                Browser privacy signals.
              </b>
              {" Global Privacy Control (GPC) and Do Not Track (DNT) are different signals. We honor applicable legally recognized opt-out signals, including GPC where required. We do not sell personal information or use it for cross-context behavioral advertising. Optional first-party personalization and its controls are described in §03 and §07; the absence of advertising trackers does not remove applicable privacy rights."}
            </p>
            <p>
              This section serves as the disclosure required by the California Online Privacy Protection Act (CalOPPA).
            </p>
          </article>
          <article className="pp-section" id="rights">
            <header className="pp-section-head">
              <span className="pp-section-num">
                09
              </span>
              <h2 className="pp-section-h">
                Your privacy rights
              </h2>
            </header>
            <p>
              {"Depending on where you live, you have legal rights with respect to your personal information under the EU and UK "}
              <b>
                General Data Protection Regulation (GDPR / UK GDPR)
              </b>
              {" and the "}
              <b>
                California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA)
              </b>
              {". Other US state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA) do not currently apply to Cubebrush at our volume. Regardless of statutory applicability, Cubebrush extends every right listed below to "}
              <b>
                all Users worldwide
              </b>
              {" as a matter of policy."}
            </p>
            <p className="pp-lead">
              You have the right to:
            </p>
            <ul className="pp-list">
              <li>
                <b>
                  Be informed
                </b>
                {" about how we collect and use your personal information, which is what this Policy is for."}
              </li>
              <li>
                <b>
                  Access
                </b>
                {" the personal information we hold about you and receive a copy in a structured, portable format."}
              </li>
              <li>
                <b>
                  Correct
                </b>
                {" personal information that is inaccurate or incomplete."}
              </li>
              <li>
                <b>
                  Delete
                </b>
                {" your account and the personal information associated with it, subject to limited legal or operational retention obligations (see §12)."}
              </li>
              <li>
                <b>
                  Restrict
                </b>
                {" or "}
                <b>
                  object
                </b>
                {" to certain processing of your personal information, for example, processing we base on legitimate interest."}
              </li>
              <li>
                <b>
                  Withdraw consent
                </b>
                {" at any time where we rely on consent (marketing emails; any future SMS program). Withdrawing does not affect the lawfulness of processing done before the withdrawal."}
              </li>
              <li>
                <b>
                  Opt out of the sale or sharing
                </b>
                {" of your personal information. As stated throughout, we do not sell or share for cross-context behavioral advertising, so this right is preserved by default."}
              </li>
              <li>
                <b>
                  Not be discriminated against
                </b>
                {" for exercising any of these rights."}
              </li>
              <li>
                <b>
                  Lodge a complaint
                </b>
                {" with your local data-protection authority. In the EU, that's the supervisory authority of your country of residence, place of work, or place of the alleged infringement. In the UK, the Information Commissioner's Office (ICO). In California, the California Privacy Protection Agency (CPPA) or the Attorney General."}
              </li>
            </ul>
            <p className="pp-lead">
              How to exercise these rights:
            </p>
            <ul className="pp-list">
              <li>
                {"Most rights can be exercised "}
                <b>
                  self-serve from Settings → Privacy
                </b>
                : access, download, delete account, opt out of marketing, etc.
              </li>
              <li>
                {"For everything else, or if a self-serve action fails, email "}
                <a href="mailto:info@cubebrush.co">
                  info@cubebrush.co
                </a>
                {". We will verify your identity (so we don't hand your data to someone else pretending to be you) and respond within "}
                <b>
                  30 days
                </b>
                {" for GDPR / UK GDPR requests and "}
                <b>
                  45 days
                </b>
                {" for CCPA/CPRA requests. Either window may be extended by up to "}
                <b>
                  2 additional months / 45 days
                </b>
                {" for complex or voluminous requests; we'll tell you within the original window if we need the extension."}
              </li>
              <li>
                You may authorize an agent to make a request on your behalf. We will require proof of the agent's authorization and may contact you to verify.
              </li>
              <li>
                {"Exercising any of these rights is "}
                <b>
                  free
                </b>
                .
              </li>
            </ul>
          </article>
          <article className="pp-section" id="children">
            <header className="pp-section-head">
              <span className="pp-section-num">
                10
              </span>
              <h2 className="pp-section-h">
                Children's privacy
              </h2>
            </header>
            <p>
              {"The Service is not directed to children. The minimum age to use Cubebrush is "}
              <b>
                13
              </b>
              {", or such higher minimum age as is required by your local jurisdiction, for example, "}
              <b>
                16
              </b>
              {" in much of the European Union under GDPR Article 8, or the corresponding age set by your EU Member State or the United Kingdom. We do not knowingly collect personal information from children under the applicable minimum age."}
            </p>
            <p>
              {"If you are under the applicable minimum age, please do not send any information about yourself to us. If you believe a child has provided us personal information, contact "}
              <a href="mailto:info@cubebrush.co">
                info@cubebrush.co
              </a>
              {" and we will delete it promptly."}
            </p>
          </article>
          <article className="pp-section" id="security">
            <header className="pp-section-head">
              <span className="pp-section-num">
                11
              </span>
              <h2 className="pp-section-h">
                Security
              </h2>
            </header>
            <p>
              {"We use industry-standard safeguards to protect your personal information: encryption in transit (TLS) and at rest; scoped access controls; logging and review of administrative access; regular security review; and the option of "}
              <b>
                two-factor authentication and passkeys
              </b>
              {" for every account. We strongly recommend enabling 2FA on your account."}
            </p>
            <p>
              No system is perfectly secure. If we become aware of a security incident affecting your personal information, we will notify you and, where applicable, the relevant regulators in accordance with applicable law (GDPR Art. 33–34, and US state breach-notification statutes).
            </p>
          </article>
          <article className="pp-section" id="retention">
            <header className="pp-section-head">
              <span className="pp-section-num">
                12
              </span>
              <h2 className="pp-section-h">
                How long we keep it
              </h2>
            </header>
            <p>
              We retain personal information for as long as needed to provide the Service, and afterwards only to the extent required for the specific legal, accounting, or operational reasons listed below. We do not retain data indefinitely "just in case."
            </p>
            <div aria-label="Retention periods" className="pp-retention" role="table">
              <div className="pp-retention-row" role="row">
                <div role="columnheader">
                  Data
                </div>
                <div role="columnheader">
                  Retained for
                </div>
                <div role="columnheader">
                  Why
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Account data (profile, settings, content)
                </div>
                <div className="pp-retention-how-long" role="cell">
                  Until you delete it
                </div>
                <div className="pp-retention-why" role="cell">
                  When you delete your account, all of it is wiped immediately and permanently. We do not maintain backups that could restore it.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Transaction records (orders, payouts, invoices)
                </div>
                <div className="pp-retention-how-long" role="cell">
                  7 years
                </div>
                <div className="pp-retention-why" role="cell">
                  US tax law and Stripe's records-retention requirements for marketplace operators.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Tax forms (W-9 / W-8BEN)
                </div>
                <div className="pp-retention-how-long" role="cell">
                  7 years post final filing
                </div>
                <div className="pp-retention-why" role="cell">
                  IRS requirement (26 CFR §31.6001-1).
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Support tickets & messages
                </div>
                <div className="pp-retention-how-long" role="cell">
                  24 months
                </div>
                <div className="pp-retention-why" role="cell">
                  Operational continuity for repeat issues and abuse-pattern detection.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Server logs (incl. IP, requested URL)
                </div>
                <div className="pp-retention-how-long" role="cell">
                  90 days
                </div>
                <div className="pp-retention-why" role="cell">
                  Debugging, security incident review, abuse investigation.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Plausible aggregate analytics
                </div>
                <div className="pp-retention-how-long" role="cell">
                  Indefinite (aggregate)
                </div>
                <div className="pp-retention-why" role="cell">
                  Not tied to any individual; no PII to retain.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Marketing-consent records
                </div>
                <div className="pp-retention-how-long" role="cell">
                  Life of consent + 3 years
                </div>
                <div className="pp-retention-why" role="cell">
                  Proof of opt-in / opt-out under GDPR / CAN-SPAM.
                </div>
              </div>
              <div className="pp-retention-row" role="row">
                <div className="pp-retention-what" role="cell">
                  Fraud / abuse / takedown records
                </div>
                <div className="pp-retention-how-long" role="cell">
                  Up to 5 years
                </div>
                <div className="pp-retention-why" role="cell">
                  Detecting repeat offenders and DMCA repeat-infringers; defending claims.
                </div>
              </div>
            </div>
            <p>
              {"When the applicable retention period ends, we delete or irreversibly anonymize the data. Account deletion is "}
              <b>
                immediate and irreversible
              </b>
              : we do not maintain rolling backups, snapshots, or any other mechanism that could restore an account after you confirm deletion. The only records that survive are those listed above with longer mandatory retention (transactions, tax forms, fraud history); those live in a separate financial ledger keyed by order number, not by your account profile. If you later need a copy of a specific purchase, contact us with the order number and we can usually retrieve it.
            </p>
          </article>
          <article className="pp-section" id="changes">
            <header className="pp-section-head">
              <span className="pp-section-num">
                13
              </span>
              <h2 className="pp-section-h">
                Changes to this Policy
              </h2>
            </header>
            <p>
              We may update this Policy from time to time. When we make a material change, we will update the "last revised" date at the top of the page, and for significant changes we'll also notify you by email or in-product banner. Continued use of the Service after a change indicates your acceptance of the updated Policy.
            </p>
            <p>
              {"For historical reference, the Policy was first published on May 1, 2015. Material revision history is available on request from "}
              <a href="mailto:info@cubebrush.co">
                info@cubebrush.co
              </a>
              .
            </p>
          </article>
          <article className="pp-section" id="contact">
            <header className="pp-section-head">
              <span className="pp-section-num">
                14
              </span>
              <h2 className="pp-section-h">
                Contact
              </h2>
            </header>
            <p>
              We're a small team and we read every privacy email personally.
            </p>
            <dl className="pp-card">
              <dt>
                Entity
              </dt>
              <dd>
                Cubebrush, LLC
              </dd>
              <dt>
                Address
              </dt>
              <dd>
                1968 S. Coast Hwy #1597
                <br />
                Laguna Beach, CA 92651
              </dd>
              <dt>
                Privacy
              </dt>
              <dd>
                <a href="mailto:info@cubebrush.co">
                  info@cubebrush.co
                </a>
              </dd>
              <dt>
                General
              </dt>
              <dd>
                <a href="mailto:hello@cubebrush.co">
                  hello@cubebrush.co
                </a>
              </dd>
              <dt>
                DMCA
              </dt>
              <dd>
                <a href="mailto:copyrightagent@cubebrush.co">
                  copyrightagent@cubebrush.co
                </a>
              </dd>
              <dt>
                EU DSA
              </dt>
              <dd>
                <a href="mailto:trust@cubebrush.co">
                  trust@cubebrush.co
                </a>
              </dd>
            </dl>
            <p>
              For EU and UK users: if you are not satisfied with our handling of a privacy concern, you have the right to lodge a complaint with your local data-protection authority. We hope you'll try us first.
            </p>
          </article>
        </div>
        <div className="pp-end">
          <div className="pp-end-eyebrow">
            End of policy
          </div>
          <div className="pp-end-body">
            {"This Privacy Policy was last revised on "}
            <b>
              September 7, 2026
            </b>
            {". For questions, email "}
            <a href="mailto:info@cubebrush.co">
              info@cubebrush.co
            </a>
            .
          </div>
          <div className="pp-end-row">
            <Link className="pp-end-btn" href="/terms">
              Terms of Service
            </Link>
            <Link className="pp-end-btn" href="/licenses">
              Licenses
            </Link>
            <button className="pp-end-btn pp-end-btn--cta" type="button">
              <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-0cf17b6e-ns")} />
              </svg>
              Top
            </button>
          </div>
        </div>
      </section>
      <div aria-label="Cookie notice" className="pp-cookie" data-pp-cookie="" role="region">
        <span aria-hidden="true" className="pp-cookie-icon">
          <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#glyph-923219df-ns")} />
          </svg>
        </span>
        <div className="pp-cookie-body">
          <b>
            Cookies & privacy.
          </b>
          {" We use cookies for requested features and security, and cookieless Plausible analytics. Optional attribution and personalization are subject to applicable choices. "}
          <Link href="/privacy#cookies">
            Details
          </Link>
        </div>
        <button className="pp-cookie-ok" type="button">
          Got it
        </button>
      </div>
    </>
  );
}
