import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders medium size by default', () => {
    const html = renderToStaticMarkup(<Input placeholder="Email" />);

    expect(html).toContain('class="');
    expect(html).toContain('h-9');
    expect(html).toContain('placeholder="Email"');
  });

  it('adds invalid class when invalid is true', () => {
    const html = renderToStaticMarkup(<Input invalid inputSize="lg" />);

    expect(html).toContain('h-11');
    expect(html).toContain('border-destructive');
  });
});
