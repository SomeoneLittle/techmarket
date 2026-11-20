import Link from "next/link";
import { asset } from "@/lib/asset";

export function DistributionAgreement() {
  return (
    <>
      <section aria-labelledby="la-title" className="la-page">
        <div className="la-eyebrow">
          Legal · Sellers · Cubebrush, LLC
        </div>
        <h1 className="la-h1" id="la-title">
          Distribution Agreement
        </h1>
        <p className="la-lede">
          {"Please read this Agreement carefully. It explains your rights and obligations related to Cubebrush's resale and distribution of your digital Content through Cubebrush's proprietary online service (\"Website\"). By opening a digital storefront (\"Store\") on Cubebrush, you (\"Seller\") agree to be bound by this Agreement, the "}
          <Link href="/terms">
            Terms of Service
          </Link>
          , and all applicable License Terms.
        </p>
        <p className="la-lede">
          If you open a Store on behalf of an organization or other entity, "you" includes that entity, and you represent and warrant that you have authority to bind it. The Agreement is entered into between Cubebrush, LLC ("Cubebrush"), a California limited liability company, and you (the Seller), as of the date you accept its terms by opening a Store (the "Effective Date").
        </p>
        <div className="la-revstamp">
          <span aria-hidden="true" className="dot" />
          <span>
            {"Last revised "}
            <b>
              May 21, 2026
            </b>
          </span>
        </div>
        <section aria-labelledby="la-tldr-h" className="la-tldr">
          <span className="la-tldr-pill">
            In plain English
          </span>
          <div className="la-tldr-title" id="la-tldr-h">
            If you only read the highlights
          </div>
          <div className="la-tldr-sub">
            A summary of the key obligations. The full agreement controls if there's ever a conflict.
          </div>
          <ul>
            <li className="la-tldr-yes">
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You keep ownership of your work.
                </b>
                {" Posting it on Cubebrush doesn't transfer copyright; you grant us a license to display and distribute it under the licenses you choose."}
              </span>
            </li>
            <li className="la-tldr-no">
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  We never use your work to train AI.
                </b>
                {" Not us, not third parties. See "}
                <Link href="/terms#ai">
                  Terms §09
                </Link>
                .
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-0a6f763a-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Payouts via PayPal
                </b>
                {" when your balance is at least "}
                <b>
                  $20
                </b>
                {", or by "}
                <b>
                  bank wire
                </b>
                {" where PayPal isn't supported. You're responsible for keeping payout and tax info accurate."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f2144d9f-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  All purchases download immediately.
                </b>
                {" No barriers to access, no third-party hoops. Asset files are hosted on Cubebrush."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You can unlist or delete a product any time.
                </b>
                {" Customers who already bought it keep their licenses and can re-download."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-c6bb1d52-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You must own the rights to everything you upload.
                </b>
                {" If a third party shows up with a valid claim, we may share your contact info with them so it can be resolved."}
              </span>
            </li>
            <li className="la-tldr-no">
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  No off-platform redirection or advertising.
                </b>
                {" Don't use your Cubebrush store to send buyers somewhere else to purchase."}
              </span>
            </li>
          </ul>
        </section>
        <div className="la-jump">
          <button aria-controls="la-toc" aria-expanded="false" aria-haspopup="dialog" className="la-jump-btn" type="button">
            <span className="la-jump-btn-lbl">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-21ac43b3-ns")} />
              </svg>
              <span>
                01 · Definitions
              </span>
            </span>
            <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-dd98d7fe-ns")} />
            </svg>
          </button>
        </div>
        <div aria-label="Jump to section" aria-modal="true" className="la-toc-host" id="la-toc" inert role="dialog">
          <div className="la-toc-scrim" />
          <div className="la-toc-sheet">
            <div aria-hidden="true" className="la-toc-handle">
              <span />
            </div>
            <div className="la-toc-head">
              <div>
                <div className="la-toc-eyebrow">
                  Contents
                </div>
                <h2>
                  Jump to section
                </h2>
              </div>
              <button aria-label="Close" className="la-toc-close" type="button">
                <svg viewBox="0 0 24 24" height="20" width="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-36906222-ns")} />
                </svg>
              </button>
            </div>
            <nav aria-label="Sections of this page" className="la-toc-nav">
              <a data-section="definitions" href="#definitions">
                <span className="la-toc-num">
                  01
                </span>
                <span className="la-toc-lbl">
                  Definitions
                </span>
              </a>
              <a data-section="license" href="#license">
                <span className="la-toc-num">
                  02
                </span>
                <span className="la-toc-lbl">
                  License Grant
                </span>
              </a>
              <a data-section="content" href="#content">
                <span className="la-toc-num">
                  03
                </span>
                <span className="la-toc-lbl">
                  Your Content
                </span>
              </a>
              <a data-section="delivery" href="#delivery">
                <span className="la-toc-num">
                  04
                </span>
                <span className="la-toc-lbl">
                  Asset Delivery
                </span>
              </a>
              <a data-section="resolution" href="#resolution">
                <span className="la-toc-num">
                  05
                </span>
                <span className="la-toc-lbl">
                  Resolution Process
                </span>
              </a>
              <a data-section="payouts" href="#payouts">
                <span className="la-toc-num">
                  06
                </span>
                <span className="la-toc-lbl">
                  Payouts & Earnings
                </span>
              </a>
              <a data-section="warranty" href="#warranty">
                <span className="la-toc-num">
                  07
                </span>
                <span className="la-toc-lbl">
                  Warranty Disclaimer
                </span>
              </a>
              <a data-section="liability" href="#liability">
                <span className="la-toc-num">
                  08
                </span>
                <span className="la-toc-lbl">
                  Limitation of Liability
                </span>
              </a>
              <a data-section="general" href="#general">
                <span className="la-toc-num">
                  09
                </span>
                <span className="la-toc-lbl">
                  General
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="la-body">
          <article className="la-section" id="definitions">
            <header className="la-section-head">
              <span className="la-section-num">
                01
              </span>
              <h2 className="la-section-h">
                Definitions
              </h2>
            </header>
            <p>
              For the purposes of this Agreement, the following terms have the indicated meanings:
            </p>
            <ul className="la-list">
              <li>
                <b>
                  Website
                </b>
                : the Cubebrush website and subdomains located at cubebrush.co.
              </li>
              <li>
                <b>
                  Content
                </b>
                : content you upload to your Cubebrush Store, or otherwise provide to Cubebrush for placement on the Website, which Cubebrush has approved.
              </li>
              <li>
                <b>
                  Customer
                </b>
                : any natural person, company, or other legal entity that acquires licenses to Content via the Website.
              </li>
              <li>
                <b>
                  Party / Parties
                </b>
                : Cubebrush and/or you.
              </li>
              <li>
                <b>
                  Payment Processor
                </b>
                : any party authorized by Cubebrush to provide payment-processing services for payments between Customers and Cubebrush, or between Cubebrush and you, in connection with Content distributed via the Website. As of the date of this Agreement, our Payment Processors for incoming Buyer payments include Stripe, PayPal, Klarna, Afterpay, and Coinbase Business; payouts to you are sent via PayPal, or by bank wire transfer where PayPal is not supported in your region.
              </li>
            </ul>
          </article>
          <article className="la-section" id="license">
            <header className="la-section-head">
              <span className="la-section-num">
                02
              </span>
              <h2 className="la-section-h">
                License Grant
              </h2>
            </header>
            <p className="la-sub">
              2.1 · License to Cubebrush.
            </p>
            <p>
              You hereby grant to Cubebrush a non-exclusive, worldwide, perpetual, non-transferable, non-sublicensable, and royalty-free license to copy, perform, display, distribute, transmit, modify, and use the Content:
            </p>
            <ul className="la-list">
              <li>
                to create, display, and use the Content for administrative and demonstration purposes in connection with the operation, promotion, and marketing of the marketplace and in connection with the promotion, marketing, sales, and distribution of the Content via the Website; and
              </li>
              <li>
                to distribute and grant Digital Rights in the Content to Customers via the Website.
              </li>
            </ul>
            <p className="la-promise">
              <b>
                This license does not include any right to use the Content to train, fine-tune, evaluate, or develop any artificial-intelligence or machine-learning model
              </b>
              {", whether ours, a third party's, or an open-source model. We do not, have not, and will not do so. See "}
              <Link href="/terms#ai">
                Terms §09
              </Link>
              .
            </p>
            <p className="la-sub">
              2.2 · License to Customers.
            </p>
            <p>
              {"You agree that Cubebrush may grant to Customers a non-exclusive, worldwide, and perpetual license to download, use, copy, post, modify, promote, license, sell, publicly perform, publicly display, digitally perform, distribute, or transmit the Content for personal, promotional, and/or commercial purposes (\"Digital Rights\"), in each case as defined by the specific Cubebrush License you select for each product. Both Parties expressly acknowledge that distribution of the Content to Customers via the Website is "}
              <b>
                not a sale
              </b>
              {" of the Content but the grant of Digital Rights to Customers."}
            </p>
          </article>
          <article className="la-section" id="content">
            <header className="la-section-head">
              <span className="la-section-num">
                03
              </span>
              <h2 className="la-section-h">
                Your Content
              </h2>
            </header>
            <p className="la-sub">
              3.1 · You keep your rights.
            </p>
            <p>
              Except for the rights you grant to Cubebrush in Section 2 above, Cubebrush expressly acknowledges and agrees that it obtains no right, title, or interest from you (or your licensors) under this Agreement in or to any Content you supply, including any intellectual-property rights subsisting in that Content. At any time, you may delete or unpublish Content you previously uploaded to your Store; however, Cubebrush may continue to make such Content available for download to Customers who have already purchased Digital Rights to it.
            </p>
            <p className="la-sub">
              3.2 · Appropriate rights.
            </p>
            <p>
              You represent and warrant that you have all intellectual-property rights necessary to grant Cubebrush the rights set forth in this Agreement, including all necessary patent, trademark, trade-secret, copyright, and other proprietary rights, in and to your Content. If third-party materials are included in the Content, you represent and warrant that you have the right to distribute the third-party material in the Content. You agree that you will not submit material to the marketplace that is copyrighted, protected by trade secret, or otherwise subject to third-party proprietary rights, including patent, privacy, and publicity rights, unless you are the owner of such rights or have permission from the rightful owner.
            </p>
            <p className="la-sub">
              3.3 · Cubebrush licenses.
            </p>
            <p>
              You affirm that all Content is cleared to be sold under one of the Cubebrush License types. The current license menu, with the rights each one grants to Customers, lives at:
            </p>
            <dl className="la-card">
              <dt>
                License menu
              </dt>
              <dd>
                <Link href="/licenses">
                  cubebrush.co/licenses.html
                </Link>
              </dd>
              <dt>
                Common types
              </dt>
              <dd>
                Standard, Extended, Editorial, Non-Commercial
              </dd>
              <dt>
                Per-product
              </dt>
              <dd>
                You select a license for each product at upload, and may change it for future buyers without affecting past sales.
              </dd>
            </dl>
            <p className="la-sub">
              3.4 · Copyright claims.
            </p>
            <p>
              {"You expressly acknowledge and agree that Cubebrush shall be entitled to forward your name, address, and other contact details to any third party that reasonably claims you do not have all necessary intellectual-property rights, including all necessary patent, trademark, trade-secret, copyright, or other proprietary rights, in and to your Content. The full DMCA notice + counter-notification procedure is in "}
              <Link href="/terms#dmca">
                Terms §18
              </Link>
              .
            </p>
            <p className="la-sub">
              3.5 · Advertising.
            </p>
            <p>
              You will not use Cubebrush, your Store, listings, profile, messages, or anything else, to advertise other services, sites, or products. This includes embedding links in your product descriptions, file READMEs, or download bundles that direct buyers elsewhere to purchase similar Goods.
            </p>
          </article>
          <article className="la-section" id="delivery">
            <header className="la-section-head">
              <span className="la-section-num">
                04
              </span>
              <h2 className="la-section-h">
                Asset Delivery
              </h2>
            </header>
            <p>
              All Content must be delivered immediately after purchase, with no barriers to immediate download. Whenever required, all asset files must be hosted on Cubebrush. You must not require a Buyer to provide personal information, sign up for another service, complete a marketing form, or perform any other action in order to access licensed Content. This includes (but is not limited to) gating downloads behind a third-party newsletter, a Discord join, or a separate account creation.
            </p>
            <p>
              {"For very large asset bundles where direct download is impractical, contact "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {" in advance to arrange an approved delivery method that still complies with the no-barrier rule above."}
            </p>
          </article>
          <article className="la-section" id="resolution">
            <header className="la-section-head">
              <span className="la-section-num">
                05
              </span>
              <h2 className="la-section-h">
                Resolution Process for Transactions
              </h2>
            </header>
            <p>
              All parties share the responsibility for making sure that purchases facilitated by the Website are satisfactory and hassle-free. Cubebrush may, in connection with the sale of Digital Rights to Customers and in its sole discretion, issue refunds, rebates, and credits. You agree to permit us to make a final decision, in our sole discretion, on any disputes. We reserve the right to fix any processing errors we discover by debiting or crediting your balance.
            </p>
            <p>
              {"Refund rates are tracked at the account level. If your refund rate materially exceeds the marketplace average for similar products, your Account may be subject to additional reviews, withheld payouts pending review, or, in cases of persistent issues, termination. See "}
              <Link href="/terms#termination">
                Terms §13
              </Link>
              .
            </p>
          </article>
          <article className="la-section" id="payouts">
            <header className="la-section-head">
              <span className="la-section-num">
                06
              </span>
              <h2 className="la-section-h">
                Payouts & Earnings
              </h2>
            </header>
            <p>
              {"Unless otherwise agreed by the Parties in writing, Cubebrush will send payouts via PayPal to the email address on your payout settings, or by bank wire transfer where PayPal is not supported in your region. Payouts follow Cubebrush's published timeframes and balance requirements. Bank wire payouts have separate terms. Email "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {" when you need one. Payouts may only be made if the total processed amount due to you totals at least "}
              <b>
                $20
              </b>
              . Unpaid amounts due shall accrue until the following payout period in which the amount due is at least $20.
            </p>
            <p>
              Cubebrush reserves the right to withhold payment, or charge back to your account, any amounts otherwise due to us under these Terms or due to any breach of these Terms by you, pending Cubebrush's reasonable investigation of such breach. To ensure proper payment, you are solely responsible for providing and maintaining accurate contact and payment information associated with your account, including, without limitation, applicable tax information. If we believe that we are obligated to obtain tax information, and you do not provide this information to us after we have requested it, we may withhold your payments until you do, or until you otherwise satisfy us that you are not a person or entity from whom we are required to obtain tax information.
            </p>
            <p>
              Any third-party fees related to returned or canceled payments due to a contact or payment-information error or omission may be deducted from the newly issued payment. You agree to pay all applicable taxes or charges imposed by any government entity in connection with your participation in the Service.
            </p>
            <p>
              If you dispute any payment, you must notify Cubebrush in writing within thirty (30) days of such payment. Failure to so notify Cubebrush shall result in the waiver by you of any claim relating to such disputed payment. Payment shall be calculated solely based on records maintained by Cubebrush; no other measurements or statistics of any kind shall be accepted by Cubebrush or have any effect under these Terms. We may withhold any taxes or other amounts from payments due to you as required by law.
            </p>
            <p>
              To protect against the risk of liability, we may request that our Payment Processor hold seller funds based on certain factors, including but not limited to selling history, seller performance, or the filing of a dispute claim.
            </p>
          </article>
          <article className="la-section" id="warranty">
            <header className="la-section-head">
              <span className="la-section-num">
                07
              </span>
              <h2 className="la-section-h">
                Warranty Disclaimer
              </h2>
            </header>
            <p className="la-allcaps">
              EACH PARTY'S PRODUCTS AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." NEITHER PARTY MAKES ANY REPRESENTATIONS OR WARRANTIES, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, WITH RESPECT TO ITS PRODUCTS OR ANY PART THEREOF, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTY OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THOSE ARISING FROM COURSE OF PERFORMANCE, DEALING, USAGE OR TRADE.
            </p>
            <p className="la-allcaps">
              WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, NEITHER PARTY WARRANTS THAT ITS PRODUCTS OR SERVICES WILL BE FREE OF DEFECTS, INACCURACIES, OR ERRORS, WILL MEET THE OTHER PARTY'S OR ANY CUSTOMERS' REQUIREMENTS, OR WILL COMPLY WITH APPLICABLE LAWS.
            </p>
          </article>
          <article className="la-section" id="liability">
            <header className="la-section-head">
              <span className="la-section-num">
                08
              </span>
              <h2 className="la-section-h">
                Limitation of Liability
              </h2>
            </header>
            <p className="la-allcaps">
              IN NO EVENT WILL EITHER PARTY BE LIABLE UNDER ANY THEORY OF LIABILITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, ANY SUCH DAMAGES ARISING FROM BREACH OF CONTRACT OR WARRANTY, OR FROM NEGLIGENCE OR STRICT LIABILITY), INCLUDING WITHOUT LIMITATION LOSS OF PROFITS OR REVENUE, OR FROM ANY DEFECT OR ERROR IN ITS PRODUCTS OR SERVICES, EVEN IF A PARTY HAS BEEN ADVISED OR SHOULD KNOW OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="la-allcaps">
              IN NO EVENT WILL THE AGGREGATE LIABILITY OF CUBEBRUSH ARISING FROM, RELATING TO, OR IN CONNECTION WITH THIS AGREEMENT EXCEED THE AMOUNTS PAID TO SELLER UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
            </p>
            <p>
              Nothing in this Agreement excludes or limits any liability that cannot be excluded or limited under applicable law (including, where applicable, consumer-protection rights under EU/UK law).
            </p>
          </article>
          <article className="la-section" id="general">
            <header className="la-section-head">
              <span className="la-section-num">
                09
              </span>
              <h2 className="la-section-h">
                General
              </h2>
            </header>
            <p>
              <b>
                Independent contractors.
              </b>
              {" The relationship between you and Cubebrush is that of licensor and licensee. Neither Party shall be deemed to be an agent of the other for any purpose; the relationship between the Parties shall only be that of independent contractors. Neither Party shall have any right or authority to assume or create any obligations or to make any representations or warranties on behalf of the other Party, whether express or implied, or to bind the other Party in any respect whatsoever."}
            </p>
            <p>
              <b>
                Governing law & jurisdiction.
              </b>
              {" This Agreement is governed and interpreted in accordance with the laws of the State of California, U.S.A., without reference to conflicts-of-laws principles and excluding the United Nations Convention on Contracts for the International Sale of Goods. The Parties consent to the exclusive jurisdiction of, and venue in, Orange County, California, U.S.A. for the adjudication of any disputes arising hereunder. Disputes are otherwise subject to the arbitration clause in "}
              <Link href="/terms#general">
                Terms §24
              </Link>
              .
            </p>
            <p>
              <b>
                Assignment.
              </b>
              {" Neither Party shall assign, delegate, or otherwise transfer its rights or obligations under this Agreement, by operation of law or otherwise, without the prior written consent of the other Party (to be granted or withheld in its reasonable discretion); except that Cubebrush may assign this Agreement freely in connection with a merger, acquisition, sale of substantially all of its assets or stock, financing, reorganization, or similar transaction. This Agreement will inure to the benefit of the Parties and their permitted successors and assigns."}
            </p>
            <p>
              <b>
                Merger, modification & waiver.
              </b>
              {" This Agreement constitutes the entire agreement between Cubebrush and Seller with respect to the subject matter hereof and merges all prior negotiations and drafts of the Parties with regard thereto. No modification of or amendment to this Agreement, nor any waiver of any rights under this Agreement, shall be effective unless in writing. The waiver of one breach or default, or any delay in exercising any rights, shall not constitute a waiver of any subsequent breach or default."}
            </p>
            <p>
              <b>
                Severability.
              </b>
              {" If any of the provisions of this Agreement is held by a court of competent jurisdiction to be invalid or unenforceable under any applicable statute or rule of law, it shall be replaced with the valid provision that most closely reflects the intent of the Parties, and the remaining provisions shall continue in full force and effect."}
            </p>
            <p>
              <b>
                Counterparts.
              </b>
              {" This Agreement may be executed in counterparts, including electronic acceptance, each of which shall be deemed an original and all of which together shall constitute one instrument."}
            </p>
            <p>
              <b>
                Contact.
              </b>
              {" Questions about this Agreement: "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {". Payout questions: "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {". Privacy: "}
              <a href="mailto:info@cubebrush.co">
                info@cubebrush.co
              </a>
              .
            </p>
          </article>
        </div>
        <div className="la-end">
          <div className="la-end-eyebrow">
            End of agreement
          </div>
          <div className="la-end-body">
            {"This Agreement was last revised on "}
            <b>
              May 21, 2026
            </b>
            {". For questions, email "}
            <a href="mailto:support@cubebrush.co">
              support@cubebrush.co
            </a>
            .
          </div>
          <div className="la-end-row">
            <Link className="la-end-btn" href="/terms">
              Terms of Service
            </Link>
            <Link className="la-end-btn" href="/licenses">
              License menu
            </Link>
            <Link className="la-end-btn" href="/open_store">
              Open a store
            </Link>
            <button className="la-end-btn la-end-btn--cta" type="button">
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
