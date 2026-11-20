import Link from "next/link";
import { asset } from "@/lib/asset";

export function Licenses() {
  return (
    <>
      <section aria-labelledby="lc-title" className="lc-page">
        <div aria-hidden="true" className="lc-hero-art">
          <img alt="" loading="lazy" src={asset("/sites/cubebrush/img/licenses-hero-384e7a84634ab30fa4f8c94a02-4b13c74e.svg")} />
        </div>
        <div className="lc-eyebrow">
          Legal · Buyers · Cubebrush, LLC
        </div>
        <h1 className="lc-h1" id="lc-title">
          Licenses
        </h1>
        <p className="lc-lede">
          {"Every Product on Cubebrush is sold under one of three licenses: "}
          <b>
            Basic
          </b>
          {", "}
          <b>
            Commercial
          </b>
          {", or "}
          <b>
            Studio
          </b>
          . The Seller picks which licenses they offer per product; you pick which one you need at checkout. Below: the at-a-glance comparison, FAQ, and the full legal text.
        </p>
        <p className="lc-lede">
          {"These License Terms, together with the "}
          <Link href="/terms">
            Terms of Service
          </Link>
          , form the agreement between you ("Buyer"), the Seller ("Store Owner"), and Cubebrush regarding any Product you license through the site.
        </p>
        <div className="lc-revstamp">
          <span aria-hidden="true" className="dot" />
          <span>
            {"Last revised "}
            <b>
              May 21, 2026
            </b>
          </span>
        </div>
        <div aria-label="License comparison" className="lc-compare">
          <div className="lc-tier lc-tier--basic">
            <div className="lc-tier-head">
              <span className="lc-tier-name">
                Basic
              </span>
              {" "}
              <span className="lc-tier-tag">
                Entry license
              </span>
            </div>
            <div className="lc-tier-table">
              <div className="lc-tier-row-label">
                Personal use
              </div>
              <div className="lc-tier-row-val">
                Unlimited projects · 1 user*
              </div>
              <div className="lc-tier-row-label">
                Commercial use
              </div>
              <div className="lc-tier-row-val">
                1 project · 1 user*
              </div>
              <div className="lc-tier-row-label">
                End Product for Sale
              </div>
              <div className="lc-tier-row-val">
                1 project · up to 1,000 sales*
              </div>
              <div className="lc-tier-row-label">
                Free Products
              </div>
              <div className="lc-tier-row-val">
                Personal use only
              </div>
            </div>
            <div className="lc-tier-foot">
              For one creator on one project. If you sell more than 1,000 copies of an End Product, upgrade to Commercial.
            </div>
          </div>
          <div className="lc-tier lc-tier--commercial">
            <div className="lc-tier-head">
              <span className="lc-tier-name">
                Commercial
              </span>
              {" "}
              <span className="lc-tier-tag">
                Unlimited sales
              </span>
            </div>
            <div className="lc-tier-table">
              <div className="lc-tier-row-label">
                Personal use
              </div>
              <div className="lc-tier-row-val">
                Unlimited projects
              </div>
              <div className="lc-tier-row-label">
                Commercial use
              </div>
              <div className="lc-tier-row-val">
                Unlimited projects
              </div>
              <div className="lc-tier-row-label">
                End Product for Sale
              </div>
              <div className="lc-tier-row-val">
                Unlimited projects / sales
              </div>
              <div className="lc-tier-row-label">
                Free Products
              </div>
              <div className="lc-tier-row-val">
                Buy this tier to use commercially
              </div>
            </div>
            <div className="lc-tier-foot">
              For products that ship in scale: game assets, retail goods, course materials. Buy once, sell forever.
            </div>
          </div>
          <div className="lc-tier lc-tier--studio">
            <div className="lc-tier-head">
              <span className="lc-tier-name">
                Studio
              </span>
              {" "}
              <span className="lc-tier-tag">
                Multi-user · Tutorials & tools
              </span>
            </div>
            <div className="lc-tier-table">
              <div className="lc-tier-row-label">
                Personal use
              </div>
              <div className="lc-tier-row-val">
                Unlimited users
              </div>
              <div className="lc-tier-row-label">
                Commercial use
              </div>
              <div className="lc-tier-row-val">
                Unlimited users
              </div>
              <div className="lc-tier-row-label">
                End Product for Sale
              </div>
              <div className="lc-tier-row-val">
                Unlimited users
              </div>
              <div className="lc-tier-row-label">
                Scope
              </div>
              <div className="lc-tier-row-val">
                One physical studio/establishment
              </div>
            </div>
            <div className="lc-tier-foot">
              Only available for Tutorials and Installable Products (brushes, plugins, apps). For Commercial-style products, the Commercial License covers the same scope.
            </div>
          </div>
        </div>
        <div className="lc-compare-foot">
          *Installable Products (brushes, plugins, apps) can be used in unlimited projects and End Products for Sale on a one-user-per-Basic-License basis.
        </div>
        <div className="lc-jump">
          <button aria-controls="lc-toc" aria-expanded="false" aria-haspopup="dialog" className="lc-jump-btn" type="button">
            <span className="lc-jump-btn-lbl">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-21ac43b3-ns")} />
              </svg>
              <span>
                01 · FAQ: quick answers
              </span>
            </span>
            <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-dd98d7fe-ns")} />
            </svg>
          </button>
        </div>
        <div aria-label="Jump to section" aria-modal="true" className="lc-toc-host" id="lc-toc" inert role="dialog">
          <div className="lc-toc-scrim" />
          <div className="lc-toc-sheet">
            <div aria-hidden="true" className="lc-toc-handle">
              <span />
            </div>
            <div className="lc-toc-head">
              <div>
                <div className="lc-toc-eyebrow">
                  Contents
                </div>
                <h2>
                  Jump to section
                </h2>
              </div>
              <button aria-label="Close" className="lc-toc-close" type="button">
                <svg viewBox="0 0 24 24" height="20" width="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </button>
            </div>
            <nav aria-label="Sections of this page" className="lc-toc-nav">
              <a data-section="faq" href="#faq">
                <span className="lc-toc-num">
                  01
                </span>
                <span className="lc-toc-lbl">
                  FAQ: quick answers
                </span>
              </a>
              <a data-section="editorial" href="#editorial">
                <span className="lc-toc-num">
                  02
                </span>
                <span className="lc-toc-lbl">
                  Editorial-only usage
                </span>
              </a>
              <a data-section="basic" href="#basic">
                <span className="lc-toc-num">
                  03
                </span>
                <span className="lc-toc-lbl">
                  Basic License: full terms
                </span>
              </a>
              <a data-section="commercial" href="#commercial">
                <span className="lc-toc-num">
                  04
                </span>
                <span className="lc-toc-lbl">
                  Commercial License: full terms
                </span>
              </a>
              <a data-section="studio" href="#studio">
                <span className="lc-toc-num">
                  05
                </span>
                <span className="lc-toc-lbl">
                  Studio License: full terms
                </span>
              </a>
              <a data-section="misc" href="#misc">
                <span className="lc-toc-num">
                  06
                </span>
                <span className="lc-toc-lbl">
                  Miscellaneous
                </span>
              </a>
              <a data-section="contact" href="#contact">
                <span className="lc-toc-num">
                  07
                </span>
                <span className="lc-toc-lbl">
                  Questions?
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="lc-body">
          <article className="lc-section" id="faq">
            <header className="lc-section-head">
              <span className="lc-section-num">
                01
              </span>
              <h2 className="lc-section-h">
                FAQ: quick answers
              </h2>
            </header>
            <p>
              The 80% of questions about Cubebrush licenses. The full legal text follows below.
            </p>
            <div className="lc-faq">
              <details>
                <summary>
                  What do I get when I purchase a product?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"A non-exclusive, worldwide, perpetual license to use the Product as expressly permitted by the specific Cubebrush License you bought: Basic, Commercial, or Studio. Distribution of products via Cubebrush is "}
                    <b>
                      not a sale
                    </b>
                    {" of the content but the grant of those license rights to you. The Seller keeps copyright."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I use a purchased product in freelance / client work?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"Yes. If the client intends to sell more than "}
                    <b>
                      1,000 units
                    </b>
                    {" of the End Product you create with it, you'll need a Commercial License. When you deliver the End Product to a client, your rights in the purchased Product are effectively transferred to the client (subject to these Terms)."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  What's an "Installable Product"?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Anything that installs on your machine to generate new work: Photoshop brushes, ZBrush plugins, scripts, layer styles, gradients, actions, applications, extensions, etc. Everything in the Brushes category counts, plus all Add-ons.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  What are the End Product requirements?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"An End Product must be "}
                    <b>
                      significantly different
                    </b>
                    {" than the original Product, must require real time, effort, and skill to produce, must not directly compete with the original, and must not redistribute the original Product in a way that lets third parties extract it. Special rules apply per category:"}
                  </p>
                  <p>
                    <b>
                      Tutorials
                    </b>
                    : A tutorial is just a tutorial. Don't redistribute any of its content; bonus files (PSDs, 3D models) are for personal use only unless they're explicitly installable.
                  </p>
                  <p>
                    <b>
                      Installable Products
                    </b>
                    : End Product must be a unique implementation. You can paint with a brush, sculpt with a plugin, but never redistribute the original files in any form.
                  </p>
                  <p>
                    <b>
                      3D Models & Textures
                    </b>
                    : End Product must be a unique implementation, often via copy and content changes. You can use a model + variations in your game; you can't resell it as stock.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  What is an "End Product for Sale"?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"Either a digital design or a physical product that you (or your client) intend to sell to more than one person: wholesale, drop-shipping, online store, etc. \"Intend to sell\" means you plan to sell, license, sub-license, or distribute the End Product for any kind of fee. A one-off paid commission for a single client is "}
                    <b>
                      not
                    </b>
                    {" an End Product for Sale."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  What counts as Personal vs. Commercial use?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    <b>
                      Personal use
                    </b>
                    {" = no potential monetary gain, no business/non-profit/organization involvement. Indie game prototypes, portfolio pieces, gifts for family. All personal. All purchased products may be used in unlimited Personal Use projects."}
                  </p>
                  <p>
                    <b>
                      Commercial use
                    </b>
                    {" = anything that isn't Personal Use. Synonyms: Contracted Work, Client Work."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  How many times can I use a purchased product?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"Under the Basic License: "}
                    <b>
                      one Project
                    </b>
                    . A Project is a complete, cohesive undertaking with possibly several related End Products under a single concept.
                  </p>
                  <p>
                    Exceptions: Installable Products can be used in unlimited projects (one user per Basic License); the Studio License lets multiple users from one studio use them.
                  </p>
                  <p>
                    Commercial License = no project limits at all.
                  </p>
                  <p>
                    {"You can "}
                    <b>
                      not
                    </b>
                    {" buy one texture and use it across two unrelated client End Products. Those are different Projects."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Product Packs and Bundles?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Pack and Bundle Products contain multiple Sub-Products. Each Sub-Product gets the same per-product rules it would have on its own: unlimited Projects for Installable Products, one Project for everything else. Sub-Products don't need to be used in the same End Product or Project. So a Pack of 10 3D models could end up in 10 different Projects, one model each.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Are there impression / view limits on End Products?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"Mostly no. The exception: TV, films, streaming video, on-demand broadcasts, and online videos. Your End Product is allowed up to "}
                    <b>
                      10,000 views per month
                    </b>
                    . For more than that, contact the Store Owner directly to discuss additional rights.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I redistribute Products I've purchased?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    No. Products are for your use only. The original Product (including source files) may never be included as a redistributable file inside an End Product, on a shared drive, in a tool/addon, etc., not even for free.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Do I have to credit the original designer?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    No. But it's a kind thing to do.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  How much do Commercial / Studio Licenses cost?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Store Owners set their own prices for each tier, so it varies by product. You'll see the available options on the product page.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Do all Cubebrush products offer Commercial / Studio?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    No, they're mutually exclusive depending on the product type:
                  </p>
                  <p>
                    <b>
                      Tutorials & Installable Products
                    </b>
                    {" offer Basic + Studio (no Commercial)."}
                  </p>
                  <p>
                    <b>
                      Everything else
                    </b>
                    {" (3D, textures, etc.) offers Basic + Commercial (no Studio)."}
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I upgrade a license I've already purchased?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Yes. If a Commercial/Studio option is available for a product you've already bought, go to the product's page in your Library and upgrade. We subtract what you paid for the Basic License from the upgrade price. You're never double-charged.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  How are Free Products licensed?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"Free Products ship under the Basic License for "}
                    <b>
                      personal use only
                    </b>
                    . For commercial use, you need to buy a Commercial License on the product page (or upgrade from the Basic License).
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can Store Owners sell with custom licenses?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    No. All Products on Cubebrush sell under our Basic, Commercial, or Studio License. No bespoke licenses.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  What is a "user"?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    {"For Tutorials and Installable Products, a single Basic License covers "}
                    <b>
                      one person
                    </b>
                    . They can install on up to two computers they use, as long as only one is in use at a time. For multiple users sharing a studio/location, a Studio License is required.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I 3D print products I've purchased?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Yes. Personal physical models: unlimited. End Products for Sale: 1,000 unit limit under Basic, unlimited under Commercial.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I use 3D products for static images?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Yes.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  Can I modify the assets I've purchased?
                </summary>
                <div className="lc-faq-body">
                  <p>
                    Yes.
                  </p>
                </div>
              </details>
            </div>
          </article>
          <article className="lc-section" id="editorial">
            <header className="lc-section-head">
              <span className="lc-section-num">
                02
              </span>
              <h2 className="lc-section-h">
                Editorial-only usage
              </h2>
            </header>
            <p>
              Some Products contain existing intellectual-property (IP) elements: recognizable brands, real products, trademarks, etc. These Products may only be used in a personal/educational or editorial manner, relating to events that are newsworthy or of public interest. Editorial restrictions:
            </p>
            <ul className="lc-list">
              <li>
                Not for resale items (e.g., on a t-shirt, in a published video game, on a 3D-printed product).
              </li>
              <li>
                Not for billboard, trade-show, or exhibit displays.
              </li>
              <li>
                Not in any defamatory, libelous, or otherwise unlawful manner, directly or in context.
              </li>
              <li>
                Not incorporated into a logo, trademark, or service mark.
              </li>
              <li>
                Not for any commercial, non-news-related purpose.
              </li>
            </ul>
          </article>
          <article className="lc-section" id="basic">
            <header className="lc-section-head">
              <span className="lc-section-num">
                03
              </span>
              <h2 className="lc-section-h">
                {"Basic License: full terms "}
                <span className="lc-pill lc-pill--basic">
                  Basic
                </span>
              </h2>
            </header>
            <p className="lc-sub">
              3.1 · What you may do.
            </p>
            <p>
              You may use a purchased Product in a new End Product, provided the End Product meets the requirements below. You may modify or manipulate the Product, or incorporate it into other content to make a derivative work. The Store Owner retains all right, title, and ownership in the Products; the resulting derivative work is subject to these Basic License terms.
            </p>
            <p className="lc-sub">
              3.2 · End Product requirements.
            </p>
            <ul className="lc-list">
              <li>
                Significantly different than the original Product, requiring time, effort, and skill to produce.
              </li>
              <li>
                Not used or sold in a way that is directly competitive with the original Product you purchased.
              </li>
              <li>
                Not redistributing the original Product to third parties in a manner that allows for its extraction.
              </li>
            </ul>
            <p className="lc-sub">
              3.3 · Category-specific rules.
            </p>
            <p>
              <b>
                Tutorials.
              </b>
              {" A tutorial is just a tutorial. Its content cannot be redistributed in any way; bonus files (3D models, PSDs, etc.) are for personal projects only unless they are explicitly installable."}
            </p>
            <p>
              <b>
                Installable Products.
              </b>
              {" The End Product must be a unique implementation. You may use a plugin to sculpt or a brush to paint, but you must never redistribute the original files in any form."}
            </p>
            <p>
              <b>
                3D Models & Textures.
              </b>
              {" The End Product must be a unique implementation, often involving copy and content changes. You may use a model and its variations in your game; you cannot resell it as stock."}
            </p>
            <p className="lc-sub">
              3.4 · Project scope.
            </p>
            <p>
              {"A purchased Product may be used in "}
              <b>
                one Project
              </b>
              {". "}
              <i>
                Exception:
              </i>
              {" Tutorials and Installable Products may be used in unlimited Projects on a one-user-per-license basis. A Project is a complete, cohesive undertaking that may result in one or more End Products; End Products in the same Project must be directly related under a single concept. All purchased Products may be used in unlimited Personal Use projects."}
            </p>
            <p className="lc-sub">
              3.5 · End Products for Sale.
            </p>
            <p>
              {"Under the Basic License, you may use purchased Products to create End Products for Sale where lifetime sales of the End Product for Sale "}
              <b>
                do not exceed 1,000 units
              </b>
              . Over that limit, upgrade to Commercial. If a Product is offered as a Free Product, its Basic License allows for personal use only. For End Products not offered for sale, you may distribute as many copies as you like.
            </p>
            <p>
              An End Product For Sale is a digital design or physical Product that you and/or your client intend to sell to more than a single person: wholesale, drop-shipping, online stores, etc. "Intend to sell" means plan to sell, license, sub-license, or distribute the End Product for any fee or charge.
            </p>
            <p className="lc-sub">
              3.6 · What you may not do.
            </p>
            <ul className="lc-list">
              <li>
                Sub-license, resell, share, transfer, or otherwise redistribute the Product (as stock, in a tool/addon, with source files, or not incorporated into an End Product) under any circumstances, not even for free.
              </li>
              <li>
                Make the Product available on a shared drive, asset-management system, or similar for the purpose of sharing or transferring it. End users of your End Product must not be able to extract the original Product from it.
              </li>
              <li>
                {"Publicly display the Product as a standalone file, or in any digital format without technical or written restrictions to prevent unauthorized third-party use. Take all commercially reasonable steps to prevent duplication. Report unauthorized duplication to "}
                <a href="mailto:copyrightagent@cubebrush.co">
                  copyrightagent@cubebrush.co
                </a>
                .
              </li>
              <li>
                Use the Product to infringe any third party's trademark or other intellectual property, or in a manner constituting deceptive advertising or unfair competition.
              </li>
              <li>
                Register the Product or any End Product incorporating it as a trademark, not even logos. (Third parties may use the same Product too, even in their own logo. Keep that in mind.)
              </li>
              <li>
                Use the Product where doing so could result in a third party claiming rights contrary to this License. On Store-Owner request, immediately remove the Product from any unauthorized location or use.
              </li>
              <li>
                Falsely represent that the Product was created by you or by anyone other than its copyright holder.
              </li>
              <li>
                Use Products containing models and/or property in a manner that is unlawful, harmful, abusive, racially or ethnically offensive, defamatory, deceptive, infringing, invasive of personal privacy/publicity rights, harassing, humiliating, libelous, obscene, threatening, profane, or that promotes racism, bigotry, hatred, or physical harm.
              </li>
            </ul>
            <p className="lc-sub">
              3.7 · Broadcast usage.
            </p>
            <p>
              {"For TV, films, streaming video, on-demand broadcasts, and online videos: up to "}
              <b>
                10,000 views or viewers per month
              </b>
              . Beyond that, contact the Store Owner directly to discuss further rights options.
            </p>
          </article>
          <article className="lc-section" id="commercial">
            <header className="lc-section-head">
              <span className="lc-section-num">
                04
              </span>
              <h2 className="lc-section-h">
                {"Commercial License: full terms "}
                <span className="lc-pill lc-pill--commercial">
                  Commercial
                </span>
              </h2>
            </header>
            <p>
              If you purchase a Commercial License:
            </p>
            <ul className="lc-list">
              <li>
                You may use the Product in any manner permitted under the Basic License, subject to the same obligations and restrictions.
              </li>
              <li>
                You may also use the Product to create an unlimited number of End Products for Sale, where the End Product for Sale may itself be sold an unlimited number of times.
              </li>
            </ul>
          </article>
          <article className="lc-section" id="studio">
            <header className="lc-section-head">
              <span className="lc-section-num">
                05
              </span>
              <h2 className="lc-section-h">
                {"Studio License: full terms "}
                <span className="lc-pill lc-pill--studio">
                  Studio
                </span>
              </h2>
            </header>
            <p>
              Available only for Tutorials and Installable Products. If you purchase a Studio License:
            </p>
            <ul className="lc-list">
              <li>
                You may use the Product in any manner permitted under the Basic License, subject to the same obligations and restrictions.
              </li>
              <li>
                Any number of users from a single studio/establishment may also use Products purchased under the Studio License, i.e., a multi-seat license scoped to one physical location.
              </li>
            </ul>
          </article>
          <article className="lc-section" id="misc">
            <header className="lc-section-head">
              <span className="lc-section-num">
                06
              </span>
              <h2 className="lc-section-h">
                Miscellaneous
              </h2>
            </header>
            <p>
              <b>
                Open-source portions.
              </b>
              {" Some Products may include portions governed by an open-source license such as the GPL. In those cases, this Cubebrush License covers any portion of the Product "}
              <em>
                not
              </em>
              {" already governed by the open-source license. Review the applicable open-source license to determine the requirements for the OSS portions."}
            </p>
            <p>
              <b>
                Breach & termination.
              </b>
              {" If you breach any of the Agreement terms, the license can be terminated, in addition to the Store Owner's and Cubebrush's other rights at law or in equity. On termination, you must stop making copies of or distributing the End Product until you remove the Product from it. Cubebrush is not obligated to refund any fees paid if your account is terminated for a breach."}
            </p>
            <p>
              <b>
                Client compliance.
              </b>
              {" If you create an End Product for a client, the client must comply with these License Terms."}
            </p>
            <p>
              <b>
                Entire agreement.
              </b>
              {" This Agreement (License Terms + Terms of Service) is the entire agreement between you, the Store Owner, and Cubebrush regarding your use of the Product. If any provision is invalid, the remaining provisions remain in full force. If there's an inconsistency between these License Terms and the TOS, these License Terms control for that inconsistency."}
            </p>
            <p>
              <b>
                No waiver.
              </b>
              {" Cubebrush or the Store Owner's failure to assert any right or provision under this License is not a waiver of that right or provision."}
            </p>
            <p>
              <b>
                As-is.
              </b>
              {" All Products are provided \"as is\" with no warranty of any kind, express or implied, including non-infringement, merchantability, or fitness for a particular purpose. Cubebrush and Store Owners do not warrant that Products or services will meet your requirements, or that use will be uninterrupted or error-free. The risk as to quality, performance, and use is solely with you."}
            </p>
            <p>
              <b>
                IP clearance.
              </b>
              {" Products containing digital images of real products, trademarks, or other IP owned by third parties may require clearance from the rights owner. It's your responsibility to consider whether your intended use requires clearance, and to obtain it."}
            </p>
          </article>
          <article className="lc-section" id="contact">
            <header className="lc-section-head">
              <span className="lc-section-num">
                07
              </span>
              <h2 className="lc-section-h">
                Questions?
              </h2>
            </header>
            <p>
              {"For licensing questions: "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {". For copyright concerns or DMCA notices: "}
              <a href="mailto:copyrightagent@cubebrush.co">
                copyrightagent@cubebrush.co
              </a>
              . For unauthorized duplication: same. We respond within 1 business day.
            </p>
            <p>
              {"To buy or upgrade a license on a product you've already purchased, visit the product's page in your "}
              <a href="https://cubebrush.co/library">
                Library
              </a>
              .
            </p>
          </article>
        </div>
        <div className="lc-end">
          <div className="lc-end-eyebrow">
            End of License Terms
          </div>
          <div className="lc-end-body">
            {"Last revised on "}
            <b>
              May 21, 2026
            </b>
            {". The License Terms work together with our "}
            <Link href="/terms">
              Terms of Service
            </Link>
            ; in case of conflict between the two, these License Terms control for that inconsistency.
          </div>
          <div className="lc-end-row">
            <Link className="lc-end-btn" href="/terms">
              Terms of Service
            </Link>
            <Link className="lc-end-btn" href="/distribution-agreement">
              Distribution Agreement
            </Link>
            <Link className="lc-end-btn" href="/marketplace">
              Browse marketplace
            </Link>
            <button className="lc-end-btn lc-end-btn--cta" type="button">
              <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-0cf17b6e-ns")} />
              </svg>
              Top
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
