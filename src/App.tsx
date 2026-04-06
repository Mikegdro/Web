import { ArrowRight, Mail, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const impactCards = [
  {
    title: 'Environment-agnostic MWAA delivery',
    description:
      'Automated Airflow on AWS MWAA with Terraform templates so one configuration model works across deployment environments.',
  },
  {
    title: 'Internal IaaS for Data Engineering',
    description:
      'Delivered dynamic provisioning workflows across AWS, Snowflake, dbt Cloud, and Fivetran with security as a first-class concern.',
  },
  {
    title: 'Testing strategy adoption',
    description:
      'Spearheaded integration testing with Go + Terratest and promoted Terraform tests to reduce infra regressions before release.',
  },
]

function App() {
  return (
    <div className="relative overflow-x-clip bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-[-8rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(231,93,74,0.18)_0%,_rgba(231,93,74,0)_70%)]" />
        <div className="absolute top-56 left-[-9rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.16)_0%,_rgba(14,116,144,0)_70%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="font-serif text-lg font-semibold text-foreground"
            >
              Mike Dro
            </a>
            <ul className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
              <li>
                <a className="transition-colors hover:text-foreground" href="#impact">
                  Impact
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-foreground" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-foreground" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-3 overflow-x-auto text-sm font-medium text-muted-foreground md:hidden">
            <li>
              <a
                className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:text-foreground"
                href="#impact"
              >
                Impact
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:text-foreground"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:text-foreground"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16">
        <section id="home" className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Platform Engineer | Terraform | AWS | Cloud & Backend
            </div>

            <h1 className="m-0 max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              Building secure, scalable platform foundations for data teams.
            </h1>

            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              I design and automate cloud infrastructure products that improve
              reliability, delivery speed, and developer experience across
              modern data platforms.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="group" asChild>
                <a href="#contact">
                  Let&apos;s connect
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#impact">View impact highlights</a>
              </Button>
            </div>
          </div>

          <Card className="border-border/80 bg-surface/90 text-left shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-xl">Career Snapshot</CardTitle>
              <CardDescription>
                Full-stack foundations {'->'} Cloud integration engineering
                {'->'} Platform leadership.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                I currently build product-style infrastructure with Terraform,
                Go, and AWS, with a strong focus on security and standardization.
              </p>
              <p>
                I also mentor teammates, shape architecture decisions, and
                coordinate cross-team implementation workflows.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="impact" className="space-y-7 text-left">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Selected impact
            </p>
            <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
              Anonymized, outcome-focused case highlights
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {impactCards.map((card) => (
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

        <section id="skills" className="space-y-4 text-left">
          <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
            Core stack
          </h2>
          <div className="flex flex-wrap gap-2.5 text-sm text-foreground">
            {[
              'Terraform',
              'AWS',
              'Golang',
              'Terratest',
              'CI/CD',
              'Platform Engineering',
              'Security by Design',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-border/80 bg-surface/70 px-5 py-10 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-left sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contact
            </p>
            <p className="text-base text-muted-foreground">
              Open to platform engineering opportunities.
            </p>
          </div>
          <Button asChild>
            <a href="mailto:hello@example.com">
              <Mail className="size-4" />
              Send email
            </a>
          </Button>
        </div>
      </footer>
    </div>
  )
}

export default App
