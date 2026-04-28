# @koreasimpson/design-system

## 0.2.0

### Minor Changes

- 초기 릴리스 (v0.1.0)

  25개 컴포넌트를 TypeScript + CSS Modules로 완전 마이그레이션.

  **General**
  - `Button` — 4 variant(primary/secondary/ghost/danger), 3 size, loading/icon/block 지원
  - `Tag` — selected/closable 상태
  - `Card` — title/extra/footer/hoverable
  - `Icon` — 40개 Lucide 기반 inline SVG, stroke 1.75 고정
  - `Display`, `H1~H3`, `Body`, `Caption`, `Code`, `Numeric`, `Mark` — 4단계 타이포 시스템

  **DataEntry**
  - `Input` — size/prefix/suffix/error
  - `TextArea` — error 상태
  - `Select` — 커스텀 드롭다운, keyboard dismiss, disabled 옵션
  - `Checkbox` — indeterminate 지원
  - `Radio` / `RadioGroup` — horizontal/vertical
  - `Switch` — sm/md size, aria-checked
  - `Segmented` — pill 스타일 라디오 그룹

  **DataDisplay**
  - `Avatar` / `AvatarGroup` — 이미지 없을 때 이름 기반 색상 폴백
  - `Badge` — count/dot/status(processing 포함)

  **Feedback**
  - `Spin` — 순환 SVG 애니메이션
  - `Skeleton` / `SkeletonCard` — shimmer 애니메이션
  - `Progress` — 4 status, 3 size
  - `Alert` — info/success/warning/error, closable, action slot
  - `Modal` — ESC 닫기, mask 클릭 닫기, body scroll lock

  **Navigation**
  - `Tabs` — line/pill variant
  - `Steps` — horizontal/vertical, done/active 상태

  **Layout**
  - `Divider` — horizontal/vertical/label/dashed

  **Personal (포트폴리오 전용)**
  - `Header` — sticky + backdrop blur, 반응형 nav
  - `ProjectCard` — hover elevation
  - `PostListItem` — hover 상태

  **인프라**
  - tsup ESM + CJS + `.d.ts` 동시 빌드
  - Storybook 8 + Vite (a11y 애드온 포함)
  - GitHub Actions CI (typecheck → lint → build → Storybook 배포)
  - CSS 변수 기반 디자인 토큰 (`@koreasimpson/design-system/styles.css`)
