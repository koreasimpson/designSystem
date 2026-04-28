import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'star', size: 24 },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'home', 'search', 'settings', 'user', 'bell', 'mail', 'heart', 'star',
        'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'check', 'x',
        'plus', 'minus', 'edit', 'trash', 'download', 'upload', 'share', 'link',
        'copy', 'eye', 'eye-off', 'calendar', 'clock', 'filter', 'chevron-down',
        'chevron-up', 'chevron-left', 'chevron-right', 'more-horizontal',
        'more-vertical', 'log-out', 'github', 'refresh', 'alert-circle',
        'info', 'check-circle', 'x-circle',
      ] satisfies IconName[],
    },
    size: { control: 'range', min: 12, max: 48, step: 4 },
    strokeWidth: { control: 'range', min: 1, max: 3, step: 0.25 },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      'home', 'search', 'settings', 'user', 'bell', 'mail', 'heart', 'star',
      'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'check', 'x',
      'plus', 'minus', 'edit', 'trash', 'download', 'upload', 'share', 'link',
      'copy', 'eye', 'eye-off', 'calendar', 'clock', 'filter', 'chevron-down',
      'chevron-up', 'chevron-left', 'chevron-right', 'more-horizontal',
      'more-vertical', 'log-out', 'github', 'refresh', 'alert-circle',
      'info', 'check-circle', 'x-circle',
    ];
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {icons.map((name) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 72 }}>
            <Icon name={name} size={22} />
            <span style={{ fontSize: 10, color: 'var(--fg-3)', textAlign: 'center', lineHeight: 1.3, fontFamily: 'var(--font-mono)' }}>{name}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {[14, 18, 22, 28, 36].map((size) => (
        <Icon key={size} name="star" size={size} />
      ))}
    </div>
  ),
};

export const Colored: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Icon name="heart" size={24} color="var(--error)" />
      <Icon name="star" size={24} color="var(--primary-500)" />
      <Icon name="check-circle" size={24} color="var(--success)" />
      <Icon name="info" size={24} color="var(--info)" />
    </div>
  ),
};
