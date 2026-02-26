# 06. Task Breakdown (WBS / 마일스톤)

아래는 Codex에게 위임하기 좋은 단위로 쪼갠 작업 목록입니다.
각 Milestone은 “완료 조건(acceptance)”를 만족해야 다음으로 넘어갑니다.

---

## Milestone 0 — 문서/규칙 세팅 (현재 완료)
- [x] AGENTS.md
- [x] docs/ 작성
- [x] content/ 템플릿 작성
- [x] .codex/config.toml 작성

**Acceptance**
- Codex가 이 레포에서 작업할 때 규칙/스키마를 읽고 준수할 수 있다.

---

## Milestone 1 — 프로젝트 스캐폴딩
- Next.js(App Router) + TypeScript 초기화
- Tailwind CSS 적용
- ESLint(기본) + Prettier(선택) 설정
- 기본 레이아웃(app/layout.tsx) + Header/Footer
- 라우트: `/`, `/projects`, `/writing` (내용은 placeholder)

**Acceptance**
- `npm run dev`로 3개 라우트가 모두 정상 표시
- `npm run lint`, `npm run build` 통과

---

## Milestone 2 — 다크모드
- `next-themes`로 ThemeProvider 적용
- ThemeToggle 컴포넌트 추가 (라이트/다크/시스템)
- 테마 전환 시 깜빡임 최소화

**Acceptance**
- 페이지 새로고침 후에도 테마 유지
- 키보드로 토글 접근 가능(aria-label 포함)

---

## Milestone 3 — 콘텐츠 로더(Projects)
- `content/projects/*.md` 로딩
- frontmatter 파싱 + 본문 HTML 변환
- `/projects` 리스트(카드) + `/projects/[slug]` 상세 렌더링
- draft=true 제외
- 빈 상태 UI(프로젝트 0개일 때)

**Acceptance**
- 샘플 프로젝트 2개가 목록/상세에 표시
- 잘못된 slug는 404 처리

---

## Milestone 4 — 콘텐츠 로더(Writing)
- `content/posts/*.md` 로딩
- `/writing` 리스트 + `/writing/[slug]` 상세
- draft=true 제외
- 글 0개일 때 Empty state UI

**Acceptance**
- posts가 없을 때도 UI가 자연스럽다.
- posts를 추가하면 자동으로 목록/상세가 생성된다.

---

## Milestone 5 — 홈 페이지 구성(포트폴리오 완성 형태)
- Hero/Highlights/Projects/Writing/Contact 섹션 구성
- 프로젝트/글 일부 미리보기
- CTA 버튼(GitHub/Email/Resume placeholder)

**Acceptance**
- 홈에서 “누구인지/무슨 프로젝트 했는지/연락”이 1~2분 내 파악 가능

---

## Milestone 6 — 마감 품질(SEO/접근성/디테일)
- metadata 정리(기본 title/description, OG)
- 404 페이지
- focus-visible, 대비 확인
- 애니메이션 motion-reduce 고려

**Acceptance**
- Lighthouse 기본 점수 90+ (권장)
- 모바일에서 레이아웃 깨짐 없음

---

## Milestone 7 — 배포
- Vercel(권장) 또는 다른 정적 호스팅
- 배포 후 도메인/OG 확인

**Acceptance**
- 실제 URL에서 정상 접근
- 다크모드/라우팅/콘텐츠 로딩 정상
