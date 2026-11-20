"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { ProductCard } from "../ProductCard";
import { products } from "../data/products";
import { signOut, useSession } from "../state/session";
import { DEMO_NOTICE, toast } from "../state/toast";

const icon = (id: string) => asset(`/sites/cubebrush/icons.svg#${id}`);

/* Sample "purchases" for the demo account: picked from the local catalogue. */
const LIBRARY = ["0dpzeg", "ae75sq", "qbhdg", "cc7brw", "lkt2tq", "9tgcpq"].map((id) => products[id]).filter(Boolean);
const WISHLIST = ["0dpzeg", "x5h1wq", "pzos7g", "j1fhhq"].map((id) => products[id]).filter(Boolean);

const ORDERS = [
  { id: "CB-104382", date: "Nov 18, 2026", items: "ART School", total: "$29.99", status: "Paid" },
  { id: "CB-103917", date: "Nov 02, 2026", items: "GestureFlow 1.1.2 + 1 more", total: "$34.00", status: "Paid" },
  { id: "CB-101245", date: "Oct 11, 2026", items: "Free Ref Pack - Iceland", total: "$0.00", status: "Free" },
];

const TABS = [
  { id: "library", label: "Library" },
  { id: "wishlist", label: "Wishlist" },
  { id: "orders", label: "Orders" },
  { id: "settings", label: "Settings" },
] as const;
type TabId = (typeof TABS)[number]["id"];

export function AccountDashboard() {
  const user = useSession();
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("library");

  // Guests landing here go to sign in; signing out from this page goes home instead (handled by the button).
  const hadUser = useRef(false);
  useEffect(() => {
    if (user) hadUser.current = true;
    else if (user === null && !hadUser.current) router.replace("/users/sign_in");
  }, [user, router]);

  if (!user) {
    return (
      <section className="dh-section">
        <p className="tm-acct-muted">{user === null ? "Redirecting to sign in…" : "Loading…"}</p>
      </section>
    );
  }

  return (
    <>
      <section className="dh-userhero">
        <div className="dh-userhero-inner">
          <div className="dh-sechead">
            <div className="tm-acct-id">
              <span className="tm-acct-avatar" aria-hidden="true">
                {user.name.slice(0, 1)}
              </span>
              <div>
                <div className="dh-eyebrow">My account · demo</div>
                <h2>Welcome back, {user.name}</h2>
                <p className="tm-acct-muted">
                  {user.email} · Member since {user.since}
                </p>
              </div>
            </div>
            <button
              className="dh-outline"
              type="button"
              onClick={() => {
                signOut();
                router.push("/");
              }}
            >
              Sign out
            </button>
          </div>
          <div className="tm-acct-stats">
            <Stat label="Products owned" value={String(LIBRARY.length)} />
            <Stat label="In wishlist" value={String(WISHLIST.length)} />
            <Stat label="Orders" value={String(ORDERS.length)} />
            <Stat label="Store credit" value="$0.00" />
          </div>
        </div>
      </section>

      <section className="dh-section dh-paper-rule">
        <p className="tm-demo-hint">
          This is a <b>demo cabinet</b>: the data below is sample content, downloads, payments and settings are not connected to any backend.
        </p>
        <div aria-label="Account sections" className="dh-tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} aria-selected={tab === t.id} className="dh-tab" role="tab" type="button" onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "library" && (
          <ul aria-label="Purchased products" className="dh-grid">
            {LIBRARY.map((p) => (
              <li key={p.id}>
                <ProductCard p={p} purchased />
                <button className="tm-acct-download" type="button" onClick={() => toast(DEMO_NOTICE)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                    <use href={icon("arrow-right-906d0151-ns")} />
                  </svg>
                  Download files
                </button>
              </li>
            ))}
          </ul>
        )}

        {tab === "wishlist" && (
          <ul aria-label="Wishlist" className="dh-grid">
            {WISHLIST.map((p) => (
              <li key={p.id}>
                <ProductCard p={p} />
              </li>
            ))}
          </ul>
        )}

        {tab === "orders" && (
          <div className="tm-acct-table-wrap">
            <table className="tm-acct-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.date}</td>
                    <td>{o.items}</td>
                    <td>{o.total}</td>
                    <td>
                      <span className="tm-acct-pill">{o.status}</span>
                    </td>
                    <td>
                      <button className="tm-acct-link" type="button" onClick={() => toast(DEMO_NOTICE)}>
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "settings" && (
          <form
            className="tm-acct-settings"
            onSubmit={(e) => {
              e.preventDefault();
              toast("Demo: settings are not saved");
            }}
          >
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="tm-name">
                Display name
              </label>
              <input className="ah-input" id="tm-name" defaultValue={user.name} />
            </div>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="tm-email">
                Email
              </label>
              <input className="ah-input" id="tm-email" type="email" defaultValue={user.email} />
            </div>
            <div className="ah-field">
              <label className="ah-field-label" htmlFor="tm-currency">
                Display currency
              </label>
              <select className="ah-input" id="tm-currency" defaultValue="USD">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
            <button className="ah-submit" type="submit">
              Save changes
            </button>
            <p className="tm-acct-muted">
              Want to sell? <Link href="/marketplace">Browse the marketplace</Link> or open a store on the original site.
            </p>
          </form>
        )}
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="tm-acct-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
