import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Textarea } from '../Textarea/Textarea';
import { FormField } from './FormField';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
  render: () => (
    <FormField label="Email" hint="We only use this for notifications">
      <Input id="storybook-email" placeholder="name@company.com" />
    </FormField>
  ),
};

export const TextareaField: Story = {
  render: () => (
    <FormField label="Summary" error="Summary is required">
      <Textarea id="storybook-summary" placeholder="Write a project summary" />
    </FormField>
  ),
};

export const SelectField: Story = {
  render: () => (
    <FormField label="Status">
      <Select
        options={[
          { label: 'Backlog', value: 'backlog' },
          { label: 'In Progress', value: 'in-progress' },
          { label: 'Done', value: 'done' },
        ]}
        placeholder="Choose status"
      />
    </FormField>
  ),
};

export const CheckboxField: Story = {
  render: () => (
    <FormField label="Confirmation" hint="You can change this later">
      <Checkbox id="storybook-checkbox" aria-label="confirmation" />
    </FormField>
  ),
};
