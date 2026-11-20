import Link from "next/link";
import { asset } from "@/lib/asset";

export function OfficialStore() {
  return (
    <>
      <div data-official-store="desktop">
        <section aria-label="Cubebrush official store" className="ms-identity official-identity">
          <div aria-hidden="true" className="official-cover">
            <div className="official-cover-pattern" />
            <img alt="" height="320" src={asset("/sites/cubebrush/img/logo-mark-white-1065c7c23a516247b4dc0688-d7c8e97b.png")} width="320" />
          </div>
          <div className="ms-identity-inner">
            <div className="official-avatar">
              <img alt="" height="62" src={asset("/sites/cubebrush/img/logo-mark-white-1065c7c23a516247b4dc0688-d7c8e97b.png")} width="62" />
            </div>
            <h1 className="ms-name">
              Cubebrush
            </h1>
            <span className="official-badge">
              <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-check-0a1a95d3-ns")} />
              </svg>
              {" Official store"}
            </span>
            <p className="official-tagline">
              Tools for the way you create.
            </p>
            <div className="ms-bio">
              <p>
                The official Cubebrush store! Check out what our team's been cooking!
              </p>
              {" "}
            </div>
            <div className="ms-actions">
              <Link className="ms-btn official-contact" href="/contacts">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-56977f5c-ns")} />
                </svg>
                Contact us
              </Link>
              <button aria-pressed="false" className="ms-btn official-follow" data-cb-follow="" type="button">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#ms-follow-add-07ceb920-ns")} />
                </svg>
                <span className="ms-follow-label">
                  Follow
                </span>
              </button>
            </div>
          </div>
        </section>
        <div data-ms-store-content="">
          <section aria-label="Store navigation" className="ms-band dh-toolbar is-static">
            <div className="official-toolbar dh-toolbar-inner">
              <div role="tablist" aria-label="Store sections" className="ms-crumb-tabs dh-tabs">
                <button className="ms-crumb-tab dh-tab is-active" type="button" role="tab" aria-selected="true" data-ms-pane="store">
                  Store
                </button>
                <button className="ms-crumb-tab dh-tab" type="button" role="tab" aria-selected="false" data-ms-pane="posts">
                  Posts
                </button>
                <button className="ms-crumb-tab dh-tab" type="button" role="tab" aria-selected="false" data-ms-pane="bundles">
                  Bundles
                </button>
              </div>
              <div className="official-tools">
                <button aria-haspopup="dialog" aria-label="Share store" className="dh-ftoggle official-share" type="button">
                  <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-894b543d-ns")} />
                  </svg>
                  <span>
                    Share
                  </span>
                </button>
              </div>
            </div>
          </section>
          <div className="ms-pane is-active" data-ms-pane="store">
            <section aria-labelledby="ms-feed-title" className="ms-feed">
              <h2 className="cb-sr" id="ms-feed-title">
                Cubebrush's products
              </h2>
              <div id="mp-results">
                <div id="mp-results-alert" />
                <ul aria-label="Products" className="dh-grid" id="mp-grid" />
                <div aria-live="polite" className="cb-empty" data-empty-kind="collection">
                  <div aria-hidden="true" className="cb-empty-icon">
                    <svg aria-hidden="true">
                      <use href={asset("/sites/cubebrush/icons.svg#glyph-1db1f898")} />
                    </svg>
                  </div>
                  <h2 className="cb-empty-title">
                    No products yet
                  </h2>
                  <p className="cb-empty-copy">
                    The first Cubebrush tools are on the way. Follow the store to hear when they land.
                  </p>
                  <div className="cb-empty-actions">
                    <button data-empty-action="follow" data-empty-follow-label="Follow" type="button" className="cb-empty-action">
                      Follow
                    </button>
                    <Link href="/marketplace" className="cb-empty-action is-secondary">
                      Browse marketplace
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="official-pane ms-pane" data-ms-pane="posts" hidden>
            <div className="official-posts-empty">
              <img alt="" height="110" loading="lazy" src={asset("/sites/cubebrush/img/blog-weekly-digest-102e11949987ccb8e27d2-5ce4d49b.svg")} width="140" />
              <h2>
                No posts yet
              </h2>
              <p>
                Product updates, release notes and news from Cubebrush will appear here.
              </p>
              <a className="official-text-link" href="#store">
                {"Explore the store "}
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="official-right-arrow" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                </svg>
              </a>
            </div>
          </section>
          <div className="ms-pane" data-ms-pane="bundles" hidden>
            <section aria-label="Cubebrush's bundles" className="ms-bundles">
              <div aria-live="polite" className="cb-empty" data-empty-kind="collection">
                <div aria-hidden="true" className="cb-empty-icon">
                  <svg aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-1c583247")} />
                  </svg>
                </div>
                <h2 className="cb-empty-title">
                  No bundles yet
                </h2>
                <p className="cb-empty-copy">
                  Future bundles from this creator will appear here. Explore the marketplace while you wait.
                </p>
                <div className="cb-empty-actions">
                  <Link href="/marketplace" className="cb-empty-action">
                    Browse marketplace
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <dialog aria-labelledby="official-share-title" className="official-dialog official-share-dialog" hidden id="official-share-dialog">
          <div style={{"display": "contents"} as React.CSSProperties}>
            <button aria-label="Close share dialog" className="official-close" type="button">
              <span aria-hidden="true">
                ×
              </span>
            </button>
            <div className="official-dialog-body">
              <h2 id="official-share-title">
                Share the official store
              </h2>
              <label className="ms-share-label" htmlFor="official-share-url">
                Store link
              </label>
              <input className="ms-share-input" id="official-share-url" readOnly defaultValue="https://cubebrush.co/store" />
              <button className="ms-btn official-copy" type="button">
                Copy link
              </button>
              <p aria-live="polite" className="official-copy-status" role="status" />
            </div>
          </div>
        </dialog>
        <dialog aria-labelledby="official-follow-title" className="official-dialog official-share-dialog" hidden id="official-follow-dialog">
          <div style={{"display": "contents"} as React.CSSProperties}>
            <button aria-label="Close follow dialog" className="official-close" type="button">
              <span aria-hidden="true">
                ×
              </span>
            </button>
            <div className="official-dialog-body">
              <h2 id="official-follow-title">
                Follow Cubebrush
              </h2>
              <p>
                Sign in to keep Cubebrush in your followed stores.
              </p>
              <Link className="ms-btn" href="/users/sign_in">
                Sign in
              </Link>
              <Link className="official-text-link" href="/users/sign_up">
                Create account
              </Link>
            </div>
          </div>
        </dialog>
      </div>
      <dialog aria-label="Share post" aria-modal="true" className="ms-modal-host" hidden id="ms-post-share-modal">
        <div className="ms-modal-backdrop cb-sheet-backdrop" />
        <div className="ms-modal">
          <div className="ms-modal-head">
            <span className="spacer" />
            <h2 className="ms-modal-title">
              Share post
            </h2>
            <span className="spacer" style={{"textAlign": "right"} as React.CSSProperties}>
              <button aria-label="Close share" className="ms-modal-close" type="button">
                <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
                </svg>
              </button>
            </span>
          </div>
          <div className="ms-modal-body">
            <div className="ms-share-label">
              Link to this post
            </div>
            <input className="ms-share-input" id="ms-post-share-url" readOnly type="text" />
            <div className="ms-share-grid">
              <button className="ms-share-btn fb" id="ms-post-share-fb" type="button">
                <svg viewBox="0 0 24 24" height="14" width="14" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-a386a3ee-ns")} />
                </svg>
                Share
              </button>
              <button className="ms-share-btn x" id="ms-post-share-x" type="button">
                <svg viewBox="0 0 24 24" height="13" width="13" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-033acdaa-ns")} />
                </svg>
                Post
              </button>
            </div>
            <button className="ms-share-copy" id="ms-post-share-copy" type="button">
              Copy link
            </button>
          </div>
        </div>
      </dialog>
      <div className="cb-sheet-host" hidden id="ms-post-comments-sheet" inert>
        <div className="cb-sheet-backdrop" />
        <div aria-label="Post comments" aria-modal="true" className="cb-sheet" role="dialog">
          <div className="cb-sheet-handle" />
          <div className="ms-comments-head">
            <div className="ms-comments-head-title" id="ms-comments-context">
              Comments
            </div>
            <span className="ms-comments-head-count" id="ms-comments-count" />
            <button aria-label="Close comments" className="ms-comments-close" type="button">
              <svg viewBox="0 0 24 24" height="18" width="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-f9865659-ns")} />
              </svg>
            </button>
          </div>
          <div className="ms-comments-scroll">
            <div id="ms-post-comments" />
          </div>
        </div>
      </div>
    </>
  );
}
