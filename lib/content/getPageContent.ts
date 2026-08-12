import { z } from 'zod';
import {
  SiteSchema,
  NavigationSchema,
  HeroSchema,
  ClientLogosSchema,
  AudienceCardsSchema,
  FeatureSplitsSchema,
  StatsSchema,
  TestimonialSchema,
  BlogSectionSchema,
  ClosingCtaSchema,
  FooterSchema
} from './schema';

import siteJson from '@/content/site.json';
import navigationJson from '@/content/navigation.json';
import heroJson from '@/content/hero.json';
import clientLogosJson from '@/content/clientLogos.json';
import audienceCardsJson from '@/content/audienceCards.json';
import featureSplitsJson from '@/content/featureSplits.json';
import statsJson from '@/content/stats.json';
import testimonialJson from '@/content/testimonial.json';
import blogPostsJson from '@/content/blogPosts.json';
import closingCtaJson from '@/content/closingCta.json';
import footerJson from '@/content/footer.json';

function parseOrThrow<T>(schema: z.ZodType<T>, data: unknown, file: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid content in ${file}: ${result.error.message}`);
  }
  return result.data;
}

export function getPageContent() {
  return {
    site: parseOrThrow(SiteSchema, siteJson, 'site.json'),
    navigation: parseOrThrow(NavigationSchema, navigationJson, 'navigation.json'),
    hero: parseOrThrow(HeroSchema, heroJson, 'hero.json'),
    clientLogos: parseOrThrow(ClientLogosSchema, clientLogosJson, 'clientLogos.json'),
    audienceCards: parseOrThrow(AudienceCardsSchema, audienceCardsJson, 'audienceCards.json'),
    featureSplits: parseOrThrow(FeatureSplitsSchema, featureSplitsJson, 'featureSplits.json'),
    stats: parseOrThrow(StatsSchema, statsJson, 'stats.json'),
    testimonial: parseOrThrow(TestimonialSchema, testimonialJson, 'testimonial.json'),
    blogSection: parseOrThrow(BlogSectionSchema, blogPostsJson, 'blogPosts.json'),
    closingCta: parseOrThrow(ClosingCtaSchema, closingCtaJson, 'closingCta.json'),
    footer: parseOrThrow(FooterSchema, footerJson, 'footer.json'),
  } as const;
}

export type PageContent = ReturnType<typeof getPageContent>;
