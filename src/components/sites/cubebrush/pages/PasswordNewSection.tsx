import Link from "next/link";

export function PasswordNewSection() {
  return (
    <>
      <section aria-labelledby="ah-title" className="ah-section">
        <header className="ah-intro">
          <h1 className="ah-title" id="ah-title">
            Forgot your password?
          </h1>
          <p className="ah-sub">
            Enter your email and we'll help you get back into your account.
          </p>
        </header>
        <div className="ah-card">
          <form className="ah-form" noValidate data-recovery="forgot" action="/users/password" acceptCharset="UTF-8" method="post">
            <input type="hidden" name="authenticity_token" value="hsXg0Nhk32typZiEee5wfE2PjwzTjfPXEqd5QA_xP4m8OPrg21YLj1D7SpT-fK_0N0JQJQfVjCkpHl8m0VG4hQ" autoComplete="off" />
            <input name="return" type="hidden" />
            <input name="intent" type="hidden" />
            <input name="for" type="hidden" />
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="recovery-email">
                Email
              </label>
              <div className="ah-input-wrap">
                <input aria-describedby="recovery-email-error" autoComplete="email" className="ah-input" id="recovery-email" name="user[login]" required type="email" />
              </div>
              <p className="ah-field-error" hidden id="recovery-email-error" />
            </div>
            <button className="ah-submit" type="submit">
              Send reset link
            </button>
          </form>
          <section aria-labelledby="recovery-success-title" className="cb-mailsent" data-recovery-success="" hidden tabIndex={-1}>
            <div className="cb-mailsent-body">
              <h2 id="recovery-success-title">
                Check your inbox
              </h2>
              <p>
                {"If an account exists for "}
                <strong data-recovery-email="" />
                , you'll receive a password reset link.
              </p>
              <p>
                Not there yet? Check spam or try again in a moment.
              </p>
              <button className="ah-link" data-recovery-resend="" type="button">
                Resend link
              </button>
              <p>
                <button className="ah-link" data-recovery-change="" type="button">
                  Use another email
                </button>
              </p>
            </div>
          </section>
          <p aria-live="polite" data-recovery-status="" role="status" />
        </div>
        <p className="ah-switch">
          <Link className="ah-link" href="/users/sign_in">
            Back to sign in
          </Link>
          {" · "}
          <a className="ah-link" href="https://support.cubebrush.co/hc/en-us">
            Get help
          </a>
        </p>
      </section>
    </>
  );
}
