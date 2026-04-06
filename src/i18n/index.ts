import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/content/en.json'
import es from '@/content/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

const initialLanguage = localStorage.getItem('portfolio-language')

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage === 'es' ? 'es' : 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem('portfolio-language', language)
})

export default i18n
