import { Building2, Landmark, UsersRound, Shield, TrendingUp, CreditCard } from 'lucide-react'
import { z } from 'zod'
import { AudienceCardsSchema } from '@/lib/content/schema'
import { SectionHeading } from './section-heading'

const communityIcons = { Building2, Landmark, UsersRound, shield: Shield, 'trending-up': TrendingUp, 'credit-card': CreditCard, users: UsersRound, bike: UsersRound } as const

type AudienceCardsContent = z.infer<typeof AudienceCardsSchema>

export function CommunitySection({ content }: { content: AudienceCardsContent }) {
  return (
    <section id="services" className="section-shell pb-16 md:pb-20">
      <SectionHeading title={content.heading} body={content.subheading} />
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {content.cards.map((card) => (
          <article key={card.title} className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-tl-[24px] rounded-br-[24px] rounded-tr-[10px] rounded-bl-[10px] bg-primary/10 text-primary relative">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[8px] rounded-bl-[8px] -z-10 transform translate-x-2 -translate-y-2"></div>
              <span className="sr-only">{card.title} icon</span>
              {(() => {
                const Icon = communityIcons[card.icon as keyof typeof communityIcons] || UsersRound
                return <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
              })()}
            </div>
            <h3 className="mt-5 text-[1.4rem] font-bold leading-tight text-foreground max-w-[250px]">{card.title}</h3>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
