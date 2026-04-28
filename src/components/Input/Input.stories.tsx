import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Input> = {
  title: 'DataEntry/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: '입력해 주세요', size: 'md' },
  argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg'] } },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithPrefix: Story = { args: { prefix: <Icon name="search" size={16} /> } };
export const WithSuffix: Story = { args: { suffix: <Icon name="x" size={16} /> } };
export const Error: Story = { args: { error: true, placeholder: '비밀번호가 일치하지 않아요' } };
export const Disabled: Story = { args: { disabled: true, placeholder: '사용 불가' } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Input size="sm" placeholder="작게" />
      <Input size="md" placeholder="보통" />
      <Input size="lg" placeholder="크게" />
    </div>
  ),
};
