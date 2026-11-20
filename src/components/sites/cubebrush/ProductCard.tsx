"use client";

import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";
import type { Product } from "./types";
import { DEMO_NOTICE, toast } from "./state/toast";

const SIZES =
  "(min-width: 1802px) 272px, (min-width: 1600px) calc((100vw - 170px) / 6), (min-width: 1511px) 272px, (min-width: 1280px) calc((94.8vw - 72px) / 5), (min-width: 1205px) 272px, (min-width: 960px) calc((94.8vw - 54px) / 4), (min-width: 899px) 272px, (min-width: 770px) calc((94.8vw - 36px) / 3), calc((100vw - 76px) / 3)";

const icon = (id: string) => asset(`/sites/cubebrush/icons.svg#${id}`);

function ProductLink({ p, className, children, ...rest }: { p: Product; className?: string; children?: React.ReactNode; "aria-hidden"?: boolean; tabIndex?: number }) {
  if (p.internal) {
    return (
      <Link className={className} href={p.href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a className={className} href={`https://cubebrush.co${p.href}`} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}

export function ProductCard({ p, purchased = false }: { p: Product; purchased?: boolean }) {
  const [saved, setSaved] = useState(false);
  const [cart, setCart] = useState<"add" | "added">("add");

  return (
    <div className="cb-pcard">
      <ProductLink p={p} aria-hidden className="cb-pcard-cover" tabIndex={-1} />
      <div className="cb-pcard-thumb">
        {p.img && <img alt={p.alt} height="360" loading="lazy" sizes={SIZES} src={asset(p.img)} width="640" />}
        {p.video && (
          <span aria-label="Has video trailer" className="cb-pcard-video">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <use href={icon("play-d33081f4-ns")} />
            </svg>
            Video
          </span>
        )}
        {purchased ? (
          <span className="cb-pcard-discount" style={{ background: "#34b6ea" }}>
            PURCHASED
          </span>
        ) : (
          p.badge && (
            <span className="cb-pcard-discount" style={p.badge.bg ? { background: p.badge.bg } : undefined}>
              {p.badge.text}
            </span>
          )
        )}
        <button
          aria-label="Save to wishlist"
          aria-pressed={saved}
          className="cb-pcard-heart"
          type="button"
          onClick={() => {
            setSaved((s) => !s);
            toast(saved ? "Removed from wishlist (demo)" : "Saved to wishlist (demo)");
          }}
        >
          <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <use href={icon("wishlist-3023943d-ns")} />
          </svg>
        </button>
        <div className="scrim" />
      </div>
      <div className="cb-pcard-body">
        <div className="cb-pcard-title">
          <ProductLink p={p}>{p.title}</ProductLink>
        </div>
        <div className="cb-pcard-byline">
          {"by "}
          <a className="cb-pcard-store" data-store={p.store} href={`https://cubebrush.co/${p.store}`} target="_blank" rel="noopener">
            {p.storeName}
          </a>
          {p.category ? ` in ${p.category}` : null}
        </div>
        <button aria-label="Choose a wishlist" className="dc-save-more" type="button" onClick={() => toast(DEMO_NOTICE)}>
          <span aria-hidden="true">⋯</span>
        </button>
      </div>
      <div className="cb-pcard-footer">
        <span className="cb-pcard-rating">
          <span aria-label={p.ratingLabel} className="cb-stars" role="img" style={{ "--fill": p.fill } as React.CSSProperties}>
            <span aria-hidden="true" className="cb-stars-fill" />
          </span>
          {p.reviews && <span>{p.reviews}</span>}
          {p.likes && (
            <span className="cb-pcard-stat is-likes" title="Likes">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={icon("wishlist-3023943d-ns")} />
              </svg>
              {p.likes}
            </span>
          )}
          {p.comments && (
            <span aria-label={`${p.comments} comments`} className="cb-pcard-stat is-comments" title="Comments">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <use href={icon("comments-fc11c717-ns")} />
              </svg>
              {p.comments}
            </span>
          )}
        </span>
        <span className="cb-pcard-priceline">
          {p.price.kind === "free" ? (
            <span className="cb-pcard-price is-free">Free</span>
          ) : (
            <span className={"cb-pcard-price" + (p.price.kind === "sale" ? " is-sale" : "")}>
              {p.price.was && (
                <span className="cb-pcard-price-was">
                  <bdi>{p.price.was}</bdi>
                </span>
              )}
              <bdi>{p.price.now}</bdi>
              {p.price.plus ? "+" : null}
            </span>
          )}
          {!purchased && (
            <button
              aria-label="Add to cart"
              className="cb-pcard-add"
              data-cart-state={cart}
              type="button"
              onClick={() => {
                setCart("added");
                toast("Added to cart — checkout is disabled in this demo");
              }}
            >
              <svg viewBox="0 0 24 24" className="cart-glyph-add" aria-hidden="true">
                <use href={icon("cart-880a038b-ns")} />
              </svg>
              <svg viewBox="0 0 24 24" className="cart-glyph-check" style={{ strokeWidth: "2.6" }} aria-hidden="true">
                <use href={icon("check-8732c19f-ns")} />
              </svg>
              <svg viewBox="0 0 24 24" className="cart-glyph-x" style={{ strokeWidth: "2.6" }} aria-hidden="true">
                <use href={icon("close-85fb137e-ns")} />
              </svg>
            </button>
          )}
        </span>
      </div>
    </div>
  );
}
