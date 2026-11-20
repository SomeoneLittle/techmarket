import Link from "next/link";
import { asset } from "@/lib/asset";

export function Terms() {
  return (
    <>
      <section aria-labelledby="tos-title" className="tos-page">
        <div className="tos-eyebrow">
          Legal · Cubebrush, LLC
        </div>
        <h1 className="tos-h1" id="tos-title">
          Terms of Service
        </h1>
        <p className="tos-lede">
          {"Hello everyone! Welcome to "}
          <b>
            Cubebrush.co
          </b>
          , a website and online service of Cubebrush, LLC ("Cubebrush," "we," or "us"). This page explains the terms by which you may use our online and mobile services, web site, and software provided on or in connection with the service (collectively the "Service").
        </p>
        <p className="tos-lede">
          {"By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement (\"Agreement\") and to the collection and use of your information as set forth in our "}
          <Link href="/privacy">
            Privacy Policy
          </Link>
          , whether or not you are a registered user. This Agreement applies to all visitors, users, buyers, sellers and others who access the Service ("Users").
        </p>
        <div className="tos-revstamp">
          <span aria-hidden="true" className="dot" />
          <span>
            {"Last revised "}
            <b>
              September 7, 2026
            </b>
          </span>
        </div>
        <section aria-labelledby="tos-tldr-h" className="tos-tldr">
          <div className="tos-tldr-head">
            <span className="tos-tldr-pill">
              In plain English
            </span>
          </div>
          <div className="tos-tldr-title" id="tos-tldr-h">
            The short version
          </div>
          <div className="tos-tldr-sub">
            A summary of what you're agreeing to. Not a substitute for the full text below; the full agreement controls if there's ever a conflict.
          </div>
          <ul>
            <li className="tos-tldr-yes">
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You own your work.
                </b>
                {" Posting it on Cubebrush doesn't transfer copyright; you keep it."}
              </span>
            </li>
            <li className="tos-tldr-no">
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  We never use your work to train AI
                </b>
                : ours, third-party, or anyone else's. Cubebrush is 100% human-made.
              </span>
            </li>
            <li className="tos-tldr-no">
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  We never sell your personal data.
                </b>
                {" Not to advertisers, not to brokers, not to anyone."}
              </span>
            </li>
            <li className="tos-tldr-yes">
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Cookies and your choices:
                </b>
                {" requested functions use limited cookies; optional attribution and personalization follow applicable consent rules. Plausible analytics is cookieless."}
              </span>
            </li>
            <li className="tos-tldr-yes">
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You can delete your account any time
                </b>
                {" from Settings. Deleting your account deletes your personal data, subject to legal retention."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-c69fc3fe-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Sellers must describe their work honestly.
                </b>
                {" Misleading listings can be removed; repeat offenders can lose their account."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-0a6f763a-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Payments
                </b>
                {" in: Stripe, PayPal, Klarna, Afterpay, and crypto. "}
                <b>
                  Payouts out
                </b>
                {" (to sellers & partners): PayPal, or bank wire where PayPal isn't supported."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="tos-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-c6bb1d52-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Disputes
                </b>
                {" go through individual arbitration in California, not class actions or jury trials."}
              </span>
            </li>
          </ul>
          <div className="tos-tldr-foot">
            {"Questions? "}
            <a href="mailto:hello@cubebrush.co">
              hello@cubebrush.co
            </a>
            {" · privacy requests: "}
            <a href="mailto:info@cubebrush.co">
              info@cubebrush.co
            </a>
          </div>
        </section>
        <div className="tos-notice" role="note">
          <span aria-hidden="true" className="tos-notice-bang">
            !
          </span>
          <div className="tos-notice-body">
            <b>
              Please read this carefully.
            </b>
            {" This Agreement contains a "}
            <b>
              mandatory arbitration of disputes
            </b>
            {" provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions."}
          </div>
        </div>
        <a className="tos-contact" href="mailto:hello@cubebrush.co">
          <span aria-hidden="true" className="tos-contact-icon">
            <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-614e3188-ns")} />
            </svg>
          </span>
          <div>
            <div className="tos-contact-lbl">
              Questions about these terms?
            </div>
            <div className="tos-contact-mail">
              hello@cubebrush.co
            </div>
          </div>
          <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#pp-contact-chev-c3f1fda7-ns")} />
          </svg>
        </a>
        <div className="tos-jump">
          <button aria-controls="tos-toc" aria-expanded="false" aria-haspopup="dialog" className="tos-jump-btn" type="button">
            <span className="tos-jump-btn-lbl">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-21ac43b3-ns")} />
              </svg>
              <span>
                01 · Use of our Service
              </span>
            </span>
            <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-dd98d7fe-ns")} />
            </svg>
          </button>
        </div>
        <div aria-label="Jump to section" aria-modal="true" className="tos-toc-host" id="tos-toc" inert role="dialog">
          <div className="tos-toc-scrim" />
          <div className="tos-toc-sheet">
            <div aria-hidden="true" className="tos-toc-handle">
              <span />
            </div>
            <div className="tos-toc-head">
              <div>
                <div className="tos-toc-eyebrow">
                  Contents
                </div>
                <h2>
                  Jump to section
                </h2>
              </div>
              <button aria-label="Close" className="tos-toc-close" type="button">
                <svg viewBox="0 0 24 24" height="20" width="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </button>
            </div>
            <nav aria-label="Sections of this page" className="tos-toc-nav">
              <a data-section="use" href="#use">
                <span className="tos-toc-num">
                  01
                </span>
                <span className="tos-toc-lbl">
                  Use of our Service
                </span>
              </a>
              <a data-section="eligibility" href="#eligibility">
                <span className="tos-toc-num">
                  02
                </span>
                <span className="tos-toc-lbl">
                  Eligibility
                </span>
              </a>
              <a data-section="service" href="#service">
                <span className="tos-toc-num">
                  03
                </span>
                <span className="tos-toc-lbl">
                  Cubebrush Service
                </span>
              </a>
              <a data-section="accounts" href="#accounts">
                <span className="tos-toc-num">
                  04
                </span>
                <span className="tos-toc-lbl">
                  Cubebrush Accounts
                </span>
              </a>
              <a data-section="rules" href="#rules">
                <span className="tos-toc-num">
                  05
                </span>
                <span className="tos-toc-lbl">
                  Service Rules
                </span>
              </a>
              <a data-section="protection" href="#protection">
                <span className="tos-toc-num">
                  06
                </span>
                <span className="tos-toc-lbl">
                  Buyer Protection & Resolution
                </span>
              </a>
              <a data-section="user-content" href="#user-content">
                <span className="tos-toc-num">
                  07
                </span>
                <span className="tos-toc-lbl">
                  User Content
                </span>
              </a>
              <a data-section="license" href="#license">
                <span className="tos-toc-num">
                  08
                </span>
                <span className="tos-toc-lbl">
                  User Content License Grant
                </span>
              </a>
              <a data-section="ai" href="#ai">
                <span className="tos-toc-num">
                  09
                </span>
                <span className="tos-toc-lbl">
                  AI & Machine Learning
                </span>
              </a>
              <a data-section="mobile" href="#mobile">
                <span className="tos-toc-num">
                  10
                </span>
                <span className="tos-toc-lbl">
                  Mobile Use
                </span>
              </a>
              <a data-section="proprietary" href="#proprietary">
                <span className="tos-toc-num">
                  11
                </span>
                <span className="tos-toc-lbl">
                  Our Proprietary Rights
                </span>
              </a>
              <a data-section="property" href="#property">
                <span className="tos-toc-num">
                  12
                </span>
                <span className="tos-toc-lbl">
                  Cubebrush Property
                </span>
              </a>
              <a data-section="termination" href="#termination">
                <span className="tos-toc-num">
                  13
                </span>
                <span className="tos-toc-lbl">
                  Suspensions & Terminations
                </span>
              </a>
              <a data-section="fees" href="#fees">
                <span className="tos-toc-num">
                  14
                </span>
                <span className="tos-toc-lbl">
                  Fees & Paid Services
                </span>
              </a>
              <a data-section="privacy" href="#privacy">
                <span className="tos-toc-num">
                  15
                </span>
                <span className="tos-toc-lbl">
                  Privacy & Your Data Rights
                </span>
              </a>
              <a data-section="cookies" href="#cookies">
                <span className="tos-toc-num">
                  16
                </span>
                <span className="tos-toc-lbl">
                  Cookies
                </span>
              </a>
              <a data-section="security" href="#security">
                <span className="tos-toc-num">
                  17
                </span>
                <span className="tos-toc-lbl">
                  Security
                </span>
              </a>
              <a data-section="dmca" href="#dmca">
                <span className="tos-toc-num">
                  18
                </span>
                <span className="tos-toc-lbl">
                  DMCA Notice & Counter-Notice
                </span>
              </a>
              <a data-section="dsa" href="#dsa">
                <span className="tos-toc-num">
                  19
                </span>
                <span className="tos-toc-lbl">
                  Notice & Action: EU DSA
                </span>
              </a>
              <a data-section="third-party" href="#third-party">
                <span className="tos-toc-num">
                  20
                </span>
                <span className="tos-toc-lbl">
                  Third-Party Links
                </span>
              </a>
              <a data-section="indemnity" href="#indemnity">
                <span className="tos-toc-num">
                  21
                </span>
                <span className="tos-toc-lbl">
                  Indemnity
                </span>
              </a>
              <a data-section="no-warranty" href="#no-warranty">
                <span className="tos-toc-num">
                  22
                </span>
                <span className="tos-toc-lbl">
                  No Warranty
                </span>
              </a>
              <a data-section="liability" href="#liability">
                <span className="tos-toc-num">
                  23
                </span>
                <span className="tos-toc-lbl">
                  Limitation of Liability
                </span>
              </a>
              <a data-section="general" href="#general">
                <span className="tos-toc-num">
                  24
                </span>
                <span className="tos-toc-lbl">
                  General
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="tos-body">
          <article className="tos-section" id="use">
            <header className="tos-section-head">
              <span className="tos-section-num">
                01
              </span>
              <h2 className="tos-section-h">
                Use of our Service
              </h2>
            </header>
            <p>
              Cubebrush is a creative community and marketplace where users can buy and sell creative content, like video tutorials, 3D models, textures, brushes, etc. ("Goods") and socialize around the content. Whether it's finding a great tutorial from your favorite artist, a 3D model to help advance your project, or a new set of brushes to improve your productivity, Cubebrush has all the digital resources artists need to improve their skills and realize their projects. Our Service allows for the purchase and sale of digital creative content by a buyer ("Buyer") from a seller ("Seller") of such Goods.
            </p>
          </article>
          <article className="tos-section" id="eligibility">
            <header className="tos-section-head">
              <span className="tos-section-num">
                02
              </span>
              <h2 className="tos-section-h">
                Eligibility
              </h2>
            </header>
            <p>
              You may use the Service only if you can form a binding contract with Cubebrush, and only in compliance with this Agreement and all applicable local, state, national, and international laws, rules and regulations. The Service is not available to any Users previously removed from the Service by Cubebrush.
            </p>
            <p>
              {"The minimum age to use the Service is "}
              <b>
                13
              </b>
              {", or such higher minimum age as is required by your local jurisdiction, for example, "}
              <b>
                16
              </b>
              {" in much of the European Union under GDPR Article 8, or such other age set by an EU/EEA Member State or the United Kingdom. If you are under the applicable minimum age, you may not use the Service."}
            </p>
          </article>
          <article className="tos-section" id="service">
            <header className="tos-section-head">
              <span className="tos-section-num">
                03
              </span>
              <h2 className="tos-section-h">
                Cubebrush Service
              </h2>
            </header>
            <p>
              Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to use the Service for your personal, noncommercial use only and as permitted by the features of the Service. Cubebrush reserves all rights not expressly granted herein in the Service and the Cubebrush Content (as defined below). Cubebrush may terminate this license at any time for any reason or no reason.
            </p>
          </article>
          <article className="tos-section" id="accounts">
            <header className="tos-section-head">
              <span className="tos-section-num">
                04
              </span>
              <h2 className="tos-section-h">
                Cubebrush Accounts
              </h2>
            </header>
            <p>
              Your Cubebrush account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion. We may maintain different types of accounts for different types of Users. If you open a Cubebrush account on behalf of an organization or other entity, then (a) "you" includes you and that entity, and (b) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to this Agreement. By connecting to Cubebrush with a third-party service, you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service.
            </p>
            <p>
              {"You may never use another User's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We require strong passwords and support "}
              <b>
                two-factor authentication and passkeys
              </b>
              ; we strongly recommend enabling 2FA on your account. You must notify Cubebrush immediately of any breach of security or unauthorized use of your account. Cubebrush will not be liable for any losses caused by any unauthorized use of your account.
            </p>
            <p>
              You may control your User profile and how you interact with the Service by changing the settings in your account settings page. By providing Cubebrush your email address you consent to our using the email address to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Service and special offers; you may opt out at any time from your account settings.
            </p>
          </article>
          <article className="tos-section" id="rules">
            <header className="tos-section-head">
              <span className="tos-section-num">
                05
              </span>
              <h2 className="tos-section-h">
                Service Rules
              </h2>
            </header>
            <p className="tos-lead">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="tos-list">
              <li>
                Copying, distributing, or disclosing any part of the Service in any medium, including without limitation by any automated or non-automated "scraping".
              </li>
              <li>
                Using any automated system, "robots," "spiders," "offline readers," etc., to access the Service in a manner that sends more requests to Cubebrush servers than a human can reasonably produce by using a conventional web browser. (Public search engines have revocable permission to crawl Cubebrush.co for indexing only.)
              </li>
              <li>
                {"Using the Service, or any content obtained from the Service, to train, fine-tune, evaluate, or otherwise develop machine-learning or generative-AI models, whether your own, a third party's, or an open model. (See "}
                <a href="#ai">
                  §09, AI & Machine Learning
                </a>
                .)
              </li>
              <li>
                Transmitting spam, chain letters, or other unsolicited email.
              </li>
              <li>
                Attempting to interfere with, compromise the integrity or security of, or decipher any transmissions to or from the servers running the Service.
              </li>
              <li>
                Taking any action that imposes, or may impose at our sole discretion, an unreasonable or disproportionately large load on our infrastructure.
              </li>
              <li>
                Uploading invalid data, viruses, worms, or other software agents through the Service.
              </li>
              <li>
                Collecting or harvesting any personally identifiable information, including account names, from the Service.
              </li>
              <li>
                Using the Service for any commercial solicitation purposes.
              </li>
              <li>
                Impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity.
              </li>
              <li>
                Interfering with the proper working of the Service.
              </li>
              <li>
                Accessing any content on the Service through any technology or means other than those provided or authorized by the Service.
              </li>
              <li>
                Using our Service to direct Users to other services or sites to purchase the Goods.
              </li>
              <li>
                Misrepresenting or inaccurately describing Goods submitted for sale.
              </li>
              <li>
                Listing AI-generated work in the public Cubebrush.co marketplace without disclosing it. Sellers may tag work as AI-generated; tagged work is excluded from public marketplace browse and search. (Standalone seller stores are governed by §09 below.)
              </li>
              <li>
                Reselling or otherwise distributing the Goods without written authorization from Seller.
              </li>
              <li>
                Bypassing the measures we may use to prevent or restrict access to the Service.
              </li>
            </ul>
            <p>
              We may, without prior notice, change the Service; stop providing the Service or features of the Service, to you or to users generally; or create usage limits for the Service. We may permanently or temporarily terminate or suspend your access to the Service without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement.
            </p>
            <p>
              You are solely responsible for your interactions with other Cubebrush Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Cubebrush shall have no liability for your interactions with other Users, or for any User's action or inaction.
            </p>
          </article>
          <article className="tos-section" id="protection">
            <header className="tos-section-head">
              <span className="tos-section-num">
                06
              </span>
              <h2 className="tos-section-h">
                Buyer Protection & Resolution
              </h2>
            </header>
            <p>
              Buyers of Goods and Sellers share the responsibility for making sure that purchases facilitated by our Service are satisfactory and hassle-free. Our Service hosts the resolution process when Buyers claim to Sellers that their item was not received or the item they received was different from what was described in the listing.
            </p>
            <p>
              The Service resolution process is the primary avenue for settling disputed transactions and is designed to help Buyers and Sellers resolve disputes in fewer steps, provide Buyers with a more familiar e-commerce resolution experience, and offer an option to contact Cubebrush if Buyers and Sellers can't reach resolution themselves. We may, at our discretion, take a more active role in ensuring transaction problems are resolved; however, you understand that we are under no obligation to do so. If you submit a dispute to us, you agree to permit us to make a final decision, in our sole discretion, on any such dispute. We reserve the right to fix any processing errors we discover, and will correct any such errors by debiting or crediting the payment method used.
            </p>
          </article>
          <article className="tos-section" id="user-content">
            <header className="tos-section-head">
              <span className="tos-section-num">
                07
              </span>
              <h2 className="tos-section-h">
                User Content
              </h2>
            </header>
            <p>
              {"Some areas of the Service allow Users to post content such as profile information, comments, images, files, Goods listings, and other content or information (any such materials a User submits, posts, displays, or otherwise makes available on the Service, \"User Content\"). "}
              <b>
                You retain full ownership of all your User Content.
              </b>
            </p>
            <p className="tos-lead">
              You agree not to post User Content that:
            </p>
            <ul className="tos-list">
              <li>
                May create a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to you, to any other person, or to any animal.
              </li>
              <li>
                May create a risk of any other loss or damage to any person or property.
              </li>
              <li>
                Seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise.
              </li>
              <li>
                May constitute or contribute to a crime or tort.
              </li>
              <li>
                Contains any information or content we deem to be unlawful, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, threatening, profane, or otherwise objectionable.
              </li>
              <li>
                Contains illegal information (including, without limitation, insider information under securities law, or another party's trade secrets).
              </li>
              <li>
                Contains information or content that you do not have a right to make available under any law or under contractual or fiduciary relationships.
              </li>
              <li>
                Contains information you know is not correct or current.
              </li>
              <li>
                Promotes racism, bigotry, hatred or physical harm of any kind against any group or individual.
              </li>
            </ul>
            <p>
              You agree that any User Content that you post does not and will not violate third-party rights of any kind, including any Intellectual Property Rights or rights of privacy. To the extent your User Content contains music, you represent that you are the owner of all the copyright rights with respect to each and every musical composition and sound recording contained in such User Content. Cubebrush reserves the right, but is not obligated, to reject and/or remove any User Content that Cubebrush believes, in its sole discretion, violates these provisions.
            </p>
            <p>
              "Intellectual Property Rights" means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications, registrations, renewals, and extensions thereof, under the laws of any state, country, territory or other jurisdiction.
            </p>
            <p>
              Cubebrush takes no responsibility and assumes no liability for any User Content that you or any other User or third party posts or sends over the Service. You shall be solely responsible for your User Content and the consequences of posting or publishing it, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content.
            </p>
          </article>
          <article className="tos-section" id="license">
            <header className="tos-section-head">
              <span className="tos-section-num">
                08
              </span>
              <h2 className="tos-section-h">
                User Content License Grant
              </h2>
            </header>
            <p>
              <b>
                To Cubebrush.
              </b>
              {" By posting any User Content on the Service, you expressly grant to Cubebrush a royalty-free, sub-licensable (only to our service providers acting on our behalf), non-exclusive, worldwide license to use, reproduce, modify, publish, edit, translate, distribute, publicly perform, and publicly display all such User Content and your name, voice, and/or likeness as contained in your User Content, "}
              <b>
                solely for the purpose of operating, providing, improving, and promoting the Service
              </b>
              , for example, generating thumbnails and previews, displaying your listings in search and category pages, sending you and other Users notifications about activity on your content, and showcasing your work in editorial features on Cubebrush.
            </p>
            <p>
              {"This license is limited to the operation of the Service. "}
              <b>
                It does not include any right to use your User Content to train, fine-tune, evaluate, or develop any machine-learning or generative-AI model.
              </b>
              {" See §09 below."}
            </p>
            <p>
              This license terminates within a reasonable period after you remove your User Content from the Service or close your account, except (a) to the extent your User Content has been shared with others as part of the normal operation of the Service and they have not deleted it, and (b) for archived or back-up copies that have not yet been overwritten in the ordinary course of our retention practices.
            </p>
            <p>
              <b>
                To other Users.
              </b>
              {" You also hereby grant each User of the Service a non-exclusive license to access your User Content through the Service, as permitted through the functionality of the Service and under this Agreement."}
            </p>
          </article>
          <article className="tos-section" id="ai">
            <header className="tos-section-head">
              <span className="tos-section-num">
                09
              </span>
              <h2 className="tos-section-h">
                AI & Machine Learning
              </h2>
            </header>
            <p className="tos-promise">
              <b>
                Cubebrush will never use your work to train AI.
              </b>
              {" We do not, have not, and will not use any User Content, your art, files, listings, comments, messages, profile photos, or anything else you upload, as training, fine-tuning, or evaluation data for any artificial-intelligence or machine-learning model, whether developed by us, by a third party, or by an open-source project."}
            </p>
            <p>
              We will not sell, license, or otherwise transfer User Content to any third party for the purpose of AI/ML model training. We do not enter into bulk data-licensing arrangements that would expose User Content to AI training.
            </p>
            <p>
              <b>
                Public Cubebrush.co marketplace, 100% human-made.
              </b>
              {" The public marketplace (browse, search, category pages, featured collections, Drop of the Day, recommendations) surfaces human-made work only. When a Seller uploads a product, they can tag it as AI-generated; tagged products are "}
              <b>
                unlisted from the public marketplace
              </b>
              ; they are not surfaced in browse, search, or recommendations. Tagged products remain accessible via direct link so buyers and sellers who specifically want them can still transact. Failing to tag AI-generated work, or actively concealing it, is a breach of this Agreement and may result in removal of the listing and, on a pattern, termination of the Account.
            </p>
            <p>
              <b>
                Standalone seller stores.
              </b>
              {" Cubebrush also offers Sellers the option to operate a standalone branded store on the Cubebrush platform. Each standalone store is governed by the Seller's own published policy on AI-generated content. "}
              <b>
                Cubebrush does not police standalone stores for AI-generated content
              </b>
              ; the Seller is responsible for that policy and for compliance with all applicable law (including, where applicable, disclosure requirements such as the EU AI Act). Goods sold through standalone stores remain subject to every other rule in this Agreement, including this section's prohibition on training AI from the Service and Cubebrush's promise never to use User Content for AI training.
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
              {"See the "}
              <Link href="/privacy#ai">
                Privacy Policy
              </Link>
              {" for AI processing and "}
              <Link href="/privacy#collect">
                first-party personalization
              </Link>
              . These permissions do not change the prohibition on training, fine-tuning or model evaluation using User Content.
            </p>
          </article>
          <article className="tos-section" id="mobile">
            <header className="tos-section-head">
              <span className="tos-section-num">
                10
              </span>
              <h2 className="tos-section-h">
                Mobile Use
              </h2>
            </header>
            <p>
              <b>
                Mobile Software.
              </b>
              {" We may make available software to access the Service via a mobile device (\"Mobile Software\"). Cubebrush grants you a non-exclusive, non-transferable, revocable license to use a compiled copy of the Mobile Software for one Cubebrush account on one mobile device owned or leased solely by you, for your personal use. You may not modify, reverse-engineer, rent, sub-license, resell, copy, circumvent security features, or remove proprietary notices on the Mobile Software. Cubebrush may issue upgrades from time to time and may automatically install them on your device."}
            </p>
            <p>
              <b>
                Apple App Store.
              </b>
              {" If you obtain the Mobile Software from the Apple App Store: this Agreement is solely between you and Cubebrush, not Apple, and Apple has no responsibility for the App Store-sourced software or its content. Your use must comply with the Apple Media Services Terms and Conditions. Apple has no obligation to provide maintenance or support; warranty refunds are limited to the purchase price. You acknowledge that, in the event of any third-party claim that the App Store-sourced software infringes that party's intellectual-property rights, Cubebrush, not Apple, is responsible for the investigation, defense, settlement, and discharge of any such claim. Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement as it relates to your license of the App Store-sourced software, with the right to enforce it against you."}
            </p>
            <p>
              <b>
                Google Play.
              </b>
              {" If you obtain the Mobile Software from Google Play: this Agreement is solely between you and Cubebrush, not Google. Your use must comply with the Google Play Terms of Service. Google has no responsibility for the Play-sourced software, no obligation to provide maintenance or support, and no responsibility for addressing any third-party claims that the software infringes intellectual-property rights. Cubebrush will handle such claims as set out in §21 below."}
            </p>
            <p>
              <b>
                U.S. export.
              </b>
              {" The Mobile Software originates in the United States and is subject to U.S. export laws. You agree not to use or export the Mobile Software in violation of U.S. export controls, including any embargoes or sanctions administered by the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC)."}
            </p>
          </article>
          <article className="tos-section" id="proprietary">
            <header className="tos-section-head">
              <span className="tos-section-num">
                11
              </span>
              <h2 className="tos-section-h">
                Our Proprietary Rights
              </h2>
            </header>
            <p>
              Except for your User Content, the Service and all materials therein or transferred thereby, including software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and User Content belonging to Cubebrush and other Users (the "Cubebrush Content"), and all Intellectual Property Rights related thereto, are the exclusive property of Cubebrush and its licensors. You agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Cubebrush Content.
            </p>
            <p>
              You may submit comments or ideas about the Service ("Ideas"). By submitting any Idea, you agree your disclosure is gratuitous, unsolicited, and without restriction and will not place Cubebrush under any fiduciary or other obligation; we are free to use the Idea without any additional compensation to you.
            </p>
          </article>
          <article className="tos-section" id="property">
            <header className="tos-section-head">
              <span className="tos-section-num">
                12
              </span>
              <h2 className="tos-section-h">
                Cubebrush Property
              </h2>
            </header>
            <p>
              Certain aspects of the Service may allow you to obtain reputational or status indicators ("Badges") and/or purchase Service currency used to easily buy Goods ("Credits"), collectively, "Cubebrush Property." Credits do not expire, but if your account becomes Inactive, Cubebrush may, without further notice, redeem all Credits remaining in your account for any other Cubebrush Property at our sole discretion. For purposes of this section, "Inactive" means (a) you have not logged in for one (1) year or more, or (b) Cubebrush has been unable to contact you to verify continued use of your account.
            </p>
            <p>
              Regardless of terminology used, Cubebrush Property represents a limited license right governed solely by this Agreement and available for distribution at Cubebrush's sole discretion. Cubebrush Property is not redeemable for any sum of money or monetary value at any time. You do not own the account you use to access the Service, nor possess any rights of access or rights to data stored by Cubebrush. All data on Cubebrush's servers is subject to deletion, alteration or transfer at any time.
            </p>
          </article>
          <article className="tos-section" id="termination">
            <header className="tos-section-head">
              <span className="tos-section-num">
                13
              </span>
              <h2 className="tos-section-h">
                Suspensions & Terminations
              </h2>
            </header>
            <p>
              Cubebrush may decline, remove or halt sales of any Goods, suspend or terminate an Account, and/or suspend or terminate the Platform at any time, in its sole discretion, without cause or notice and without penalty or liability.
            </p>
            <p>
              Cubebrush, in its sole discretion, may suspend or terminate your Account(s), or retain any or all funds in your Balance, if Cubebrush suspects or has reason to believe (or if a person otherwise claims) that you have violated the law or breached any term of this Agreement. Upon such termination, you agree to immediately cease all use of the Platform. If review concludes that there is a reasonable basis to believe misconduct has occurred, you agree that Cubebrush may retain funds in your Cubebrush Account as liquidated damages, which you acknowledge are not a penalty and are reasonable.
            </p>
            <p>
              {"Cubebrush may temporarily withhold any portion of the funds in your Account if necessary to secure payment for, performance of, and/or assurances regarding liabilities you may have incurred. If you maintain a refund rate above "}
              <b>
                10%
              </b>
              {", you agree we may retain an amount equal to "}
              <b>
                25%
              </b>
              {" of your current Balance for "}
              <b>
                90 days
              </b>
              {" on a rolling basis to cover the cost of refunds. If you maintain a refund rate significantly above this amount, your Account may be subject to additional fees or termination."}
            </p>
          </article>
          <article className="tos-section" id="fees">
            <header className="tos-section-head">
              <span className="tos-section-num">
                14
              </span>
              <h2 className="tos-section-h">
                Fees & Paid Services
              </h2>
            </header>
            <p>
              <b>
                Billing.
              </b>
              {" Certain aspects of the Service may be provided for a fee. If you elect to use paid aspects, you agree to the pricing and payment terms as we may update them. Cubebrush may add new services for additional fees, or amend fees for existing services, at any time in its sole discretion."}
            </p>
            <p>
              <b>
                No Refunds.
              </b>
              {" You may cancel your Cubebrush account at any time; however, there are no refunds for cancellation. If Cubebrush suspends or terminates your account for any reason, you shall receive no refund or exchange for any Cubebrush Property, credits, subscription fees, or content associated with your account."}
            </p>
            <p>
              <b>
                Payment information & taxes.
              </b>
              {" All information you provide in connection with a purchase must be accurate, complete, and current. You agree to pay all charges incurred at the prices in effect when those charges are incurred, plus any applicable taxes."}
            </p>
            <p>
              <b>
                Payment processors.
              </b>
              {" Cubebrush accepts payment through several third-party processors, each subject to its own terms:"}
            </p>
            <ul className="tos-list">
              <li>
                <b>
                  Stripe
                </b>
                {": primary card processor for Buyer payments at checkout. Use is subject to the Stripe Services Agreement, as modified by Stripe from time to time. Stripe does "}
                <b>
                  not
                </b>
                {" process Seller or Partner payouts."}
              </li>
              <li>
                <b>
                  PayPal
                </b>
                {": Buyers may pay with a PayPal account at checkout. "}
                <b>
                  Sellers and Partners receive their payouts via PayPal (or by bank wire transfer where PayPal is not supported in their region)
                </b>
                , sent to the email address on file for their payout account. Use is subject to the PayPal User Agreement.
              </li>
              <li>
                <b>
                  Klarna and Afterpay
                </b>
                : Buy-now-pay-later options on eligible orders. Use is subject to the respective Klarna and Afterpay terms; eligibility, installment schedule, and any interest or fees are set by the BNPL provider, not by Cubebrush.
              </li>
              <li>
                <b>
                  Coinbase Business
                </b>
                {": Cubebrush accepts cryptocurrency (currently "}
                <b>
                  USDC and USDT
                </b>
                {" on supported networks) through Coinbase Business. Use is subject to the Coinbase Commerce / Coinbase Business terms."}
              </li>
            </ul>
            <p>
              <b>
                Cryptocurrency-specific terms.
              </b>
              {" By paying with cryptocurrency, you acknowledge that on-chain transactions are irreversible, that token transfers carry network fees outside our control, and that you are responsible for the security of any wallet you connect to the Service. Refunds, when applicable, will be issued at our discretion in the original cryptocurrency or in fiat equivalent at the time of refund; we do not guarantee any particular exchange rate. You represent that the wallet you connect is not associated with any person or jurisdiction sanctioned by OFAC or under U.S. export controls."}
            </p>
          </article>
          <article className="tos-section" id="privacy">
            <header className="tos-section-head">
              <span className="tos-section-num">
                15
              </span>
              <h2 className="tos-section-h">
                Privacy & Your Data Rights
              </h2>
            </header>
            <p>
              {"We care about the privacy of our Users. Our complete privacy practices are described in our "}
              <Link href="/privacy">
                Privacy Policy
              </Link>
              , which is incorporated into this Agreement by reference. By using the Service you consent to the collection, use, and disclosure of your personal information as set forth there.
            </p>
            <p className="tos-promise">
              <b>
                We do not sell, rent, or share your personal information.
              </b>
              {" We have never sold, rented, or shared your personal information with any third party for monetization or for cross-context behavioral advertising, and we will not do so. We will never trade access to your data for compensation, in money or in kind."}
            </p>
            <p>
              {"Depending on where you live, you have rights with respect to your personal information under applicable law, including the EU and UK "}
              <b>
                General Data Protection Regulation (GDPR / UK GDPR)
              </b>
              {" and the "}
              <b>
                California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA)
              </b>
              {". Other U.S. state privacy laws, for example the Virginia VCDPA, Colorado CPA, Connecticut CTDPA, and Utah UCPA, do not currently apply to Cubebrush because we are below the volume and revenue thresholds those laws set for applicability. Regardless of statutory applicability, Cubebrush extends the core data rights below to "}
              <b>
                all Users worldwide
              </b>
              {" as a matter of policy."}
            </p>
            <p className="tos-lead">
              You have the right to:
            </p>
            <ul className="tos-list">
              <li>
                <b>
                  Access
                </b>
                {" the personal information we hold about you and receive a copy in a portable format."}
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
                {" your account and the personal information associated with it, subject to limited legal or operational retention obligations (e.g., transaction records required for tax/audit purposes)."}
              </li>
              <li>
                <b>
                  Object to or restrict
                </b>
                {" certain processing of your personal information."}
              </li>
              <li>
                <b>
                  Withdraw consent
                </b>
                {" at any time where we rely on consent to process your information."}
              </li>
              <li>
                <b>
                  Opt out of sale or sharing
                </b>
                {" of your personal information. (As above, we do not sell or share it, so this right is preserved by default.)"}
              </li>
              <li>
                <b>
                  Not be discriminated against
                </b>
                {" for exercising any of these rights."}
              </li>
            </ul>
            <p>
              {"Most of these rights can be exercised self-serve from your account settings (Settings → Privacy). For requests we cannot fulfill automatically, contact us at "}
              <a href="mailto:info@cubebrush.co">
                info@cubebrush.co
              </a>
              ; we will respond within the timeframes required by applicable law (typically 30 days for GDPR, 45 days for CCPA, extendable where permitted).
            </p>
            <p>
              If you are located in the European Economic Area, the United Kingdom, or Switzerland, your personal information may be transferred to and processed in the United States. We rely on appropriate transfer mechanisms (including, where applicable, the European Commission's Standard Contractual Clauses) for such transfers.
            </p>
          </article>
          <article className="tos-section" id="cookies">
            <header className="tos-section-head">
              <span className="tos-section-num">
                16
              </span>
              <h2 className="tos-section-h">
                Cookies
              </h2>
            </header>
            <p>
              Cubebrush keeps its cookie footprint deliberately small. We do not run third-party advertising or retargeting pixels, session-recording tools, fingerprinting scripts, or third-party identity-graph cookies. Our analytics provider is privacy-preserving and does not set cookies at all.
            </p>
            <p className="tos-lead">
              Cubebrush uses cookies for:
            </p>
            <ul className="tos-list">
              <li>
                <b>
                  Authentication
                </b>
                {": keeping you signed in across pages and sessions. "}
                <i>
                  First-party; limited to the requested function.
                </i>
              </li>
              <li>
                <b>
                  Functionality
                </b>
                {": remembering your cart, wishlist, theme preference (light/dark), language, and similar UX state so the site behaves the way you set it. "}
                <i>
                  First-party; limited to the requested function.
                </i>
              </li>
              <li>
                <b>
                  Security
                </b>
                {": protecting your account and the Service from fraud and abuse (e.g., CSRF tokens, bot detection). "}
                <i>
                  Limited to security and abuse prevention.
                </i>
              </li>
              <li>
                <b>
                  Payment
                </b>
                {": Stripe, PayPal, Klarna, Afterpay, and Coinbase Business each set the cookies necessary to run their checkout / payment flows when you choose them. "}
                <i>
                  Third-party; set only when the relevant payment method is used.
                </i>
              </li>
            </ul>
            <p>
              <b>
                Analytics (no cookies).
              </b>
              {" We measure aggregate traffic and product usage with "}
              <b>
                Plausible Analytics
              </b>
              {", a privacy-preserving analytics product. Plausible does not use cookies or persistent visitor profiles. It processes request information to produce aggregate statistics without retaining raw IP addresses or user-agent strings. We do not send account identifiers or personal profiles to Plausible; this analytics service is separate from first-party account personalization. Plausible's data-collection practices are documented at "}
              <a href="https://plausible.io/data-policy" rel="noopener">
                plausible.io/data-policy
              </a>
              .
            </p>
            <p className="tos-lead">
              {"We do "}
              <em>
                not
              </em>
              {" use:"}
            </p>
            <ul className="tos-list">
              <li>
                Google Analytics or third-party advertising/retargeting pixels such as Meta Pixel or TikTok pixel.
              </li>
              <li>
                Session-recording or screen-replay tools (Hotjar, FullStory, etc.).
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
                Attribution and your controls.
              </b>
              {" The "}
              <Link href="/partner-agreement#compensation">
                Partner Agreement
              </Link>
              {" describes a 30-day referral attribution cookie. We obtain consent before optional storage, access or related processing where required, including for attribution or personalization. We explain any required choice when the feature is offered. You can withdraw consent and exercise applicable privacy rights as described in the "}
              <Link href="/privacy#cookies">
                Privacy Policy
              </Link>
              . Blocking cookies needed for sign-in or checkout may prevent those functions. Browser settings alone are not a substitute for any consent we must obtain.
            </p>
          </article>
          <article className="tos-section" id="security">
            <header className="tos-section-head">
              <span className="tos-section-num">
                17
              </span>
              <h2 className="tos-section-h">
                Security
              </h2>
            </header>
            <p>
              Cubebrush cares about the integrity and security of your personal information. We use industry-standard safeguards, including encryption in transit (TLS) and at rest, scoped access controls, regular security review, and the option of two-factor authentication and passkeys for every account. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.
            </p>
            <p>
              If we become aware of a security incident affecting your personal information, we will notify you and, where applicable, the relevant regulators in accordance with applicable law.
            </p>
          </article>
          <article className="tos-section" id="dmca">
            <header className="tos-section-head">
              <span className="tos-section-num">
                18
              </span>
              <h2 className="tos-section-h">
                DMCA Notice & Counter-Notice
              </h2>
            </header>
            <p>
              It is Cubebrush's policy to respond to alleged infringement notices that comply with the Digital Millennium Copyright Act of 1998 ("DMCA"). If you believe your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify Cubebrush's copyright agent.
            </p>
            <p className="tos-lead">
              For your complaint to be valid under the DMCA, you must provide in writing:
            </p>
            <ul className="tos-list">
              <li>
                An electronic or physical signature of a person authorized to act on behalf of the copyright owner.
              </li>
              <li>
                Identification of the copyrighted work that you claim has been infringed.
              </li>
              <li>
                Identification of the material that is claimed to be infringing and where it is located on the Service.
              </li>
              <li>
                Information reasonably sufficient to permit us to contact you (address, telephone number, email).
              </li>
              <li>
                A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law.
              </li>
              <li>
                A statement, made under penalty of perjury, that the above information is accurate and that you are the copyright owner or authorized to act on the owner's behalf.
              </li>
            </ul>
            <p>
              The above information must be submitted to the designated DMCA agent:
            </p>
            <dl className="tos-card">
              <dt>
                Attn
              </dt>
              <dd>
                DMCA Notice: Copyright Agent
              </dd>
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
                Email
              </dt>
              <dd>
                <a href="mailto:copyrightagent@cubebrush.co">
                  copyrightagent@cubebrush.co
                </a>
              </dd>
            </dl>
            <p>
              Under federal law, if you knowingly misrepresent that online material is infringing, you may be subject to criminal prosecution for perjury and civil penalties, including monetary damages, court costs, and attorneys' fees.
            </p>
            <p>
              <b>
                Counter-notification.
              </b>
              {" If your User Content has been removed in response to a DMCA notice and you believe the removal was a mistake or misidentification, you may submit a counter-notification to "}
              <a href="mailto:copyrightagent@cubebrush.co">
                copyrightagent@cubebrush.co
              </a>
              {" containing: (i) your physical or electronic signature; (ii) identification of the material that was removed and the location at which it appeared before removal; (iii) a statement under penalty of perjury that you have a good-faith belief the material was removed as a result of mistake or misidentification; and (iv) your name, address, and telephone number, plus a statement that you consent to the jurisdiction of the federal court in your judicial district (or, if outside the United States, of any judicial district in which Cubebrush may be found) and that you will accept service of process from the original complainant."}
            </p>
            <p>
              Cubebrush has adopted a policy of terminating, in appropriate circumstances, Users deemed to be repeat infringers, and may limit access to the Service or terminate the accounts of any Users who infringe the intellectual property rights of others.
            </p>
          </article>
          <article className="tos-section" id="dsa">
            <header className="tos-section-head">
              <span className="tos-section-num">
                19
              </span>
              <h2 className="tos-section-h">
                Notice & Action: EU Digital Services Act
              </h2>
            </header>
            <p>
              {"If you are a recipient of the Service located in the European Union, you may use the channels described in §18 (DMCA) and §05 (Service Rules), or contact "}
              <a href="mailto:trust@cubebrush.co">
                trust@cubebrush.co
              </a>
              , to submit a notice that specific content available through the Service is, in your opinion, illegal under EU or Member State law, in accordance with Article 16 of the EU Digital Services Act (Regulation (EU) 2022/2065).
            </p>
            <p>
              Your notice should include: (a) a sufficiently substantiated explanation of why you consider the content illegal; (b) a clear indication of the exact electronic location of the content (e.g., URL); (c) your name and email (unless the content involves Article 16 categories of crime against minors, in which case anonymous reporting is supported); and (d) a statement confirming your good-faith belief that the information is accurate and complete.
            </p>
            <p>
              {"We will acknowledge receipt of valid notices, act on them in a timely, diligent, non-arbitrary and objective manner, and notify the affected User of any decision to restrict access, with reasons. Affected Users and notice submitters may contest our decisions through our internal complaint-handling system at "}
              <a href="mailto:appeals@cubebrush.co">
                appeals@cubebrush.co
              </a>
              , free of charge, and may also use a certified out-of-court dispute settlement body in accordance with Article 21 of the DSA.
            </p>
          </article>
          <article className="tos-section" id="third-party">
            <header className="tos-section-head">
              <span className="tos-section-num">
                20
              </span>
              <h2 className="tos-section-h">
                Third-Party Links
              </h2>
            </header>
            <p>
              The Service may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Cubebrush. Cubebrush does not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access a third-party website from the Service, you do so at your own risk, and you understand that this Agreement and Cubebrush's Privacy Policy do not apply to your use of such sites. Your dealings with advertisers found on the Service, including payment and delivery of goods and any warranties, are solely between you and such advertisers.
            </p>
          </article>
          <article className="tos-section" id="indemnity">
            <header className="tos-section-head">
              <span className="tos-section-num">
                21
              </span>
              <h2 className="tos-section-h">
                Indemnity
              </h2>
            </header>
            <p>
              You agree to defend, indemnify and hold harmless Cubebrush and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including attorneys' fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of this Agreement; (iii) your violation of any third-party right, including any right of privacy or Intellectual Property Rights; (iv) your violation of any applicable law, rule or regulation; (v) any claim or damages that arise as a result of any of your User Content; or (vi) any other party's access and use of the Service with your unique username, password or other appropriate security code.
            </p>
          </article>
          <article className="tos-section" id="no-warranty">
            <header className="tos-section-head">
              <span className="tos-section-num">
                22
              </span>
              <h2 className="tos-section-h">
                No Warranty
              </h2>
            </header>
            <p className="tos-allcaps">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. USE OF THE SERVICE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="tos-allcaps">
              CUBEBRUSH, ITS SUBSIDIARIES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR OBTAINED THROUGH USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK.
            </p>
            <p className="tos-allcaps">
              CUBEBRUSH DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE CUBEBRUSH SERVICE OR ANY HYPERLINKED WEBSITE.
            </p>
          </article>
          <article className="tos-section" id="liability">
            <header className="tos-section-head">
              <span className="tos-section-num">
                23
              </span>
              <h2 className="tos-section-h">
                Limitation of Liability
              </h2>
            </header>
            <p className="tos-allcaps">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CUBEBRUSH, ITS MANAGERS, MEMBERS, AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE GOODS OR USE OF, OR INABILITY TO USE, THIS SERVICE.
            </p>
            <p className="tos-allcaps">
              IN NO EVENT SHALL CUBEBRUSH BE LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID TO CUBEBRUSH HEREUNDER.
            </p>
            <p className="tos-allcaps">
              THIS LIMITATION OF LIABILITY APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF CUBEBRUSH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or the limitation of incidental or consequential damages, so the above limitations may not apply to you. This Agreement gives you specific legal rights, and you may also have other rights which vary from state to state. Nothing in this Agreement excludes or limits any liability that cannot be excluded or limited under applicable law (including, where applicable, consumer-protection rights under EU/UK law).
            </p>
          </article>
          <article className="tos-section" id="general">
            <header className="tos-section-head">
              <span className="tos-section-num">
                24
              </span>
              <h2 className="tos-section-h">
                General
              </h2>
            </header>
            <p>
              <b>
                Assignment.
              </b>
              {" This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Cubebrush without restriction. Any attempted transfer or assignment in violation hereof shall be null and void."}
            </p>
            <p>
              <b>
                Arbitration.
              </b>
              {" You agree that any claim or dispute between you and Cubebrush shall be resolved by binding arbitration heard by a retired judge with Judicate West in Orange County, California, governed by Judicate West's rules of procedure. By agreeing to this clause, you and Cubebrush waive the right to a trial by a judge or jury. Arbitration shall proceed solely on an individual basis: no class actions, no representative claims, no joinder unless agreed in writing by all parties."}
            </p>
            <p>
              <b>
                Governing law & venue.
              </b>
              {" This Agreement will be governed by the laws of the State of California. Venue for any dispute not subject to arbitration lies solely in the Federal and State courts in the County of Orange, California. Nothing in this section deprives you of any mandatory consumer-protection right in the country where you reside."}
            </p>
            <p>
              <b>
                Sanctions & export.
              </b>
              {" You may not use the Service if you are a resident of, or located in, any country or region subject to comprehensive U.S. sanctions, or if you are a person or entity listed on the OFAC Specially Designated Nationals (SDN) list or any equivalent restricted-party list."}
            </p>
            <p>
              <b>
                Attorney fees.
              </b>
              {" In any dispute concerning any provision of this Agreement, the prevailing party shall be awarded attorney fees and costs, including collection costs, bankruptcy proceedings, appeal, and enforcement of judgment."}
            </p>
            <p>
              <b>
                Notification procedures.
              </b>
              {" Cubebrush may provide notifications via email, push notifications, written notice, or by posting on our website. We recommend adding "}
              <a href="mailto:hello@cubebrush.co">
                hello@cubebrush.co
              </a>
              {" to your email address book to help ensure delivery. We may modify this Agreement from time to time; the \"last revised\" date at the top of this page will be updated when we do, and your continued use of the Service constitutes acceptance."}
            </p>
            <p>
              <b>
                Entire agreement / severability.
              </b>
              {" This Agreement constitutes the entire agreement between you and Cubebrush concerning the Service. If any provision is deemed invalid, the remaining provisions remain in full force and effect."}
            </p>
            <p>
              <b>
                No waiver.
              </b>
              {" No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term."}
            </p>
            <p>
              <b>
                Contact.
              </b>
              {" Please contact us at "}
              <a href="mailto:hello@cubebrush.co">
                hello@cubebrush.co
              </a>
              {" with any questions regarding this Agreement."}
            </p>
          </article>
        </div>
        <div className="tos-end">
          <div className="tos-end-eyebrow">
            End of agreement
          </div>
          <div className="tos-end-body">
            {"This Agreement was last revised on "}
            <b>
              September 7, 2026
            </b>
            {". For questions, reach us at "}
            <a href="mailto:hello@cubebrush.co">
              hello@cubebrush.co
            </a>
            {"; for privacy requests, "}
            <a href="mailto:info@cubebrush.co">
              info@cubebrush.co
            </a>
            .
          </div>
          <div className="tos-end-row">
            <Link className="tos-end-btn" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="tos-end-btn" href="/licenses">
              Licenses
            </Link>
            <button className="tos-end-btn tos-end-btn--cta" type="button">
              <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-0cf17b6e-ns")} />
              </svg>
              Top
            </button>
          </div>
        </div>
      </section>
      <div aria-label="Cookie notice" className="tos-cookie" data-tos-cookie="" role="region">
        <span aria-hidden="true" className="tos-cookie-icon">
          <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#glyph-923219df-ns")} />
          </svg>
        </span>
        <div className="tos-cookie-body">
          <b>
            Cookies & privacy.
          </b>
          {" We use cookies for requested features and security, and cookieless Plausible analytics. Optional attribution and personalization are subject to applicable choices. "}
          <Link href="/terms#cookies">
            Details
          </Link>
        </div>
        <button className="tos-cookie-ok" type="button">
          Got it
        </button>
      </div>
    </>
  );
}
