import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  args: {
    children: 'Design systems scale consistency.',
    variant: 'body',
    as: 'p',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['display', 'title', 'body', 'caption'],
    },
    as: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'p', 'span'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Body: Story = {};

export const Display: Story = {
  args: {
    variant: 'display',
    as: 'h1',
    children: 'Product Design System',
  },
};
