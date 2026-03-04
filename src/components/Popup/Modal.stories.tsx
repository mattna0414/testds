import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Popup',
  component: Modal,
  args: {
    open: false,
    title: 'Delete Item',
    children: 'This action cannot be undone.',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Dialog: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Open dialog
        </Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
