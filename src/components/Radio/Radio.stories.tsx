import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta = {
  title: 'DataEntry/Radio',
  tags: ['autodocs'],
};

export default meta;

export const Single: StoryObj = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Radio checked={checked} onChange={() => setChecked(!checked)}>
        선택
      </Radio>
    );
  },
};

export const Group: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'a', label: '옵션 A' },
          { value: 'b', label: '옵션 B' },
          { value: 'c', label: '옵션 C (불가)', disabled: true },
        ]}
      />
    );
  },
};

export const Vertical: StoryObj = {
  render: () => {
    const [value, setValue] = React.useState('monthly');
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        direction="vertical"
        options={[
          { value: 'monthly', label: '월간 구독' },
          { value: 'yearly', label: '연간 구독 (20% 할인)' },
        ]}
      />
    );
  },
};
