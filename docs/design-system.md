# WingsCraft Design System

Phase 1 foundation for the WingsCraft production build. The system is intentionally mobile-first and restrained; visual polish can evolve without changing the underlying rules.

## Principles
1. Emotion before information.
2. Show before tell.
3. One primary action per section.
4. Photography carries the luxury signal; UI stays quiet.
5. Mobile is the baseline, not a desktop reduction.

## Brand attributes
Elegant · Emotional · Cinematic · Timeless · Premium · Trustworthy

## Tokens
The canonical runtime tokens live in `foundation/tokens.css`.

### Color roles
- Ink `#15110f`: primary dark surface and text.
- Paper `#f7f3ec`: primary light canvas.
- Cream `#f2ede5`: secondary light surface.
- Wine `#5d1723`: primary brand action/accent.
- Gold `#ba956a`: restrained luxury accent.
- Line: translucent ink/white borders depending on surface.

Do not introduce new decorative colors without a functional role.

### Typography
- Display: Italiana / Georgia fallback.
- UI + body: DM Sans / system fallback.
- Display type is for headlines, editorial statements and names only.
- Sans is for body copy, navigation, labels, metadata, buttons and forms.

### Type scale
Use fluid sizes rather than device-specific values. Foundation aliases: `--step--1`, `--step-0`, `--step-1`, `--step-2`, `--step-3`, `--step-4`, `--step-5`.

### Spacing
4px base rhythm with semantic aliases from `--space-1` through `--space-8`. Sections use `--section-space`; page gutters use `--page-gutter`.

### Radius
The visual language is architectural/editorial. Default radius is 0. Use small radii only for controls where usability benefits.

## Layout
- Content max width: 1280px.
- Mobile gutter: 20px.
- Tablet gutter: 32px.
- Desktop gutter: 48px.
- Mobile section spacing: 72–80px.
- Desktop section spacing: 112–144px.
- Never create layout spacing with repeated `<br>` or empty elements.

## Components
Canonical structural classes are defined in `foundation/components.css`.

### `.wc-container`
Centers content and applies responsive horizontal gutters.

### `.wc-section`
Provides consistent vertical section rhythm.

### `.wc-stack`
Vertical flow utility. Override with `--stack-space` locally.

### `.wc-cluster`
Wrapping horizontal group for actions/tags.

### `.wc-grid`
Responsive grid that starts as one column.

### `.wc-button`
Minimum 48px touch target, clear focus state, primary/secondary variants.

### `.wc-eyebrow`, `.wc-display`, `.wc-heading`, `.wc-body`
Semantic typography primitives.

### `.wc-media`
Media wrapper with predictable aspect ratio and image behavior.

## Interaction
- Native scrolling on touch devices.
- Lenis/parallax only for fine-pointer desktop.
- Every motion enhancement must respect `prefers-reduced-motion`.
- Animation must not hide essential information or block navigation.
- Focus-visible state is mandatory for interactive elements.

## Image rules
- Always provide useful alt text for content images; decorative imagery gets empty alt.
- Use explicit aspect-ratio containers to prevent layout shift.
- Hero image may load eagerly; below-fold media loads lazily.
- Production photography must come from WingsCraft or a licensed source with usage rights.

## Accessibility baseline
- Semantic landmarks: header/nav/main/section/footer.
- One H1 per page.
- Heading hierarchy must not skip for styling.
- Interactive targets >= 44px, target 48px.
- Keyboard-operable mobile navigation.
- Visible focus states.
- Reduced motion respected.
- Form fields require persistent labels.

## Breakpoints
Mobile-first only:
- Base: 0–639px.
- `sm`: 640px+.
- `md`: 768px+.
- `lg`: 1024px+.
- `xl`: 1280px+.

Use breakpoints because the composition needs them, not to target specific devices.

## Content truth rule
No fabricated awards, publications, client logos, testimonials, statistics or wedding details. Placeholder/demo copy must be marked internally until WingsCraft approves it.
