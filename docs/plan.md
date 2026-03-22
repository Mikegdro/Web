# Portfolio Web App Plan

## 1) Goal

Build a simple, polished, bilingual (EN/ES) portfolio that increases interview opportunities for DevOps / Platform Engineer roles by clearly presenting:

- Core skills (Terraform, Go, AWS, Platform Engineering)
- Real business impact (NDA-safe case studies)
- Professional credibility (experience, delivery, communication)
- Clear next action for recruiters/hiring managers (contact me)

## 2) Positioning

- **Primary target role:** Platform Engineer
- **Headline:** Platform Engineer | Terraform | AWS | Cloud & Backend
- **Career narrative:** Full-stack foundations -> Cloud integration engineering -> Platform/DevOps leadership

## 3) Audience

- Hiring managers for Platform/DevOps roles
- Senior engineers evaluating technical maturity
- Recruiters scanning quickly for role fit

## 4) Product Principles

- Simple first: fast, clear, minimal scope for v1
- Professional visual quality: clean light design, strong readability
- Impact over internals: measurable outcomes without confidential details
- Mobile-first and accessible
- Bilingual by design: EN/ES from day one

## 5) Scope (v1)

### In scope

- Single-page portfolio with sections:
  - Hero
  - About
  - Career Path
  - Skills
  - Impact Highlights (anonymized cards)
  - Contact
- EN/ES language switch
- Responsive layout
- Deploy to Vercel (free tier)

### Out of scope (later)

- Backend contact form
- Blog
- Long-form case-study pages
- CMS/admin panel

## 6) Content Strategy (No Public Projects)

Use anonymized impact cards instead of public repositories.

### Card template

- Context (generic, no company names)
- Responsibility (what I owned)
- Stack (Terraform, Go, AWS, Azure, etc.)
- Actions (what was implemented)
- Outcome (specific result or qualitative impact)

### Impact card mix (6 total)

- 4 Platform/DevOps cards
- 1 Cloud Developer card
- 1 Full-stack card

## 7) Impact Cards (EN)

1. **Environment-agnostic AWS MWAA delivery**  
   Automated Apache Airflow (AWS MWAA) with Terraform, templating critical files (`start_script.sh`, `requirements.txt`, `.airflowignore`) so the same code/config worked across environments with minimal drift.

2. **Internal IaaS product for Data Engineering**  
   Co-built and released a product-style Infrastructure as a Service enabling dynamic provisioning across AWS, Snowflake, dbt Cloud, and Fivetran, with security as a core design requirement.

3. **Testing strategy adoption (Go + Terraform)**  
   Spearheaded integration testing with Golang + Terratest and led Terraform unit testing adoption to improve release confidence and reduce infrastructure regressions.

4. **Architecture decision leadership**  
   Led technical decisions on when to standardize with Terraform and when to avoid overusing it, improving maintainability and delivery speed.

5. **Cloud systems integration on Azure**  
   Built reusable Azure Functions and Logic Apps to integrate internal platforms with external tools, enabling faster data movement and reliable async/cron synchronization patterns.

6. **Secure full-stack data workflow delivery**  
   Developed a reactive Angular application for client surveys and co-developed a Java/Spring Boot API backed by OracleDB, providing secure access to collected data.

## 8) Tarjetas de Impacto (ES)

1. **Entrega de AWS MWAA agnostica al entorno**  
   Automaticé Apache Airflow (AWS MWAA) con Terraform, parametrizando archivos criticos (`start_script.sh`, `requirements.txt`, `.airflowignore`) para reutilizar el mismo codigo/configuración entre entornos con minima deriva.

2. **Producto interno de IaaS para Data Engineering**  
   Co-diseñé y liberé un enfoque de Infrastructure as a Service para aprovisionamiento dinamico en AWS, Snowflake, dbt Cloud y Fivetran, con seguridad como requisito central de diseño.

3. **Adopción de estrategia de testing (Go + Terraform)**  
   Impulsé pruebas de integración con Golang + Terratest y lideré pruebas unitarias con Terraform para aumentar confianza en releases y reducir regresiones.

4. **Liderazgo en decisiones de arquitectura**  
   Lideré decisiones sobre cuando estandarizar con Terraform y cuando no aplicarlo, mejorando mantenibilidad y velocidad de entrega.

5. **Integración de sistemas cloud en Azure**  
   Implementé Azure Functions y Logic Apps reutilizables para integrar sistemas internos con herramientas externas, acelerando transferencias de datos y sincronización asincrona/con cron.

6. **Entrega full-stack segura de flujo de datos**  
   Desarrollé una aplicación reactiva en Angular para encuestas y co-desarrollé una API en Java/Spring Boot con OracleDB para acceso seguro a los datos recolectados.

## 9) Information Architecture

- Hero: name, title, value proposition, CTA
- About: short profile summary
- Career Path: Platform Engineer / Cloud Developer / Full-stack Developer
- Skills: grouped by Cloud, IaC, Backend, CI/CD, Testing, Architecture, Collaboration
- Impact Highlights: 6 cards
- Contact: Email + LinkedIn

## 10) UI/UX Direction

- Clean light professional look
- Subtle accent color and high readability
- Card-based layout for impact section
- Fast scan in < 30 seconds
- Responsive for desktop and mobile

## 11) Technical Plan

- Stack: React + TypeScript + Vite + Tailwind + shadcn/ui
- i18n: `react-i18next` with EN/ES JSON files
- Suggested structure:
  - `src/components/sections/*`
  - `src/components/ui/*`
  - `src/i18n/*`
  - `src/content/en.json`
  - `src/content/es.json`

## 12) Delivery Plan (5 Days)

### Day 1

- Initialize Vite + React + TS
- Configure Tailwind + shadcn/ui
- Build page skeleton and section placeholders

### Day 2

- Implement Hero, About, Career Path, Skills
- Establish typography, spacing, and card system

### Day 3

- Implement 6 impact cards and contact section
- Add sticky navigation and CTA flow

### Day 4

- Integrate full EN/ES i18n
- Add language toggle and persist preference
- Responsive pass for mobile/tablet/desktop

### Day 5

- Accessibility/performance pass
- Final content review for hiring clarity
- Deploy to Vercel and verify metadata/preview

## 13) Success Criteria

- Role fit is clear to recruiters in under 30 seconds
- Portfolio communicates platform impact without NDA risk
- EN and ES content both complete
- Live, responsive site deployed on Vercel free tier

## 14) Next Iterations (v2+)

- Add technical writeups (architecture/process learnings)
- Add downloadable CV (EN/ES)
- Add optional backend contact form
- Add analytics for CTA performance
