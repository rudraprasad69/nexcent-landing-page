import { MobileNav } from '@/components/mobile-nav'
import { CtaButton } from './cta-button'
import { z } from 'zod'
import { NavLinkSchema, CtaSchema } from '@/lib/content/schema'
import Image from 'next/image'

type NavLink = z.infer<typeof NavLinkSchema>
type Cta = z.infer<typeof CtaSchema>

interface HeaderProps {
  brand: string;
  nav: NavLink[];
  loginCta: Cta;
  signUpCta: Cta;
  logo: { src: string; alt: string };
}

export function Header({ brand, nav, loginCta, signUpCta, logo }: HeaderProps) {
  return (
    <header className="relative bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
          <Image src={logo.src} alt={logo.alt} width={32} height={32} />
          {brand}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-foreground transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href={loginCta.href} className="text-sm font-medium text-primary hover:underline">
            {loginCta.label}
          </a>
          <CtaButton href={signUpCta.href}>{signUpCta.label}</CtaButton>
        </div>
        <MobileNav nav={nav} />
      </div>
    </header>
  )
}
