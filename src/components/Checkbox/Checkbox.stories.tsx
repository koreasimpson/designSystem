import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'DataEntry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { children: '동의해요', checked: false } };
export const Checked: Story = { args: { children: '체크됨', checked: true } };
export const Indeterminate: Story = { args: { children: '부분 선택', indeterminate: true } };
export const Disabled: Story = { args: { children: '사용 불가', disabled: true, checked: true } };

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox checked={checked} onChange={setChecked}>
        {checked ? '체크됨' : '체크하지 않음'}
      </Checkbox>
    );
  },
};

export const Group: Story = {
  render: () => {
    const [values, setValues] = React.useState<string[]>([]);
    const items = ['디자인', '개발', '기획', '마케팅'];
    const toggle = (v: string) =>
      setValues((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item) => (
          <Checkbox key={item} checked={values.includes(item)} onChange={() => toggle(item)}>
            {item}
          </Checkbox>
        ))}
      </div>
    );
  },
};
