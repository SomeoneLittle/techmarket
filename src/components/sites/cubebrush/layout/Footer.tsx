import Link from "next/link";
import { asset } from "@/lib/asset";

export function Footer() {
  return (
    <>
      <footer className="hm-footer" role="contentinfo">
        <div className="hm-rainbow" aria-hidden="true">
          <span style={{"--i": "0", "background": "#f5a623", "flex": "14"} as React.CSSProperties} />
          <span style={{"--i": "1", "background": "#e74c3c", "flex": "8"} as React.CSSProperties} />
          <span style={{"--i": "2", "background": "#39b3e6", "flex": "18"} as React.CSSProperties} />
          <span style={{"--i": "3", "background": "#f87879", "flex": "6"} as React.CSSProperties} />
          <span style={{"--i": "4", "background": "#fdc64f", "flex": "11"} as React.CSSProperties} />
          <span style={{"--i": "5", "background": "#c74ad6", "flex": "7"} as React.CSSProperties} />
          <span style={{"--i": "6", "background": "#7bc178", "flex": "13"} as React.CSSProperties} />
          <span style={{"--i": "7", "background": "#8b80e0", "flex": "5"} as React.CSSProperties} />
          <span style={{"--i": "8", "background": "#c1f0ed", "flex": "10"} as React.CSSProperties} />
          <span style={{"--i": "9", "background": "#6fd7c9", "flex": "6"} as React.CSSProperties} />
        </div>
        <div className="hm-footer-trust">
          <span aria-hidden="true" className="hm-footer-trust-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" vectorEffect="non-scaling-stroke" />
              <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" vectorEffect="non-scaling-stroke" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" vectorEffect="non-scaling-stroke" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>
          <div>
            <div className="hm-footer-trust-title">
              100% human-made.
            </div>
            <div className="hm-footer-trust-sub">
              No AI-generated content on the Cubebrush marketplace.
            </div>
          </div>
        </div>
        <div className="hm-footer-grid">
          <div>
            <div className="hm-footer-brand">
              <img alt="Cubebrush" width="36" height="36" src={asset("/sites/cubebrush/img/logo-mark-white-1065c7c23a516247b4dc0688-d7c8e97b.png")} />
              <span>
                cubebrush
              </span>
            </div>
            <div className="hm-footer-stats">
              <div>
                180,803 products
              </div>
              <div>
                1,673,926 members
              </div>
              <div>
                12,466 stores
              </div>
            </div>
          </div>
          <section aria-labelledby="ft-company">
            <h2 className="hm-footer-col-head" id="ft-company">
              Company
            </h2>
            <div className="hm-footer-col-list">
              <Link className="cb-official-store-footer" href="/store">
                Cubebrush Store
              </Link>
              <Link href="/about">
                About
              </Link>
              <Link href="/licenses">
                Licenses
              </Link>
              <Link href="/distribution-agreement">
                Distribution Agreement
              </Link>
              <Link href="/partner-agreement">
                Partner Agreement
              </Link>
              <Link href="/terms">
                Terms of Service
              </Link>
              <Link href="/privacy">
                Privacy Policy
              </Link>
              <Link href="/contacts">
                Contact us
              </Link>
              <a href="https://support.cubebrush.co/hc/en-us">
                Help center
              </a>
            </div>
          </section>
          <section aria-labelledby="ft-community">
            <h2 className="hm-footer-col-head" id="ft-community">
              Community
            </h2>
            <div className="hm-footer-col-list">
              <Link href="/open_store">
                Open a store
              </Link>
              <Link href="/become_partner">
                Become a partner
              </Link>
              <Link href="/blog">
                Blog
              </Link>
              <Link href="/users/sign_in">
                Sign in
              </Link>
            </div>
          </section>
          <section aria-labelledby="ft-follow">
            <h2 className="hm-footer-col-head" id="ft-follow">
              Follow us
            </h2>
            <div aria-label="Social media" className="hm-footer-social">
              <a aria-label="Cubebrush on Instagram" href="https://www.instagram.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-84d327b5-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on X" href="https://x.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-1c9153bb-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on Facebook" href="https://www.facebook.com/cubebrush" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-ad9b4798-ns")} />
                </svg>
              </a>
              <a aria-label="Cubebrush on LinkedIn" href="https://www.linkedin.com/company/cubebrush-com" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-446a8e6b-ns")} />
                </svg>
              </a>
            </div>
          </section>
        </div>
        <div className="hm-footer-bottom">
          <span>
            2026 © Cubebrush.co. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}
