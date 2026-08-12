'use client'

import { useState } from 'react'
import type { SiteContent } from '@/content/nexcent'

export function MobileNav({ nav }: { nav: SiteContent['nav'] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" className="rounded-md p-2 text-foreground" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5"><span className="h-0.5 w-full bg-current" /><span className="h-0.5 w-full bg-current" /><span className="h-0.5 w-full bg-current" /></span>
      </button>
      {open && <div id="mobile-menu" className="absolute inset-x-0 top-full z-20 border-t border-border bg-background px-6 py-4 shadow-md"><nav aria-label="Mobile navigation" className="flex flex-col gap-4">{nav.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary">{item.label}</a>)}</nav></div>}
    </div>
  )
}
