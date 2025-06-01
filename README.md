# NEXT-TEMPLATE

> **A batteries-included starter kit for Next 15, TypeScript and Tailwind 4.**  
> Opinionated, accessible, internationalised, HTTPS-ready.

---

## Table of Contents

1. [Overview](#overview)  
2. [Technology Stack](#technology-stack)  
3. [Directory Layout](#directory-layout)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
6. [Available NPM Scripts](#available-npm-scripts)  
7. [Environment Configuration](#environment-configuration)  
8. [Local HTTPS Development](#local-https-development)  
9. [Package Maintenance](#package-maintenance)  
10. [Coding Standards](#coding-standards)  
11. [Commit Message Convention](#commit-message-convention)  
12. [Deployment on Vercel](#deployment-on-vercel)  
13. [License](#license)  

---

## Overview

`next-template` is a no-nonsense starter repository that targets production-grade web apps.  
It ships with:

* **Next 15** (App Router, `server` actions, React 19).  
* **TypeScript** everywhere.  
* **Tailwind CSS 4** with a dark-first design token system.  
* **Headless UI**, **Motion** and custom utility hooks/components.  
* **next-intl** for seamless i18n (English & Russian presets).  
* Strict ESLint/Prettier setup, including Tailwind class sorting.  
* Out-of-the-box HTTPS for local development.  

---

## Technology Stack

| Layer          | Package(s) / Tooling                                                                               |
|----------------|----------------------------------------------------------------------------------------------------|
| **Runtime**    | `next@15.3.3`, `react@19`, `react-dom@19`                                                          |
| **Styling**    | `tailwindcss@4`, `@tailwindcss/postcss`, `tailwind-merge`, custom `animationDelay` plugin          |
| **UI / UX**    | `@headlessui/react`, `motion`, `react-hot-toast`                                                   |
| **Data**       | `swr` (fetching), custom `fetcher` wrapper                                                         |
| **State / Util**| `clsx`, `lodash.debounce`, `zod`                                                                  |
| **i18n**       | `next-intl`                                                                                        |
| **Dev**        | `typescript@^5`, `eslint@^9`, `@typescript-eslint/*`, `prettier@^3`                                |
| **Misc.**      | `react-cookie`, `ts-node` (HTTPS helper)                                                           |

> Versions are locked in **package.json** for deterministic builds.

---

## Directory Layout

```
.
├── .next/                 # Build output (git-ignored)
├── .vscode/               # Recommended VS Code settings
├── messages/              # next-intl compiled messages
├── plugins/               # Tailwind plugins (animationDelay)
├── public/                # Static assets
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   └── dashboard/
│   │   │       ├── page.tsx
│   │   │       └── layout.tsx
│   │   ├── (public)/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── debug/route.ts
│   │   ├── layout.tsx        # Global layout
│   │   ├── not-found.tsx     # 404 boundary
│   │   └── global-error.tsx  # Error boundary
│   ├── components/
│   │   ├── dynamic/
│   │   ├── layer1/LangGuess.tsx
│   │   ├── layer2/SignCloud.tsx
│   │   └── modals/
│   ├── hooks/
│   │   ├── useResponsiveValue.tsx
│   │   └── useValidUrl.tsx
│   ├── i18n/requests.ts
│   ├── middleware.ts         # Locale resolver
│   ├── ui/
│   │   ├── Buttons.tsx
│   │   ├── ModalRoot.tsx
│   │   └── Switch.tsx
│   └── utils/
│       ├── cn.ts
│       ├── constants.ts
│       ├── deviceInfo.tsx
│       ├── fetcher.ts
│       ├── formatDate.tsx
│       └── validation.ts
├── tailwind.config.ts
├── tsconfig.json
└── (misc. config & dotfiles)
```

---

## Prerequisites

* **Node ≥ 20** (LTS recommended).  
* **npm** (bundled) or **pnpm ≥ 9** if you prefer.  
* OpenSSL ≥ 1.1 for local HTTPS generation (via `mkcert`).  

---

## Installation

```bash
git clone git@github.com:snowsttorm/next-template.git
cd next-template
npm install            # or pnpm install
```

---

## Available NPM Scripts

| Script        | Purpose                                              |
|---------------|------------------------------------------------------|
| `dev`         | Start dev server with Turbopack (`localhost:3000`).  |
| `dev:https`   | Same as above over HTTPS (requires valid certs).     |
| `build`       | Production build.                                    |
| `start`       | Run built app in production mode.                    |
| `lint`        | ESLint + TypeScript + Prettier checks.               |

---

## Environment Configuration

All runtime secrets live in **`.env`** files (see `.env.sample`).  
Populate at least:

```dotenv
NODE_ENV='development'
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

> **Never** commit real secrets—use Vercel project env vars for production.

---

## Local HTTPS Development

1. **Install mkcert**

   ```bash
   # macOS
   brew install mkcert

   # Windows (Admin)
   choco install mkcert
   ```

2. **Create a local CA**

   ```bash
   mkcert --install
   ```

3. **Generate certificates**

   ```bash
   mkdir -p .cert
   mkcert -key-file .cert/localhost-key.pem           -cert-file .cert/localhost.pem           template.local
   ```

4. **Map hostname**

   Append to **/etc/hosts** (or *C:\Windows\System32\drivers\etc\hosts*):

   ```text
   127.0.0.1 template.local
   ```

5. **Run**

   ```bash
   npm run dev:https
   ```

   Access the site at **https://template.local:3000**.

---

## Package Maintenance

```bash
# Install ncu once
npm i -g npm-check-updates

# Audit outdated packages
ncu

# Upgrade versions in package.json
ncu -u

# Install upgraded dependencies
npm install
```

> Keep CI green—run `npm run lint && npm test` before pushing.

---

## Coding Standards

* **TypeScript strict mode** is non-negotiable.  
* UI state belongs in components; data state in SWR.  

---

## Commit Message Convention

```
(N)  new         – a brand-new feature
(U)  update      – behaviour change, backward-compatible
(R)  removed     – feature deprecated/removed
(A)  added       – minor addition, docs, assets
(I)  integrated  – external service integration
(M)  moved       – refactor between folders
(D)  deleted     – file or asset deletion
(F)  fix         – bug fix, regression
(B)  bug         – hotfix for production issue
```

*Use the uppercase shorthand in parentheses at the beginning of every commit title.*

---

## Deployment on Vercel

1. Push the repository to GitHub.  
2. Import in Vercel.  
3. Set production env vars.  
4. Hit **Deploy**.  

For advanced configuration refer to the official [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).

---

## License

This template is released under the **MIT License**.  
Use it, fork it, star it—just don’t hold us liable.

---
