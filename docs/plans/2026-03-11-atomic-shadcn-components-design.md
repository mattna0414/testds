# Atomic Shadcn Components Design

**Date:** 2026-03-11

## Goal

Extend the current design-system test components into a clearer atomic structure built on top of existing `shadcn-ui` primitives, adding more than just button and input while keeping the exported API consistent for Storybook and package consumers.

## Current Context

- The repo already has two layers:
  - `src/components/ui/*`: low-level `shadcn-ui` style primitives
  - `src/components/*`: public components such as `Button`, `Input`, `Modal`, `Typography`
- `Button` already wraps `ui/button`
- `Input` wraps `ui/input`
- Storybook and tests exist, but component patterns are not fully aligned

## Chosen Approach

Use a two-layer model:

1. Keep `src/components/ui/*` as low-level primitives tied to Radix/shadcn patterns.
2. Add atomic wrappers in `src/components/*` for public export and consistent API naming.
3. Add a small molecule layer for field composition instead of exposing every form concern directly on each atom.

This approach keeps current imports stable, minimizes churn, and gives room to evolve the public API without coupling consumers directly to primitive internals.

## Component Scope

### Atoms

- `Badge`
- `Textarea`
- `Select`
- `Checkbox`
- `Label`

### Molecules

- `FormField`
  - Handles `label`, `hint`, `error`, `required`
  - Accepts arbitrary form control content via `children`
  - Standardizes field spacing and text treatment across `Input`, `Textarea`, `Select`, and `Checkbox`

## API Direction

### Public Exports

Add new exports from `src/index.ts` for all new atoms and molecules.

### Styling

- Reuse existing token system from `src/tokens.css`
- Stay close to current shadcn visual language
- Avoid a large visual redesign; focus on structural consistency

### Accessibility

- Preserve Radix semantics where relevant
- Ensure `Label` links cleanly with controls
- `FormField` should surface `aria-invalid` and descriptive text IDs where appropriate
- `Checkbox` and `Select` stories should demonstrate keyboard-accessible states

## Storybook Plan

For each new public component:

- Add a default story
- Add state/variant stories
- Add one composition story where useful

Expected stories:

- `Badge`: variants
- `Textarea`: sizes, invalid
- `Select`: placeholder, disabled, grouped options
- `Checkbox`: default, disabled
- `Label`: simple usage
- `FormField`: input, textarea, select, checkbox compositions

## Testing Plan

Use focused component tests aligned with the current repo style:

- Rendered class/state assertions for visual variants
- Markup/accessibility assertions for structural components
- Avoid over-mocking

Priority coverage:

- `Badge` variant rendering
- `Textarea` size and invalid state
- `Select` trigger/content markup
- `Checkbox` checked/disabled behavior
- `FormField` error/hint wiring

## Non-Goals

- Full repo-wide folder migration to `atoms/` and `molecules/`
- Replacing all existing public components
- Large theming overhaul
- New data-fetching or app-level patterns
