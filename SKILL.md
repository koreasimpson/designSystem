---
name: koreasimpson-design
description: Use this skill to generate well-branded interfaces and assets for 코리안심슨 (Korean Simpson) — a personal design system inspired by Toss UX writing principles, with a marigold (#F59E0B) primary, Pretendard body type, and a "Navigating, not blaming" voice. Use for production pieces or throwaway prototypes/mocks/slides.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css, preview/, ui_kits/, assets/).

Key rules — keep these in mind always:
- 본문 폰트는 Pretendard Variable, 영문/숫자는 Inter, 코드는 Geist Mono.
- Primary는 마리골드(#F59E0B). 토스 블루(#3B82F6 계열)는 의도적으로 회피.
- Voice는 해요체. 부정형보다 긍정형, 책망보다 안내.
- 한 화면 한 핵심 액션. Primary 버튼은 한 화면에 하나만.
- 보더 우선, 섀도 최소. Radii는 8/12/16/999만 사용.
- 모션은 200ms ease-out 기본. bounce/spring 금지.
- 이모지 사용 금지. 아이콘은 Lucide outline.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view, importing `colors_and_type.css` for tokens. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, screen count, must-have features), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
