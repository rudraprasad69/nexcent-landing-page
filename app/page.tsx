import { getPageContent } from '@/lib/content/getPageContent'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ClientLogosSection } from '@/components/client-logos-section'
import { CommunitySection } from '@/components/community-section'
import { FeatureSplit } from '@/components/feature-split'
import { MetricsSection } from '@/components/metrics-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { BlogSection } from '@/components/blog-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  const content = getPageContent()

  return (
    <main id="home">
      <Header brand={content.site.name} nav={content.navigation.links} loginCta={content.navigation.loginCta} signUpCta={content.navigation.signUpCta} logo={content.site.logo} />
      <HeroSection content={content.hero} />
      <ClientLogosSection content={content.clientLogos} />
      <CommunitySection content={content.audienceCards} />
      <FeatureSplit content={content.featureSplits} />
      <MetricsSection content={content.stats} />
      <TestimonialSection content={content.testimonial} logos={content.clientLogos.logos} />
      <BlogSection content={content.blogSection} />
      <CtaSection content={content.closingCta} />
      <Footer content={content.footer} brand={content.site.name} logo={content.site.logo} />
    </main>
  )
}
