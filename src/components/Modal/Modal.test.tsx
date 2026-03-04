import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Modal } from './Modal';

describe('Modal', () => {
  it('does not render when open is false', () => {
    const html = renderToStaticMarkup(
      <Modal open={false} title="Delete Item">
        This action cannot be undone.
      </Modal>,
    );

    expect(html).toBe('');
  });

  it('renders dialog markup when open is true', () => {
    const html = renderToStaticMarkup(
      <Modal open title="Delete Item">
        This action cannot be undone.
      </Modal>,
    );

    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-label="Delete Item"');
    expect(html).toContain('This action cannot be undone.');
  });
});
