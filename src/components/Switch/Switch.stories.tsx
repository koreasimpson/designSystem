import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'DataEntry/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['sm', 'md'] } },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = { args: { checked: false, 'aria-label': '알림 끄기' } };
export const On: Story = { args: { checked: true, 'aria-label': '알림 켜기' } };
export const Disabled: Story = { args: { checked: true, disabled: true, 'aria-label': '알림' } };

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = React.useState(false);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 14 }}>
        <Switch checked={on} onChange={setOn} aria-label="알림 설정" />
        <span>{on ? '알림 켜짐' : '알림 꺼짐'}</span>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Switch size="sm" checked={true} aria-label="sm" />
      <Switch size="md" checked={true} aria-label="md" />
    </div>
  ),
};
