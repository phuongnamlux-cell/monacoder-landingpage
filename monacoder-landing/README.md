# MonaCoder Landing (Vite + React + Tailwind)

Landing page project for MonaCoder with multiple page variants (technical, simple, dev sales, investor, vibe, pricing).

## Requirements
- Node.js 20+

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Route variants
Use query params while running locally:
- `/` → Full technical page
- `/?simple` → Simplified benefits page
- `/?dev` → Developer sales page
- `/?investor` → Investor page
- `/?vibe` → Non-technical provider-guided page
- `/?pricing` → Pricing + team enablement page

Route switching is defined in `src/App.tsx`.

## Main files
- `src/components/MonaCoderLandingPage.tsx` (technical default)
- `src/components/MonaCoderLandingPageSimple.tsx`
- `src/components/MonaCoderDevSalesPage.tsx`
- `src/components/MonaCoderInvestorPage.tsx`
- `src/components/MonaCoderVibeCodePage.tsx`
- `src/components/MonaCoderPricingPage.tsx`
- `src/index.css` (global styles)

## Product truth to keep in copy (sync with MonaCoder core)
Before changing marketing text, keep these facts aligned with `/home/mona/projects/monacoder`:
- Version: `v0.4.5`
- Positioning: local-first (Ollama default), optional provider bridge (`claude_cli`, `codex_cli`)
- MCP: built-in MCP Server + MCP Client support
- Auto-apply limits: default `5 files / 400 lines`, configurable up to `20 files / 2000 lines`
- License/pricing status: MIT, free community usage (no hardcoded lifetime Stripe copy)

## Editing checklist
- Update CTA links (`Marketplace`, docs, contact email) before production publish.
- Avoid claims that conflict with current product behavior (for example, "100% local always" if bridge mode is shown).
- If product features change, update both technical page and variant pages in the same PR.
- Run `npm run build` before commit.

## Notes
- `dist/` is build output.
- `tsconfig.*.tsbuildinfo` files may appear after build and can be ignored locally.
