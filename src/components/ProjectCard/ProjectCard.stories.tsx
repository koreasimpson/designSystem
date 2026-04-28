import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Personal/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  args: {
    kicker: 'WEB · 개인 프로젝트',
    title: '코리안심슨 디자인 시스템',
    description: '토스의 UX 라이팅 원칙을 차용한 개인 브랜드 디자인 시스템. TypeScript + CSS Modules.',
    tags: ['TypeScript', 'React', 'CSS Modules'],
    year: '2024',
  },
};

export const Grid: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 800 }}>
      {[
        { title: '포트폴리오 사이트', tags: ['Next.js', 'TypeScript'], year: '2024' },
        { title: '날씨 앱', tags: ['React', 'Vite'], year: '2023' },
        { title: '할일 관리', tags: ['React', 'Zustand'], year: '2023' },
        { title: '디자인 시스템', tags: ['TypeScript', 'Storybook'], year: '2024' },
      ].map((p) => (
        <ProjectCard key={p.title} kicker="WEB" description="사이드 프로젝트 설명이에요." {...p} />
      ))}
    </div>
  ),
};
