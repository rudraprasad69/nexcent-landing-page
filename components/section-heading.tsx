import React from 'react'

export function SectionHeading({ title, body, className = '' }: { title: string; body?: string; className?: string }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="section-title text-foreground">{title}</h2>
      {body && <p className="mt-4 text-sm leading-6 text-muted-foreground">{body}</p>}
    </div>
  )
}
