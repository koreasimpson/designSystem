import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'General/Card',
  component: Card,
  tags: ['autodocs'],
  args: { padding: 'md' },
  argTypes: { padding: { control: 'select', options: ['sm', 'md', 'lg'] } },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: '카드 본문 영역입니다. 어떤 컨텐츠든 들어갈 수 있어요.',
  },
};

export const WithTitle: Story = {
  args: {
    title: '프로젝트 설정',
    children: '프로젝트 기본 정보를 관리해요.',
  },
};

export const WithExtra: Story = {
  args: {
    title: '최근 활동',
    extra: <a href="#" style={{ fontSize: 13, color: 'var(--fg-3)' }}>전체 보기</a>,
    children: '최근 7일간의 활동 내역이 표시돼요.',
  },
};

export const WithFooter: Story = {
  args: {
    title: '변경 사항',
    children: '저장하지 않은 변경 사항이 있어요.',
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Button size="sm" variant="secondary">취소</Button>
        <Button size="sm">저장하기</Button>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    title: '호버 카드',
    children: '마우스를 올려보세요.',
    hoverable: true,
  },
};
