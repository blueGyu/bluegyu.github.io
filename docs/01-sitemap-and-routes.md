# 01. Sitemap & Routes (정보 구조)

## 내비게이션(상단)
- Home
- Projects
- Writing
- About (선택: 홈 섹션으로 대체 가능)
- GitHub / Email (아이콘 링크)

## 라우트(권장)
- `/` : 홈 (한 페이지로 스크롤 섹션 구성)
- `/projects` : 프로젝트 목록
- `/projects/[slug]` : 프로젝트 상세(Markdown)
- `/writing` : 글 목록 (없으면 Empty state)
- `/writing/[slug]` : 글 상세(Markdown)
- `/about` : 자기소개/스킬/타임라인 (선택)
- `/404` : 기본 404

## 홈 섹션(권장 구성)
1. Hero: 이름/포지션/한 줄 소개 + CTA 버튼(깃허브/연락)
2. Highlights: 강점 3~5개(서버 구현/DB/협업 등)
3. Projects: 프로젝트 카드 그리드
4. Writing: 최근 글(최대 3개) + “전체보기” 링크 + Empty state
5. Contact: 이메일/깃허브/링크드인/이력서(있으면)
6. Footer: 저작권 + 간단한 링크

## URL 정책
- slug는 파일명 기반: `content/projects/<slug>.md` → `/projects/<slug>`
- 날짜/상태/태그는 frontmatter에서 관리(초기엔 태그 페이지는 만들지 않음)
