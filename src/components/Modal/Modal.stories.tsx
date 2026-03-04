import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import './Modal.css';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    open: true,
    title: 'Delete Item',
    children: 'This action cannot be undone.',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Open: Story = {};

export const Closed: Story = {
  args: {
    open: false,
  },
};
