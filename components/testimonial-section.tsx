'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'
import { z } from 'zod'
import { TestimonialSchema, ClientLogosSchema } from '@/lib/content/schema'
import { CompanyLogo } from '@/components/ui/company-logo'

type TestimonialContent = z.infer<typeof TestimonialSchema>
type Logos = z.infer<typeof ClientLogosSchema>['logos']

export function TestimonialSection({ content, logos }: { content: TestimonialContent, logos: Logos }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (content.testimonials.length <= 1) return

    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % content.testimonials.length)
        setIsFading(false)
      }, 1000) // Match new fade duration
    }, 11000) // 11 seconds

    return () => clearInterval(interval)
  }, [content.testimonials.length])

  const currentTestimonial = content.testimonials[currentIndex]

  return (
    <section id="testimonial" className="relative overflow-hidden bg-background px-6 py-20 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none rounded-[3rem]" />
      
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 rounded-3xl bg-muted/40 p-8 md:p-14 border border-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="relative shrink-0 flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-2xl opacity-70" />
            <div className={`relative transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                key={currentTestimonial.authorName} // Force re-render of image component to prevent visual bugs on fast src changes
                src={currentTestimonial.authorImage.src}
                alt={currentTestimonial.authorImage.alt}
                width={currentTestimonial.authorImage.width}
                height={currentTestimonial.authorImage.height}
                className="relative z-10 h-48 w-48 md:h-64 md:w-64 rounded-full object-cover shadow-xl ring-8 ring-background/50"
              />
            </div>
          </div>
          
          <div className="flex-1 relative w-full">
            <Quote className="absolute -top-8 -left-6 md:-left-10 h-20 w-20 text-primary/10 rotate-180" />
            
            <div className={`transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <blockquote className="relative z-10 text-xl leading-relaxed text-foreground/90 font-medium md:text-2xl md:leading-relaxed">
                “{currentTestimonial.quote}”
              </blockquote>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-foreground">{currentTestimonial.authorName}</p>
                  <p className="mt-1.5 text-sm font-semibold tracking-wide uppercase text-primary/80">{currentTestimonial.authorTitle}</p>
                </div>
                <a href={content.allCustomersCta.href} className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:text-primary/80">
                  {content.allCustomersCta.label} 
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-border/50 flex flex-wrap items-center justify-between sm:justify-start gap-x-8 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              {logos.slice(0, 6).map((logo) => (
                <div key={logo.name} className="scale-90 sm:scale-100 origin-left">
                  <CompanyLogo src={logo.src} name={logo.name} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
