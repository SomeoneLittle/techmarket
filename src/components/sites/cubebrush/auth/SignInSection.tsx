"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { signIn } from "../state/session";
import { DEMO_NOTICE, toast } from "../state/toast";
import { asset } from "@/lib/asset";

export function SignInSection() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ok = signIn(String(fd.get("user[login]") ?? ""), String(fd.get("user[password]") ?? ""));
    if (ok) {
      router.push("/account");
    } else {
      setError("Invalid login or password. Use the demo account 111 / 111.");
    }
  };
  return (
    <>
      <section aria-labelledby="ah-title" className="ah-section">
        <header className="ah-intro">
          <img alt="" aria-hidden="true" className="ah-intro-art" height="1300" src={asset("/sites/cubebrush/img/auth-signin-cfe22a154e7715c9eba619c820d2-c2d84c63.svg")} width="1400" />
          <h1 className="ah-title" id="ah-title">
            Welcome back
          </h1>
          <p className="ah-sub">
            Sign in to keep buying, selling, and curating on Cubebrush.
          </p>
        </header>
        <div className="ah-card">
          <div className="ah-social-stack">
            <button className="ah-social ah-social-google" type="button" onClick={() => toast(DEMO_NOTICE)}>
              <span aria-hidden="true" className="ah-social-icon">
                <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-32602c8d-ns")} />
                </svg>
              </span>
              Continue with Google
            </button>
            <button className="ah-social ah-social-facebook" type="button" onClick={() => toast(DEMO_NOTICE)}>
              <span aria-hidden="true" className="ah-social-icon">
                <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true">
                  <use href={asset("/sites/cubebrush/icons.svg#glyph-24bb8ada-ns")} />
                </svg>
              </span>
              Continue with Facebook
            </button>
          </div>
          <div className="ah-divider">
            <span className="ah-divider-line" />
            <span className="ah-divider-label">
              or
            </span>
            <span className="ah-divider-line" />
          </div>
          <form className="ah-form" noValidate onSubmit={onSubmit}>
            <p className="tm-demo-hint">
              Demo clone — sign in with the test account: login <b>111</b>, password <b>111</b>.
            </p>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="ah-email">
                Email or login
              </label>
              <input aria-describedby="ah-err-email" autoComplete="username" className="ah-input" id="ah-email" name="user[login]" placeholder="111" required type="text" />
              <p className="ah-field-error" hidden id="ah-err-email" />
            </div>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="ah-password">
                Password
              </label>
              <div className="ah-input-wrap">
                <input aria-describedby="ah-err-password" autoComplete="current-password" className="ah-input ah-input-with-slot" id="ah-password" name="user[password]" placeholder="•••" required type={showPw ? "text" : "password"} />
                <button aria-label="Show password" aria-pressed={showPw} className="ah-input-slot" type="button" onClick={() => setShowPw((v) => !v)}>
                  <svg viewBox="0 0 24 24" height="18" width="18" className="ah-eye" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-06693f23-ns")} />
                  </svg>
                  <svg viewBox="0 0 24 24" height="18" width="18" className="ah-eye-off" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#cbm-eye-off-5879cef1-ns")} />
                  </svg>
                </button>
              </div>
              <p className="ah-field-error" hidden={!error} id="ah-err-password">
                {error}
              </p>
            </div>
            <div className="ah-row">
              <label className="ah-check">
                <input defaultChecked className="ah-check-input" name="user[remember_me]" type="checkbox" value="1" />
                <span aria-hidden="true" className="ah-check-box">
                  <svg viewBox="0 0 24 24" height="12" width="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <use href={asset("/sites/cubebrush/icons.svg#glyph-95ca33a7-ns")} />
                  </svg>
                </span>
                <span>
                  Remember me
                </span>
              </label>
              <a className="ah-link" href="https://cubebrush.co/users/password/new">
                Forgot password?
              </a>
            </div>
            <button className="ah-submit" type="submit">
              Sign in
            </button>
          </form>
        </div>
        <p className="ah-switch">
          {"Don't have an account? "}
          <Link className="ah-link" href="/users/sign_in">
            Create account
          </Link>
        </p>
      </section>
    </>
  );
}
