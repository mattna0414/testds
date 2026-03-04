import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders body variant by default', () => {
    const html = renderToStaticMarkup(<Typography>Body text</Typography>);

    expect(html).toContain('<p');
    expect(html).toContain('leading-7');
    expect(html).toContain('Body text');
  });

  it('renders requested element and variant', () => {
    const html = renderToStaticMarkup(
      <Typography as="h1" variant="display">
        Heading
      </Typography>,
    );

    expect(html).toContain('<h1');
    expect(html).toContain('text-4xl');
  });
});
