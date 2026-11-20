# cubebrush.co — clone brief

Captured 2026-11-20 at 1440×900 (desktop build of the source, `cb-ui-generation` v3, dark theme).

## Approach
- The source ships one compiled stylesheet (`v3_desktop-*.css`, ~1.4 MB) shared by every page.
  It is stored at `public/sites/cubebrush/css/site.css` with font/image `url()`s rewritten to local files.
- Server-rendered markup of each page was transcribed into TSX (class names kept so the source CSS applies).
  Product cards were extracted into data (`data/products.ts`) + `ProductCard`.
- Many styles are scoped with `body[data-cb-page-css~="…"]`, so each page type has its own root layout
  (`(home)`, `(marketplace)`, `(auth)`, `(product)`, `(account)`) that sets the body attributes.

## Interactions reproduced
Marketplace mega-menu, account drawer, light/dark toggle (persisted), ⌘K search focus, freebies rail arrows,
home product tabs, marketplace carousel (auto-advance, dots, arrows), filter panel + chips, product gallery
(thumbs/dots), product tabs with sliding indicator, licence picker updating prices, description expand,
wishlist/follow toggles, copy link.

## Stubbed (no backend)
Cart, checkout, downloads, OAuth, search results, filtering, comments, tips, sign-up. Login accepts 111 / 111 only.

## Known gaps
- The account cabinet has no public source page; it is composed from the source design tokens/components.
- Home tabs other than "Popular" are filtered from the local sample catalogue.
- The source's separate mobile build was not cloned; narrow screens use the desktop CSS breakpoints.
- Next static export logs 404s for some RSC prefetch segment files; navigation still works.
