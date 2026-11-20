# techmarket

A static front-end clone of [cubebrush.co](https://cubebrush.co) built with the
[ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)
(Next.js 16 App Router, static export). Live at <https://someonelittle.github.io/techmarket/>.

This is a **demo**: there is no backend. Payments, carts, downloads, search and
accounts are stubs that show a toast.

## Demo account

Sign in at `/users/sign_in` with login **111** and password **111** to see the
account cabinet (`/account`). The session is kept in `localStorage` only.

## Routes

Local paths mirror cubebrush.co:

| Area | Routes |
| --- | --- |
| Shop | `/`, `/marketplace`, `/theartgun/products/rwe03q/…`, `/alwayshungry/products/ae75sq/…` |
| Stores | `/store` (official), `/theartgun`, `/alwayshungry` |
| Blog | `/blog`, `/blog/what-makes-an-asset-game-ready`, `/blog/earn-as-a-cubebrush-affiliate` |
| Sell / Earn | `/open_store`, `/become_partner` |
| Company | `/about`, `/contacts`, `/licenses`, `/terms`, `/privacy`, `/distribution-agreement`, `/partner-agreement` |
| Account | `/users/sign_in`, `/users/sign_up`, `/users/password/new`, `/account` (demo cabinet) |

Product cards, blog posts and stores without a local page link to the original site.

## Responsive

The source serves a separate mobile build to phones. Here the desktop markup is adapted
with `public/sites/cubebrush/css/responsive.css` (≤1024 px tablet, ≤760 px phone):
compact header, full-width mega menu, one card per row, swipeable rails, stacked heroes.

## Development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + static build into out/
```

Deployment: `.github/workflows/deploy.yml` builds with
`NEXT_PUBLIC_BASE_PATH=/techmarket` and publishes `out/` to GitHub Pages on every
push to `main`.

## Layout

- `src/app/` — one root layout; each page sets the source's `<body>` attributes (CSS scoping) via `PageAttrs`
- `scripts/flatten-rsc.mjs` — post-build fix so client-side navigation finds the exported RSC segment files
- `src/components/sites/cubebrush/` — transcribed page sections, shared chrome, product card, demo session/toast state
- `public/sites/cubebrush/` — the source site's stylesheet, Mulish fonts, icon sprite and images

All content, images and branding belong to Cubebrush and their creators; this
repository is a private study/demo clone.
