import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import './Input.css';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Type something',
    inputSize: 'md',
    invalid: false,
  },
  argTypes: {
    inputSize: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 'Invalid value',
  },
};
