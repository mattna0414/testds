import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Workspace name',
    htmlFor: 'workspace-name',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '8px' }}>
      <Label {...args} />
      <input
        id="workspace-name"
        style={{ border: '1px solid var(--input)', borderRadius: '0.375rem', padding: '0.5rem 0.75rem' }}
        defaultValue="Design System"
      />
    </div>
  ),
};
