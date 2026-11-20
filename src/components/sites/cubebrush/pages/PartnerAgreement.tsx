import Link from "next/link";
import { asset } from "@/lib/asset";

export function PartnerAgreement() {
  return (
    <>
      <section aria-labelledby="la-title" className="la-page">
        <div className="la-eyebrow">
          Legal · Partners · Cubebrush, LLC
        </div>
        <h1 className="la-h1" id="la-title">
          Partner Agreement
        </h1>
        <p className="la-lede">
          {"Please read this Agreement carefully. It explains the terms by which you may participate as a Cubebrush Partner. By becoming a Partner, you agree to be bound by this Agreement, the "}
          <Link href="/terms">
            Terms of Service
          </Link>
          {", the "}
          <Link href="/distribution-agreement">
            Distribution Agreement
          </Link>
          , and all applicable License Terms.
        </p>
        <p className="la-lede">
          If you become a Partner on behalf of an organization or other entity, "you" includes that entity and you represent and warrant that you have authority to bind it. This Agreement is entered into between Cubebrush, LLC ("Cubebrush"), a California limited liability company, and you (the "Partner"), as of the date you accept its terms by creating a Partner account (the "Effective Date").
        </p>
        <p className="la-lede">
          Cubebrush operates a proprietary online platform allowing independent creators around the world to easily open a digital storefront to share and sell pre-made digital assets or resources to online guests or registered users visiting the platform. The Partner operates the websites set forth on their Partner profile. The Parties enter into this Agreement to set forth the terms and conditions under which the Partner will promote Cubebrush's products and services on the Partner's Site(s).
        </p>
        <div className="la-revstamp">
          <span aria-hidden="true" className="dot" />
          <span>
            {"Last revised "}
            <b>
              September 7, 2026
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
            A summary of how the program works. The full agreement controls if there's ever a conflict.
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
                  You earn 20%
                </b>
                {" of the price paid by a Qualified Customer (less refunds and taxes) for any product they buy on Cubebrush.co, not just the one you linked to."}
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
                  30-day attribution window per click
                </b>
                {", and the program lasts "}
                <b>
                  1 year
                </b>
                {" from when you sign up (renewable)."}
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
                  Excluded sales:
                </b>
                {" sales on your own Cubebrush storefront, sales attributed to another partner's link first, or buyers who changed browser/device or cleared their cookies after your link."}
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
                {" where PayPal isn't supported. Same flow as sellers. See "}
                <a href="#payment">
                  §3.4
                </a>
                .
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-28879ae9-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  You can use Cubebrush's logo + marks
                </b>
                {" only to identify the brand in connection with your links. No standalone use, no design modifications."}
              </span>
            </li>
            <li>
              <span aria-hidden="true" className="la-tldr-mark">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-572b8e20-ns")} />
                </svg>
              </span>
              <span>
                <b>
                  Either side can end the program
                </b>
                {" with 10 days' notice. Your balance up to that point is yours, payable on schedule."}
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
              <a data-section="trademark" href="#trademark">
                <span className="la-toc-num">
                  02
                </span>
                <span className="la-toc-lbl">
                  Trademark License Grant
                </span>
              </a>
              <a data-section="compensation" href="#compensation">
                <span className="la-toc-num">
                  03
                </span>
                <span className="la-toc-lbl">
                  Compensation
                </span>
              </a>
              <a data-section="ownership" href="#ownership">
                <span className="la-toc-num">
                  04
                </span>
                <span className="la-toc-lbl">
                  Ownership
                </span>
              </a>
              <a data-section="term" href="#term">
                <span className="la-toc-num">
                  05
                </span>
                <span className="la-toc-lbl">
                  Term and Termination
                </span>
              </a>
              <a data-section="warranty" href="#warranty">
                <span className="la-toc-num">
                  06
                </span>
                <span className="la-toc-lbl">
                  Warranty Disclaimer
                </span>
              </a>
              <a data-section="liability" href="#liability">
                <span className="la-toc-num">
                  07
                </span>
                <span className="la-toc-lbl">
                  Limitation of Liability
                </span>
              </a>
              <a data-section="general" href="#general">
                <span className="la-toc-num">
                  08
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
                  Affiliate Links
                </b>
                : embedded graphics, icons, text, or HTML code containing a unique hypertext pointer to a URL on Cubebrush's Site.
              </li>
              <li>
                <b>
                  Content
                </b>
                : all materials comprising a Party's Site, including any images, photographs, illustrations, graphics, audio clips, video clips, text, and Marks.
              </li>
              <li>
                <b>
                  Cubebrush's Site
                </b>
                : the Cubebrush website and subdomains located at cubebrush.co.
              </li>
              <li>
                <b>
                  Intellectual Property Rights
                </b>
                : all patent rights, copyright rights, mask-work rights, moral rights, rights of publicity, trademark, trade-dress and service-mark rights, goodwill, trade-secret rights, and other intellectual-property rights as may now exist or hereafter come into existence, and all applications therefor and registrations, renewals, and extensions thereof, under the laws of any state, country, territory, or other jurisdiction.
              </li>
              <li>
                <b>
                  Marks
                </b>
                : all trademarks, service marks, trade names, logos, words, or symbols identifying either Party or either Party's products or services.
              </li>
              <li>
                <b>
                  Party / Parties
                </b>
                : Cubebrush and/or the Partner.
              </li>
              <li>
                <b>
                  Qualified Customer
                </b>
                : a person who makes a purchase on Cubebrush's Site (excluding purchases on the Partner's own storefront on Cubebrush) who was referred to Cubebrush's Site by the Partner and originated from the Partner's Site(s).
              </li>
              <li>
                <b>
                  Partner's Site(s)
                </b>
                : one or more websites or web services owned or controlled by the Partner, or upon which the Partner has an account or membership, on which the Partner places Affiliate Links to Cubebrush's Site. The Partner represents and warrants to Cubebrush that they have sufficient right, title, interest, authority, or permission, as applicable, to place such Links on the Partner's Site(s).
              </li>
            </ul>
          </article>
          <article className="la-section" id="trademark">
            <header className="la-section-head">
              <span className="la-section-num">
                02
              </span>
              <h2 className="la-section-h">
                Trademark License Grant
              </h2>
            </header>
            <p className="la-sub">
              2.1 · Grant to Partner.
            </p>
            <p>
              Subject to the terms and conditions of this Agreement, Cubebrush grants the Partner a non-transferable, non-exclusive license to use Cubebrush's Marks solely for the purpose of fulfilling the Partner's obligations under this Agreement.
            </p>
            <p className="la-sub">
              2.2 · No other rights.
            </p>
            <p>
              Except as expressly provided herein, the Partner and Cubebrush agree to:
            </p>
            <ul className="la-list">
              <li>
                Not use the other Party's Marks without their prior written consent.
              </li>
              <li>
                Only use the other Party's Marks in accordance with any trademark quality standards and usage guidelines as may be provided by such other Party.
              </li>
              <li>
                Upon termination of this Agreement for any reason, immediately cease all use of the other Party's Marks.
              </li>
            </ul>
          </article>
          <article className="la-section" id="compensation">
            <header className="la-section-head">
              <span className="la-section-num">
                03
              </span>
              <h2 className="la-section-h">
                Compensation
              </h2>
            </header>
            <p className="la-sub">
              3.1 · Financial compensation.
            </p>
            <p>
              {"The Partner will earn financial compensation equal to "}
              <b>
                20%
              </b>
              {" of the price actually paid by a Qualified Customer (excluding any refunds and taxes) for each sale that is not an Excluded Sale (defined below) of any product on the Cubebrush platform that occurs within "}
              <b>
                one (1) year
              </b>
              {" from the Effective Date. The term may be extended by mutual agreement; in practice, accounts in good standing are renewed automatically unless either Party opts out."}
            </p>
            <p className="la-promise">
              <b>
                Attribution.
              </b>
              {" When a visitor clicks one of your Affiliate Links and reaches Cubebrush's Site, we set a first-party attribution cookie scoped to your account. Any purchase that visitor makes "}
              <b>
                within 30 days
              </b>
              , in the same browser on the same device, with the attribution cookie intact, is credited to you.
            </p>
            <p className="la-sub">
              3.2 · Excluded Sales.
            </p>
            <p>
              "Excluded Sale" means a sale to a Qualified Customer that has:
            </p>
            <ul className="la-list">
              <li>
                Followed links to Cubebrush's Site from other Cubebrush affiliates after following the Partner's link.
              </li>
              <li>
                Used a different browser or computer for the purchase than was used to follow the Partner's link.
              </li>
              <li>
                Cleared their cookies after following a link from the Partner's website.
              </li>
              <li>
                Originated from a Cubebrush product page that the Partner reached as part of their own Cubebrush storefront experience (no self-attribution).
              </li>
            </ul>
            <p className="la-sub">
              3.3 · Taxes.
            </p>
            <p>
              Both Partner and Cubebrush are responsible for payment of their respective taxes. Cubebrush may collect and report tax information (W-9 / W-8BEN) from Partners receiving payouts, in accordance with applicable U.S. tax law.
            </p>
            <p className="la-sub">
              3.4 · Payment.
            </p>
            <p id="payment">
              {"Unless otherwise agreed by the Parties in writing, Cubebrush shall send payouts via PayPal to the email address on your payout settings, or by bank wire transfer where PayPal is not supported in your region. Payouts follow Cubebrush's published timeframes and balance requirements. Bank wire payouts have separate terms. Email "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {" when you need one. Payouts may only be made if the total processed amount due totals at least "}
              <b>
                $20
              </b>
              . Unpaid amounts due shall accrue until the following payout period in which the amount due is at least $20.
            </p>
            <p>
              Cubebrush reserves the right to withhold payment, or charge back to your account, any amounts otherwise due to us under these Terms or due to any breach of these Terms by you, pending Cubebrush's reasonable investigation of such breach. To ensure proper payment, you are solely responsible for providing and maintaining accurate contact and payment information associated with your account, including, without limitation, applicable tax information.
            </p>
            <p>
              If you dispute any payment, you must notify Cubebrush in writing within thirty (30) days of such payment. Failure to so notify shall result in waiver of any claim relating to such disputed payment. Payment shall be calculated solely based on records maintained by Cubebrush; no other measurements or statistics of any kind shall have any effect under these Terms. We may withhold any taxes or other amounts from payments due to you as required by law. To protect against the risk of liability, we may request that our payment service provider hold Partner funds based on certain factors, including but not limited to traffic patterns, partner performance, or the filing of a dispute claim.
            </p>
          </article>
          <article className="la-section" id="ownership">
            <header className="la-section-head">
              <span className="la-section-num">
                04
              </span>
              <h2 className="la-section-h">
                Ownership
              </h2>
            </header>
            <p>
              Each Party retains all right, title, and interest, including all Intellectual Property Rights, in and to (a) its Marks, Content, and Site, and (b) any new inventions, developments, or technology resulting from or in connection with the performance of such Party's obligations hereunder. Except as expressly set forth in Section 2, each Party reserves all rights and grants the other Party no licenses of any kind hereunder.
            </p>
          </article>
          <article className="la-section" id="term">
            <header className="la-section-head">
              <span className="la-section-num">
                05
              </span>
              <h2 className="la-section-h">
                Term and Termination
              </h2>
            </header>
            <p className="la-sub">
              5.1 · Term.
            </p>
            <p>
              {"The term of this Agreement commences on the Effective Date and ends one (1) year from the Effective Date (the \"Term\"); provided that either Party may terminate this Agreement at any time with "}
              <b>
                ten (10) days'
              </b>
              {" prior written notice. Renewal is automatic for Partners in good standing unless either Party opts out before the renewal date."}
            </p>
            <p className="la-sub">
              5.2 · Termination for cause.
            </p>
            <p>
              If either Party defaults in the performance of any material provision of this Agreement, then the non-defaulting Party may give written notice to the defaulting Party that, if the default is not cured within ten (10) days, the Agreement will be terminated. If the non-defaulting Party gives such notice and the default is not cured during the ten-day period, the Agreement shall automatically terminate at the end of that period.
            </p>
            <p className="la-sub">
              5.3 · Termination for insolvency and related events.
            </p>
            <p>
              This Agreement shall terminate, without notice, (a) upon the institution by or against either Party of insolvency, receivership, or bankruptcy proceedings or any other proceedings for the settlement of such Party's debts, (b) upon either Party's making an assignment for the benefit of creditors, or (c) upon either Party's dissolution or ceasing to do business.
            </p>
            <p className="la-sub">
              5.4 · Effect of termination.
            </p>
            <p>
              Upon termination of this Agreement, the Partner will cease all display, advertising, and use of all Cubebrush Marks and will not thereafter use, advertise, or display any such Marks unless otherwise agreed by Cubebrush in writing. Any earned but unpaid commissions accrued before termination remain payable on the next scheduled payout (subject to the $20 minimum).
            </p>
            <p className="la-sub">
              5.5 · Survival of certain terms.
            </p>
            <p>
              The provisions of Section 1 and Sections 4–8 of this Agreement shall survive the expiration or termination of this Agreement for any reason. All other rights and obligations of the Parties shall cease upon termination of this Agreement.
            </p>
          </article>
          <article className="la-section" id="warranty">
            <header className="la-section-head">
              <span className="la-section-num">
                06
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
                07
              </span>
              <h2 className="la-section-h">
                Limitation of Liability
              </h2>
            </header>
            <p className="la-allcaps">
              IN NO EVENT WILL EITHER PARTY BE LIABLE UNDER ANY THEORY OF LIABILITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, ANY SUCH DAMAGES ARISING FROM BREACH OF CONTRACT OR WARRANTY, OR FROM NEGLIGENCE OR STRICT LIABILITY), INCLUDING WITHOUT LIMITATION LOSS OF PROFITS OR REVENUE, OR FROM ANY DEFECT OR ERROR IN ITS PRODUCTS OR SERVICES, EVEN IF A PARTY HAS BEEN ADVISED OR SHOULD KNOW OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="la-allcaps">
              IN NO EVENT WILL THE AGGREGATE LIABILITY OF CUBEBRUSH ARISING FROM, RELATING TO, OR IN CONNECTION WITH THIS AGREEMENT EXCEED THE AMOUNTS PAID TO PARTNER UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
            </p>
            <p>
              Nothing in this Agreement excludes or limits any liability that cannot be excluded or limited under applicable law (including, where applicable, consumer-protection rights under EU/UK law).
            </p>
          </article>
          <article className="la-section" id="general">
            <header className="la-section-head">
              <span className="la-section-num">
                08
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
              {" This Agreement constitutes the entire agreement between Cubebrush and Partner with respect to the subject matter hereof, and merges all prior negotiations and drafts of the Parties with regard thereto. No modification of or amendment to this Agreement, nor any waiver of any rights under this Agreement, shall be effective unless in writing. The waiver of one breach or default, or any delay in exercising any rights, shall not constitute a waiver of any subsequent breach or default."}
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
              <a href="mailto:partners@cubebrush.co">
                partners@cubebrush.co
              </a>
              {". Payout questions: "}
              <a href="mailto:support@cubebrush.co">
                support@cubebrush.co
              </a>
              {". Apply at "}
              <Link href="/become_partner">
                cubebrush.co/become-a-partner
              </Link>
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
              September 7, 2026
            </b>
            {". Apply or manage your partner account at "}
            <Link href="/become_partner">
              cubebrush.co/become-a-partner
            </Link>
            {". Questions: "}
            <a href="mailto:partners@cubebrush.co">
              partners@cubebrush.co
            </a>
            .
          </div>
          <div className="la-end-row">
            <Link className="la-end-btn" href="/terms">
              Terms of Service
            </Link>
            <Link className="la-end-btn" href="/distribution-agreement">
              Distribution Agreement
            </Link>
            <Link className="la-end-btn" href="/become_partner">
              Become a Partner
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
