"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { asset } from "@/lib/asset";
import { HeaderInner } from "./HeaderInner";
import { signOut, useSession } from "../state/session";
import { TOAST_EVENT } from "../state/toast";

const icon = (id: string) => asset(`/sites/cubebrush/icons.svg#${id}`);
const THEME_KEY = "cb_theme_desktop";

function currentTheme(): "dark" | "light" {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function useTheme() {
  const toggle = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);
  return toggle;
}

const RAINBOW: [string, number][] = [
  ["#f5a623", 14], ["#e74c3c", 8], ["#39b3e6", 18], ["#f87879", 6], ["#fdc64f", 11],
  ["#c74ad6", 7], ["#7bc178", 13], ["#8b80e0", 5], ["#c1f0ed", 10], ["#6fd7c9", 6],
];

export function Rainbow({ top = false }: { top?: boolean }) {
  return (
    <div className={"hm-rainbow" + (top ? " hm-rainbow-top" : "")} aria-hidden="true">
      {RAINBOW.map(([bg, flex], i) => (
        <span key={i} style={{ "--i": String(i), background: bg, flex: String(flex) } as React.CSSProperties} />
      ))}
    </div>
  );
}

/** Keeps body[data-cb-state] in sync with the demo session, like the source site. */
function useBodyState(isUser: boolean | undefined) {
  useEffect(() => {
    if (isUser === undefined) return;
    document.body.setAttribute("data-cb-state", isUser ? "user" : "guest");
  }, [isUser]);
}

export function Header() {
  const router = useRouter();
  const user = useSession();
  const [marketOpen, setMarketOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleTheme = useTheme();
  useBodyState(user === undefined ? undefined : !!user);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMarketOpen(false);
        setDrawerOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.querySelector<HTMLInputElement>(".dh-search input")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim() ?? "";
    router.push(q ? `/marketplace?q=${encodeURIComponent(q)}` : "/marketplace");
  };

  return (
    <>
      <Rainbow top />
      <header className="dh-chrome">
        <div className="dh-chrome-inner">
          <HeaderInner
            marketOpen={marketOpen}
            onToggleMarket={() => setMarketOpen((o) => !o)}
            onCloseMarket={() => setMarketOpen(false)}
            onToggleTheme={toggleTheme}
            onOpenDrawer={() => setDrawerOpen(true)}
            onSearch={onSearch}
            user={user ?? null}
            drawerOpen={drawerOpen}
          />
        </div>
      </header>
      <AccountDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onToggleTheme={toggleTheme} />
    </>
  );
}

function AccountDrawer({ open, onClose, onToggleTheme }: { open: boolean; onClose: () => void; onToggleTheme: () => void }) {
  const user = useSession();
  const router = useRouter();
  // keep the host mounted for one frame so the slide-in transition runs
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(open);
  if (open && !mounted) setMounted(true);
  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const id = requestAnimationFrame(() => setShown(false));
    const t = window.setTimeout(() => setMounted(false), 320);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(t);
    };
  }, [open]);

  return (
    <div className={"cb-drawer-host" + (shown ? " is-open" : "")} hidden={!mounted} id="account-drawer" inert={!open}>
      <div className="cb-drawer-backdrop" onClick={onClose} />
      <aside aria-label="Account menu" aria-modal="true" className="cb-drawer" role="dialog" onClick={(e) => (e.target as HTMLElement).closest("a") && onClose()}>
        <div className="hm-acct-card">
          <div aria-hidden="true" className="hm-acct-avatar">
            {user ? (
              <svg viewBox="0 0 38 38">
                <circle cx="19" cy="19" r="19" fill="#34b6ea" />
                <text x="19" y="24.5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{user.name.slice(0, 1)}</text>
              </svg>
            ) : (
              <svg className="cb-ico-fill" viewBox="0 0 328.145 328.145" preserveAspectRatio="xMidYMid meet">
                <circle cx="164.073" cy="164.073" fill="#e74c3c" r="161.073" />
                <path d="m277.206 278.712c-18.56-44.167-62.221-75.185-113.133-75.185-50.912 0-94.573 31.018-113.133 75.185 29.087 28.707 69.037 46.433 113.133 46.433s84.046-17.726 113.133-46.433z" fill="#f5a623" />
                <circle cx="164.073" cy="105.886" fill="#f5a623" r="59.831" />
              </svg>
            )}
          </div>
          <div>
            <div className="hm-acct-name">{user ? user.name : "Welcome"}</div>
            <div className="hm-acct-sub">{user ? "Demo account" : "Sign in to get started 👋"}</div>
          </div>
          <button aria-label="Close menu" className="hm-acct-close" type="button" onClick={onClose}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={icon("glyph-36906222-ns")} />
            </svg>
          </button>
        </div>
        <nav aria-label="More" className="hm-acct-section">
          {user && (
            <Link className="hm-acct-row" href="/account">
              <span className="hm-acct-row-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={icon("glyph-766d8081-ns")} />
                </svg>
              </span>
              <span className="hm-acct-row-label">My account</span>
            </Link>
          )}
          <a className="hm-acct-row" href="https://support.cubebrush.co/hc/en-us" target="_blank" rel="noopener">
            <span className="hm-acct-row-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={icon("glyph-2504e409-ns")} />
              </svg>
            </span>
            <span className="hm-acct-row-label">Help</span>
          </a>
          <button className="hm-acct-row" type="button" onClick={onToggleTheme}>
            <span className="hm-acct-row-icon is-sun" data-cb-theme-icon="">
              <svg viewBox="0 0 24 24" className="cb-theme-sun" aria-hidden="true">
                <use href={icon("cb-theme-sun-e6ffc355-ns")} />
              </svg>
              <svg viewBox="0 0 24 24" className="cb-theme-moon" aria-hidden="true">
                <use href={icon("cb-theme-moon-f62539a5-ns")} />
              </svg>
            </span>
            <span className="hm-acct-row-label">Light / Dark Mode</span>
          </button>
          {user ? (
            <button
              className="hm-acct-row"
              type="button"
              onClick={() => {
                signOut();
                onClose();
                router.push("/");
              }}
            >
              <span className="hm-acct-row-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <use href={icon("close-85fb137e-ns")} />
                </svg>
              </span>
              <span className="hm-acct-row-label">Sign Out</span>
            </button>
          ) : (
            <>
              <Link className="hm-acct-row" href="/users/sign_in">
                <span className="hm-acct-row-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={icon("glyph-766d8081-ns")} />
                  </svg>
                </span>
                <span className="hm-acct-row-label">Sign In</span>
              </Link>
              <Link className="hm-acct-row" href="/users/sign_in">
                <span className="hm-acct-row-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <use href={icon("glyph-766d8081-ns")} />
                  </svg>
                </span>
                <span className="hm-acct-row-label">Create Account</span>
              </Link>
            </>
          )}
        </nav>
      </aside>
    </div>
  );
}

export function ToastHost() {
  const [msg, setMsg] = useState<{ text: string; id: number } | null>(null);
  useEffect(() => {
    let timer = 0;
    const on = (e: Event) => {
      const text = (e as CustomEvent<string>).detail;
      setMsg({ text, id: Date.now() });
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMsg(null), 2800);
    };
    window.addEventListener(TOAST_EVENT, on);
    return () => {
      window.removeEventListener(TOAST_EVENT, on);
      window.clearTimeout(timer);
    };
  }, []);
  return (
    <div className="toast-host" id="v3-toast-host" aria-live="polite">
      {msg && (
        <div key={msg.id} className="tm-toast" role="status">
          {msg.text}
        </div>
      )}
    </div>
  );
}

/** Arrow buttons on horizontal product rails (.dh-rail-wrap), wired by delegation. */
export function RailBehavior() {
  useEffect(() => {
    const sync = (rail: HTMLElement) => {
      const wrap = rail.closest(".dh-rail-wrap");
      if (!wrap) return;
      const prev = wrap.querySelector<HTMLButtonElement>(".dh-arrow.prev");
      const next = wrap.querySelector<HTMLButtonElement>(".dh-arrow.next");
      if (prev) prev.disabled = rail.scrollLeft <= 2;
      if (next) next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    };
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".dh-rail-wrap .dh-arrow");
      if (!btn) return;
      const rail = btn.closest(".dh-rail-wrap")?.querySelector<HTMLElement>(".dh-rail");
      if (!rail) return;
      const dir = btn.classList.contains("prev") ? -1 : 1;
      rail.scrollBy({ left: dir * rail.clientWidth * 0.85, behavior: "smooth" });
    };
    const onScroll = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t instanceof HTMLElement && t.classList?.contains("dh-rail")) sync(t);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("scroll", onScroll, true);
    document.querySelectorAll<HTMLElement>(".dh-rail").forEach(sync);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);
  return null;
}
