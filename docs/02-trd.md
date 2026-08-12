# Nexcent Landing Page
## Technical Requirements Document

**Version:** 1.0  
**Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

## 1. Architecture
Use a server-first Next.js App Router architecture. The route page composes focused sections such as `Header`, `Hero`, `LogoStrip`, `FeatureSplit`, `StatsBand`, `Testimonial`, `InsightsGrid`, `CtaBanner`, and `Footer`. Each section receives content through props and owns only its presentation concerns.

## 2. Rendering strategy
- `app/page.tsx` remains a Server Component.
- Static page sections render on the server for fast first paint and SEO.
- The mobile navigation toggle is the only client island unless a future interaction requires otherwise.
- Do not fetch content inside `useEffect`; static content is imported from the typed content layer.

## 3. Content architecture
Store page content in `content/` as typed data. The content model owns headings, body copy, labels, hrefs, image sources, image alt text, metrics, logo labels, article metadata, and footer columns. Components must not contain page-specific copy.

## 4. Styling system
Use semantic design tokens in `app/globals.css`. The primary palette is Nexcent green, dark slate text/footer, pale gray section backgrounds, white surfaces, and muted gray copy. Limit the visual system to these core colors and use responsive Tailwind utilities for spacing and layout.

## 5. Responsive behavior
- Mobile: one-column flow, compact header, hidden desktop nav, full-width buttons where appropriate.
- Tablet: preserve two-column feature sections when space permits and reduce gutters.
- Desktop: centered max-width container, generous vertical rhythm, two-column feature splits, four-column metric grid, and three-card insights grid.
- Avoid fixed widths that create horizontal scrolling.

## 6. Accessibility and security
Use semantic landmarks, one logical `h1`, ordered headings, descriptive alt text, accessible button names, focus-visible styles, and sufficient color contrast. Add baseline deployed response headers through the existing Next.js configuration when applicable.

## 7. Verification
Run TypeScript/build checks, inspect the page in a real browser, verify the menu interaction, and capture desktop/mobile screenshots. Review viewport widths that reflect the source composition and common device sizes.
