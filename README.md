# TrendOS

**TrendOS** is an AI-powered Social Media War Room for startups, creators, and marketing teams. Built with Next.js 15, TypeScript, Tailwind CSS, shadcn-style components, Framer Motion, and Recharts.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Radix UI + shadcn-style primitives
- Framer Motion
- Recharts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll land on the **Dashboard**.

## Pages

| Route | Module |
|-------|--------|
| `/dashboard` | War Room overview |
| `/trends-radar` | Emerging trends |
| `/competitor-watch` | Competitive intelligence |
| `/content-lab` | Content pipeline |
| `/campaign-planner` | Campaign roster & funnel |
| `/creator-tracker` | Creator partnerships |
| `/social-listening` | Mentions & sentiment |
| `/reports` | Executive reports |

## Project structure

```
src/
├── app/(app)/          # Routed pages + app shell layout
├── components/
│   ├── cards/          # StatCard, MetricCard, TrendCard
│   ├── charts/         # Area, Bar, Donut chart wrappers
│   ├── layout/         # Sidebar, TopNav, AppShell
│   ├── shared/         # PageHeader, etc.
│   └── ui/             # Design system primitives
├── data/mock/          # Mock data per domain
├── lib/                # Utils & navigation constants
└── types/              # Shared TypeScript models
```

## Notes

- Dark mode is enabled by default (`class="dark"` on `<html>`).
- AI features are stubbed with a “Coming soon” panel — no model integration yet.
- Replace `src/data/mock/*` with API routes or a data layer when backend is ready.
