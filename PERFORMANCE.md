# Performance Optimizations Report

## Summary

Performance improvements were applied **without changing any UI, layout, visuals, text, spacing, or behavior**. All changes are non-visual and preserve pixel-perfect output and existing functionality.

---

## Baseline (before)

- **Home (/) First Load JS:** 185 kB (page: 46.9 kB)
- **Shared JS:** 87.2 kB (chunks: 31.6 kB + 53.6 kB + 1.9 kB)
- **Build:** Static export, `output: 'export'`

---

## After optimizations

- **Home (/) First Load JS:** 185 kB (page: 47.2 kB)
- **Shared JS:** 87.2 kB (unchanged)
- **New:** Below-the-fold content is in a separate dynamic chunk; other routes no longer pull that code.

**Why First Load JS is unchanged:** With `dynamic(..., { ssr: true })`, the below-fold content is still server-rendered and must be hydrated on the client, so Next.js still loads that chunk on first visit. The benefit is **route-level code splitting**: `/blog`, `/simple`, `/working` do not load Projects/Work/Education/Certifications/Ventures/Contact code.

---

## Checklist of changes

| # | Change | Why |
|---|--------|-----|
| 1 | **LCP image preload** | Added `<link rel="preload" href={DATA.avatarUrl} as="image" />` in `layout.tsx` so the hero avatar (LCP candidate) is requested earlier. Improves LCP. |
| 2 | **Code splitting (below-fold)** | Moved Projects, Work, Education, Certifications, Ventures, Contact into `HomeBelowFold.tsx` and load it with `next/dynamic` and `ssr: true`. Keeps full HTML/SEO and improves route-level splitting. |
| 3 | **Memoized ResumeCard & VentureCard** | Wrapped in `React.memo()` to avoid unnecessary re-renders when parent state updates. Reduces INP and CPU during scroll/interaction. |
| 4 | **BlurFade hydration-safe reduced motion** | Replaced `window.matchMedia` at render with `useState(false)` + `useEffect` so server and client first paint match. Prevents hydration mismatch and console errors. |
| 5 | **optimizePackageImports** | Added `experimental.optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']` in `next.config.mjs` to improve tree-shaking of icon imports. |

---

## Files changed

| File | Update |
|------|--------|
| `src/app/layout.tsx` | Preload link for avatar image (LCP). |
| `src/app/page.tsx` | Dynamic import of `HomeBelowFold`; only hero, about, skills in main page bundle. |
| `src/app/HomeBelowFold.tsx` | **New.** Contains Projects, Work, Education, Certifications, Ventures, Contact. |
| `src/components/resume-card.tsx` | Export `ResumeCard` as `React.memo(ResumeCardComponent)`. |
| `src/components/venture-card.tsx` | Export `VentureCard` as `React.memo(VentureCardComponent)`. |
| `src/components/magicui/blur-fade.tsx` | Reduced-motion check moved to `useState` + `useEffect` for hydration safety. |
| `next.config.mjs` | `experimental.optimizePackageImports` for lucide-react and @radix-ui/react-icons. |

---

## How to measure (Lighthouse & Web Vitals)

### Before/after (you run locally)

1. **Serve production build**
   ```bash
   npm run build && npx serve out
   ```
2. **Lighthouse (Chrome DevTools)**  
   Open `http://localhost:3000` (or the URL serve gives), DevTools → Lighthouse → Performance, run and record:
   - Performance score  
   - LCP, INP (or TBT), CLS  
   - FCP, TTFB (if applicable for your host)
3. **Web Vitals in the field**  
   Use [PageSpeed Insights](https://pagespeed.web.dev/) or [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) with your production URL once deployed.

### What to expect

- **LCP:** Preloading the avatar image should help LCP, especially on slower networks.
- **INP / responsiveness:** Memoized cards reduce re-renders during scroll and interaction.
- **CLS:** No layout or content changes; CLS should be unchanged or slightly better (no hydration mismatch).
- **TTFB:** Unchanged by these edits (depends on host and static export).
- **Console:** No hydration errors from BlurFade’s reduced-motion logic.

---

## What was not changed (per your rules)

- No UI, layout, spacing, or text changes.
- No features removed; no new heavy libraries.
- No markup changes that affect styling or layout.
- SEO and metadata unchanged; all content still server-rendered.
- Images: `unoptimized: true` and current `next/image` usage kept (static export constraint).

---

## Optional next steps (if you relax constraints later)

- Enable image optimization when moving to a host that supports Next image optimization (e.g. Vercel).
- Run `@next/bundle-analyzer` to see which chunks dominate and target further splits or replacements.
- Add `loading="lazy"` for the dynamic below-fold component so its JS loads when the section is near the viewport (would defer hydration of that section until then).
