import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Button } from '../Button/Button';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: { type: 'info', title: '알려드려요', description: '변경 사항이 저장됐어요.' },
  argTypes: { type: { control: 'select', options: ['info', 'success', 'warning', 'error'] } },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { type: 'info', title: '안내', description: '서비스 점검이 예정돼 있어요.' } };
export const Success: Story = { args: { type: 'success', title: '저장했어요', description: '변경 사항이 반영됐어요.' } };
export const Warning: Story = { args: { type: 'warning', title: '잠깐, 확인해 주세요', description: '저장하면 이전 데이터는 복구하기 어려워요.' } };
export const Error: Story = { args: { type: 'error', title: '다시 시도해 주세요', description: '저장 중 문제가 생겼어요.' } };
export const Closable: Story = { args: { type: 'info', title: '닫을 수 있어요', closable: true } };
export const WithAction: Story = {
  args: {
    type: 'warning',
    title: '저장하지 않은 변경 사항이 있어요',
    description: '페이지를 떠나면 작업 내용이 사라져요.',
    action: <Button size="sm" variant="secondary">계속 작업하기</Button>,
  },
};
