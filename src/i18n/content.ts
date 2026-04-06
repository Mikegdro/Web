export type ImpactCard = {
  title: string
  description: string
}

export type CareerPathItem = {
  role: string
  period: string
  summary: string
  highlights: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function asString(value: unknown): string | null {
  return typeof value === 'string' ? value : null
}

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    return null
  }

  return value
}

export function parseImpactCards(value: unknown): ImpactCard[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.flatMap((item) => {
    if (!isRecord(item)) {
      return []
    }

    const title = asString(item.title)
    const description = asString(item.description)

    if (!title || !description) {
      return []
    }

    return [{ title, description }]
  })
}

export function parseCareerPath(value: unknown): CareerPathItem[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.flatMap((item) => {
    if (!isRecord(item)) {
      return []
    }

    const role = asString(item.role)
    const period = asString(item.period)
    const summary = asString(item.summary)
    const highlights = asStringArray(item.highlights)

    if (!role || !period || !summary || !highlights) {
      return []
    }

    return [{ role, period, summary, highlights }]
  })
}

export function parseSkillGroups(value: unknown): SkillGroup[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.flatMap((item) => {
    if (!isRecord(item)) {
      return []
    }

    const category = asString(item.category)
    const items = asStringArray(item.items)

    if (!category || !items) {
      return []
    }

    return [{ category, items }]
  })
}
