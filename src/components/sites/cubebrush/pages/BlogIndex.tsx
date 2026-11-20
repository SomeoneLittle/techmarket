import Link from "next/link";
import { asset } from "@/lib/asset";

export function BlogIndex() {
  return (
    <>
      <section className="bl-hero">
        <div className="bl-eyebrow">
          The Cubebrush Blog
        </div>
        <h1 className="bl-h1">
          Stories, tutorials, & updates
        </h1>
        <p className="bl-hero-sub">
          Digital art techniques and artist interviews from the Cubebrush team and our community of creators.
        </p>
        <button className="bl-write" type="button">
          <span aria-hidden="true" className="bl-write-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--cb-link)" width="16" height="16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#edit-8be2a4cf-ns")} />
            </svg>
          </span>
          <span className="bl-write-body">
            <span className="bl-write-title">
              Got a story to share?
            </span>
            <span className="bl-write-sub">
              Pitch a guest post to the Cubebrush blog.
            </span>
          </span>
          <span className="bl-write-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#edit-8be2a4cf-ns")} />
            </svg>
            {" Write"}
          </span>
        </button>
      </section>
      <section className="bl-featured">
        <div className="bl-section-head">
          <div className="bl-section-title">
            <svg viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-fc399acc-ns")} />
            </svg>
            {" Featured posts"}
          </div>
          <Link aria-label="See all featured posts" className="bl-section-link" href="/blog">
            See all
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-bf8ab71a-ns")} />
            </svg>
          </Link>
        </div>
        <a className="bl-card bl-card-hero" href="https://cubebrush.co/blog/top-5-cubebrush-references-for-digital-fantasy-art">
          <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
            <img src={asset("/sites/cubebrush/img/webp_hero_856497df44-8e6760fa.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 100vw, 720px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            <div className="bl-card-badge">
              <svg viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-fc399acc-ns")} />
              </svg>
              {" Editor's pick"}
            </div>
          </div>
          <div className="bl-card-body">
            <div className="bl-card-meta">
              <span className="bl-pill bl-pill-tips">
                <span className="bl-pill-dot" />
                Tips & Tricks
              </span>
              <span className="bl-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                </svg>
                {" 4 min read"}
              </span>
            </div>
            <h2 className="bl-card-title">
              Top 5 Cubebrush References For Digital Fantasy Art
            </h2>
            <p className="bl-card-excerpt">
              For creating fantasy art, imagination is essential—but even the most magical concepts need a foundation in believable form, design, and function. Whether you're sculpting...
            </p>
            <div className="bl-card-foot">
              <span style={{"width": "26px", "height": "26px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
              </span>
              <span className="bl-card-author">
                Sarah Loughry
              </span>
              <span className="bl-card-date">
                14 MAY 2025
              </span>
            </div>
          </div>
        </a>
        <Link className="bl-card" href="/blog/earn-as-a-cubebrush-affiliate">
          <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
            <img src={asset("/sites/cubebrush/img/webp_hero_a4b62f9fc3-8ccae54f.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 100vw, 720px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
          </div>
          <div className="bl-card-body">
            <div className="bl-card-meta">
              <span className="bl-pill bl-pill-updates">
                <span className="bl-pill-dot" />
                Updates
              </span>
              <span className="bl-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                </svg>
                {" 2 min read"}
              </span>
            </div>
            <h2 className="bl-card-title">
              Earn 20% as a Cubebrush Affiliate
            </h2>
            <p className="bl-card-excerpt">
              Oh boy, our Partner program just got a MEGA BOOST! Earning with Cubebrush has always been easy. As an affiliate Partner, you don't even need to produce content to make money -...
            </p>
            <div className="bl-card-foot">
              <span style={{"width": "26px", "height": "26px"} as React.CSSProperties} data-cb-avatar="Cubebrush" aria-hidden="true" className="bl-avatar">
                <img src={asset("/sites/cubebrush/img/normal_4fd3230dcf-e25a3651.png")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
              </span>
              <span className="bl-card-author">
                Cubebrush
              </span>
              <span className="bl-card-date">
                12 FEB 2024
              </span>
            </div>
          </div>
        </Link>
      </section>
      <section className="bl-filters">
        <form action="/blog" method="get">
          <div aria-label="Sort blog posts" className="bl-tabs" data-tab-slider="" role="tablist">
            <button aria-selected="true" className="bl-tab is-active" name="order_by" role="tab" type="submit" value="recent">
              Latest
            </button>
            <button aria-selected="false" className="bl-tab" name="order_by" role="tab" type="submit" value="popular">
              Popular
            </button>
            <button aria-selected="false" className="bl-tab" name="order_by" role="tab" type="submit" value="featured">
              Editors' Picks
            </button>
          </div>
        </form>
        <form action="/blog" method="get">
          <input name="order_by" type="hidden" value="recent" />
          <div aria-label="Categories" className="bl-chips" role="group">
            <button className="bl-chip is-active" data-cat="all" name="category" type="submit" value="">
              All
              <span className="bl-chip-count">
                549
              </span>
            </button>
            <button className="bl-chip" data-cat="interviews" name="category" type="submit" value="interviews">
              Interviews
              <span className="bl-chip-count">
                89
              </span>
            </button>
            <button className="bl-chip" data-cat="news" name="category" type="submit" value="news">
              News
              <span className="bl-chip-count">
                35
              </span>
            </button>
            <button className="bl-chip" data-cat="updates" name="category" type="submit" value="updates">
              Updates
              <span className="bl-chip-count">
                51
              </span>
            </button>
            <button className="bl-chip" data-cat="tips_and_tricks" name="category" type="submit" value="tips_and_tricks">
              Tips & Tricks
              <span className="bl-chip-count">
                271
              </span>
            </button>
            <button className="bl-chip" data-cat="featured" name="category" type="submit" value="featured">
              Featured
              <span className="bl-chip-count">
                103
              </span>
            </button>
          </div>
        </form>
      </section>
      <div id="blog_posts">
        <h2 className="cb-sr" id="bl-list-title">
          Posts
        </h2>
        <section aria-labelledby="bl-list-title" className="bl-list" id="bl-list">
          <a className="bl-row" href="https://cubebrush.co/blog/welcome-to-cubebrush-3.0">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_87720546a2-b2b66552.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Marc Brunet" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_dd0b4d5e13-2b07fe5b.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Marc Brunet
                </span>
              </div>
              <h3 className="bl-row-title">
                Welcome to Cubebrush 3.0
              </h3>
              <p className="bl-row-excerpt">
                Welcome to Cubebrush 3.0 Welcome to Cubebrush 3.0, our biggest update so far. We redesigned every page for phone and desktop. Product pages now change layout based on the type...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-updates">
                  <span className="bl-pill-dot" />
                  Updates
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 2"}
                </span>
                <span className="bl-row-date">
                  29 OCT 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/how-to-optimize-purchased-assets-for-performance">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_8a6260383b-0637615b.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                How to Optimize Purchased Assets for Performance
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Purchasing assets can save a lot of time, but they often need to be optimized to some degree. Ideal game-ready models should be low-poly, have baked textures, and provide...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  16 APR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/environment-art-shortcuts-that-speed-up-production">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_f4b1d1e81f-6b1499df.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                Environment Art Shortcuts That Speed Up Production
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Game environments are often huge, immersive landscapes with thousands of individual elements.While no game is complete without a memorable environment, it’s often nearly...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 6 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  13 APR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/how-indie-developers-use-marketplace-assets-without-looking-generic">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_bba372b401-4c19d8e6.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                How Indie Developers Use Marketplace Assets Without Looking Generic
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Completing a game can take hundreds of hours, even if you know all the tricks and shortcuts in the book.The best indie developers rely on customizing and curating pre-made...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  9 APR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/build-vs-buy-when-purchasing-assets-actually-saves-time">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_50778775b5-4bef3d8e.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                Build vs. Buy: When Purchasing Assets Actually Saves Time
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Not a AAA studio? Here's how to build smarter anyway: The red flags that make any asset — bought or built — a liability in your game The 80/20 rule applied to game dev —...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 6 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  6 APR 2026
                </span>
              </div>
            </div>
          </a>
          <Link className="bl-row" href="/blog/what-makes-an-asset-game-ready">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_5a5a1e9352-0ac21413.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                What Makes an Asset “Game-Ready”? (A Practical Checklist)
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Not every model is right for every game. Here's what to actually check before you buy: Polycount targets by asset type — heroes, bosses, NPCs, and props Texel density...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 6 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  1 APR 2026
                </span>
              </div>
            </div>
          </Link>
          <a className="bl-row" href="https://cubebrush.co/blog/game-ready-assets:-how-indie-developers-build-faster-without-sacrificing-quality">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_3e9160e71a-ee84aa18.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                Game-Ready Assets: How Indie Developers Build Faster Without Sacrificing Quality
              </h3>
              <p className="bl-row-excerpt">
                TLDR: If you're a beginner game developer, this guide is for you. Learn: What actually makes an asset "game-ready" (polycount, texel density, LODs — we break it all down)The...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 12 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  26 MAR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/how-long-it-really-takes-to-get-“good”-at-art">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_4b78b5bf24-ec47ccaf.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                How Long It Really Takes to Get “Good” at Art
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Wondering how long the road ahead really is? This guide sets realistic expectations: How your goals (hobby vs. career) shape your timeline from day one Software learning...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 6 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  20 MAR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/why-tutorials-alone-don’t-make-you-better">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_76f7b366e7-a46a58cc.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                Why Tutorials Alone Don’t Make You Better (And How to Use Them Correctly)
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Watching tutorials but not improving? Here's what's missing: How to pick the right tutorial for your actual problem (process vs. product, concept vs. workflow) What it...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  13 MAR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/what-to-practice-first-when-learning-digital-art">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_8b05afcdcc-b9717ff2.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                What to Practice First When Learning Digital Art
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Making the jump from traditional to digital art? This guide covers: Why starting simple is the fastest way to get comfortable with new tools How to master line quality and...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  11 MAR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/best-software-for-beginner-artists">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_318121327d-aa86fcee.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                Best Software for Beginner Artists (And Why the Tool Doesn’t Matter as Much as You Think)
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Overwhelmed by digital art software options? This guide covers: How to choose the right program based on your device and goals Top 2D picks for beginners — Sketchbook,...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 7 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  6 MAR 2026
                </span>
              </div>
            </div>
          </a>
          <a className="bl-row" href="https://cubebrush.co/blog/2d-vs-3d-art:-which-should-you-learn-first">
            <div className="bp-img" style={{"background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
              <img src={asset("/sites/cubebrush/img/webp_hero_9b7647b54d-bcbc062e.webp")} alt="" width="640" height="360" loading="lazy" sizes="(max-width: 600px) 30vw, 470px" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
            </div>
            <div className="bl-row-body">
              <div className="bl-row-author">
                <span style={{"width": "18px", "height": "18px"} as React.CSSProperties} data-cb-avatar="Sarah Loughry" aria-hidden="true" className="bl-avatar">
                  <img src={asset("/sites/cubebrush/img/normal_2a43bb92db-83443938.jpg")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
                </span>
                <span>
                  Sarah Loughry
                </span>
              </div>
              <h3 className="bl-row-title">
                2D vs 3D Art: Which Should You Learn First?
              </h3>
              <p className="bl-row-excerpt">
                TLDR: Not sure whether to start with 2D or 3D? This guide breaks it down: Why almost every artist starts with 2D — and why it still matters for 3D creators Which traditional...
              </p>
              <div className="bl-row-meta">
                <span className="bl-pill bl-pill-tips">
                  <span className="bl-pill-dot" />
                  Tips & Tricks
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                  </svg>
                  {" 5 min"}
                </span>
                <span className="bl-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#comments-fc11c717-ns")} />
                  </svg>
                  {" 0"}
                </span>
                <span className="bl-row-date">
                  4 MAR 2026
                </span>
              </div>
            </div>
          </a>
        </section>
        <section className="bl-loadmore">
          <button className="bl-loadmore-btn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-c9ed0d62-ns")} />
            </svg>
            {" Load 12 more posts"}
          </button>
          <p className="bl-loadmore-meta">
            {"Showing "}
            <b>
              12
            </b>
            {" of 549 posts"}
          </p>
        </section>
      </div>
      <section className="bl-newsletter">
        <div aria-hidden="true" className="bl-newsletter-blob" />
        <img alt="" className="bl-newsletter-art" decoding="async" height="1100" loading="lazy" src={asset("/sites/cubebrush/img/blog-weekly-digest-102e11949987ccb8e27d2-5ce4d49b.svg")} width="1400" />
        <div className="bl-newsletter-inner">
          <div className="bl-newsletter-eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <use href={asset("/sites/cubebrush/icons.svg#glyph-2298688d-ns")} />
            </svg>
            {" Editors' Picks by email"}
          </div>
          <h2 className="bl-newsletter-h">
            The best of Cubebrush, in your inbox.
          </h2>
          <p className="bl-newsletter-body">
            Get each post our editors feature by email: new tutorials, artist interviews, and free assets. No spam, unsubscribe any time.
          </p>
          <form className="bl-newsletter-form" noValidate>
            <input aria-describedby="bl-digest-email-feedback" aria-label="Email address" autoComplete="email" className="bl-newsletter-input" id="bl-digest-email" name="email" placeholder="you@email.com" required type="email" />
            <button className="bl-newsletter-btn" type="submit">
              Subscribe
            </button>
            <span id="bl-digest-email-feedback" hidden className="cb-field-error" />
          </form>
          <div className="bl-newsletter-social">
            <span className="bl-newsletter-social-label">
              Or follow along:
            </span>
            <div className="bl-newsletter-social-row">
              <a aria-label="Cubebrush on X" className="bl-social" href="https://x.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="#fff" width="14" height="14" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-1db9577d-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on Facebook" className="bl-social" href="https://www.facebook.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="#fff" width="14" height="14" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-bacb800f-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on LinkedIn" className="bl-social" href="https://www.linkedin.com/company/cubebrush-com" rel="noopener">
                <svg viewBox="0 0 24 24" fill="#fff" width="14" height="14" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-dbc87f0f-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on Pinterest" className="bl-social" href="https://pinterest.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="#fff" width="14" height="14" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-858c9461-ns")} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
