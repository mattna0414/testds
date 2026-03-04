import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders primary variant by default', () => {
    const html = renderToStaticMarkup(<Button>Save</Button>);

    expect(html).toContain('class="pds-btn pds-btn--primary"');
    expect(html).toContain('Save');
  });

  it('renders secondary variant class', () => {
    const html = renderToStaticMarkup(<Button variant="secondary">Cancel</Button>);

    expect(html).toContain('class="pds-btn pds-btn--secondary"');
  });
});
