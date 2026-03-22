# AGENTS.md

Repository guidance for coding agents working in this project.

## Project Snapshot

- Stack: React 19 + TypeScript + Vite 8.
- Package/runtime preference: Bun (`bun.lock` is present).
- Linting: ESLint flat config (`eslint.config.js`).
- TypeScript mode: strict (`tsconfig.app.json`, `tsconfig.node.json`).
- Current app location: repository root (`src/`, `public/`, `index.html`).
- Planning docs: `docs/plan.md`, `docs/init`.

## Rule Files Check

- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- If any of these files are added later, treat them as higher-priority repo rules.

## Setup Commands

- Install dependencies: `bun install`
- Start dev server: `bun run dev`
- Production build: `bun run build`
- Preview production build: `bun run preview`
- Lint: `bun run lint`

## Test Commands

- Current status: no test framework is configured yet.
- Running tests now: `bun test` returns "0 test files".
- Single-test command is therefore not applicable until tests are added.

If tests are introduced with Bun-compatible conventions:

- Run all tests: `bun test`
- Run one test file: `bun test src/path/to/file.test.ts`
- Run one test by name: `bun test -t "test name"`

If Vitest is introduced explicitly:

- Run all tests: `bunx vitest run`
- Run one test file: `bunx vitest run src/path/to/file.test.ts`
- Run one test by name: `bunx vitest run -t "test name"`

## Build/Lint/Test Expectations for Changes

- For UI/code changes, run at least: `bun run lint` and `bun run build`.
- If tests exist in the branch, run the relevant test command(s).
- Do not claim tests pass unless you executed them.

## Architecture and File Layout

- Entry point: `src/main.tsx`.
- Root component: `src/App.tsx`.
- Global styles: `src/index.css`.
- Component styles currently in `src/App.css`.
- Vite config: `vite.config.ts`.

Planned target layout (from `docs/plan.md`):

- `src/components/sections/*`
- `src/components/ui/*`
- `src/i18n/*`
- `src/content/en.json`
- `src/content/es.json`

When adding new folders, keep naming and placement consistent with this target.

## Code Style

- Language: TypeScript for app logic/components.
- Module style: ESM imports/exports.
- Indentation: 2 spaces.
- Semicolons: omit (match existing files).
- Quotes: single quotes in TS/TSX.
- Trailing commas: keep where formatter/linter leaves them.
- Prefer small, focused components over very large files.

## Import Conventions

- Order imports as:
  1) external packages,
  2) internal absolute/relative modules,
  3) styles/assets side-effect imports.
- Keep import groups compact with one blank line between groups.
- Avoid deep relative paths when a cleaner structure is available.
- Remove unused imports immediately (strict TS + lint will enforce this).

## React Conventions

- Use function components.
- Use PascalCase for component names and files.
- Keep hooks at top level; never conditionally call hooks.
- Prefer derived state over duplicated state.
- Keep JSX readable; extract subcomponents when a block gets large.
- Use explicit `alt` text for meaningful images; empty `alt` for decorative images only.

## TypeScript Conventions

- Keep `strict` compatibility; do not weaken TS config to make code pass.
- Avoid `any`; use explicit types or generics.
- Prefer `type` aliases for props and data shapes unless `interface` is clearly better.
- Use union types for constrained values.
- Use non-null assertions (`!`) only when DOM/runtime guarantees exist.
- Do not leave unused params/locals (TS config rejects these).

## Naming Conventions

- Components: `PascalCase` (e.g., `HeroSection.tsx`).
- Variables/functions: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` only for true constants.
- CSS classes: kebab-case or existing class naming style; be consistent in-file.
- IDs should be rare; prefer classes and component structure.

## CSS and Styling Conventions

- Keep global tokens in `src/index.css` (colors, typography, spacing vars).
- Use component-local styles for component-specific rules.
- Preserve responsive behavior (mobile + desktop).
- Prefer design tokens/CSS variables over hardcoded repeated values.
- Avoid introducing a conflicting visual system; align with clean, professional light theme goals.

## Error Handling and Resilience

- Fail fast during development with clear error messages.
- Do not silently swallow errors (`catch {}` is discouraged).
- For async UI logic, handle loading, success, and error states explicitly.
- Keep user-facing error text concise and actionable.
- In rendering paths, guard against undefined/null data safely.

## Accessibility and UX Baseline

- Use semantic HTML (`main`, `section`, headings in order).
- Ensure keyboard accessibility for interactive elements.
- Preserve visible focus states (`:focus-visible`).
- Ensure sufficient contrast for text and controls.
- Avoid placeholder-only labeling for any future form fields.

## Content and Product Constraints

- Portfolio is bilingual (EN/ES) by plan; keep strings i18n-ready.
- Do not include confidential company/client details.
- Prefer anonymized impact statements over sensitive implementation specifics.
- Keep copy concise and recruiter-friendly (fast scan in ~30 seconds).

## Agent Workflow Guidelines

- Read relevant files before editing.
- Make minimal, targeted changes.
- Do not refactor unrelated code opportunistically.
- Update docs when behavior/commands change.
- If introducing a new tool (testing, formatting, UI libs), add commands to this file.

## PR/Change Checklist (Local)

- `bun install` (if dependencies changed)
- `bun run lint`
- `bun run build`
- Run tests if present
- Confirm no accidental secrets or private data in code/content

This file is the default operating guide for coding agents in this repository.
