import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Segmented } from './Segmented';

const meta: Meta<typeof Segmented> = {
  title: 'DataEntry/Segmented',
  component: Segmented,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('day');
    return (
      <Segmented
        value={value}
        onChange={setValue}
        options={[
          { value: 'day', label: '일간' },
          { value: 'week', label: '주간' },
          { value: 'month', label: '월간' },
        ]}
      />
    );
  },
};

export const WithDisabled: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('list');
    return (
      <Segmented
        value={value}
        onChange={setValue}
        options={[
          { value: 'list', label: '목록' },
          { value: 'grid', label: '그리드' },
          { value: 'map', label: '지도 (준비 중)', disabled: true },
        ]}
      />
    );
  },
};
