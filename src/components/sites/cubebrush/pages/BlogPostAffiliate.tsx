import Link from "next/link";
import { asset } from "@/lib/asset";

export function BlogPostAffiliate() {
  return (
    <>
      <article className="bl-post">
        <div className="bl-progress" aria-hidden="true">
          <div className="bl-progress-fill" data-cb-blog-progress="" />
        </div>
        <Link className="bl-back" href="/blog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <use href={asset("/sites/cubebrush/icons.svg#glyph-febf340c-ns")} />
          </svg>
          {" All posts"}
        </Link>
        <nav aria-label="More posts" className="bl-post-nav">
          <a className="bl-post-nav-link is-prev" href="https://cubebrush.co/blog/vary-character-poses-with-these-6-male-pose-reference-packs" rel="prev">
            <span className="bl-post-nav-dir">
              ← Previous post
            </span>
            <span className="bl-post-nav-title">
              Vary Character Poses with These 6 Male Pose Reference Packs
            </span>
          </a>
          <a className="bl-post-nav-link is-next" href="https://cubebrush.co/blog/5-digital-art-classes:-learn-new-cg-skills-this-year" rel="next">
            <span className="bl-post-nav-dir">
              Next post →
            </span>
            <span className="bl-post-nav-title">
              5 Digital Art Classes: Learn New CG Skills This Year
            </span>
          </a>
        </nav>
        <header className="bl-post-head">
          <Link className="bl-pill bl-pill-updates is-lg" href="/blog">
            <span className="bl-pill-dot" />
            Updates
          </Link>
          <h1 className="bl-post-h">
            Earn 20% as a Cubebrush Affiliate
          </h1>
          <div className="bl-post-meta">
            <a style={{"width": "36px", "height": "36px"} as React.CSSProperties} href="https://cubebrush.co/cubebrushadmin" tabIndex={-1} data-cb-avatar="Cubebrush" aria-hidden="true" className="bl-avatar">
              <img src={asset("/sites/cubebrush/img/normal_4fd3230dcf-e25a3651.png")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
            </a>
            <div className="bl-post-byline">
              <div className="bl-post-author">
                <a href="https://cubebrush.co/cubebrushadmin">
                  Cubebrush
                </a>
              </div>
              <div className="bl-post-sub">
                12 FEB 2024
                <span className="bl-post-dot">
                  ·
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="11" height="11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-4fb26c42-ns")} />
                </svg>
                {" 2 min read"}
                <span className="bl-post-dot">
                  ·
                </span>
                <a className="bl-post-comments" href="#comments">
                  0 comments
                </a>
              </div>
            </div>
          </div>
        </header>
        <figure className="bl-post-hero">
          <div aria-label="Article image" className="bp-img" data-cb-lightbox="" style={{"height": "210px", "borderRadius": "14px", "background": "var(--cb-panel)", "position": "relative", "overflow": "hidden"} as React.CSSProperties}>
            <img src={asset("/sites/cubebrush/img/webp_hero_a4b62f9fc3-8ccae54f.webp")} alt="Earn 20% as a Cubebrush Affiliate" width="640" height="360" loading="eager" sizes="(max-width: 1100px) 100vw, 1040px" fetchPriority="high" style={{"display": "block", "width": "100%", "height": "100%", "objectFit": "cover"} as React.CSSProperties} />
          </div>
        </figure>
        <div className="bl-post-body">
          <p>
            {"Oh boy, our Partner program just got a MEGA BOOST! "}
          </p>
          {" "}
          <p>
            Earning with Cubebrush has always been easy. As an affiliate Partner, you don't even need to produce content to make money - simply share what others are making and profit from the sales you help refer. Win-win.
          </p>
          {" "}
          <p>
            {"From now on though, every sale you refer as a Partner will earn you a mega "}
            <strong>
              20%
            </strong>
            {" of the sale price, without limits (up from 10%)."}
          </p>
          {" "}
          <h1>
            How it works
          </h1>
          {" "}
          <p>
            When you become a Partner, you're provided with a short bit of code (looks like ?ref=
            <em>
              username
            </em>
            {") to add to "}
            <strong>
              any
            </strong>
            {" Cubebrush URL you want to monetize. When someone follows your modified link and makes a purchase, any purchase on the site, you'll earn 20% from that sale. "}
          </p>
          {" "}
          <p>
            <strong>
              Simple.
            </strong>
            <br />
          </p>
          {" "}
          <p>
            {"The links never expire, we make no distinction between new or existing customers and there are no limits to how much you can earn as a Partner. It's was "}
            <em>
              literally
            </em>
            {" the best affiliate program in the industry and it just got even better! "}
          </p>
          {" "}
          <figure className="bl-align-center">
            <Link href="/become_partner" rel="noopener noreferrer">
              <img src={asset("/sites/cubebrush/img/content_a501e76e5d-c74dc543.jpg")} alt="" loading="lazy" />
            </Link>
          </figure>
          {" "}
          <h1>
            Who is this for?
          </h1>
          {" "}
          <blockquote>
            Everyone!
          </blockquote>
          {" "}
          <p>
            The Partner feature is particularly dear to us since it'll allow even more people to earn with Cubebrush and make a living doing what they love. That's what it's all about.
          </p>
          {" "}
          <ul>
            <li>
              Sellers will now benefit from an army of Partners helping share their content and increase their sales
            </li>
            <li>
              Everyone else (with at least 100 followers/friends/subscribers on at least one website) can now earn money simply by sharing the awesome curated content on our marketplace
            </li>
          </ul>
          {" "}
          <p>
            {"Not sure what to share? Check out our "}
            <Link href="/marketplace" rel="noopener noreferrer">
              popular section
            </Link>
            {" for products that are already selling well."}
          </p>
          {" "}
          <h4>
            <Link href="/become_partner" rel="noopener noreferrer">
              Eager to start earning as an affiliate Partner? Learn more or apply here!
            </Link>
          </h4>
          {" "}
          <p>
            Got any questions or feedback? Leave a comment below!
          </p>
          {" "}
          <p>
            Happy selling!
          </p>
          {" "}
          <p>
            -the Cubebrush team
          </p>
          {" "}
          <p>
            <span />
          </p>
        </div>
        <aside className="bl-author-card">
          <a style={{"width": "48px", "height": "48px"} as React.CSSProperties} href="https://cubebrush.co/cubebrushadmin" tabIndex={-1} data-cb-avatar="Cubebrush" aria-hidden="true" className="bl-avatar">
            <img src={asset("/sites/cubebrush/img/normal_4fd3230dcf-e25a3651.png")} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "borderRadius": "inherit", "display": "block"} as React.CSSProperties} />
          </a>
          <div className="bl-author-body">
            <div className="bl-author-name">
              <a className="cb-post-feed-author" href="https://cubebrush.co/cubebrushadmin">
                Cubebrush
              </a>
            </div>
            <div className="bl-author-actions">
              <Link className="bl-author-posts" href="/blog">
                All posts
              </Link>
            </div>
          </div>
        </aside>
        <div id="comments">
          <div id="v3_comments" />
        </div>
      </article>
    </>
  );
}
