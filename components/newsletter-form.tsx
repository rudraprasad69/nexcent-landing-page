'use client'

import { useState } from 'react'

export function NewsletterForm({ placeholder, buttonLabel }: { placeholder: string; buttonLabel: string }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }
  return <form onSubmit={submit} className="mt-5" noValidate>
    <label className="flex rounded-md bg-background/10 p-2 focus-within:ring-2 focus-within:ring-primary">
      <span className="sr-only">{placeholder}</span>
      <input type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent px-2 text-sm text-background outline-none placeholder:text-background/50" />
      <button type="submit" aria-label={buttonLabel} className="px-2 text-background/70 transition hover:text-background">→</button>
    </label>
    {submitted && <p role="status" className="mt-2 text-xs text-primary">Thanks, you&apos;re subscribed.</p>}
  </form>
}
