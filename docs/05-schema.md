# Nexcent Landing Page
## Content Data Models and Validation

## 1. Content principles
All page-specific copy and configurable presentation data belongs in a typed content module. Components consume props and should remain reusable across another landing page with the same shape.

## 2. Core types
```ts
type LinkItem = { label: string; href: string }
type ImageAsset = { src: string; alt: string; width: number; height: number }
type Feature = { eyebrow?: string; title: string; body: string; cta: LinkItem; image: ImageAsset }
type Metric = { value: string; label: string }
type Article = { title: string; href: string; image: ImageAsset }
```

## 3. Page model
The page model contains `brand`, `navigation`, `hero`, `clientLogos`, `audiences`, `features`, `metrics`, `testimonial`, `articles`, `finalCta`, and `footer`. Arrays should be used for repeated content so the UI maps data rather than duplicating markup.

## 4. Validation rules
- Every navigation and CTA item has a non-empty label and valid internal or external href.
- Every image has an alt string and positive intrinsic dimensions.
- Every section has a meaningful heading where it represents a standalone landmark.
- Metric values remain strings so formatted values such as `2,245,341` are preserved exactly.
- Repeated cards must have unique keys derived from stable content identifiers.
- No component should own page-specific content literals outside accessibility fallbacks and metadata.

## 5. Asset rules
Use local files under `public/` for generated or imported imagery. Prefer `next/image` with known dimensions, `priority` only for the hero visual, and lazy loading for below-the-fold imagery. Logos may be represented by accessible text or approved local assets.

## 6. Editorial governance
Copy changes should happen in the content module. Visual changes should happen in reusable components or tokens. New sections should be added to the page model and composed through a dedicated section component rather than appended as a monolith.
