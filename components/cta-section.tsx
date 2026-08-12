import { ArrowRight } from 'lucide-react'
import { z } from 'zod'
import { ClosingCtaSchema } from '@/lib/content/schema'

type CtaContent = z.infer<typeof ClosingCtaSchema>

export function CtaSection({ content }: { content: CtaContent }) {
  return (
    <section id="contact" className="bg-background px-6 py-24 text-center lg:px-8">
      <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl leading-[1.2]">
        {content.heading}
      </h2>
      <div className="mt-10 flex justify-center">
        <a href={content.cta.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md">
          {content.cta.label} <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}
