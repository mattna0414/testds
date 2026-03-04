import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders medium size by default', () => {
    const html = renderToStaticMarkup(<Input placeholder="Email" />);

    expect(html).toContain('class="pds-input pds-input--md"');
    expect(html).toContain('placeholder="Email"');
  });

  it('adds invalid class when invalid is true', () => {
    const html = renderToStaticMarkup(<Input invalid inputSize="lg" />);

    expect(html).toContain('pds-input--lg');
    expect(html).toContain('pds-input--invalid');
  });
});
