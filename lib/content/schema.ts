import { z } from 'zod';

export const ImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().positive(),
  height: z.number().positive(),
});

export const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().default(false).optional(),
});

export const IconSchema = z.enum([
  'users', 'building', 'bike', 'shield', 'trending-up', 'credit-card', 'UsersRound', 'Landmark', 'Building2'
]); 

export const SiteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  url: z.string().url(),
  ogImage: ImageSchema,
  logo: z.object({ src: z.string(), alt: z.string() }),
});

export const NavLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});
export const NavigationSchema = z.object({
  links: z.array(NavLinkSchema).min(1),
  loginCta: CtaSchema,
  signUpCta: CtaSchema,
});

export const HeroSchema = z.object({
  headingLine1: z.string(),
  headingAccent: z.string(),
  subtext: z.string(),
  cta: CtaSchema,
  image: ImageSchema,
  slides: z.number().int().min(1).default(1),
});

export const ClientLogosSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  logos: z.array(z.object({
    name: z.string(),
    src: z.string(),
  })).min(1),
});

export const AudienceCardSchema = z.object({
  icon: IconSchema,
  title: z.string(),
  body: z.string(),
});
export const AudienceCardsSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  cards: z.array(AudienceCardSchema).min(1),
});

export const FeatureSplitSchema = z.object({
  id: z.string(),
  heading: z.string(),
  body: z.string(),
  cta: CtaSchema,
  image: ImageSchema,
  imagePosition: z.enum(['left', 'right']),
});
export const FeatureSplitsSchema = z.array(FeatureSplitSchema).min(1);

export const StatItemSchema = z.object({
  icon: IconSchema,
  value: z.number(),
  label: z.string(),
});
export const StatsSchema = z.object({
  heading: z.string(),
  headingAccent: z.string(),
  subheading: z.string(),
  items: z.array(StatItemSchema).min(1),
});

export const TestimonialItemSchema = z.object({
  quote: z.string(),
  authorName: z.string(),
  authorTitle: z.string(),
  authorImage: ImageSchema,
});

export const TestimonialSchema = z.object({
  testimonials: z.array(TestimonialItemSchema).min(1),
  logos: z.array(z.object({ name: z.string(), src: z.string() })),
  allCustomersCta: CtaSchema,
});

export const BlogPostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  image: ImageSchema,
  href: z.string(),
});
export const BlogSectionSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  posts: z.array(BlogPostSchema).min(1),
});

export const ClosingCtaSchema = z.object({
  heading: z.string(),
  cta: CtaSchema,
});

export const FooterLinkGroupSchema = z.object({
  title: z.string(),
  links: z.array(z.object({ label: z.string(), href: z.string() })),
});
export const FooterSchema = z.object({
  logo: z.object({ src: z.string(), alt: z.string() }),
  copyright: z.string(),
  linkGroups: z.array(FooterLinkGroupSchema),
  newsletter: z.object({
    heading: z.string(),
    placeholder: z.string(),
  }),
  socialLinks: z.array(z.object({
    platform: z.string(),
    href: z.string().url(),
  })),
});
