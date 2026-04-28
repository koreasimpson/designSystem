import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'about', label: 'About' },
];

const meta: Meta<typeof Header> = {
  title: 'Personal/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: -16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [active, setActive] = React.useState('home');
    return (
      <Header
        title="코리안심슨"
        items={NAV_ITEMS}
        activeId={active}
        onNav={setActive}
      />
    );
  },
};

export const NoNav: StoryObj = {
  render: () => <Header title="코리안심슨" />,
};
