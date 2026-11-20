import Link from "next/link";
import { asset } from "@/lib/asset";

export function Contacts() {
  return (
    <>
      <section aria-labelledby="ct-title" className="ct-page">
        <div className="dc-contact-hero">
          <div aria-hidden="true" className="ct-hero-art">
            <img alt="" loading="lazy" src={asset("/sites/cubebrush/img/contact-hero-b02374a1adf073e7587a9834ec6-1173837c.svg")} />
          </div>
          <div className="dc-program-copy">
            <div className="ct-eyebrow">
              Contact
            </div>
            <h1 className="ct-h1" id="ct-title">
              {"Get in touch with "}
              <strong>
                actual humans
              </strong>
              .
            </h1>
            <p className="ct-lede">
              {"We're a small team in Laguna Beach and we answer email ourselves. Pick the address that fits what you need. It'll get to the right person faster than a generic catch-all. Or just send to "}
              <a href="mailto:hello@cubebrush.co">
                hello@cubebrush.co
              </a>
              ; we'll route from there.
            </p>
            <div className="ct-sla">
              <svg viewBox="0 0 24 24" height="14" width="14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
              </svg>
              <span>
                {"Typical response: "}
                <b>
                  under 1 business day
                </b>
                {" (PT)"}
              </span>
            </div>
          </div>
        </div>
        <div className="ct-grid">
          <a className="ct-card ct-card--blue" href="mailto:hello@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-614e3188-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              General
            </div>
            <div className="ct-card-sub">
              Anything that doesn't fit another category. Account questions, feature feedback, partnership ideas.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                hello@cubebrush.co
              </span>
            </div>
          </a>
          <a className="ct-card ct-card--green" href="mailto:support@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-c69fc3fe-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              Help & support
            </div>
            <div className="ct-card-sub">
              Trouble downloading, payout issues, refund questions, anything broken. We'll fix it or tell you who can.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                support@cubebrush.co
              </span>
            </div>
          </a>
          <a className="ct-card ct-card--violet" href="mailto:info@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-c6bb1d52-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              Privacy & data rights
            </div>
            <div className="ct-card-sub">
              Access, export, correct, or delete your data. GDPR / CCPA requests. We respond within 30 days.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                info@cubebrush.co
              </span>
            </div>
          </a>
          <a className="ct-card ct-card--rose" href="mailto:copyrightagent@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-62d8ba6f-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              DMCA / copyright
            </div>
            <div className="ct-card-sub">
              Takedown notices and counter-notifications. The procedure is in our Terms §18.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                copyrightagent@cubebrush.co
              </span>
            </div>
          </a>
          <a className="ct-card ct-card--amber" href="mailto:trust@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-95a6e1b0-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              Trust & safety
            </div>
            <div className="ct-card-sub">
              Report harmful, illegal, or rule-breaking content. EU DSA Article 16 notices are also handled here.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                trust@cubebrush.co
              </span>
            </div>
          </a>
          <a className="ct-card ct-card--mint" href="mailto:press@cubebrush.co">
            <span aria-hidden="true" className="ct-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
                <use href={asset("/sites/cubebrush/icons.svg#glyph-9bb78463-ns")} />
              </svg>
            </span>
            <div className="ct-card-title">
              Press & partnerships
            </div>
            <div className="ct-card-sub">
              Media inquiries, podcasts, interviews, brand-licensing proposals. Logo and media kit available on request.
            </div>
            <div className="ct-card-row">
              <span className="ct-card-mail">
                press@cubebrush.co
              </span>
            </div>
          </a>
        </div>
        <div className="ct-section">
          <h2 className="ct-section-h">
            Or fire off a quick message
          </h2>
          <p className="ct-section-sub">
            Fill this in and it comes straight to us.
          </p>
          <form data-ct-form="" className="ct-form" action="/send_message" acceptCharset="UTF-8" method="post">
            <input type="hidden" name="authenticity_token" value="9q1MMpiqLnQnxyBAFjgXWs2LFSzXEUGBLEfLiZO9fc1ERG-gEPmenJQgEQSBrv2IuHvImoEEzWPfGFJFbBVFHg" autoComplete="off" />
            <div className="ct-field">
              <label htmlFor="ct-name">
                Your name
              </label>
              <input aria-describedby="ct-name-feedback" autoComplete="name" id="ct-name" name="message[name]" required type="text" />
              <span id="ct-name-feedback" hidden className="cb-field-error" />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-email">
                Your email
              </label>
              <input aria-describedby="ct-email-feedback" autoComplete="email" id="ct-email" name="message[email]" required type="email" />
              <span id="ct-email-feedback" hidden className="cb-field-error" />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-topic-btn">
                What's it about?
              </label>
              <div className="set-select" data-set-select="" data-value="General question">
                <button aria-controls="ct-topic-menu" aria-expanded="false" aria-haspopup="listbox" className="set-select-btn cb-dd-trigger cb-dd-field" id="ct-topic-btn" type="button">
                  <span className="set-select-current">
                    General question
                  </span>
                  <svg viewBox="0 0 24 24" height="14" width="14" className="set-select-btn-caret cb-chevron cb-dd-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#chevron-down-ff92e9c4-ns")} />
                  </svg>
                </button>
                <div aria-label="What's it about?" className="set-select-menu cb-dd-menu" hidden id="ct-topic-menu" role="listbox">
                  <div aria-selected="true" className="set-select-opt cb-dd-option is-active" data-value="General question" role="option" tabIndex={-1}>
                    General question
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Help with my account / order" role="option" tabIndex={-1}>
                    Help with my account / order
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Question about selling on Cubebrush" role="option" tabIndex={-1}>
                    Question about selling on Cubebrush
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Question about the partner program" role="option" tabIndex={-1}>
                    Question about the partner program
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Feature feedback" role="option" tabIndex={-1}>
                    Feature feedback
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Bug report" role="option" tabIndex={-1}>
                    Bug report
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Press / media inquiry" role="option" tabIndex={-1}>
                    Press / media inquiry
                  </div>
                  <div aria-selected="false" className="set-select-opt cb-dd-option" data-value="Something else" role="option" tabIndex={-1}>
                    Something else
                  </div>
                </div>
                <input name="message[topic]" type="hidden" value="General question" />
              </div>
            </div>
            <div className="ct-field">
              <label htmlFor="ct-msg">
                Your message
              </label>
              <textarea aria-describedby="ct-msg-feedback" id="ct-msg" name="message[body]" required />
              <span id="ct-msg-feedback" hidden className="cb-field-error" />
            </div>
            <div aria-hidden="true" className="ct-field ct-field-website">
              <label htmlFor="ct-website">
                Website
              </label>
              <input autoComplete="off" id="ct-website" name="message[website]" tabIndex={-1} type="text" />
            </div>
            <input name="message[rendered_at]" type="hidden" value="MTc5NTE5NDQ5Ng==--98cc152dec8ab9e1924a4407be45fbb7789a6364" />
            <div className="ct-turnstile">
              <div />
              <p aria-live="polite" className="ct-field-help ct-turnstile-note" id="ct-turnstile-note">
                Complete the check above to send.
              </p>
              <p className="ct-field-help ct-turnstile-fallback" hidden>
                {"We couldn't load the spam check this form needs. Please email us at "}
                <a href="mailto:hello@cubebrush.co">
                  hello@cubebrush.co
                </a>
                .
              </p>
            </div>
            <div className="ct-form-row">
              <p className="ct-field-help">
                {"We answer from a real inbox, usually within a business day. "}
                <b>
                  Privacy or legal requests
                </b>
                {" should use the appropriate address above, not this form."}
              </p>
              <button aria-describedby="ct-turnstile-note" className="ct-submit" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="ct-section">
          <h2 className="ct-section-h">
            Where we are
          </h2>
          <p className="ct-section-sub">
            {"For postal mail (rare): use the address below. For DMCA notices specifically, see our "}
            <Link href="/terms#dmca" style={{"color": "var(--cb-link-text,var(--cb-link))", "textDecoration": "none", "borderBottom": "1px solid rgba(64,179,222,.32)"} as React.CSSProperties}>
              Terms §18
            </Link>
            .
          </p>
          <div className="ct-meta">
            <div className="ct-office">
              <div className="ct-office-eyebrow">
                Office
              </div>
              <div className="ct-office-name">
                Cubebrush, LLC
              </div>
              <div className="ct-office-addr">
                1968 S. Coast Hwy #1597
                <br />
                Laguna Beach, CA 92651
                <br />
                United States
              </div>
              <dl className="ct-office-meta">
                <div>
                  <dt>
                    Hours
                  </dt>
                  <dd>
                    Mon–Fri · 9am–6pm Pacific
                  </dd>
                </div>
                <div>
                  <dt>
                    Founded
                  </dt>
                  <dd>
                    2015 · Laguna Beach, CA
                  </dd>
                </div>
              </dl>
            </div>
            <div className="ct-social">
              <div className="ct-social-eyebrow">
                Elsewhere
              </div>
              <div className="ct-social-title">
                Follow Cubebrush
              </div>
              <div className="ct-social-row">
                <a aria-label="Cubebrush on Instagram" className="ct-social-link" href="https://www.instagram.com/cubebrush" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-84d327b5-ns")} />
                  </svg>
                </a>
                <a aria-label="Cubebrush on X" className="ct-social-link" href="https://x.com/cubebrush" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-1c9153bb-ns")} />
                  </svg>
                </a>
                <a aria-label="Cubebrush on Facebook" className="ct-social-link" href="https://www.facebook.com/cubebrush" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-ad9b4798-ns")} />
                  </svg>
                </a>
                <a aria-label="Cubebrush on LinkedIn" className="ct-social-link" href="https://www.linkedin.com/company/cubebrush-com" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-446a8e6b-ns")} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
