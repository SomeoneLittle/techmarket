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

| Source (cubebrush.co) | Local route | Notes |
| --- | --- | --- |
| `/` | `/` | Home: hero, weekly freebies, categories, sell band, popular products (tabs), daily picks |
| `/marketplace` | `/marketplace` | Featured carousel, tabs, filters panel, 20 sample products |
| `/users/sign_in` | `/users/sign_in` | Demo login form (111 / 111) |
| `/theartgun/products/rwe03q/…` | same path | Product page: gallery, licences, tabs |
| `/alwayshungry/products/ae75sq/…` | same path | Product page |
| — | `/account` | Demo cabinet: library, wishlist, orders, settings |

Product cards without a local page link to the original product on cubebrush.co.

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

- `src/app/(group)/layout.tsx` — one root layout per page type (each needs its own `<body>` attributes for the source CSS scoping)
- `src/components/sites/cubebrush/` — transcribed page sections, shared chrome, product card, demo session/toast state
- `public/sites/cubebrush/` — the source site's stylesheet, Mulish fonts, icon sprite and images

All content, images and branding belong to Cubebrush and their creators; this
repository is a private study/demo clone.
