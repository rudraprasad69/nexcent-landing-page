import { z } from 'zod'
import { StatsSchema } from '@/lib/content/schema'

type StatsContent = z.infer<typeof StatsSchema>

export function MetricsSection({ content }: { content: StatsContent }) {
  return (
    <section className="bg-muted px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {content.heading} <br/>
            <span className="text-primary">{content.headingAccent}</span>
          </h2>
          <p className="mt-3 text-sm text-foreground">{content.subheading}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {content.items.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center text-primary">
                {stat.icon === 'users' && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                {stat.icon === 'trending-up' && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>}
                {stat.icon === 'building' && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="9" x2="9" y1="22" y2="22"/><line x1="15" x2="15" y1="22" y2="22"/><line x1="12" x2="12" y1="22" y2="22"/><line x1="12" x2="12" y1="2" y2="2"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>}
                {stat.icon === 'credit-card' && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>}
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Intl.NumberFormat('en-US').format(stat.value)}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
