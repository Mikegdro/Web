# Frontend Guide

> 🎯 **Goal:** build a clean, bilingual, job-focused portfolio with modern frontend practices and maintainable code.

This is written as if I were onboarding a junior frontend developer into the project.

---

## 🧱 Stack Overview

- ⚛️ `React`: component model for building UI
- 🔷 `TypeScript`: static typing for safer development
- ⚡ `Vite`: fast dev server + production bundling
- 🎨 `Tailwind CSS`: utility-first styling
- 🧩 `shadcn/ui`: accessible reusable UI blocks
- 🌍 `react-i18next` (planned): bilingual EN/ES support
- 🧹 `ESLint`: code quality and consistency

---

## 🤔 Why This Stack?

We need to optimize for:
- fast iteration
- professional visual quality
- readable, refactor-friendly code
- practical tooling for a solo portfolio project

This stack balances speed, quality, and long-term maintainability.

---

## ⚛️ React Mental Model

React apps are trees of components.

Each component should:
- receive `props`
- manage local state only when needed
- render predictable JSX

### Good habits

- Keep components focused and small.
- Prefer composition over giant files.
- Derive values instead of duplicating state.
- Keep hooks at top level only.

---

## 🔷 TypeScript in Practice

Strict TypeScript is enabled in this repo.

That means:
- avoid `any`
- type props and domain data clearly
- remove unused locals/params immediately

### Preferred patterns

- Use `type` for props and data models.
- Use unions for constrained values (example: `'en' | 'es'`).
- Keep function signatures explicit and readable.

---

## ⚡ Vite Dev/Build Pipeline

### Development mode

`bun run dev`
- starts local dev server
- serves modules quickly
- enables HMR for instant feedback

### Production build

`bun run build`
- compiles TypeScript
- bundles optimized assets into `dist/`
- prepares deployable static output

---

## 🎨 Tailwind Strategy (Planned)

Tailwind = utility-first styling.

Benefits:
- consistent spacing and type scale
- fewer CSS specificity conflicts
- faster implementation of polished UIs

Guidelines:
- Extract repeated class patterns into components.
- Keep design tokens consistent (radius, color, spacing).
- Reserve global CSS for true global concerns.

---

## 🧩 shadcn/ui Strategy (Planned)

Important: shadcn is not a runtime component dependency in the typical sense.

You generate/copy components into your own codebase.

Why this is great here:
- full control over styling
- easier to align with portfolio branding
- strong accessibility defaults via Radix primitives

Typical usage:
- buttons
- cards
- tabs
- dialogs
- forms

---

## 🌍 i18n Strategy with react-i18next (Planned)

For EN/ES support:
- keep all UI text in translation files
- avoid hardcoded strings in components
- add a language switch in header
- persist language selection in local storage

Suggested structure:
- `src/i18n/*`
- `src/content/en.json`
- `src/content/es.json`

---

## 🗂️ Folder Direction

Current layout is default Vite, but target structure is:

- `src/components/sections/*` (Hero, About, Skills, Contact)
- `src/components/ui/*` (shared UI primitives)
- `src/i18n/*` (translations + setup)
- `src/content/*` (copy and localized content)

This keeps the codebase clean as features grow.

---

## ✨ UX and Visual Principles

From the project plan:
- clean light professional visual language
- clear typography hierarchy
- card-based impact highlights
- fast scan time for recruiters (< 30 seconds)
- mobile-first responsiveness
- accessibility baseline (semantic tags, focus visibility, contrast)

Rule of thumb: **clarity over visual noise**.

---

## 🧪 Quality Workflow

Before considering any task done:

1. `bun run lint`
2. `bun run build`
3. `bun test` (if tests exist)

If tests do not exist yet, state that clearly.

---

## 📦 Imports and Naming

### Import order

1. external packages
2. internal modules
3. style/asset side-effect imports

### Naming conventions

- Components: `PascalCase`
- variables/functions: `camelCase`
- true constants: `UPPER_SNAKE_CASE`

---

## 🛡️ Error Handling Essentials

For async UI flows:
- model `loading`, `success`, and `error` explicitly
- show concise, user-friendly errors
- do not silently swallow exceptions

For rendering:
- guard nullable data safely
- avoid non-null assertion unless guaranteed

---

## ✅ Junior Dev Checklist

When building a new section:

1. Define the component responsibility in one sentence.
2. Create a clear props type.
3. Keep markup semantic and accessible.
4. Reuse existing visual patterns.
5. Move text into i18n files when enabled.
6. Run lint + build before merging.

---

## 🏁 What "Good" Looks Like

- Recruiters understand your profile quickly.
- UI feels intentional, modern, and readable.
- Content is NDA-safe and impact-focused.
- Code is typed, simple, and easy to extend.

That is the bar for this repository.
