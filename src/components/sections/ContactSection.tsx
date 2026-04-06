import { Globe, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'

function ContactSection() {
  const { t } = useTranslation()

  return (
    <footer
      id="contact"
      className="border-t border-border/80 bg-surface/70 px-5 py-10 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-left sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t('contact.eyebrow')}
          </p>
          <p className="text-base text-muted-foreground">
            {t('contact.description')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={`mailto:${siteConfig.contactEmail}`}>
              <Mail className="size-4" />
              {t('contact.emailCta')}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="size-4" />
              {t('contact.linkedinCta')}
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default ContactSection
