import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: { value: 60, size: 'md', showInfo: true },
  argTypes: {
    value: { control: 'range', min: 0, max: 100, step: 1 },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    status: { control: 'select', options: ['default', 'success', 'error', 'warning'] },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60 } };
export const Success: Story = { args: { value: 100, status: 'success' } };
export const Error: Story = { args: { value: 45, status: 'error' } };
export const Warning: Story = { args: { value: 75, status: 'warning' } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <Progress value={60} status="default" />
      <Progress value={100} status="success" />
      <Progress value={45} status="error" />
      <Progress value={75} status="warning" />
    </div>
  ),
};
