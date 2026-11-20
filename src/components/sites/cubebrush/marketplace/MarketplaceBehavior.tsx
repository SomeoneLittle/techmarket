"use client";

import { useEffect } from "react";
import { toast } from "../state/toast";

/**
 * Wires the server-rendered marketplace markup (carousel, tabs, filters, search)
 * with delegated listeners. Filtering itself is a stub: the clone ships a small fixed catalogue.
 */
export function MarketplaceBehavior() {
  useEffect(() => {
    const slides = document.querySelector<HTMLElement>(".dmp-slides");
    const dots = Array.from(document.querySelectorAll<HTMLButtonElement>("#mp-featured-dots button"));
    const count = slides?.children.length ?? 0;
    const current = () => (slides ? Math.round(slides.scrollLeft / slides.clientWidth) : 0);
    const go = (i: number) => {
      if (!slides || !count) return;
      const idx = (i + count) % count;
      slides.scrollTo({ left: idx * slides.clientWidth, behavior: "smooth" });
    };
    const syncDots = () => {
      const idx = current();
      dots.forEach((d, i) => d.setAttribute("aria-selected", String(i === idx)));
      Array.from(slides?.children ?? []).forEach((s, i) => (i === idx ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")));
    };
    slides?.addEventListener("scroll", syncDots, { passive: true });

    let auto = window.setInterval(() => go(current() + 1), 7000);
    const resetAuto = () => {
      window.clearInterval(auto);
      auto = window.setInterval(() => go(current() + 1), 7000);
    };

    // show ?q= search term in the pill
    const q = new URLSearchParams(window.location.search).get("q");
    const pill = document.querySelector<HTMLInputElement>("#mp-search input[type='search'], #mp-search input");
    if (q && pill) pill.value = q;

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const arrow = t.closest<HTMLButtonElement>(".dmp-carousel .dh-arrow");
      if (arrow) {
        go(current() + (arrow.classList.contains("prev") ? -1 : 1));
        resetAuto();
        return;
      }
      const dot = t.closest<HTMLButtonElement>("#mp-featured-dots button");
      if (dot) {
        go(Number(dot.dataset.index ?? 0));
        resetAuto();
        return;
      }
      const tab = t.closest<HTMLButtonElement>(".dh-toolbar .dh-tab");
      if (tab) {
        tab.parentElement?.querySelectorAll(".dh-tab").forEach((b) => b.setAttribute("aria-selected", String(b === tab)));
        toast(`Demo: “${tab.textContent?.trim()}” shows the same sample catalogue`);
        return;
      }
      const ft = t.closest<HTMLButtonElement>(".dh-filter-toggle");
      if (ft) {
        const panel = document.getElementById("dh-filters");
        const closed = panel?.classList.toggle("is-closed");
        ft.setAttribute("aria-expanded", String(!closed));
        return;
      }
      const chip = t.closest<HTMLButtonElement>(".dh-chip");
      if (chip) {
        const group = chip.parentElement;
        group?.querySelectorAll(".dh-chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        return;
      }
      if (t.closest(".dh-reset")) {
        document.querySelectorAll(".dh-filters .dh-chips").forEach((g) =>
          g.querySelectorAll(".dh-chip").forEach((c, i) => c.setAttribute("aria-pressed", String(i === 0))),
        );
        return;
      }
      if (t.closest("[data-f-more]")) {
        toast("Demo: only a few sample products are included");
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      if ((e.target as HTMLElement).closest("main")) {
        e.preventDefault();
        toast("Demo: search is disabled in this clone");
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      window.clearInterval(auto);
      slides?.removeEventListener("scroll", syncDots);
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);
  return null;
}
