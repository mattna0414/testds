import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { FormField } from './FormField';

describe('FormField', () => {
  it('renders label and hint linked to the control', () => {
    const html = renderToStaticMarkup(
      <FormField label="Email" hint="We only use this for notifications">
        <input id="email" />
      </FormField>,
    );

    expect(html).toContain('for="email"');
    expect(html).toContain('We only use this for notifications');
    expect(html).toContain('aria-describedby="');
  });

  it('renders error state and marks the control invalid', () => {
    const html = renderToStaticMarkup(
      <FormField label="Email" error="Email is required">
        <input id="email" />
      </FormField>,
    );

    expect(html).toContain('Email is required');
    expect(html).toContain('aria-invalid="true"');
  });
});
