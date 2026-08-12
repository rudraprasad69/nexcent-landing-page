import { Mail } from 'lucide-react'
import { NewsletterForm } from '@/components/newsletter-form'
import { z } from 'zod'
import { FooterSchema } from '@/lib/content/schema'
import Image from 'next/image'

type FooterContent = z.infer<typeof FooterSchema>

interface FooterProps {
  content: FooterContent;
  brand: string;
  logo: { src: string; alt: string };
}

export function Footer({ content, brand, logo }: FooterProps) {
  return (
    <footer className="bg-foreground px-6 py-16 text-background lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div className="flex flex-col justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Image src={logo.src} alt={logo.alt} width={32} height={32} />
              {brand}
            </a>
            <p className="mt-8 max-w-xs text-sm leading-6 text-background/70">
              {content.copyright}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-background" aria-label="Social links">
            <a href="#social" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#social" aria-label="Dribbble" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
            </a>
            <a href="#social" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#social" aria-label="Youtube" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
        
        {content.linkGroups.map((column) => (
          <div key={column.title}>
            <h2 className="text-xl font-semibold text-white mb-6">{column.title}</h2>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 transition hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">{content.newsletter.heading}</h2>
          <NewsletterForm placeholder={content.newsletter.placeholder} buttonLabel="Send" />
        </div>
      </div>
    </footer>
  )
}
