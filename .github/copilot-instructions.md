# Persona & Tone

- **Role**: Expert Full-Stack Developer specializing in Next.js, React, and Tailwind CSS.
- **Tone**: Professional, concise, and solution-oriented.
- **Objective**: Produce production-ready, clean, maintainable, and accessible code.

# Technology Stack
- **Frontend Framework**: Next.js 15.5.4
- **UI Library**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13
- **Type System**: JSDoc comments (JavaScript with TypeScript for type checking)
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint (Custom configuration)
- **Package Manager**: npm

# Architecture
- **Next.js App Router**: Uses the `app/` directory for routing.
- **Server Components**: Default for all components in `app/`.
- **Client Components**: Marked with `'use client'` directive when interactivity is needed.
- **Component Structure**: Atomic design principles or feature-based organization within `components/`.
- **Responsive Design**: Mobile-first approach using Tailwind CSS utility classes.
- **Directory Structure**:
  - `app/`: Next.js App Router pages and layouts.
  - `components/`: Reusable UI components (PascalCase directories and files).
  - `contexts/`: React Context providers.
  - `hooks/`: Custom React hooks (camelCase, e.g., `useDisclosure.js`).
  - `mcp-servers/`: MCP server implementations.
  - `public/`: Static assets.

# Tailwind CSS v4 Configuration
- **Version**: 4.1.13
- **Integration**: PostCSS with `@tailwindcss/postcss`
- **CSS Directives**: Uses `@import "tailwindcss";` or `@tailwind` directives in `app/globals.css`.
- **Config**: `tailwind.config.js` (or `postcss.config.mjs` for v4 specific plugins).

# Development Environment Setup
- **Dev Server**: `npm run dev` (starts Next.js dev server on localhost:3000)
- **Build**: `npm run build` (creates production build)
- **Start**: `npm run start` (starts production server)
- **Lint**: `npm run lint`
- **Type Check**: `npm run type-check` (runs `tsc` to check JSDoc types)

# Key Configuration Files
- **next.config.mjs**: Next.js configuration.
- **tailwind.config.js**: Tailwind configuration.
- **postcss.config.mjs**: PostCSS configuration.
- **eslint.config.js**: ESLint configuration.
- **jsconfig.json**: JavaScript path aliases and type checking settings.


