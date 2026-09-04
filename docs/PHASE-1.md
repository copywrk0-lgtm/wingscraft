# Copywrk OS × WingsCraft — Phase 1 Foundation

Phase 1 deliberately prioritizes architecture, consistency and mobile behavior over visual polish.

## Current baseline

The existing WingsCraft repository is a static multi-page site. Phase 1 keeps it deployable while introducing a design-system layer that can be migrated into a component framework later without rewriting the visual language.

## Repository structure

```text
/
├── assets/
│   ├── css/
│   │   └── foundation.css   # tokens, primitives, reusable UI classes
│   ├── images/              # local production imagery (Phase 2/content handoff)
│   └── icons/               # local SVG assets
├── docs/
│   └── PHASE-1.md
├── index.html
├── about.html
├── services.html
├── weddings.html
├── destinations.html
├── gallery.html
├── contact.html
├── style.css                # existing page styles; progressively migrated
├── script.js                # existing interactions
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Design system

### Foundations
- Color roles: ink, paper, cream, sand, wine, gold, muted and line colors.
- Type roles: display (`Italiana`) and body (`DM Sans`).
- Fluid type scale for eyebrow, body, lead, title and display text.
- 4px-based spacing scale.
- Fluid gutters and section spacing.
- Shared motion durations/easing and z-index layers.

### Layout primitives
- `.wc-container`
- `.wc-section`
- `.wc-stack`
- `.wc-cluster`
- `.wc-grid`, `.wc-grid--2`, `.wc-grid--3`, `.wc-grid--asymmetric`
- `.wc-copy`
- `.wc-bleed`

### Base components
- `.wc-button`, `.wc-button--ghost`
- `.wc-link`
- `.wc-card`
- `.wc-media`
- `.wc-field`
- `.wc-skip-link`
- `.wc-eyebrow`, `.wc-display`, `.wc-title`, `.wc-copy-text`

## Mobile-first rules

1. Base CSS targets phones first; enhancements begin at 48rem and 64rem.
2. Tap targets are at least ~44–48px where interactive controls are primary.
3. No desktop grid is collapsed blindly: content order is authored for narrow screens first.
4. Media uses intrinsic/aspect-ratio containers and `object-fit` rather than fixed pixel sizing.
5. Horizontal spacing comes from the shared fluid gutter token.
6. `100svh` is preferred for viewport-height hero experiences on mobile.
7. Reduced-motion preferences disable non-essential animation and smooth scrolling.
8. Keyboard focus remains visible.

## Phase 1 migration plan

- [x] Audit current repository and preserve deployable static baseline.
- [x] Create isolated working branch: `phase-1-foundation`.
- [x] Add repository folders for shared assets and documentation.
- [x] Add design tokens and layout primitives.
- [x] Add base controls, media, card, form and typography components.
- [x] Define mobile-first breakpoints and accessibility behavior.
- [ ] Migrate each page from legacy selectors to shared `wc-*` primitives.
- [ ] Move remote/placeholder media into production asset pipeline after client assets arrive.
- [ ] Consolidate repeated header/footer markup when the project is moved to a component framework.

## Definition of done before visual polish

Visual polish should not begin until every page has: predictable mobile spacing, no horizontal overflow, usable navigation, accessible focus states, consistent typography roles, consistent CTA behavior, reusable section/container primitives, and reduced-motion handling.

## Phase 2 boundary

Phase 2 can handle art direction: final imagery, richer motion, micro-interactions, bespoke transitions, fine typography tuning, hover states and page-specific editorial composition. Those decisions should consume the Phase 1 tokens rather than introduce one-off values.
