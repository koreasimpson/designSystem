import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'DataDisplay/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

export const Fallback: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar name="김찬호" size={32} />
      <Avatar name="코리안심슨" size={40} />
      <Avatar name="React" size={48} />
    </div>
  ),
};

export const WithImage: StoryObj = {
  render: () => (
    <Avatar src="https://github.com/ninezerochan.png" name="ninezerochan" size={48} />
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {[24, 32, 40, 48, 64].map((size) => (
        <Avatar key={size} name="김찬호" size={size} />
      ))}
    </div>
  ),
};

export const Group: StoryObj = {
  render: () => (
    <AvatarGroup
      size={36}
      max={4}
      avatars={[
        { name: '김찬호' },
        { name: '이지우' },
        { name: '박서연' },
        { name: '최민준' },
        { name: '정하은' },
        { name: '강도현' },
      ]}
    />
  ),
};
