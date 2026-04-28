import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Badge> = {
  title: 'DataDisplay/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

export const Count: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Badge count={5}><Icon name="bell" size={22} /></Badge>
      <Badge count={99}><Icon name="mail" size={22} /></Badge>
      <Badge count={100}><Icon name="bell" size={22} /></Badge>
    </div>
  ),
};

export const Dot: StoryObj = {
  render: () => (
    <Badge dot><Icon name="bell" size={22} /></Badge>
  ),
};

export const Status: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {(['default', 'success', 'warning', 'error', 'info', 'processing'] as const).map((s) => (
        <Badge key={s} status={s}>{s}</Badge>
      ))}
    </div>
  ),
};
