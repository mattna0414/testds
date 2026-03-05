import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('design tokens', () => {
  const tokensPath = path.resolve(__dirname, 'tokens.css');
  const tokens = readFileSync(tokensPath, 'utf8');

  it('uses tailwind v3 directives instead of tw-animate-css import', () => {
    expect(tokens).toContain('@tailwind base;');
    expect(tokens).toContain('@tailwind components;');
    expect(tokens).toContain('@tailwind utilities;');
    expect(tokens).not.toContain("tw-animate-css");
  });

  it('sets default primary color to #FF6070', () => {
    expect(tokens).toMatch(/--primary:\s*#FF6070;/i);
  });
});
