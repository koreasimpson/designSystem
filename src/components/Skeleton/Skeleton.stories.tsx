import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonCard } from './Skeleton';

const meta: Meta = {
  title: 'Feedback/Skeleton',
  tags: ['autodocs'],
};

export default meta;

export const Line: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
      <Skeleton height={20} width="80%" />
      <Skeleton height={14} />
      <Skeleton height={14} width="90%" />
      <Skeleton height={14} width="60%" />
    </div>
  ),
};

export const Card: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <SkeletonCard />
    </div>
  ),
};

export const List: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
    </div>
  ),
};

export const Shapes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Skeleton width={64} height={64} radius={999} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <Skeleton height={18} width="60%" />
        <Skeleton height={13} />
      </div>
    </div>
  ),
};
