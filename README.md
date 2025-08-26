## STIHL Design System – Examples

Official site: http://designsystem.stihl.de/

This repository contains small “pattern” examples that demonstrate implementation possibilities using the STIHL Design System components. The examples focus on practical integration and behavior, not on production setup. Use them as a reference for how to compose, style, and wire components together.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start a local server (dev or preview)

```bash
# Dev server (hot reload)
npm run dev

# Preview a production build
npm run start
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Note: A prebuild step copies required STIHL DS assets from `@stihl-design-system/components`.

## Testing

Run VRT in Docker for consistent CI-like results.

```bash
# Build local Playwright image (once)
./docker/build-image.sh

# Run tests inside the container
./docker.sh generate-vrt-fixtures
```

## Linting

```bash
npm run lint
```

## Notes

- Routing and app scaffolding use Vite + React under the hood for convenience only.

## For STIHL Design System developers

This repository is populated from the main Design System repository. Running the `build:copyPatterns` script in the Design System repo fills/updates:

- playwright/Patterns.vrt.ts
- example routes and pattern pages under `src/`

This note is for DS maintainers only; it is not relevant for consumers of the Design System.

## License

See `LICENSE.md`.
