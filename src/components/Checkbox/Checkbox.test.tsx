import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checked state attributes', () => {
    const html = renderToStaticMarkup(<Checkbox checked aria-label="terms" />);

    expect(html).toContain('aria-label="terms"');
    expect(html).toContain('data-state="checked"');
  });

  it('renders disabled state attributes', () => {
    const html = renderToStaticMarkup(<Checkbox disabled aria-label="disabled terms" />);

    expect(html).toContain('disabled=""');
    expect(html).toContain('disabled terms');
  });
});
