# Nexcent Landing Page
## Implementation Plan, Roadmap, and Risk Register

## 1. Delivery phases
### Phase 1 — Foundation
Confirm Next.js App Router structure, strict TypeScript, Tailwind tokens, metadata, and content model.

### Phase 2 — Page composition
Build the server-rendered header, hero, logo strip, audience cards, feature splits, metrics, testimonial, insights, CTA, and footer as separate components.

### Phase 3 — Responsive and accessible behavior
Add the mobile navigation island, responsive breakpoints, focus states, semantic landmarks, image alternatives, and keyboard interaction.

### Phase 4 — Visual refinement
Compare desktop, tablet, and mobile screenshots against the Figma reference. Adjust container widths, section rhythm, type scale, image proportions, and color tokens.

### Phase 5 — Release verification
Run build and type checks, inspect browser output, verify all links and menu states, check for horizontal overflow, and prepare the repository for GitHub publishing.

## 2. Definition of done
- All 11 page sections are rendered.
- Content is separated into typed structured data.
- Components are modular and server-rendered where possible.
- Mobile menu works with keyboard and assistive technology.
- Images have dimensions and useful alt text.
- Desktop, tablet, and mobile layouts have been reviewed.
- Production build succeeds with no TypeScript errors.

## 3. Risks and mitigations
| Risk | Impact | Mitigation |
| --- | --- | --- |
| Figma export assets unavailable | Medium | Use approved local/generated assets with matching proportions and visual language. |
| Copy differs from screenshot | Medium | Treat the attached six-document brief and supplied reference as the source of truth. |
| Mobile overflow | High | Test at 360px and 375px; use flexible containers and wrapping controls. |
| Client-side overuse | Medium | Keep page sections as Server Components and isolate only menu behavior. |
| Visual drift after edits | Medium | Re-run browser screenshots after meaningful layout or token changes. |
| GitHub publication unavailable | Low | Keep repository-ready source tree; connect a GitHub repository through project settings before publishing. |

## 4. Ownership boundaries
Product requirements define what ships. The technical requirements define how it is built. The UI/UX brief defines visual intent. The schema protects content separation. This implementation plan coordinates sequencing and verification without merging those concerns into one component.
