import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

describe('Label', () => {
  it('renders label markup with base typography', () => {
    const html = renderToStaticMarkup(<Label htmlFor="email">Email</Label>);

    expect(html).toContain('for="email"');
    expect(html).toContain('text-sm');
    expect(html).toContain('Email');
  });
});
