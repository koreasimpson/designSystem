import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from './Steps';

const ITEMS = [
  { title: '계정 생성', description: '이메일과 비밀번호를 입력해요.' },
  { title: '프로필 설정', description: '이름과 사진을 추가해요.' },
  { title: '구독 선택', description: '플랜을 선택해요.' },
  { title: '완료' },
];

const meta: Meta<typeof Steps> = {
  title: 'Navigation/Steps',
  component: Steps,
  tags: ['autodocs'],
  args: { current: 1, items: ITEMS },
  argTypes: {
    current: { control: 'range', min: 0, max: 3, step: 1 },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Horizontal: Story = { args: { direction: 'horizontal' } };
export const Vertical: Story = { args: { direction: 'vertical' } };
export const Start: Story = { args: { current: 0 } };
export const Complete: Story = { args: { current: 4 } };
