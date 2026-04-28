import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'General/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { children: 'React', selected: false },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Closable: Story = { args: { onClose: () => alert('닫힘') } };

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {['React', 'TypeScript', 'Vite', 'CSS Modules'].map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  ),
};
