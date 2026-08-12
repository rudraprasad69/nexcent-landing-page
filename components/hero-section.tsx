import Image from 'next/image'
import { CtaButton } from './cta-button'
import { z } from 'zod'
import { HeroSchema } from '@/lib/content/schema'

type HeroContent = z.infer<typeof HeroSchema>

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="surface-tint overflow-hidden" aria-labelledby="hero-title">
      <div className="section-shell grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        <div>
          <h1 id="hero-title" className="max-w-xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[4rem]">
            {content.headingLine1} <br/>
            <span className="text-primary">{content.headingAccent}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            {content.subtext}
          </p>
          <div className="mt-8">
            <CtaButton href={content.cta.href}>{content.cta.label}</CtaButton>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative animate-float-hero drop-shadow-xl">
            <Image 
              src={content.image.src} 
              alt={content.image.alt} 
              width={content.image.width} 
              height={content.image.height} 
              priority 
              className="h-auto w-full max-w-md object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
