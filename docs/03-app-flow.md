# Nexcent Landing Page
## User Journey and Interaction Flows

## 1. Primary journey
1. A visitor lands on the page and sees the Nexcent value proposition.
2. The visitor scans the hero and selects **Register** or **Get a Demo**.
3. The visitor reviews client trust signals and audience segments.
4. The visitor scrolls through feature explanations, business outcomes, testimonial proof, and insights.
5. The visitor reaches the final CTA and selects the next-step action.

## 2. Desktop navigation flow
The header displays the Nexcent brand, primary navigation links, login action, and sign-up CTA. Links are direct, visible, and keyboard navigable. The header remains visually quiet so the hero remains the first focal point.

## 3. Mobile navigation flow
- The compact header displays the brand and menu button.
- Activating the menu reveals the navigation panel.
- The button changes its accessible expanded state.
- Selecting a link closes the panel and moves the visitor to the selected section or destination.
- The Escape key closes the panel where supported.

## 4. CTA behavior
All prominent actions are implemented as links so they remain crawlable and usable without JavaScript. The content model supplies each action label and destination, allowing a future route or form to be connected without changing section components.

## 5. Scroll and content flow
The page is intentionally linear: promise, proof, audience, product value, outcomes, credibility, education, and conversion. Each section has a clear heading and sufficient spacing so users can scan quickly on mobile and desktop.

## 6. Interaction states
- Link: default, hover, focus-visible, and active states.
- Button: default, hover, focus-visible, and disabled-ready styling.
- Mobile menu: closed and open states with accessible state attributes.
- Images: loading handled by Next.js image optimization without layout shifts through known dimensions.

## 7. Failure and fallback behavior
If an image cannot load, its alt text remains available to assistive technology. If JavaScript is unavailable, the server-rendered page and ordinary navigation links remain usable. No essential information depends on client-only state.
