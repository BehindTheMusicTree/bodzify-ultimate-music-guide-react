/**
 * Whether `pathname` is inside the read-only prototype/demo mode (`/prototype/*`) — a
 * frontend-only, UI-level flag with no separate backend identity behind it. See
 * `docs/prototype-mode.md`.
 */
export function isPrototypeRoute(pathname: string | null): boolean {
  return pathname?.startsWith("/prototype") ?? false;
}
