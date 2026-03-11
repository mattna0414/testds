import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders default variant styles by default', () => {
    const html = renderToStaticMarkup(<Badge>Status</Badge>);

    expect(html).toContain('inline-flex');
    expect(html).toContain('bg-primary');
    expect(html).toContain('Status');
  });

  it('renders outline variant styles', () => {
    const html = renderToStaticMarkup(<Badge variant="outline">Draft</Badge>);

    expect(html).toContain('text-foreground');
    expect(html).toContain('border');
  });
});
