"use client";

import { useEffect } from "react";
import { DEMO_NOTICE, toast } from "../state/toast";

/** Interactions for the server-rendered product page markup (gallery, tabs, licences, buy box). */
export function ProductBehavior() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(sel: string) => document.querySelector<T>(sel);
    const $$ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

    // ---- gallery
    const slides = $$(".pp-gallery-slide");
    let active = Math.max(0, slides.findIndex((s) => s.classList.contains("is-active")));
    const show = (i: number) => {
      if (!slides.length) return;
      active = (i + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle("is-active", k === active);
        s.setAttribute("aria-hidden", String(k !== active));
        if (k !== active) s.querySelector("video")?.pause();
      });
      $$(".pp-gallery-dot").forEach((d, k) => {
        d.classList.toggle("is-active", k === active);
        d.setAttribute("aria-pressed", String(k === active));
      });
      $$(".pp-thumb").forEach((t, k) => {
        t.classList.toggle("is-active", k === active);
        t.setAttribute("aria-pressed", String(k === active));
        if (k === active) t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
      });
    };

    // ---- tab indicator
    const indicator = $(".pp-tabs .hm-tab-indicator");
    const placeIndicator = () => {
      const sel = $<HTMLElement>(".pp-tab[aria-selected='true']");
      if (!indicator || !sel) return;
      indicator.style.width = `${sel.offsetWidth}px`;
      indicator.style.transform = `translate3d(${sel.offsetLeft}px,0,0)`;
    };
    placeIndicator();
    window.addEventListener("resize", placeIndicator);

    // ---- description fit
    const desc = $("#pp-desc-body");
    const descToggle = $<HTMLButtonElement>("#pp-desc-body-toggle");
    if (desc && descToggle && desc.scrollHeight <= desc.clientHeight + 4) {
      desc.classList.add("is-fit");
      descToggle.hidden = true;
    }

    // ---- stat rotator
    const rots = $$(".pp-stat-rot");
    let r = 0;
    const rotTimer = window.setInterval(() => {
      if (rots.length < 2) return;
      rots[r].classList.remove("is-active");
      r = (r + 1) % rots.length;
      rots[r].classList.add("is-active");
    }, 3500);

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const dot = t.closest<HTMLElement>(".pp-gallery-dot");
      if (dot) return show($$(".pp-gallery-dot").indexOf(dot));
      const thumb = t.closest<HTMLElement>(".pp-thumb");
      if (thumb) return show(Number(thumb.dataset.idx ?? 0));

      const tab = t.closest<HTMLButtonElement>(".pp-tab");
      if (tab) {
        $$(".pp-tab").forEach((b) => {
          const on = b === tab;
          b.setAttribute("aria-selected", String(on));
          b.tabIndex = on ? 0 : -1;
          const panel = document.getElementById(b.getAttribute("aria-controls") ?? "");
          if (panel) panel.hidden = !on;
        });
        placeIndicator();
        return;
      }

      const lt = t.closest<HTMLButtonElement>("#pp-license-toggle");
      if (lt) {
        const open = $("#pp-license-menu")?.classList.toggle("is-open") ?? false;
        lt.setAttribute("aria-expanded", String(open));
        return;
      }
      const opt = t.closest<HTMLButtonElement>(".pp-license-option");
      if (opt) {
        $$(".pp-license-option").forEach((o) => {
          o.classList.toggle("is-selected", o === opt);
          o.setAttribute("aria-selected", String(o === opt));
        });
        const price = Number(opt.dataset.price ?? 0);
        const label = opt.querySelector(".head")?.textContent?.trim() ?? "";
        const kind = $("#pp-license-kind");
        if (kind) kind.textContent = label;
        const p = $("#pp-license-price");
        if (p) p.textContent = `$${price}`;
        const bn = $("#pp-buy-now-price");
        if (bn) bn.textContent = String(price);
        const pp = $("#pp-paypal-amount");
        if (pp) pp.textContent = (price / 4).toFixed(2);
        $("#pp-license-menu")?.classList.remove("is-open");
        $("#pp-license-toggle")?.setAttribute("aria-expanded", "false");
        return;
      }

      if (t.closest("#pp-desc-body-toggle")) {
        const btn = t.closest<HTMLButtonElement>("#pp-desc-body-toggle")!;
        const exp = desc?.classList.toggle("is-expanded") ?? false;
        if (desc) desc.style.maxHeight = exp ? `${desc.scrollHeight}px` : "";
        btn.setAttribute("aria-expanded", String(exp));
        const lbl = btn.querySelector("span") ?? btn;
        lbl.textContent = exp ? "Show less" : "Show more";
        return;
      }

      const copy = t.closest<HTMLButtonElement>(".pp-copylink-btn");
      if (copy) {
        navigator.clipboard?.writeText(window.location.href).catch(() => undefined);
        toast("Link copied");
        return;
      }

      if (t.closest(".pp-buy-now, .op-download-main, .pp-upgrade-cta, .pp-gift-cta")) {
        e.preventDefault();
        toast(DEMO_NOTICE);
        return;
      }
      const cart = t.closest<HTMLButtonElement>(".pp-add-cart");
      if (cart) {
        cart.dataset.cartState = "added";
        toast("Added to cart — checkout is disabled in this demo");
        return;
      }
      const wish = t.closest<HTMLButtonElement>(".pp-wishlist");
      if (wish) {
        const on = wish.getAttribute("aria-pressed") !== "true";
        wish.setAttribute("aria-pressed", String(on));
        const lbl = wish.querySelector("span");
        if (lbl) lbl.textContent = on ? wish.dataset.wishlistSavedLabel ?? "Saved" : wish.dataset.wishlistLabel ?? "Add to wishlist";
        return;
      }
      const follow = t.closest<HTMLButtonElement>(".dpp-pill:not(a)");
      if (follow) {
        follow.setAttribute("aria-pressed", String(follow.getAttribute("aria-pressed") !== "true"));
        return;
      }
      if (t.closest(".pp-social-btn, .ps-report-product, .ps-report-nsfw, .op-tip-disclosure button")) {
        toast(DEMO_NOTICE);
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      if ((e.target as HTMLElement).closest("main")) {
        e.preventDefault();
        toast(DEMO_NOTICE);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      window.clearInterval(rotTimer);
      window.removeEventListener("resize", placeIndicator);
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);
  return null;
}
