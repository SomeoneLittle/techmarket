import Link from "next/link";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";

export function BecomePartner() {
  return (
    <>
      <section className="bp-hero">
        <div className="bp-hero-inner">
          <div className="dc-program-copy">
            <div className="bp-eyebrow bp-eyebrow-light">
              Cubebrush partner program
            </div>
            <h1 className="bp-h1">
              {"Earn "}
              <strong>
                20%
              </strong>
              {" on every"}
              <br />
              link you share.
            </h1>
            <p className="bp-hero-sub">
              Drop a Cubebrush link in a video, post, or DM. When someone you referred buys within 30 days, you get paid, even on items you didn't link to.
            </p>
            <Link className="bp-cta-light" href="/users/sign_in">
              Apply in 60 seconds
            </Link>
            <div className="bp-hero-foot">
              Free to join · 30-day cookie · Paid via PayPal
            </div>
          </div>
          <img alt="" aria-hidden="true" className="bp-hero-img" src={asset("/sites/cubebrush/img/bp-hero-art-ce7c37bd6285a6069ce4da53acbb-cb2484e1.svg")} />
        </div>
      </section>
      <section aria-label="At a glance" className="bp-proof">
        <div className="bp-proof-cell">
          <div className="bp-proof-num">
            $4.2M+
          </div>
          <div className="bp-proof-lbl">
            paid to partners
          </div>
        </div>
        <div className="bp-proof-cell">
          <div className="bp-proof-num">
            1,200+
          </div>
          <div className="bp-proof-lbl">
            active partners
          </div>
        </div>
        <div className="bp-proof-cell">
          <div className="bp-proof-num">
            20%
          </div>
          <div className="bp-proof-lbl">
            partner commission
          </div>
        </div>
      </section>
      <section className="bp-calc">
        <div className="dc-section-intro">
          <div className="bp-eyebrow bp-eyebrow-accent">
            Earnings calculator
          </div>
          <h2 className="bp-h2">
            What if you helped sell ART School?
          </h2>
          <p className="bp-calc-intro">
            {"ART School is marc's self-paced digital art course. Use the slider to see what a 20% commission on a "}
            <strong>
              $300
            </strong>
            {" sale could earn you."}
          </p>
          <p className="bp-calc-foot">
            {"That's just "}
            <strong data-cb-bp-followers="">
              1k
            </strong>
            {" followers at a 1% conversion rate. Add other top sellers and a 30-day cookie, and the total grows from there."}
          </p>
        </div>
        <div className="bp-calc-card">
          <a className="bp-calc-product" href="https://cubebrush.co/mb/products/0dpzeg/art-school">
            <img alt="" className="bp-calc-product-cover" height="84" loading="lazy" src={asset("/sites/cubebrush/img/webp_wide_thumb_6ad8de850c-59d8d753.webp")} width="112" />
            <span className="bp-calc-product-info">
              <strong className="bp-calc-product-title">
                ART School
              </strong>
              <span className="bp-calc-product-meta">
                by marc · Tutorials
              </span>
              <span className="bp-calc-product-bottom">
                <span className="bp-calc-product-price">
                  {"$300 "}
                  <s>
                    $600
                  </s>
                </span>
                <span className="bp-calc-product-link">
                  View course
                </span>
              </span>
            </span>
          </a>
          <div className="bp-calc-readout" data-cb-bp-readout="">
            $600
          </div>
          <div className="bp-calc-formula">
            <span data-cb-bp-buyers="">
              10
            </span>
            {" "}
            <span data-cb-bp-buyersw="">
              buyers
            </span>
            {" × $300 × 20%"}
          </div>
          <div className="bp-calc-bar-head">
            <span>
              You refer
            </span>
            <span className="bp-calc-bar-count">
              <span data-cb-bp-buyers="">
                10
              </span>
              {" "}
              <span data-cb-bp-buyersw="">
                buyers
              </span>
            </span>
          </div>
          <input aria-label="Number of referred buyers" className="bp-calc-slider" data-cb-bp-slider="" max="100" min="1" step="1" type="range" defaultValue="10" />
          <div className="bp-calc-ticks">
            <span>
              1
            </span>
            <span>
              25
            </span>
            <span>
              50
            </span>
            <span>
              75
            </span>
            <span>
              100
            </span>
          </div>
        </div>
      </section>
      <section className="bp-how">
        <div className="bp-how-head">
          <div className="bp-eyebrow bp-eyebrow-accent">
            How it works
          </div>
          <h2 className="bp-h2">
            Three steps. The rest is automatic.
          </h2>
        </div>
        <div className="bp-steps">
          <div className="bp-step">
            <div className="bp-step-icon bp-step-icon-art">
              <img alt="" aria-hidden="true" src={asset("/sites/cubebrush/img/bp-step1-laptop-78bbee596534b44eed872ae0-90217138.svg")} />
            </div>
            <div className="bp-step-num">
              Step 1
            </div>
            <div className="bp-step-body">
              <div className="bp-step-title">
                Apply
              </div>
              <div className="bp-step-text">
                Submit your audience link. We approve most within 48 hours.
              </div>
            </div>
          </div>
          <div className="bp-step">
            <div className="bp-step-icon bp-step-icon-art">
              <img alt="" aria-hidden="true" src={asset("/sites/cubebrush/img/bp-step2-megaphone-1cae3e5941d3ec1372b24-6ff090c0.svg")} />
            </div>
            <div className="bp-step-num">
              Step 2
            </div>
            <div className="bp-step-body">
              <div className="bp-step-title">
                Share
              </div>
              <div className="bp-step-text">
                Drop your unique link anywhere: posts, videos, bio, newsletter, DMs.
              </div>
            </div>
          </div>
          <div className="bp-step">
            <div className="bp-step-icon bp-step-icon-art">
              <img alt="" aria-hidden="true" src={asset("/sites/cubebrush/img/bp-step3-payment-a21ed9623f4fce9b452f5d1-2c045915.svg")} />
            </div>
            <div className="bp-step-num">
              Step 3
            </div>
            <div className="bp-step-body">
              <div className="bp-step-title">
                Get paid
              </div>
              <div className="bp-step-text">
                Earn 20% on anything they buy in the next 30 days. We pay out every 2 weeks via PayPal.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bp-dark">
        <h2 className="bp-dark-h">
          You don't need to make content to earn
        </h2>
        <p className="bp-dark-body">
          {"You don't need reviews, videos or a newsletter. Drop your link in a comment, a bio or a DM, "}
          <strong style={{"fontWeight": "700"} as React.CSSProperties}>
            and earn every time someone buys through it.
          </strong>
        </p>
        <p className="bp-dark-body bp-dark-body-sm">
          <strong>
            Requirement to become a Partner:
          </strong>
          {" More than 100 followers, friends or subscribers on at least one website."}
        </p>
        <Link className="bp-ghost-pill" href="/partner-agreement">
          Learn more
          <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#glyph-56909292-ns")} />
          </svg>
        </Link>
      </section>
      <section className="bp-library dh-section">
        <div className="bp-library-head">
          <h2 className="bp-h2">
            Epic library of curated content
          </h2>
          <p className="bp-library-sub">
            {"Quality products sell best, and we've got thousands for you to choose from. Not sure where to start? Head to our "}
            <span className="bp-accent-strong">
              popular
            </span>
            {" section for items that are already selling well."}
          </p>
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
          <ul aria-label="Products to share" className="dh-rail">
            <li>
              <ProductCard p={products["d9q6yq"]} />
            </li>
            <li>
              <ProductCard p={products["0dpzeg"]} />
            </li>
            <li>
              <ProductCard p={products["qtejoq"]} />
            </li>
            <li>
              <ProductCard p={products["7cs5a"]} />
            </li>
            <li>
              <ProductCard p={products["exmq7g"]} />
            </li>
            <li>
              <ProductCard p={products["yfr61w"]} />
            </li>
          </ul>
        </div>
      </section>
      <section className="bp-dark bp-dark-naked">
        <div className="dc-section-intro">
          <h2 className="bp-dark-h">
            The more you share, the more you earn
          </h2>
          <p className="bp-dark-body">
            {"Every link you share opens a 30-day window. If a follower clicks today and buys anything on Cubebrush this month, the commission is yours. "}
            <span className="bp-accent-strong">
              Every single referral counts.
            </span>
          </p>
        </div>
        <img alt="" aria-hidden="true" className="bp-share-art" src={asset("/sites/cubebrush/img/bp-share-art-f1aeb46652ae055eac569909193-c06ec18a.svg")} />
      </section>
      <section className="bp-dark bp-dark-naked">
        <div className="dc-section-intro">
          <h2 className="bp-dark-h">
            Made for influencers
          </h2>
          <p className="bp-dark-body">
            {"Got a large online following? There's no limit on how much you can earn as a partner. Share products you love with your audience "}
            <span className="bp-accent-strong">
              and earn on every sale you refer.
            </span>
          </p>
        </div>
        <div aria-hidden="true" className="bp-mega-scene">
          <img alt="" className="bp-mega-art" src={asset("/sites/cubebrush/img/bp-influencer-31f8489b68f939dc9017915df1-9038d388.svg")} />
        </div>
      </section>
      <section className="bp-stripe" data-bp-cta-secondary="">
        <div className="bp-stripe-h">
          Your audience is already worth money.
        </div>
        <div className="bp-stripe-sub">
          Start earning 20% on every sale you refer.
        </div>
        <Link className="bp-cta-light" href="/users/sign_in">
          Apply in 60 seconds
        </Link>
      </section>
      <div className="bp-sticky" data-cb-bp-sticky="" hidden>
        <Link className="bp-cta-blue" href="/users/sign_in">
          Apply in 60 seconds
        </Link>
      </div>
    </>
  );
}
