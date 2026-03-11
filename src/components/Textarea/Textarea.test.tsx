import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders medium size by default', () => {
    const html = renderToStaticMarkup(<Textarea placeholder="Write here" />);

    expect(html).toContain('min-h-[96px]');
    expect(html).toContain('placeholder="Write here"');
  });

  it('adds invalid styling when invalid is true', () => {
    const html = renderToStaticMarkup(<Textarea invalid textareaSize="lg" />);

    expect(html).toContain('min-h-[140px]');
    expect(html).toContain('border-destructive');
  });
});
