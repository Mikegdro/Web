import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type SiteHeaderProps = {
  navItems: Array<{ id: string; label: string }>
}

type LanguageToggleProps = {
  isSpanish: boolean
  onSelectLanguage: (language: 'en' | 'es') => void
}

function LanguageToggle({
  isSpanish,
  onSelectLanguage,
}: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border bg-surface p-1 text-xs font-semibold text-muted-foreground">
      <button
        type="button"
        aria-label="Switch language to English"
        aria-pressed={!isSpanish}
        onClick={() => onSelectLanguage('en')}
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors ${
          !isSpanish
            ? 'bg-primary text-primary-foreground'
            : 'hover:text-foreground'
        }`}
      >
        <Globe className="size-3.5" aria-hidden="true" />
        EN
      </button>
      <button
        type="button"
        aria-label="Cambiar idioma a espanol"
        aria-pressed={isSpanish}
        onClick={() => onSelectLanguage('es')}
        className={`inline-flex items-center rounded-full px-2.5 py-1 transition-colors ${
          isSpanish
            ? 'bg-primary text-primary-foreground'
            : 'hover:text-foreground'
        }`}
      >
        ES
      </button>
    </div>
  )
}

function SiteHeader({ navItems }: SiteHeaderProps) {
  const { i18n, t } = useTranslation()
  const isSpanish = i18n.resolvedLanguage === 'es' || i18n.language === 'es'

  const handleLanguageChange = (language: 'en' | 'es') => {
    void i18n.changeLanguage(language)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-serif text-lg font-semibold text-foreground">
            {t('meta.brand')}
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-7 text-sm font-medium text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className="transition-colors hover:text-foreground"
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <LanguageToggle
              isSpanish={isSpanish}
              onSelectLanguage={handleLanguageChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto md:hidden">
          <LanguageToggle
            isSpanish={isSpanish}
            onSelectLanguage={handleLanguageChange}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
