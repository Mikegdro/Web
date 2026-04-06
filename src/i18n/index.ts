import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/content/en.json'
import es from '@/content/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

const isBrowser = typeof window !== 'undefined'

function getInitialLanguage() {
  if (!isBrowser) {
    return 'en'
  }

  const storedLanguage = window.localStorage.getItem('portfolio-language')

  return storedLanguage === 'es' ? 'es' : 'en'
}

function syncHtmlLanguage(language: string) {
  if (!isBrowser) {
    return
  }

  document.documentElement.lang = language === 'es' ? 'es' : 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  if (isBrowser) {
    window.localStorage.setItem('portfolio-language', language)
  }

  syncHtmlLanguage(language)
})

syncHtmlLanguage(i18n.language)

export default i18n
