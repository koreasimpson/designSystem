import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: '저장하기' } };
export const Secondary: Story = { args: { variant: 'secondary', children: '취소' } };
export const Ghost: Story = { args: { variant: 'ghost', children: '더 보기' } };
export const Danger: Story = { args: { variant: 'danger', children: '삭제' } };

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: <Icon name="plus" size={16} color="#fff" />,
    children: '새로 만들기',
  },
};

export const Loading: Story = { args: { variant: 'primary', loading: true, children: '저장 중' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true, children: '사용 불가' } };
export const Block: Story = { args: { variant: 'primary', block: true, children: '전체 너비 버튼' } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button size="sm">작게</Button>
      <Button size="md">보통</Button>
      <Button size="lg">크게</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
