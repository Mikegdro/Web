import { useTranslation } from 'react-i18next'
import { parseSkillGroups } from '@/i18n/content'

function SkillsSection() {
  const { t } = useTranslation()
  const groups = parseSkillGroups(
    t('skills.groups', { returnObjects: true, defaultValue: [] })
  )

  return (
    <section id="skills" className="space-y-4 text-left">
      <h2 className="m-0 text-3xl font-semibold text-foreground sm:text-4xl">
        {t('skills.title')}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.category}
            className="space-y-2 rounded-xl border border-border/80 bg-surface/90 p-4 shadow-[var(--shadow-card)]"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-foreground">
              {group.items.map((skill) => (
                <span
                  key={`${group.category}-${skill}`}
                  className="rounded-full border border-border bg-background px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
