# Gemini Project Context

This document provides context for the Gemini AI assistant to understand the project structure, technologies, and conventions.

## Project Overview

This is a pnpm monorepo for a web application built with Next.js and a custom UI library. The project uses Turborepo for managing the monorepo workspace.

- **`apps/web`**: The main Next.js web application. It consumes the UI components from the `packages/ui` library. It also contains Storybook for component development and testing.
- **`packages/ui`**: A custom UI component library, seemingly inspired by shadcn/ui, using Radix UI primitives, Tailwind CSS, and `class-variance-authority`.
- **`packages/eslint-config`**: Shared ESLint configurations for the monorepo.
- **`packages/typescript-config`**: Shared TypeScript configurations (`tsconfig.json`) for the monorepo.

## Key Technologies

- **Framework**: Next.js (in `apps/web`)
- **UI**: React, Tailwind CSS, Radix UI, custom components in `packages/ui`
- **Language**: TypeScript
- **Build/Task Runner**: Turborepo
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Component Development**: Storybook

## Important Commands

The following commands are run from the root of the monorepo:

- **`pnpm dev`**: Starts the development server for the web application.
- **`pnpm build`**: Builds the entire project.
- **`pnpm lint`**: Lints the codebase.
- **`pnpm format`**: Formats all files with Prettier.
- **`pnpm storybook`**: Runs the Storybook server for the `web` app to view and test UI components.

## Development Workflow

1.  **Adding a new component**:
    -   Create the component file in `packages/ui/src/components/`.
    -   Export the new component from `packages/ui`.
    -   Use the component in the `apps/web` application.
    -   Add a Storybook story for the new component in `apps/web/stories/`.

2.  **Linting and Formatting**:
    -   Before committing, it's good practice to run `pnpm lint` and `pnpm format` to ensure code quality and consistency.
