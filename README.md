# Shelfd

Monorepo for the Shelfd social collectors app.

## Getting Started

This repository uses `pnpm` workspaces.

Install dependencies from the repository root:

```bash
pnpm install
```

Start the frontend web app:

```bash
pnpm --filter @shelfd/web dev
```

The app should be available at:

```text
http://localhost:3000
```

To run all development scripts in the monorepo:

```bash
pnpm dev
```

## Structure

- `apps/web` - Next.js web application
- `apps/mobile` - mobile application placeholder
- `apps/api` - Go API service
- `packages/ui` - shared UI package
- `packages/types` - shared TypeScript types
- `packages/config` - shared JavaScript/TypeScript config
- `packages/utils` - shared utilities
- `infra/docker` - Docker infrastructure files
- `infra/terraform` - Terraform infrastructure files
- `docs` - project documentation
