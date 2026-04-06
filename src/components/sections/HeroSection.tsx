import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="home" className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
          {t('meta.roleLine')}
        </div>

        <h1 className="m-0 max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          {t('hero.title')}
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          {t('hero.description')}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button className="group" asChild>
            <a href="#contact">
              {t('hero.primaryCta')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#impact">{t('hero.secondaryCta')}</a>
          </Button>
        </div>
      </div>

      <Card className="border-border/80 bg-surface/90 text-left shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle className="text-xl">{t('hero.careerTitle')}</CardTitle>
          <CardDescription>{t('hero.careerLead')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>{t('hero.careerPointOne')}</p>
          <p>{t('hero.careerPointTwo')}</p>
        </CardContent>
      </Card>
    </section>
  )
}

export default HeroSection
