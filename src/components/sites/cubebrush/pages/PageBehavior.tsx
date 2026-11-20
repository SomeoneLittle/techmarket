"use client";

import { useEffect } from "react";
import { DEMO_NOTICE, toast } from "../state/toast";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const RAINBOW = ["#f5a623", "#e74c3c", "#39b3e6", "#f87879", "#fdc64f", "#c74ad6", "#7bc178", "#8b80e0", "#6fd7c9"];
const COOKIE_KEY = "cb-cookie-dismissed-2026";

type Cleanup = () => void;

/** Sliding underline under a tab list (port of the source's tab-rail behaviour). */
function tabIndicator(list: HTMLElement, tabSel: string): { move: (tab: HTMLElement, animate: boolean) => void; cleanup: Cleanup } {
  const ind = document.createElement("span");
  ind.className = "hm-tab-indicator";
  ind.setAttribute("aria-hidden", "true");
  list.appendChild(ind);
  list.classList.add("has-indicator");
  const tabs = () => Array.from(list.querySelectorAll<HTMLElement>(tabSel));
  const move = (tab: HTMLElement, animate: boolean) => {
    if (list.hasAttribute("data-tab-rainbow")) ind.style.background = tab.dataset.tabColor || RAINBOW[tabs().indexOf(tab) % RAINBOW.length];
    const prev = ind.style.transition;
    if (!animate) ind.style.transition = "none";
    ind.style.width = `${tab.offsetWidth}px`;
    ind.style.transform = `translate3d(${tab.offsetLeft}px,0,0)`;
    if (!animate) {
      void ind.offsetHeight;
      ind.style.transition = prev;
    }
  };
  const sel = () => tabs().find((t) => t.getAttribute("aria-selected") === "true") ?? tabs()[0];
  const resync = () => {
    const t = sel();
    if (t) move(t, false);
  };
  requestAnimationFrame(resync);
  document.fonts?.ready.then(resync);
  window.addEventListener("resize", resync);
  return {
    move,
    cleanup: () => {
      window.removeEventListener("resize", resync);
      ind.remove();
      list.classList.remove("has-indicator");
    },
  };
}

function slideCarousel(root: HTMLElement): Cleanup {
  const track = root.querySelector<HTMLElement>(".os-carousel-track");
  const slides = Array.from(root.querySelectorAll<HTMLElement>(".os-slide"));
  const dots = Array.from(root.parentElement?.querySelectorAll<HTMLButtonElement>(".os-dot") ?? []);
  let index = 0;
  let paused = false;
  let timer = 0;
  let resume = 0;
  const show = (n: number) => {
    const c = slides.length;
    if (!c) return;
    index = ((n % c) + c) % c;
    if (track) track.style.transform = `translateX(${-100 * index}%)`;
    slides.forEach((s, i) => {
      s.setAttribute("aria-hidden", String(i !== index));
      s.inert = i !== index;
    });
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
      d.setAttribute("aria-current", String(i === index));
    });
  };
  const start = () => {
    window.clearInterval(timer);
    if (!reduced()) timer = window.setInterval(() => !paused && show(index + 1), 5000);
  };
  const stop = () => window.clearInterval(timer);
  const onDot = (e: Event) => {
    const d = e.currentTarget as HTMLButtonElement;
    show(Number(d.dataset.index ?? dots.indexOf(d)));
    paused = true;
    window.clearTimeout(resume);
    resume = window.setTimeout(() => (paused = false), 4000);
  };
  let sx: number | null = null;
  let dx = 0;
  const ts = (e: TouchEvent) => {
    paused = true;
    sx = e.touches[0].clientX;
    dx = 0;
  };
  const tm = (e: TouchEvent) => {
    if (sx !== null) dx = e.touches[0].clientX - sx;
  };
  const te = () => {
    if (sx === null) return;
    sx = null;
    const th = Math.min(60, 0.18 * (root.clientWidth || 360));
    if (dx < -th) show(index + 1);
    else if (dx > th) show(index - 1);
    window.clearTimeout(resume);
    resume = window.setTimeout(() => (paused = false), 1500);
  };
  dots.forEach((d) => d.addEventListener("click", onDot));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  track?.addEventListener("touchstart", ts, { passive: true });
  track?.addEventListener("touchmove", tm, { passive: true });
  track?.addEventListener("touchend", te);
  show(0);
  start();
  return () => {
    stop();
    window.clearTimeout(resume);
    dots.forEach((d) => d.removeEventListener("click", onDot));
    root.removeEventListener("mouseenter", stop);
    root.removeEventListener("mouseleave", start);
    track?.removeEventListener("touchstart", ts);
    track?.removeEventListener("touchmove", tm);
    track?.removeEventListener("touchend", te);
  };
}

function stickyCta(el: HTMLElement, heroSel: string, secondarySel: string, hideAfterSecondary: boolean): Cleanup {
  const tick = () => {
    const hero = document.querySelector(heroSel);
    if (!hero) return;
    const sec = document.querySelector(secondarySel);
    const pastHero = hero.getBoundingClientRect().bottom < 100;
    const r = sec?.getBoundingClientRect();
    const onScreen = !!r && r.bottom > 0 && r.top < (window.innerHeight || 1);
    const pastSecondary = hideAfterSecondary && !!r && r.bottom < 0;
    el.hidden = !(pastHero && !onScreen && !pastSecondary);
  };
  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
  tick();
  return () => {
    window.removeEventListener("scroll", tick);
    window.removeEventListener("resize", tick);
  };
}

function earningsCalculator(root: HTMLElement): Cleanup {
  const slider = root.querySelector<HTMLInputElement>(".bp-calc-slider");
  if (!slider) return () => undefined;
  const price = 300;
  const commission = 20;
  const followers = (b: number) => {
    const t = 100 * b;
    return t >= 1e4 ? `${Math.round(t / 1e3)}k` : t >= 1e3 ? `${(t / 1e3).toFixed(1).replace(/\.0$/, "")}k` : String(t);
  };
  const sync = () => {
    const b = parseInt(slider.value, 10);
    if (!Number.isFinite(b)) return;
    const earn = Math.round((b * price * commission) / 100);
    const ro = root.querySelector("[data-cb-bp-readout]");
    if (ro) ro.textContent = `$${earn.toLocaleString("en-US")}`;
    root.querySelectorAll("[data-cb-bp-buyers]").forEach((e) => (e.textContent = String(b)));
    root.querySelectorAll("[data-cb-bp-buyersw]").forEach((e) => (e.textContent = b === 1 ? "buyer" : "buyers"));
    const f = root.querySelector("[data-cb-bp-followers]");
    if (f) f.textContent = followers(b);
  };
  slider.addEventListener("input", sync);
  return () => slider.removeEventListener("input", sync);
}

function legalNav(page: HTMLElement, prefix: string): Cleanup {
  const trigger = page.querySelector<HTMLButtonElement>(`.${prefix}-jump-btn`);
  const host = page.querySelector<HTMLElement>(`.${prefix}-toc-host`);
  const label = trigger?.querySelector<HTMLElement>(`.${prefix}-jump-btn-lbl`) ?? null;
  const links = Array.from(page.querySelectorAll<HTMLAnchorElement>("a[data-section]"));
  let open = false;
  let exit = 0;
  let frame = 0;
  let activeId = links[0]?.dataset.section ?? null;
  const openSheet = () => {
    if (!host || open) return;
    window.clearTimeout(exit);
    open = true;
    host.inert = false;
    host.setAttribute("data-open", "");
    document.documentElement.style.overflow = "hidden";
    frame = requestAnimationFrame(() => host.setAttribute("data-shown", ""));
    trigger?.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    if (!host || !open) return;
    open = false;
    cancelAnimationFrame(frame);
    host.removeAttribute("data-shown");
    host.inert = true;
    document.documentElement.style.overflow = "";
    trigger?.setAttribute("aria-expanded", "false");
    exit = window.setTimeout(() => host.removeAttribute("data-open"), reduced() ? 0 : 300);
  };
  const setActive = (id: string) => {
    if (!id || id === activeId) return;
    const i = links.findIndex((l) => l.dataset.section === id);
    if (i < 0) return;
    activeId = id;
    if (label) {
      const lbl = links[i].querySelector('[class$="-toc-lbl"]')?.textContent?.trim() ?? "";
      label.textContent = `${String(i + 1).padStart(2, "0")} · ${lbl}`;
    }
    links.forEach((l) => (l.dataset.section === id ? l.setAttribute("aria-current", "true") : l.removeAttribute("aria-current")));
  };
  const io = new IntersectionObserver(
    (entries) => {
      const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (v[0]) setActive(v[0].target.id);
    },
    { threshold: [0.1, 0.4], rootMargin: "-30% 0px -50% 0px" },
  );
  links.forEach((l) => {
    const s = document.getElementById(l.dataset.section ?? "");
    if (s) io.observe(s);
  });
  const onClick = (e: MouseEvent) => {
    const t = e.target as HTMLElement;
    if (trigger && trigger.contains(t)) return openSheet();
    if (t.closest(`.${prefix}-toc-scrim, .${prefix}-toc-close, a[data-section]`)) close();
    if (t.closest(`.${prefix}-top, [data-legal-top]`)) window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });
  };
  const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
  page.addEventListener("click", onClick);
  document.addEventListener("keydown", onKey);
  return () => {
    io.disconnect();
    close();
    page.removeEventListener("click", onClick);
    document.removeEventListener("keydown", onKey);
  };
}

function cookieNotice(el: HTMLElement): Cleanup {
  let dismissed = false;
  try {
    dismissed = !!window.localStorage.getItem(COOKIE_KEY);
  } catch {
    dismissed = true;
  }
  if (dismissed) {
    el.remove();
    return () => undefined;
  }
  const t = window.setTimeout(() => el.setAttribute("data-shown", ""), 350);
  const btn = el.querySelector<HTMLButtonElement>("button");
  const onOk = () => {
    el.removeAttribute("data-shown");
    try {
      window.localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => el.remove(), reduced() ? 0 : 360);
  };
  btn?.addEventListener("click", onOk);
  return () => {
    window.clearTimeout(t);
    btn?.removeEventListener("click", onOk);
  };
}

function readingProgress(article: HTMLElement): Cleanup {
  const bar = article.querySelector<HTMLElement>(".bl-progress");
  const fill = bar?.querySelector<HTMLElement>("[data-cb-blog-progress]");
  const body = article.querySelector<HTMLElement>(".bl-post-body");
  if (!bar || !fill || !body) return () => undefined;
  const home = bar.nextSibling;
  document.body.appendChild(bar);
  const chrome = document.querySelector<HTMLElement>(".dh-chrome");
  let scheduled = false;
  const draw = () => {
    scheduled = false;
    const rect = chrome?.getBoundingClientRect();
    const bottom = rect ? Math.max(0, rect.bottom) : 0;
    document.documentElement.style.setProperty("--bl-header-bottom", `${bottom}px`);
    if (rect) {
      bar.style.left = `${rect.left}px`;
      bar.style.width = `${rect.width}px`;
      bar.style.right = "auto";
    }
    const y = window.scrollY;
    const start = article.getBoundingClientRect().top + y - bottom;
    const end = body.getBoundingClientRect().bottom + y - window.innerHeight;
    const r = end <= start ? 1 : Math.max(0, Math.min(1, (y - start) / (end - start)));
    fill.style.transform = `scaleX(${r})`;
  };
  const queue = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(draw);
    }
  };
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  queue();
  return () => {
    window.removeEventListener("scroll", queue);
    window.removeEventListener("resize", queue);
    if (bar.parentNode === document.body) article.insertBefore(bar, home);
    document.documentElement.style.removeProperty("--bl-header-bottom");
  };
}

function storePanes(root: HTMLElement): Cleanup {
  const list = root.querySelector<HTMLElement>(".ms-crumb-tab")?.parentElement;
  if (!list) return () => undefined;
  const ti = tabIndicator(list, ".ms-crumb-tab");
  const onClick = (e: MouseEvent) => {
    const t = e.target as HTMLElement;
    const tab = t.closest<HTMLButtonElement>(".ms-crumb-tab");
    if (tab) {
      const pane = tab.dataset.msPane;
      list.querySelectorAll<HTMLElement>(".ms-crumb-tab").forEach((b) => {
        b.setAttribute("aria-selected", String(b === tab));
        b.classList.toggle("is-active", b === tab);
      });
      root.querySelectorAll<HTMLElement>("div.ms-pane[data-ms-pane]").forEach((p) => {
        const on = p.dataset.msPane === pane;
        p.hidden = !on;
        p.classList.toggle("is-active", on);
        p.classList.toggle("is-tab-enter", on);
      });
      ti.move(tab, true);
      return;
    }
    const sortBtn = t.closest<HTMLButtonElement>(".ms-sort");
    const menu = root.querySelector<HTMLElement>("#ms-sort-menu");
    if (sortBtn && menu) {
      menu.hidden = !menu.hidden;
      sortBtn.setAttribute("aria-expanded", String(!menu.hidden));
      return;
    }
    const opt = t.closest<HTMLButtonElement>(".ms-sort-opt");
    if (opt && menu) {
      menu.querySelectorAll(".ms-sort-opt").forEach((o) => {
        o.classList.toggle("is-selected", o === opt);
        o.setAttribute("aria-selected", String(o === opt));
      });
      const v = root.querySelector(".ms-sort-value");
      if (v) v.textContent = opt.textContent?.trim() ?? "";
      menu.hidden = true;
      return;
    }
    if (menu && !menu.hidden && !t.closest(".ms-sort-wrap")) menu.hidden = true;
    const ft = t.closest<HTMLButtonElement>(".dh-filter-toggle");
    if (ft) {
      const panel = document.getElementById("dh-filters");
      if (panel) {
        const closed = panel.classList.toggle("is-closed");
        panel.inert = closed;
        panel.setAttribute("aria-hidden", String(closed));
        ft.setAttribute("aria-expanded", String(!closed));
      }
      return;
    }
    const chip = t.closest<HTMLButtonElement>(".dh-chip");
    if (chip) {
      chip.parentElement?.querySelectorAll(".dh-chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      return;
    }
    const follow = t.closest<HTMLButtonElement>(".ms-btn-follow");
    if (follow) {
      const on = follow.getAttribute("aria-pressed") !== "true";
      follow.setAttribute("aria-pressed", String(on));
      const lbl = follow.querySelector(".ms-follow-label");
      if (lbl) lbl.textContent = on ? "Following" : "Follow";
      follow.querySelector(".ms-follow-add")?.setAttribute("display", on ? "none" : "inline");
      follow.querySelector(".ms-follow-check")?.setAttribute("display", on ? "inline" : "none");
      return;
    }
    const openDlg = (id: string) => {
      const d = document.getElementById(id);
      if (d instanceof HTMLDialogElement) {
        d.hidden = false;
        d.inert = false;
        if (!d.open) d.showModal();
        void d.offsetHeight;
        d.classList.add("is-open");
      }
    };
    if (t.closest(".ms-btn-message")) return openDlg("ms-msg-modal");
    if (t.closest('[aria-label="Share store"], .official-share')) return openDlg(document.getElementById("ms-share-modal") ? "ms-share-modal" : "official-share-dialog");
    const closeBtn = t.closest(".ms-modal-close, .ms-modal-backdrop, .official-dialog-close");
    if (closeBtn) {
      const d = closeBtn.closest("dialog");
      if (d) {
        d.classList.remove("is-open");
        d.inert = true;
        window.setTimeout(() => {
          d.close();
          d.hidden = true;
        }, reduced() ? 0 : 220);
      }
      return;
    }
    if (t.closest("#ms-share-copy")) {
      const input = document.getElementById("ms-share-url") as HTMLInputElement | null;
      navigator.clipboard?.writeText(input?.value ?? window.location.href).catch(() => undefined);
      toast("Link copied");
    }
  };
  root.addEventListener("click", onClick);
  return () => {
    ti.cleanup();
    root.removeEventListener("click", onClick);
  };
}

/** Interactions for the transcribed content pages (blog, sell, earn, legal, stores, auth). */
export function PageBehavior() {
  useEffect(() => {
    const cleanups: Cleanup[] = [];
    const main = document.getElementById("main");
    if (!main) return;

    main.querySelectorAll<HTMLElement>(".os-carousel").forEach((c) => cleanups.push(slideCarousel(c)));
    const osSticky = main.querySelector<HTMLElement>(".os-sticky-cta");
    if (osSticky) cleanups.push(stickyCta(osSticky, ".os-hero", "[data-os-cta-secondary]", true));
    const bpSticky = main.querySelector<HTMLElement>(".bp-sticky");
    if (bpSticky) cleanups.push(stickyCta(bpSticky, ".bp-hero", "[data-bp-cta-secondary]", false));
    main.querySelectorAll<HTMLElement>(".bp-calc").forEach((c) => cleanups.push(earningsCalculator(c)));
    for (const prefix of ["la", "lc", "pp", "tos"]) {
      const page = main.querySelector<HTMLElement>(`.${prefix}-page`);
      if (page && page.querySelector(`.${prefix}-toc-host`)) cleanups.push(legalNav(page, prefix));
    }
    main.querySelectorAll<HTMLElement>(".pp-cookie, .tos-cookie").forEach((c) => cleanups.push(cookieNotice(c)));
    const article = main.querySelector<HTMLElement>("article.bl-post");
    if (article) cleanups.push(readingProgress(article));
    if (main.querySelector(".ms-crumb-tab")) cleanups.push(storePanes(main));
    const blTabs = main.querySelector<HTMLElement>(".bl-tabs");
    let blMove: ((t: HTMLElement, a: boolean) => void) | null = null;
    if (blTabs) {
      const ti = tabIndicator(blTabs, ".bl-tab");
      blMove = ti.move;
      cleanups.push(ti.cleanup);
    }

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      if (!form.closest("main")) return;
      e.preventDefault();
      const submitter = e.submitter as HTMLElement | null;
      if (submitter?.classList.contains("bl-tab") && blTabs) {
        blTabs.querySelectorAll<HTMLElement>(".bl-tab").forEach((t) => {
          t.setAttribute("aria-selected", String(t === submitter));
          t.classList.toggle("is-active", t === submitter);
        });
        blMove?.(submitter, true);
        return;
      }
      if (form.closest(".ah-card")) toast("Demo: registration is disabled — sign in with 111 / 111");
      else toast(DEMO_NOTICE);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("main")) return;
      const pw = t.closest<HTMLButtonElement>(".ah-input-slot");
      if (pw) {
        const input = pw.parentElement?.querySelector("input");
        if (input) {
          const show = input.type === "password";
          input.type = show ? "text" : "password";
          pw.setAttribute("aria-pressed", String(show));
        }
        return;
      }
      if (t.closest(".ah-social, .bl-write, .bl-loadmore-btn, .ct-copy, .os-cta, .bp-cta-blue, .bp-cta-light, .bp-ghost-pill")) {
        if (t.closest("a[href^='/'], a[href^='#']")) return;
        e.preventDefault();
        toast(DEMO_NOTICE);
      }
    };
    document.addEventListener("submit", onSubmit);
    main.addEventListener("click", onClick);
    return () => {
      cleanups.forEach((c) => c());
      document.removeEventListener("submit", onSubmit);
      main.removeEventListener("click", onClick);
    };
  }, []);
  return null;
}
