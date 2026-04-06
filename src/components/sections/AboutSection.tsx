import { useTranslation } from 'react-i18next'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="space-y-4 text-left">
      <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
        {t('about.title')}
      </h2>
      <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {t('about.description')}
      </p>
    </section>
  )
}

export default AboutSection
