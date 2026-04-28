import type { Meta, StoryObj } from '@storybook/react';
import { PostListItem } from './PostListItem';

const meta: Meta<typeof PostListItem> = {
  title: 'Personal/PostListItem',
  component: PostListItem,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  args: {
    title: '토스의 UX 라이팅 원칙을 개인 프로젝트에 적용하기',
    excerpt: '에러 메시지는 책망이 아닌 안내여야 해요. "실패했어요" 대신 "다시 시도해 주세요"라고 쓰는 이유를 정리했어요.',
    date: '2024. 4. 28',
    readTime: 5,
  },
};

export const List: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      {[
        { title: 'TypeScript로 디자인 시스템 만들기', date: '2024. 4. 28', readTime: 8 },
        { title: 'CSS Modules vs vanilla-extract', date: '2024. 3. 15', readTime: 5 },
        { title: 'Storybook 8 세팅 가이드', date: '2024. 2. 10', readTime: 4 },
      ].map((p) => (
        <PostListItem key={p.title} excerpt="포스트 요약이 여기 들어가요." {...p} />
      ))}
    </div>
  ),
};
