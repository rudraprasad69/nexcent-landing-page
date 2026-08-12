# Nexcent Landing Page
## Product Requirements Document

**Version:** 1.0  
**Status:** Approved for development  
**Audience:** Product, design, frontend engineering, QA

## 1. Product summary
Nexcent is a responsive marketing landing page for a membership and community-management platform. The page must reproduce the supplied Figma composition with high visual fidelity while remaining maintainable, accessible, and ready for future content updates.

## 2. Goals
- Recreate the complete landing page from navigation through footer.
- Preserve the design’s hierarchy, whitespace, green accent system, pale-gray bands, dark footer, imagery, and responsive behavior.
- Keep all page copy, labels, links, metrics, cards, and image references in typed structured content.
- Use server-rendered sections by default, isolating client behavior to interactive controls.
- Deliver a zero-horizontal-scroll experience from 360px through large desktop widths.

## 3. Page inventory
1. Navigation and mobile menu
2. Hero with registration CTA and illustration
3. Client logo strip
4. Community audience cards
5. Pixelgrade feature split
6. Business metrics band
7. Footer-design feature split
8. Customer testimonial
9. Insights/article cards
10. Final CTA
11. Dark site footer

## 4. Functional requirements
- Navigation links must be keyboard reachable and visibly focusable.
- Primary CTAs must be real links with meaningful destinations or clearly defined placeholder routes.
- Mobile navigation must open, close, and expose state through `aria-expanded` and `aria-controls`.
- Images must preserve aspect ratio, include useful alt text, and use optimized loading behavior.
- Content must be rendered from the structured content model rather than authored inline in presentation components.

## 5. Quality targets
- Responsive at 360px, 375px, 768px, 1024px, 1440px, and 1920px.
- No clipping, overlap, unexpected overflow, or unreadable text.
- Semantic heading order and accessible controls.
- Production build succeeds with TypeScript strictness enabled.
- Visual review performed against the supplied reference at desktop and mobile sizes.

## 6. Out of scope
Authentication, billing, CRM workflows, CMS administration, and backend membership operations are not required for this landing-page deliverable.

## 7. Acceptance criteria
The page is accepted when every listed section is present, content is data-driven, the responsive layouts remain stable, interactive controls work with keyboard and pointer input, and the rendered page visibly matches the supplied design direction.
