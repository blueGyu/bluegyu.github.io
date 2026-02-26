# 05. Codex Workflow (개발 운영 가이드)

## 핵심 원칙
- Codex에게 “큰 작업”을 한 번에 맡기지 않고, **마일스톤/태스크 단위**로 쪼개서 위임한다.
- 매 작업은 “계획 → 구현 → 검증” 루틴으로 반복한다.

## 권장 세션 흐름
1) Codex에게 레포/문서 읽게 하기  
- "AGENTS.md와 docs를 읽고, Milestone 1을 시작하라"

2) 작업 단위를 명확히 요청  
- “Next.js + Tailwind 초기 스캐폴딩 생성”
- “다크모드 토글 구현”
- “Markdown loader 구현 및 posts/projects 라우팅 연결”

3) 검증 명령 실행을 요청  
- `npm run lint`
- `npm run build`
- (가능하면) `npm run dev`로 동작 확인

## Codex 프롬프트 템플릿

### A) 스캐폴딩
- “docs/06-task-breakdown.md의 Milestone 1만 수행해줘.
  Next.js(App Router)+TS+Tailwind로 초기화하고,
  최소 라우트(/, /projects, /writing)만 연결해.
  작업 전 plan, 작업 후 lint/build 결과를 포함해줘.”

### B) 콘텐츠 파이프라인
- “content/ 아래 markdown을 읽어 리스트/상세를 SSG로 렌더링해줘.
  스키마는 docs/03-content-model.md를 그대로 준수해.
  draft=true는 숨겨야 해.”

### C) UI 컴포넌트
- “Button/Card/Tag/SectionHeader/ThemeToggle 컴포넌트를 만들고
  docs/02-ui-and-interactions.md의 hover 규칙을 반영해줘.”

## 장애/실패 시 요청 방식
- “실패 로그를 요약하고, 수정 계획을 2~3가지 제시한 다음 가장 안전한 수정부터 적용해줘.”
