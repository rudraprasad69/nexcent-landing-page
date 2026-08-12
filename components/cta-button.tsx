import React from 'react'

export function CtaButton({ children, href = '#contact', className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md ${className}`}
    >
      {children}
    </a>
  )
}
