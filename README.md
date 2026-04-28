# @90chanho/design-system

코리안심슨 개인 디자인 시스템. React + TypeScript 기반 UI 컴포넌트 라이브러리.

- **Primary color:** Marigold (`#F59E0B`)
- **Font:** Pretendard (한글) / Inter (영문·숫자) / Geist Mono (코드)
- **Icons:** Lucide Icons

---

## 설치

```bash
npm install @90chanho/design-system
```

React 18 이상 필요.

---

## 사용법

```tsx
import { Button, Input, Card } from '@90chanho/design-system';
import '@90chanho/design-system/styles.css';

export default function App() {
  return (
    <Card>
      <Input label="이름" placeholder="입력해 주세요" />
      <Button variant="primary">저장</Button>
    </Card>
  );
}
```

---

## 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| `Alert` | 인라인 상태 메시지 (success / warning / error / info) |
| `Avatar` | 사용자 프로필 이미지 |
| `Badge` | 숫자 또는 상태 표시 뱃지 |
| `Button` | 기본 액션 버튼 |
| `Card` | 콘텐츠 컨테이너 |
| `Checkbox` | 다중 선택 입력 |
| `Divider` | 섹션 구분선 |
| `Header` | 페이지 상단 헤더 |
| `Icon` | Lucide 아이콘 래퍼 |
| `Input` | 텍스트 입력 |
| `Modal` | 오버레이 다이얼로그 |
| `PostListItem` | 블로그 포스트 목록 아이템 |
| `Progress` | 진행 상태 표시 |
| `ProjectCard` | 프로젝트 카드 |
| `Radio` | 단일 선택 입력 |
| `Segmented` | 세그먼트 컨트롤 |
| `Select` | 드롭다운 선택 |
| `Skeleton` | 로딩 스켈레톤 |
| `Spin` | 로딩 스피너 |
| `Steps` | 단계 표시 |
| `Switch` | 토글 스위치 |
| `Tabs` | 탭 네비게이션 |
| `Tag` | 레이블 태그 |
| `TextArea` | 멀티라인 텍스트 입력 |
| `Typography` | 텍스트 스타일 (Display / Title / Body / Caption) |

---

## 디자인 토큰

CSS 변수로 노출. 직접 사용 가능.

```css
/* 주요 토큰 예시 */
--color-primary-500: #F59E0B;
--color-gray-900: #111827;
--radius-md: 12px;
--shadow-1: 0 1px 3px rgba(0,0,0,0.08);
```

---

## 개발

```bash
npm install
npm run storybook   # 컴포넌트 개발 서버 (localhost:6006)
npm run build       # 빌드
npm run typecheck   # 타입 검사
```

---

## 라이선스

개인 프로젝트용. 문의: [@koreasimpson](https://github.com/koreasimpson)
