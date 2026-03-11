# Atomic Shadcn Components Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add shadcn-based atomic and molecule components beyond button and input, with consistent public exports, stories, and tests.

**Architecture:** Keep `src/components/ui/*` as low-level primitives and add public wrapper components in `src/components/*`. Build a small `FormField` molecule to unify label, hint, error, and required states across text inputs and selection controls.

**Tech Stack:** React 19, TypeScript, shadcn-ui patterns, Radix UI, Storybook 10, Vitest, tsup

---

### Task 1: Add missing primitive UI building blocks

**Files:**
- Create: `src/components/ui/textarea.tsx`
- Create: `src/components/ui/checkbox.tsx`
- Modify: `src/components/ui/select.tsx`
- Test: `src/components/Select/Select.test.tsx`
- Test: `src/components/Checkbox/Checkbox.test.tsx`
- Test: `src/components/Textarea/Textarea.test.tsx`

**Step 1: Write the failing tests**

Write tests that describe:

- textarea renders default size classes and invalid state classes
- checkbox renders checked and disabled attributes
- select wrapper can render placeholder text and disabled state

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/Textarea/Textarea.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Select/Select.test.tsx`

Expected: FAIL because the new public components do not exist yet.

**Step 3: Write minimal implementation**

- Add `ui/textarea.tsx` using the same utility pattern as `ui/input.tsx`
- Add `ui/checkbox.tsx` using Radix checkbox primitives
- Adjust `ui/select.tsx` only as needed so a wrapper can compose it cleanly

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/Textarea/Textarea.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Select/Select.test.tsx`

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/ui/textarea.tsx src/components/ui/checkbox.tsx src/components/ui/select.tsx src/components/Textarea/Textarea.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Select/Select.test.tsx
git commit -m "feat: add shadcn primitives for new atomic fields"
```

### Task 2: Add atomic public wrappers

**Files:**
- Create: `src/components/Badge/Badge.tsx`
- Create: `src/components/Badge/Badge.test.tsx`
- Create: `src/components/Badge/Badge.stories.tsx`
- Create: `src/components/Textarea/Textarea.tsx`
- Create: `src/components/Textarea/Textarea.test.tsx`
- Create: `src/components/Textarea/Textarea.stories.tsx`
- Create: `src/components/Select/Select.tsx`
- Create: `src/components/Select/Select.test.tsx`
- Create: `src/components/Select/Select.stories.tsx`
- Create: `src/components/Checkbox/Checkbox.tsx`
- Create: `src/components/Checkbox/Checkbox.test.tsx`
- Create: `src/components/Checkbox/Checkbox.stories.tsx`
- Create: `src/components/Label/Label.tsx`
- Create: `src/components/Label/Label.test.tsx`
- Create: `src/components/Label/Label.stories.tsx`

**Step 1: Write the failing tests**

Write one clear failing test per component:

- `Badge` supports variants
- `Textarea` supports `textareaSize` and `invalid`
- `Select` renders trigger text and options
- `Checkbox` supports label-adjacent usage and disabled state
- `Label` renders associated text styling

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/Badge/Badge.test.tsx src/components/Textarea/Textarea.test.tsx src/components/Select/Select.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Label/Label.test.tsx`

Expected: FAIL with missing modules or missing exports.

**Step 3: Write minimal implementation**

- Wrap the `ui/*` primitives with public props shaped like current `Button` and `Input`
- Keep props small and explicit
- Reuse `cn()` and `class-variance-authority` where variants are needed

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/Badge/Badge.test.tsx src/components/Textarea/Textarea.test.tsx src/components/Select/Select.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Label/Label.test.tsx`

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/Badge src/components/Textarea src/components/Select src/components/Checkbox src/components/Label
git commit -m "feat: add atomic shadcn wrapper components"
```

### Task 3: Add `FormField` molecule

**Files:**
- Create: `src/components/FormField/FormField.tsx`
- Create: `src/components/FormField/FormField.test.tsx`
- Create: `src/components/FormField/FormField.stories.tsx`

**Step 1: Write the failing test**

Write tests that verify:

- label text renders and links to control ID
- hint and error text render in the correct state
- error state marks the field as invalid in a predictable way

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/FormField/FormField.test.tsx`

Expected: FAIL because `FormField` does not exist.

**Step 3: Write minimal implementation**

- Create a composition component with `label`, `hint`, `error`, `required`, `children`
- Use generated IDs only when callers do not provide them
- Apply consistent spacing and message styling

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/FormField/FormField.test.tsx`

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/FormField
git commit -m "feat: add form field molecule"
```

### Task 4: Export and document the public API

**Files:**
- Modify: `src/index.ts`
- Modify: `README.md`

**Step 1: Write the failing test**

Add or update a package-level test that verifies the new components are exported from `src/index.ts`.

**Step 2: Run test to verify it fails**

Run: `npm test -- src/tokens.test.ts`

Expected: FAIL if exports are missing from the package entry.

**Step 3: Write minimal implementation**

- Export all new components and prop types from `src/index.ts`
- Update README component list and example usage only where the new public API is exposed

**Step 4: Run test to verify it passes**

Run: `npm test -- src/tokens.test.ts`

Expected: PASS

**Step 5: Commit**

```bash
git add src/index.ts README.md
git commit -m "docs: export and document new atomic components"
```

### Task 5: Add Storybook coverage and run final verification

**Files:**
- Modify: component story files created above
- Test: all relevant component tests

**Step 1: Write any missing failing story-level assertions or docs checks**

If Storybook interaction coverage is needed, add the smallest missing verification.

**Step 2: Run targeted verification**

Run:

- `npm test -- src/components/Badge/Badge.test.tsx src/components/Textarea/Textarea.test.tsx src/components/Select/Select.test.tsx src/components/Checkbox/Checkbox.test.tsx src/components/Label/Label.test.tsx src/components/FormField/FormField.test.tsx`
- `npm run build`

Expected: all tests PASS and build exits with code 0.

**Step 3: Fix any failing issues minimally**

Address only actual failures found during verification.

**Step 4: Run final verification again**

Run:

- `npm test`
- `npm run build`

Expected: PASS

**Step 5: Commit**

```bash
git add src/components src/index.ts README.md
git commit -m "feat: complete atomic component expansion"
```
