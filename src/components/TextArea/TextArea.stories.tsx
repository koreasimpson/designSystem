import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'DataEntry/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: { placeholder: '내용을 입력해 주세요', rows: 4 },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
export const Error: Story = { args: { error: true, placeholder: '최소 10자 이상 입력해 주세요' } };
export const Disabled: Story = { args: { disabled: true } };
