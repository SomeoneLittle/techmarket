import Link from "next/link";
import { asset } from "@/lib/asset";

export function About() {
  return (
    <>
      <section className="ab-hero">
        <div aria-hidden="true" className="ab-hero-art">
          <img alt="" height="220" loading="lazy" src={asset("/sites/cubebrush/img/about-hero-stylus-79fbe1a5b626035340fc35-5c1f6840.svg")} width="220" />
        </div>
        <div className="dc-program-copy">
          <div className="ab-hero-eyebrow">
            <span aria-hidden="true" className="dot" />
            {" "}
            <span>
              About Cubebrush
            </span>
          </div>
          <h1>
            {"Built by artists, "}
            <strong>
              sold to artists.
            </strong>
          </h1>
          <p className="ab-hero-sub">
            Cubebrush is the marketplace for digital artists: reference & photo packs, Procreate, Photoshop and Clip Studio brushes, 3D models and game-ready assets, tutorials. Made by independent creators around the world. We've been doing this since 2015.
          </p>
        </div>
      </section>
      <section className="ab-sec">
        <div className="ab-kicker">
          What we are
        </div>
        <h2>
          A creative marketplace that treats artists like adults.
        </h2>
        <p>
          {"The original idea, back in 2015, was simple. Make it easy for a working artist to put a reference pack, a brush set, a 3D model, or a tutorial up for sale, without surrendering the rights to the work, and without watching the platform pocket most of the margin. "}
          <b>
            We're still doing exactly that.
          </b>
        </p>
        <p>
          A lot has changed since. Generative AI showed up, scraping became industrial, and most platforms quietly opened their archives to training datasets. We didn't. That decision is more recent than the company itself, but it's now as much a part of what Cubebrush is as the original "fair to artists" pitch.
        </p>
        <p>
          Cubebrush is small on purpose. A small team running infrastructure for 1,673,926 members. That ratio is why payouts arrive when they should, why support emails are answered by an actual person, and why decisions about the marketplace get made by the people who use it instead of a board room.
        </p>
        <div aria-label="By the numbers" className="ab-stats">
          <div className="ab-stat">
            <div className="ab-stat-n" title="180,803 products">
              180K
            </div>
            <div className="ab-stat-l">
              products on the marketplace
            </div>
          </div>
          <div className="ab-stat">
            <div className="ab-stat-n" title="1,673,926 members">
              1.6M
            </div>
            <div className="ab-stat-l">
              members
            </div>
          </div>
          <div className="ab-stat">
            <div className="ab-stat-n" title="12,466 stores">
              12.4K
            </div>
            <div className="ab-stat-l">
              seller stores
            </div>
          </div>
          <div className="ab-stat">
            <div className="ab-stat-n">
              100%
            </div>
            <div className="ab-stat-l">
              human-made content
            </div>
          </div>
        </div>
      </section>
      <section className="ab-sec">
        <div className="ab-kicker">
          What we stand for
        </div>
        <h2>
          Four promises we'd rather not need to make.
        </h2>
        <p>
          Most platforms in 2026 have quietly broken at least one of these. We've put them in the legal docs anyway.
        </p>
        <div className="ab-promises">
          <div className="ab-promise ab-promise--red">
            <span aria-hidden="true" className="ab-promise-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-9be0b8aa-ns")} />
              </svg>
            </span>
            <div>
              <div className="ab-promise-title">
                We will never use your work to train AI.
              </div>
              <div className="ab-promise-body">
                {"Not ours, not a third party's, not an open-source one. No bulk licensing deals that route your art into a training corpus. "}
                <Link href="/terms#ai">
                  Read the clause →
                </Link>
              </div>
            </div>
          </div>
          <div className="ab-promise ab-promise--red">
            <span aria-hidden="true" className="ab-promise-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-9be0b8aa-ns")} />
              </svg>
            </span>
            <div>
              <div className="ab-promise-title">
                We will never sell your data.
              </div>
              <div className="ab-promise-body">
                {"No data brokers. No advertising trackers. Our analytics tool doesn't even use cookies. "}
                <Link href="/privacy#share">
                  Who we share with →
                </Link>
              </div>
            </div>
          </div>
          <div className="ab-promise ab-promise--green">
            <span aria-hidden="true" className="ab-promise-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
              </svg>
            </span>
            <div>
              <div className="ab-promise-title">
                100% human-made marketplace.
              </div>
              <div className="ab-promise-body">
                {"Every public page on Cubebrush, including browse, search and recommendations, is reserved for human-made work. Sellers here are never competing with AI-generated content. "}
                <Link href="/terms#ai">
                  Our full AI stance →
                </Link>
              </div>
            </div>
          </div>
          <div className="ab-promise ab-promise--blue">
            <span aria-hidden="true" className="ab-promise-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-0a6f763a-ns")} />
              </svg>
            </span>
            <div>
              <div className="ab-promise-title">
                Fair payouts, on time, in your currency.
              </div>
              <div className="ab-promise-body">
                Payouts via PayPal, or bank wire where PayPal isn't supported. $20 minimum balance, no rolling holds on normal accounts.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ab-sec">
        <div className="ab-note">
          <p className="ab-note-quote">
            {"\"We started Cubebrush because the marketplaces we were uploading to as artists felt like they were built by people who'd never made art. The fees, the contracts, the casual disregard for who owned what. All of it. So we built one ourselves, and we've kept it close to the ground. "}
            <b>
              If you ever email us, an actual person who knows the site inside out will answer. We don't outsource support to external reps.
            </b>
            "
          </p>
          <div className="ab-note-sign">
            <span aria-hidden="true" className="ab-note-avatar">
              M
            </span>
            <div>
              <div className="ab-note-who">
                The Cubebrush team
              </div>
              <div className="ab-note-role">
                Laguna Beach, California · since 2015
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ab-sec">
        <div className="ab-kicker">
          Three ways in
        </div>
        <h2>
          Whatever brought you here, here's where to go next.
        </h2>
        <div className="ab-tracks">
          <Link className="ab-track ab-track--shop" href="/marketplace">
            <div className="ab-track-content">
              <span className="ab-track-kicker">
                For buyers
              </span>
              <div className="ab-track-title">
                Browse the marketplace
              </div>
              <p className="ab-track-body">
                180,803 assets across 3D, textures, brushes, tutorials, audio, and motion.
              </p>
            </div>
            <span aria-hidden="true" className="ab-track-arrow">
              <svg viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-3cb81d80-ns")} />
              </svg>
            </span>
          </Link>
          <Link className="ab-track ab-track--sell" href="/open_store">
            <div className="ab-track-content">
              <span className="ab-track-kicker">
                For sellers
              </span>
              <div className="ab-track-title">
                Open a store, free
              </div>
              <p className="ab-track-body">
                Set up in minutes, set your own prices, keep the rights. Payouts every two weeks.
              </p>
            </div>
            <span aria-hidden="true" className="ab-track-arrow">
              <svg viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-3cb81d80-ns")} />
              </svg>
            </span>
          </Link>
          <Link className="ab-track ab-track--earn" href="/become_partner">
            <div className="ab-track-content">
              <span className="ab-track-kicker">
                For partners
              </span>
              <div className="ab-track-title">
                Earn from referrals
              </div>
              <p className="ab-track-body">
                20% commission on every sale your link drives, for a year. Apply in 60 seconds.
              </p>
            </div>
            <span aria-hidden="true" className="ab-track-arrow">
              <svg viewBox="0 0 24 24" height="22" width="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-3cb81d80-ns")} />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <section className="ab-sec ab-location">
        <div className="ab-location-copy">
          <div className="ab-kicker">
            Where we are
          </div>
          <h2>
            Small team, global creators.
          </h2>
          <p>
            A small team supporting artists around the world. You can reach us by email or at our mailbox in Laguna Beach, California.
          </p>
          <div className="ab-where">
            <dl className="ab-where-card">
              <dt>
                Mailing address
              </dt>
              <dd>
                Cubebrush, LLC
                <br />
                1968 S. Coast Hwy #1597
                <br />
                Laguna Beach, CA 92651
              </dd>
            </dl>
            <dl className="ab-where-card">
              <dt>
                Email us
              </dt>
              <dd>
                {"General: "}
                <a href="mailto:hello@cubebrush.co">
                  hello@cubebrush.co
                </a>
                <br />
                {"Privacy: "}
                <a href="mailto:info@cubebrush.co">
                  info@cubebrush.co
                </a>
                <br />
                {"More on the "}
                <Link href="/contacts">
                  contact page
                </Link>
                .
              </dd>
            </dl>
          </div>
        </div>
        <figure className="ab-location-figure">
          <div className="ab-where-photo-frame">
            <picture>
              <source type="image/webp" />
              <img alt="Sunset over the Pacific from Laguna Beach, California." className="ab-where-photo" height="437" loading="lazy" src={asset("/sites/cubebrush/img/laguna-beach-sunset-05950800b594a50401a0-f63da553.jpg")} width="583" />
            </picture>
          </div>
          <figcaption className="ab-where-caption">
            <span aria-hidden="true" className="dot" />
            <span>
              Sunset on the Pacific coast in Laguna Beach, California.
            </span>
          </figcaption>
        </figure>
      </section>
      <section className="ab-sec">
        <div className="ab-end">
          <div className="ab-end-h">
            Made by an artist. Or about to be one.
          </div>
          <div className="ab-end-row">
            <Link className="ab-end-btn ab-end-btn--primary" href="/marketplace">
              Browse the marketplace
            </Link>
            {" "}
            <Link className="ab-end-btn ab-end-btn--secondary" href="/open_store">
              Open a store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
