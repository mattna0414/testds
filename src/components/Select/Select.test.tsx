// @vitest-environment jsdom
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';

import { Select } from './Select';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('Select', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders trigger placeholder text', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(
        <Select
          placeholder="Choose status"
          options={[
            { label: 'Todo', value: 'todo' },
            { label: 'Done', value: 'done' },
          ]}
        />,
      );
    });

    expect(document.body.innerHTML).toContain('Choose status');

    act(() => root.unmount());
    container.remove();
  });

  it('renders disabled trigger state', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<Select placeholder="Choose status" disabled options={[{ label: 'Todo', value: 'todo' }]} />);
    });

    expect(document.body.innerHTML).toContain('data-disabled');

    act(() => root.unmount());
    container.remove();
  });
});
