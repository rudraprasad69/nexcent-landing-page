import { z } from 'zod'
import { ClientLogosSchema } from '@/lib/content/schema'
import { SectionHeading } from './section-heading'
import { CompanyLogo } from '@/components/ui/company-logo'

type ClientLogosContent = z.infer<typeof ClientLogosSchema>

export function ClientLogosSection({ content }: { content: ClientLogosContent }) {
  return (
    <section className="section-shell section-space">
      <SectionHeading title={content.heading} body={content.subheading} />
      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-10 md:justify-between">
        {content.logos.map((logo) => (
          <CompanyLogo key={logo.name} src={logo.src} name={logo.name} />
        ))}
      </div>
    </section>
  )
}
