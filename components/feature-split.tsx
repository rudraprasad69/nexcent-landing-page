import Image from 'next/image'
import { CtaButton } from './cta-button'
import { z } from 'zod'
import { FeatureSplitsSchema } from '@/lib/content/schema'

type FeatureSplitsContent = z.infer<typeof FeatureSplitsSchema>

export function FeatureSplit({ content }: { content: FeatureSplitsContent }) {
  return (
    <>
      {content.map((feature) => (
        <section key={feature.id} id={feature.id} className="bg-background px-6 py-14 lg:px-8">
          <div
            className={`mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between ${
              feature.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 w-full flex justify-center md:justify-start">
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                width={feature.image.width}
                height={feature.image.height}
                className="h-auto max-h-[400px] w-full max-w-md object-contain"
              />
            </div>
            <div className="flex-1 max-w-xl">
              <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
                {feature.heading}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
              <div className="mt-8">
                <CtaButton href={feature.cta.href}>{feature.cta.label}</CtaButton>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
