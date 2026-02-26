# AGENTS.md — Codex 작업 지침 (Repository-level)

이 문서는 Codex가 이 레포에서 작업할 때 **항상 따라야 하는 규칙/제약/작업 방식**입니다.

---

## 0) 최우선 목표

- “지금 배포 가능한 빈 포트폴리오”를 먼저 완성한다.
- 이후에는 `content/`에 Markdown만 추가하면 프로젝트/글이 자동 노출되게 한다.
- 기능은 **단순**해야 한다: 기본 웹 + 다크모드 + 버튼/카드 + 간단한 hover 애니메이션 수준.

---

## 1) 범위 (Must / Should / Won’t)

### Must (반드시)
- 다크모드 토글(라이트/다크/시스템)
- 반응형 레이아웃(모바일/데스크탑)
- 프로젝트 목록/상세 페이지
- 글 목록/상세 페이지 (초기에는 “아직 글 없음” empty state 포함)
- 카드/버튼/태그 컴포넌트, 간단한 hover 애니메이션
- SEO 기본(메타데이터, title/description, OG 최소)

### Should (가능하면)
- 홈에서 섹션 단위로 한 번에 스크롤 탐색
- 프로젝트 상태(진행중/완료) 뱃지
- “이력 쌓기”를 돕는 글 템플릿 안내 링크

### Won’t (하지 않음)
- 로그인/회원가입, 댓글, 좋아요, 관리자 CMS
- DB/서버(포트폴리오 사이트는 정적)
- 복잡한 애니메이션/3D/캔버스
- 과한 UI 라이브러리 도입(Shadcn, MUI 등)

---

## 2) 기술 결정을 고정 (변경 금지)

- Astro + TypeScript
- Tailwind CSS
- 다크모드: `astro-theme-toggle` 또는 동일 기능의 경량 구현 (클라이언트 최소)
- Markdown 콘텐츠: `content/` 폴더의 `.md` 파일을 빌드 타임에 읽어서 렌더링
  - frontmatter 파싱: `gray-matter`
  - Markdown 변환: `remark`(+GFM) + `remark-html`
  - Astro `content collections` 사용 가능 (필요 시)

> 새 의존성 추가는 “필요한 이유 + 대안 + 영향”을 먼저 설명하고 승인받는다.

---

## 3) 코딩 규칙

- “최소 코드, 최대 명확성”
- 공용 UI 컴포넌트는 `components/` 아래에 모은다.
- 페이지는 가능한 정적 렌더링을 기본으로 하고, 클라이언트 컴포넌트는 필요한 곳(테마 토글)만.
- Tailwind class는 길어지면 `cn()` 유틸로 정리(필요 시 `clsx`/`tailwind-merge` 고려).
- 접근성: 버튼/링크 role, focus ring, 키보드 탐색 가능해야 함.

---

## 4) 작업 방식 (Codex 실행 프로토콜)

매 작업 단위마다 아래 순서로 진행:

1) **Plan 먼저 제시**
   - 바뀌는 파일 목록
   - 구현 단계
   - 검증 커맨드(`npm run lint`, `npm run build` 등)

2) 사용자 승인 후 구현

3) **검증**
   - 최소 `npm run lint`
   - 가능하면 `npm run build`
   - 실패하면 원인/수정안 제시 후 재시도

4) PR/커밋 메시지는 “무엇/왜” 중심의 한 줄 요약

---

## 5) 콘텐츠 모델 준수 (중요)

- `docs/03-content-model.md`의 frontmatter 스키마를 준수한다.
- 프로젝트/글 목록은 날짜 기준 정렬(최신 우선).
- draft=true 글은 목록/라우팅에서 제외(빌드 시점).

---

## 6) 구현 완료 기준(DoD)

- `docs/07-definition-of-done.md`의 체크리스트를 모두 통과하면 “초기 버전 완료”로 본다.
