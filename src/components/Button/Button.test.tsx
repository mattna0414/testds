import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders default variant by default', () => {
    const html = renderToStaticMarkup(<Button>Save</Button>);

    expect(html).toContain('inline-flex');
    expect(html).toContain('bg-primary');
    expect(html).toContain('Save');
  });

  it('renders secondary variant class', () => {
    const html = renderToStaticMarkup(<Button variant="secondary">Cancel</Button>);

    expect(html).toContain('bg-secondary');
    expect(html).toContain('h-9');
  });

  it('shows spinner when loading', () => {
    const html = renderToStaticMarkup(<Button isLoading>Saving</Button>);

    expect(html).toContain('animate-spin');
    expect(html).toContain('disabled=""');
  });
});
