import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/components/ui/input';

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'shadcn/ui Input 컴포넌트입니다. 기본 input 속성을 그대로 지원하며, 디자인 시스템 토큰 기반 스타일을 적용합니다.',
      },
    },
  },
  args: {
    placeholder: '이메일을 입력하세요',
    type: 'text',
    disabled: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'file'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'hello@company.com',
  },
};