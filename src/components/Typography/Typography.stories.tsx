import type { Meta, StoryObj } from '@storybook/react';
import { Display, H1, H2, H3, Body, Caption, Code, Numeric, Mark } from './Typography';

const meta: Meta = {
  title: 'General/Typography',
  tags: ['autodocs'],
};

export default meta;

export const Scale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Caption>Display — 40px / 700 / -0.02em</Caption>
        <Display>한 화면에 하나의 핵심</Display>
      </div>
      <div>
        <Caption>H1 — 32px / 700</Caption>
        <H1>코리안심슨이 만드는 인터페이스</H1>
      </div>
      <div>
        <Caption>H2 — 24px / 600</Caption>
        <H2>에러는 책망이 아닌 안내</H2>
      </div>
      <div>
        <Caption>H3 — 20px / 600</Caption>
        <H3>토스의 사고방식을 빌려</H3>
      </div>
      <div>
        <Caption>Body — 16px / 400 / 1.6</Caption>
        <Body>Pretendard 한글 가독성과 Inter 영문/숫자 하모니. 한 화면에 하나의 핵심 액션.</Body>
      </div>
      <div>
        <Caption>Caption — 13px / fg-3</Caption>
        <Caption>업로드 완료 · 2024년 4월 28일</Caption>
      </div>
    </div>
  ),
};

export const CodeBlocks: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Body>인라인 코드: <Code>import {'{ Button }'} from '@koreasimpson/design-system'</Code></Body>
      <Code block>{`import { Button } from '@koreasimpson/design-system';
import '@koreasimpson/design-system/styles.css';

export default () => <Button variant="primary">저장하기</Button>;`}</Code>
    </div>
  ),
};

export const NumericAndMark: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Body>총 <Numeric>1,234,567</Numeric>원 (tabular nums 적용)</Body>
      <Body><Mark>마리골드</Mark>는 토스 블루와 의도적으로 다릅니다.</Body>
    </div>
  ),
};
