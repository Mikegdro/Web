import { useTranslation } from 'react-i18next'

import AboutSection from '@/components/sections/AboutSection'
import CareerPathSection from '@/components/sections/CareerPathSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import ImpactSection from '@/components/sections/ImpactSection'
import SiteHeader from '@/components/sections/SiteHeader'
import SkillsSection from '@/components/sections/SkillsSection'

function App() {
  const { t } = useTranslation()

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'career', label: t('nav.career') },
    { id: 'impact', label: t('nav.impact') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <div className="relative overflow-x-clip bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 right-[-8rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(231,93,74,0.18)_0%,_rgba(231,93,74,0)_70%)]" />
        <div className="absolute top-56 left-[-9rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.16)_0%,_rgba(14,116,144,0)_70%)]" />
      </div>

      <SiteHeader navItems={navItems} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16">
        <HeroSection />
        <AboutSection />
        <CareerPathSection />
        <ImpactSection />
        <SkillsSection />
      </main>

      <ContactSection />
    </div>
  )
}

export default App
