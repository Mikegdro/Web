import { useTranslation } from 'react-i18next'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type CareerPathItem = {
  role: string
  period: string
  summary: string
  highlights: string[]
}

function CareerPathSection() {
  const { t } = useTranslation()
  const timeline = t('careerPath.items', { returnObjects: true }) as CareerPathItem[]

  return (
    <section id="career" className="space-y-7 text-left">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {t('careerPath.eyebrow')}
        </p>
        <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
          {t('careerPath.title')}
        </h2>
      </div>

      <div className="relative space-y-4 pl-6 before:absolute before:top-1 before:left-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-border">
        {timeline.map((entry) => (
          <Card
            key={entry.role}
            className="relative border-border/80 bg-surface/90 text-left shadow-[var(--shadow-card)]"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[1.175rem] top-6 size-3 rounded-full border-2 border-background bg-primary"
            />

            <CardHeader className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {entry.period}
              </p>
              <CardTitle className="text-xl text-foreground">{entry.role}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{entry.summary}</p>
              <ul className="space-y-1.5 pl-4 marker:text-primary">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="list-disc">
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CareerPathSection
