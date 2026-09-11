# Prototype/demo mode

`/prototype/*` is a read-only **frontend-only** demo view of the reference genre tree. It hits the
same `grow-the-music-tree-api` backend and the same same-origin proxy as the live tree — there is
no separate backend identity behind it.

## How it's wired

- `src/lib/site-urls.ts`'s `getGrowBackendBaseUrl()` (`"/api/grow-proxy"`) is used by both
  `/reference-genre-tree` and `/prototype/reference-genre-tree` — there is only one proxy
  (`src/app/api/grow-proxy/[...path]/route.ts`) and one server-only key (`GTMT_API_KEY`).
- `isPrototypeRoute(pathname)` (`src/lib/prototype-mode.ts`) is the single source of truth for
  "are we in prototype/demo mode," a plain `pathname?.startsWith("/prototype")`. It drives
  UI-only concerns: showing any prototype-mode banner and picking the `readOnly` prop below.
- `src/components/features/genre-tree/GenreTreePage.tsx` is shared by both
  `/reference-genre-tree` (`readOnly={false}`) and `/prototype/reference-genre-tree`
  (`readOnly={true}`), passing `readOnly` through to `@behindthemusictree/app-kit`'s
  `GenreTreeView`, which hides write-action UI when true.

## Why this is UI-only

`readOnly` is a purely client-side flag — it hides write-action UI, nothing more. It has nothing to
do with `scope` (`"reference"` vs `"me"`) either — prototype mode still uses `scope="reference"`,
against the same backend as the live tree. There is no backend-side enforcement of read-only-ness
for `/prototype/*` requests; `GenreTreePage`'s `readOnly` prop is the entire mechanism.
