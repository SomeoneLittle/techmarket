import Link from "next/link";
import { asset } from "@/lib/asset";

export function SignUpSection() {
  return (
    <>
      <section aria-labelledby="ah-title" className="ah-section">
        <header className="ah-intro">
          <img alt="" aria-hidden="true" className="ah-intro-art" height="1400" src={asset("/sites/cubebrush/img/auth-signup-3d0c1aa8b4a4dc4cda100e3fcc0b-cd4c5112.svg")} width="1400" />
          <h1 className="ah-title" id="ah-title">
            Create your account
          </h1>
          <p className="ah-sub">
            {"Join "}
            <span data-cbm-usercount="">
              1,673,926
            </span>
            {" artists buying assets and opening stores."}
          </p>
        </header>
        <div className="ah-card">
          <div className="ah-social-stack">
            <button className="ah-social ah-social-google" form="ah-oauth-google" type="submit">
              <span aria-hidden="true" className="ah-social-icon">
                <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-32602c8d-ns")} />
                </svg>
              </span>
              Sign up with Google
            </button>
            <button className="ah-social ah-social-facebook" form="ah-oauth-facebook" type="submit">
              <span aria-hidden="true" className="ah-social-icon">
                <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-24bb8ada-ns")} />
                </svg>
              </span>
              Sign up with Facebook
            </button>
          </div>
          <form action="/users/auth/google_oauth2?origin=%2F" hidden id="ah-oauth-google" method="post">
            <input autoComplete="off" name="authenticity_token" type="hidden" value="CXwnyl1uTA9IS2HakQYb7QTfob7Hg3B5kaAiDI1C5V19E-iLfmSs4WvZIyg2uPWWLAVdG2lrRzFV3bq1LqyatA" />
          </form>
          <form action="/users/auth/facebook?origin=%2F" hidden id="ah-oauth-facebook" method="post">
            <input autoComplete="off" name="authenticity_token" type="hidden" value="GNsbtO9ANeNWaQDbEWgG75rQqRc3-OCoLkbj0TJuMTpstNT1zErVDXX7Qim21uiUsgpVspkQ1-DqO3tokYBO0w" />
          </form>
          <div className="ah-divider">
            <span className="ah-divider-line" />
            <span className="ah-divider-label">
              or
            </span>
            <span className="ah-divider-line" />
          </div>
          <form className="ah-form" noValidate action="/users" acceptCharset="UTF-8" method="post">
            <input type="hidden" name="authenticity_token" value="iacmrLzyj4Xcfkx9xri1PXcOy1wZCqlx6H52Z9CJ-3OIthGVIAPd1PTnxf28LdVQVSOey_uMeg3swAhRi5wj6Q" autoComplete="off" />
            <input name="redirect_url" type="hidden" value="/" />
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="ah-name">
                Username
              </label>
              <input aria-describedby="ah-err-name ah-help-name" autoComplete="username" className="ah-input" id="ah-name" name="user[username]" placeholder="@yourhandle" required type="text" />
              <p className="ah-field-help" id="ah-help-name">
                Shown on your store and reviews. You can change it later.
              </p>
              <p className="ah-field-error" hidden id="ah-err-name" />
            </div>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="ah-email">
                Email
              </label>
              <input aria-describedby="ah-err-email" autoComplete="email" className="ah-input" id="ah-email" name="user[email]" placeholder="you@example.com" required type="email" />
              <p className="ah-field-error" hidden id="ah-err-email" />
            </div>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="ah-password">
                Password
              </label>
              <div className="ah-input-wrap">
                <input aria-describedby="ah-help-password ah-err-password" autoComplete="new-password" className="ah-input ah-input-with-slot" id="ah-password" minLength={8} name="user[password]" placeholder="At least 8 characters" required type="password" />
                <button aria-label="Show password" aria-pressed="false" className="ah-input-slot" type="button">
                  <svg viewBox="0 0 24 24" height="18" width="18" className="ah-eye" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-06693f23-ns")} />
                  </svg>
                  <svg viewBox="0 0 24 24" height="18" width="18" className="ah-eye-off" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-off-5879cef1-ns")} />
                  </svg>
                </button>
              </div>
              <p className="ah-field-help" id="ah-help-password">
                At least 8 characters.
              </p>
              <p className="ah-field-error" hidden id="ah-err-password" />
            </div>
            <label className="ah-check ah-check-stacked">
              <input className="ah-check-input is-blue" name="agree" type="checkbox" />
              <span aria-hidden="true" className="ah-check-box is-blue">
                <svg viewBox="0 0 24 24" height="12" width="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                </svg>
              </span>
              <span>
                {"I agree to Cubebrush's "}
                <Link className="ah-link" href="/terms">
                  Terms of Service
                </Link>
                {" and "}
                <Link className="ah-link" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            <button className="ah-submit ah-submit-commit" disabled type="submit">
              Agree to continue
            </button>
          </form>
        </div>
        <p className="ah-switch">
          {"Already have an account? "}
          <Link className="ah-link" href="/users/sign_in">
            Sign in
          </Link>
        </p>
      </section>
    </>
  );
}
