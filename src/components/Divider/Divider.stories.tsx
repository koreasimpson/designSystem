import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <span style={{ color: 'var(--fg-2)', fontSize: 14 }}>위쪽 내용</span>
      <Divider />
      <span style={{ color: 'var(--fg-2)', fontSize: 14 }}>아래쪽 내용</span>
    </div>
  ),
};

export const WithLabel: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Divider label="또는" />
      <Divider label="2024년 4월" align="left" />
      <Divider label="끝" align="right" />
    </div>
  ),
};

export const Dashed: StoryObj = {
  render: () => <Divider dashed />,
};

export const Vertical: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, fontSize: 14, color: 'var(--fg-2)' }}>
      <span>저장</span>
      <Divider vertical />
      <span>취소</span>
      <Divider vertical />
      <span>삭제</span>
    </div>
  ),
};
