# 코리안심슨 Design System

> 개인 사이드 프로젝트용 디자인 시스템.
> 토스의 UX 라이팅 원칙과 미니멀한 정보 위계를 차용,
> 개인 브랜딩(코리안심슨)에 맞게 재해석.

---

## 디자인 철학

- **Navigating, not blaming.** 에러 메시지는 책망이 아닌 안내. "실패했어요" 대신 "다시 시도해 주세요".
- **One screen, one core action.** 한 화면에 하나의 핵심 액션. 보조 액션은 위계로 분리.
- **Essential over nice-to-have.** "있으면 좋은" 기능보다 "없으면 안 되는" 기능에 집중.

이 시스템은 토스의 사고방식을 빌렸지만, 톤과 색은 의도적으로 다르다 —
브랜드 컬러는 토스 블루를 회피한 **마리골드(F59E0B)**. 이름의 "Simpson"에서 따온 따뜻한 노랑.

---

## Sources

- **GitHub (reference patterns):** [`daangn/seed-design`](https://github.com/daangn/seed-design) — 토큰 구조 참고용. 직접 import하지는 않음.
- **Logo source:** `https://ninezerochan.dev/favicon.svg` — 원본은 `assets/logo-original.svg`로 보존, 브랜드 색으로 리컬러한 버전이 `assets/logo.svg`.
- **Author:** [@koreasimpson](https://github.com/koreasimpson)

---

## Index

```
README.md                ← (you are here) 시스템 전체 가이드
colors_and_type.css      ← 모든 토큰 (CSS 변수). 어떤 파일에서든 import해서 사용.
SKILL.md                 ← Agent Skill 매니페스트 (Claude Code 호환)

assets/
  logo.svg               ← 브랜드 컬러 적용 로고
  logo-original.svg      ← 원본 (참고용)

fonts/                   ← Pretendard / Inter / Geist Mono은 CDN으로 로드
                           (필요 시 ttf 다운로드 위치)

preview/                 ← Design System 탭에 표시되는 카드들
  *.html

ui_kits/
  web/                   ← 개인 웹사이트/포트폴리오 UI 키트
    index.html           ← 인터랙티브 데모
    *.jsx                ← 컴포넌트
```

---

## CONTENT FUNDAMENTALS

브랜드 보이스는 한국어 기준 **"해요체"**, 친구처럼 다가가되 가볍지 않게.

### Voice & Tone

| 원칙 | Do | Don't |
|---|---|---|
| 종결어미 | "저장했어요" | "저장하였습니다" / "저장됨" |
| 호칭 | "당신" 회피, 주어 생략 | "고객님께서는…" |
| 1인칭 | 시스템은 "저" 안 씀, 행위 주체 사용자 | "제가 도와드릴게요" |
| 부정 → 긍정 전환 | "다시 시도해 주세요" | "실패했어요" |
| 전문 용어 | 일상어로 풀어쓰기 | "인증 토큰이 만료되었습니다" |

### 영문/숫자 처리
- 영문/숫자는 **Inter** 또는 **Geist** (`--font-latin`).
- 숫자는 항상 tabular nums (`font-feature-settings: 'tnum' 1`).
- 한글과 라틴 문자가 섞인 본문은 Pretendard 한 글꼴로 처리 (혼용 시 베이스라인이 흔들리지 않음).

### Casing
- 한글: 일반 문장 케이스. 명사 나열도 가운뎃점("·") 대신 쉼표.
- 영문: Title Case는 헤더에만, 본문은 sentence case.
- 버튼 라벨은 동사 우선: "저장", "삭제", "다시 보기" — "확인/취소" 같은 모호어 지양.

### Vibe
- 차분한 정보 위계. 시각적으로 조용하지만, 액션이 필요한 곳에서만 마리골드가 등장.
- 이모지는 **사용하지 않음**. 의미 전달은 텍스트와 아이콘으로.
- 유머나 캐주얼한 톤은 마이크로카피에서만 (예: 빈 상태 메시지). UI 자체는 진중.

### 카피 예시

```
✅ "저장했어요"                        ❌ "저장이 완료되었습니다"
✅ "다시 시도해 주세요"                 ❌ "오류가 발생했습니다"
✅ "잠깐, 한 번 더 확인해 주세요"        ❌ "경고: 위험한 작업입니다"
✅ "아직 등록한 글이 없어요"             ❌ "데이터가 존재하지 않음"
✅ "비밀번호는 8자 이상이어야 해요"       ❌ "비밀번호 형식 오류"
```

---

## VISUAL FOUNDATIONS

### Color
- **Primary: Marigold (`#F59E0B`)** — 50~900까지 9단계. 토스 블루와의 차별화 의도.
- **Gray: 11단계** (`gray-0`부터 `gray-950`까지). 배경/보더/텍스트 위계는 거의 항상 gray로.
- **Semantic 4색**: success(emerald), warning(marigold-shared), error(red), info(indigo). 각 색마다 fg 1개, bg 1개.
- 컬러 사용 비율: gray 90% / marigold 8% / semantic 2%. **마리골드는 한 화면에 하나만.**

### Typography
- **본문: Pretendard Variable** — 한글 가독성과 라틴 문자 하모니 모두 좋음.
- **영문/숫자: Inter** — `.numeric` 클래스로 명시 적용.
- **Mono: Geist Mono** — 코드, 토큰, 키보드 키.
- **위계는 4단계로 단순화**: Display(40) / Title(22) / Body(16) / Caption(13).
- **라인하이트 1.5+ 고정** — 한글 가독성 우선. body는 1.6.
- 자간(letter-spacing)은 큰 글자에서만 음수(-0.01~-0.02em). 본문은 0.

### Spacing
- **4px 베이스 그리드.** 8배수 강제 X. 4, 8, 12, 16, 24, 32, 48, 64.
- 컴포넌트 내부 패딩: 보통 12~16px. 섹션 간 간격: 32~48px.

### Backgrounds
- **흰 바탕(`gray-0`) 기본.** 카드는 보더로 구분, 그림자 X.
- 그라데이션·전면 이미지·반복 패턴 **없음**. 배경은 절대 시끄럽지 않게.
- 강조가 필요한 섹션은 `bg-2`(gray-50) sunken.

### Animation
- **200ms ease-out 기본.** 호버는 150ms, 패널 진입은 300ms까지.
- bounce/spring 애니메이션은 사용하지 않음. fade + 미세한 translate(2~4px)만.
- 페이지 전환은 fade-only.

### Hover / Press states
- **Hover: 배경 한 단계 어둡게** (`gray-100` → `gray-200`). opacity 변경 금지.
- **Press: scale(0.98) + 배경 한 단계 더 어둡게.** 100ms.
- 텍스트 링크 hover는 `--primary-700`로 색만 바뀜, 밑줄은 항상 유지.

### Borders & Shadows
- **보더 우선, 섀도 최소.** 카드/입력은 `1px solid var(--border-1)`.
- 섀도는 두 단계만:
  - `--shadow-1`: 토스트, 작은 부유 요소.
  - `--shadow-2`: 모달, 드롭다운.
- 인너 섀도는 사용하지 않음.

### Cards
```
border: 1px solid var(--border-1)
border-radius: 12px
background: var(--bg-1)
padding: 16px ~ 24px
shadow: 없음 (또는 호버 시 --shadow-1)
```

### Radii
- 8 / 12 / 16 / 999. 그 외 값 사용하지 않음.
- 버튼·입력: 12px (medium).
- 카드·모달: 16px (large).
- 칩·태그: 8px (small) 또는 999(full).

### Layout
- 최대 컨텐츠 폭 1200px. 모바일 16px, 데스크톱 24~32px 사이드 패딩.
- 픽스드 헤더 사용 시 backdrop blur 12px + `--bg-1`의 80% 알파.
- 그리드는 12-column 또는 단순 flex. CSS subgrid 적극 활용.

### Transparency & Blur
- **Blur 사용처는 두 곳뿐**: (1) 픽스드 헤더, (2) 모달 백드롭.
- 그 외 반투명 표면은 사용하지 않음. UI는 불투명하게.

### Imagery
- 일러스트·전면 이미지는 기본적으로 사용하지 않음.
- 사용해야 한다면 **흑백** 또는 **단일 톤** 처리. 채도 낮게.
- 사진은 `border-radius: 12px` + 1px gray-200 보더.

---

## ICONOGRAPHY

- **Lucide Icons** (https://lucide.dev) 사용. CDN: `https://unpkg.com/lucide-static/icons/<name>.svg`.
  - 이유: stroke 1.5~2px, 둥근 끝, 한국어 UI와 시각적 무게 매치.
  - **Substitution 플래그:** 자체 아이콘 라이브러리 없음. Lucide를 기본값으로 채택. 사용자 자체 아이콘이 생기면 `assets/icons/`에 넣고 교체.
- **Stroke width 고정: 1.75px.** 24×24 viewBox.
- **fill style 금지** — outline only로 통일.
- 아이콘 색은 `currentColor`. 항상 부모 텍스트 색 상속.
- **이모지는 시스템 UI에 사용하지 않음.** 마이크로카피에서도 자제.
- **Unicode 글리프**(↑↓←→, ✓, ×) 사용 가능 — 단, 본문 흐름 안에서만. 아이콘 자리 대체 X.
- 로고: `assets/logo.svg` — 마리골드 K 모티프. 32×32 기본, 어떤 사이즈로도 스케일 가능.

---

## CAVEATS

- **Logo:** 원본 SVG의 색만 마리골드로 변경. 원형은 `logo-original.svg`로 보존. 사용자가 별도 로고 디자인을 원하면 교체 필요.
- **Fonts:** Pretendard / Inter / Geist Mono 모두 CDN 로드. 오프라인 환경에서는 `fonts/` 폴더에 ttf/woff2 추가 필요.
- **Icons:** 자체 아이콘셋 부재 → Lucide를 default로 채택. 핸드드로잉 아이콘이나 자체 일러스트 시스템이 필요하면 별도 작업.
- **UI Kit:** 단일 product(개인 웹사이트/포트폴리오 가정)만 포함. 별도 모바일 앱이나 다른 surface가 있다면 추가 키트 작업 필요.
