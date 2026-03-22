# Runtime Guide

> ⚡ **Strategy:** use **Bun first** for speed, keep **Node as fallback** for ecosystem compatibility.

This guide explains *what* to run, *why* we run it, and *how the runtime works under the hood*.

---

## 🧭 Quick Decision

- **Primary runtime + package manager:** `bun`
- **Fallback runtime/tooling:** `node` + `npm`/`npx`
- **Why:** Bun is fast and ergonomic, Node is universal and battle-tested.

Think of it like this:
- 🏎️ **Bun** = daily driver
- 🧰 **Node** = compatibility toolkit when a CLI is picky

---

## 🧠 What Is a Runtime?

JavaScript/TypeScript source code needs a runtime to execute.

A runtime handles:
- code execution
- OS access (filesystem, networking, timers)
- process management
- script orchestration (build/lint/test commands)

In frontend repos, the runtime powers local tooling like Vite, ESLint, and test runners.

---

## ⚡ Bun Basics

### What Bun includes

Bun is an all-in-one toolkit:
- Runtime
- Package manager
- Script runner
- Built-in test runner
- `bunx` for one-off CLIs

### Why Bun is fast (high-level)

- Implemented in **Zig** for low-level performance
- Optimized dependency resolution/install path
- Tight integration between runtime and package tooling
- Lower process overhead for common workflows

### Bun commands in this repo

```bash
bun install
bun run dev
bun run build
bun run lint
bun run preview
```

---

## 🟢 Node Basics (Fallback)

### What Node does

Node.js is the ecosystem baseline runtime and the default assumption for many CLIs.

### How Node works inside (simplified)

- **V8 engine:** executes JavaScript
- **Event loop:** schedules asynchronous work (I/O, timers, callbacks)
- **Native bindings:** bridge JS to system-level functionality

When you run tooling with `npm`/`npx`, Node executes those scripts in this runtime model.

### Why keep Node installed

Some tools are still Node-first. If a Bun workflow fails due to compatibility:
- use `npx <tool>` instead of `bunx <tool>`
- return to Bun for regular project tasks

---

## 📏 Repo Rules

### Rule A — Bun by default
- Use Bun for installs, scripts, and day-to-day development.

### Rule B — Node only as fallback
- If a specific generator/CLI fails with Bun, use Node for that one step.

### Rule C — Keep dependencies clean
- `bun.lock` is the source of truth.
- Avoid mixed lockfiles unless intentionally migrating.

---

## 🔁 Command Mapping (Bun vs Node)

| Task | Bun | Node/npm equivalent |
|---|---|---|
| Install dependencies | `bun install` | `npm install` |
| Run scripts | `bun run <script>` | `npm run <script>` |
| One-off CLI | `bunx <tool>` | `npx <tool>` |
| Run tests | `bun test` | tool-specific (`vitest`, `jest`) |

---

## 🐟 Fish Shell Note

This project is developed on Fish.

If commands work in Fish but fail in Bash/CI, check PATH initialization.

Make sure:
- Bun binary is in `PATH`
- `fnm` initializes Node in Fish config

Quick checks:

```bash
fish -lc 'bun -v; node -v; npm -v'
```

---

## ⚙️ Runtime + Vite Relationship

Vite is the frontend toolchain, not the runtime.

- Bun/Node launches Vite
- Vite serves modules in dev and bundles optimized assets in build

So `bun run dev` means: Bun executes the `dev` script -> Vite starts.

---

## 🧪 Troubleshooting Flow

When a command fails:

1. Verify versions: `bun -v`, `node -v`
2. Re-run with explicit runtime (`bunx` vs `npx`)
3. Read the first meaningful error line
4. Apply Node fallback if the issue is tool compatibility
5. Return to Bun once that step is complete

---

## ✅ Final Recommendation

- Use **Bun-first** for this project.
- Keep **Node installed** for fallback stability.
- Prioritize consistency across docs, scripts, and CI.

Consistency beats cleverness when building reliable projects.
