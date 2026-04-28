import type { Meta, StoryObj } from '@storybook/react';
import { Spin } from './Spin';

const meta: Meta<typeof Spin> = {
  title: 'Feedback/Spin',
  component: Spin,
  tags: ['autodocs'],
  args: { size: 24 },
  argTypes: { size: { control: 'range', min: 16, max: 64, step: 4 } },
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {};
export const Small: Story = { args: { size: 16 } };
export const Large: Story = { args: { size: 48 } };

export const Colored: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Spin size={24} />
      <Spin size={24} color="var(--fg-3)" />
      <Spin size={24} color="var(--success)" />
      <div style={{ background: 'var(--primary-500)', padding: 8, borderRadius: 8, display: 'inline-flex' }}>
        <Spin size={24} color="#fff" />
      </div>
    </div>
  ),
};
