import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const ITEMS = [
  { key: 'overview', label: '개요', content: <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14 }}>프로젝트 개요 탭 내용이에요.</p> },
  { key: 'activity', label: '활동', content: <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14 }}>최근 활동 목록이 표시돼요.</p> },
  { key: 'settings', label: '설정', content: <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14 }}>설정 탭 내용이에요.</p> },
];

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['line', 'pill'] } },
};

export default meta;

export const Line: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('overview');
    return <Tabs value={value} onChange={setValue} items={ITEMS} variant="line" />;
  },
};

export const Pill: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('overview');
    return <Tabs value={value} onChange={setValue} items={ITEMS} variant="pill" />;
  },
};
