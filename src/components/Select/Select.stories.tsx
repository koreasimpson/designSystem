import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'DataEntry/Select',
  component: Select,
  tags: ['autodocs'],
  args: { options: OPTIONS, placeholder: '프레임워크를 선택해 주세요' },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return <Select options={OPTIONS} value={value} onChange={setValue} placeholder="선택해 주세요" />;
  },
};

export const Disabled: Story = { args: { disabled: true, value: 'react' } };
