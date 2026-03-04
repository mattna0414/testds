// @vitest-environment jsdom
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';

import { Modal } from './Modal';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('Modal', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('does not render when open is false', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    act(() => {
      root.render(
        <Modal open={false} title="Delete Item">
          This action cannot be undone.
        </Modal>,
      );
    });

    expect(document.body.innerHTML).not.toContain('Delete Item');
    act(() => root.unmount());
  });

  it('renders dialog markup when open is true', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(
        <Modal open title="Delete Item">
          This action cannot be undone.
        </Modal>,
      );
    });

    expect(document.body.innerHTML).toContain('role="dialog"');
    expect(document.body.innerHTML).toContain('Delete Item');
    expect(document.body.innerHTML).toContain('This action cannot be undone.');
    act(() => root.unmount());
    container.remove();
  });
});
