import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { z } from 'zod'
import { BlogSectionSchema } from '@/lib/content/schema'
import { SectionHeading } from './section-heading'

type BlogSectionContent = z.infer<typeof BlogSectionSchema>

export function BlogSection({ content }: { content: BlogSectionContent }) {
  return (
    <section className="bg-muted/10 px-6 py-24 lg:px-8">
      <SectionHeading title={content.heading} body={content.subheading} />
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3">
        {content.posts.map((article) => (
          <article key={article.title} className="group relative flex flex-col items-center cursor-pointer">
            <div className="w-full overflow-hidden rounded-3xl shadow-sm transition-all duration-700 group-hover:shadow-2xl ring-1 ring-border/50">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                width={article.image.width}
                height={article.image.height}
                className="h-[300px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="relative -mt-24 w-[92%] rounded-2xl bg-background/80 p-8 shadow-lg backdrop-blur-xl border border-border/40 text-center transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
              <h3 className="text-xl font-bold leading-snug tracking-tight text-foreground text-balance transition-colors duration-300 group-hover:text-primary">
                {article.title}
              </h3>
              <a
                href={article.href}
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-primary transition-all duration-300 opacity-90 group-hover:opacity-100"
              >
                Read the insights <ArrowRight aria-hidden="true" size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
