## Apex Markets (Demo)

Production-ready, modern financial services website (inspired by institutional aesthetics, **without copying branding or content**).

### Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Radix UI** (accessible navigation primitives)
- **MDX-based Insights** (CMS-ready content layer)
- **Optimized for Vercel**

### Folder structure

- `src/app/`: routes (App Router), metadata, error boundaries, API routes
- `src/components/`: UI + site components (header/footer, motion, forms)
- `src/lib/`: content layer (`insights.ts`), utilities, mock data (`jobs.ts`)
- `content/insights/`: MDX posts (swap with CMS later)

## Setup (local)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `NEXT_PUBLIC_SITE_URL`: used for `metadataBase`, OpenGraph URLs, and `sitemap.xml` generation.

## Build & run (production)

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, click **New Project** and import the repo.
3. Add environment variable `NEXT_PUBLIC_SITE_URL`:
   - Preview: `https://<your-preview-domain>`
   - Production: `https://<your-domain>`
4. Deploy.

Vercel will detect Next.js automatically. No custom build settings required.

## CMS-ready notes (Sanity / Contentlayer)

Insights are sourced from `content/insights/*.mdx` via `src/lib/insights.ts`.
To migrate:

- Replace filesystem reads with a CMS client fetch
- Keep the `Insight` type/frontmatter schema and route structure
- Preserve `generateStaticParams()` for static pre-rendering (or switch to on-demand ISR)

## API integration points

- `POST /api/contact`: mock endpoint ready to integrate with Resend/Postmark, a CRM, or ticketing system.

## Architecture decisions (high level)

- **App Router + route groups**: `src/app/(marketing)` keeps marketing routes cohesive without changing URLs.
- **Server-first content layer**: MDX is compiled on the server for performance and SEO; easy CMS swap later.
- **Accessible primitives**: Radix UI navigation + keyboard focus styles across inputs/links.
- **Animation restraint**: Framer Motion used for page transitions + scroll reveals; subtle by default.
- **Error boundaries + skeletons**: `error.tsx`, `global-error.tsx`, `not-found.tsx`, and route-level `loading.tsx`.

