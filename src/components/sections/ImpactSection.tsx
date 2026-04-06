import { useTranslation } from 'react-i18next'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { parseImpactCards } from '@/i18n/content'

function ImpactSection() {
  const { t } = useTranslation()
  const cards = parseImpactCards(
    t('impact.cards', { returnObjects: true, defaultValue: [] })
  )

  return (
    <section id="impact" className="space-y-7 text-left">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {t('impact.eyebrow')}
        </p>
        <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
          {t('impact.title')}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="border-border/80 bg-surface/90 text-left shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1"
          >
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl leading-tight text-foreground">
                {card.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ImpactSection
