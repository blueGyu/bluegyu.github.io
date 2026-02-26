# 04. Tech Architecture (구현 설계)

## 목표
- 빌드 시점에 `content/`를 읽어 정적 페이지로 생성
- 런타임 서버/DB 의존성 없이 배포 가능

## 데이터 흐름
1. `content/projects/*.md` / `content/posts/*.md` 파일을 빌드 시점에 읽는다.
2. frontmatter를 파싱하여 메타데이터(제목/요약/태그 등)를 추출한다.
3. 본문 Markdown을 HTML로 변환한다.
4. 리스트 페이지는 메타데이터만 사용하여 카드 목록을 렌더링한다.
5. 상세 페이지는 변환된 HTML을 렌더링한다.

## 파일 구조(권장)
- `app/` : Next.js 라우트
  - `page.tsx`(home)
  - `projects/page.tsx`
  - `projects/[slug]/page.tsx`
  - `writing/page.tsx`
  - `writing/[slug]/page.tsx`
- `components/` : UI 컴포넌트(Button/Card/Tag/ThemeToggle 등)
- `lib/content/` : markdown 로더(parse/list/get)
- `content/` : markdown 데이터
- `public/` : og 이미지, 파비콘 등

## 다크모드
- `ThemeProvider`를 `app/layout.tsx`에 적용
- 토글은 최소한의 클라이언트 컴포넌트로 구현

## SEO
- Next Metadata API로 페이지별 title/description 설정
- 프로젝트/글 상세는 frontmatter 기반으로 메타 설정
- OG는 기본값 + 페이지별 override(가능하면)

## 품질 게이트(최소)
- `npm run lint` 통과
- `npm run build` 통과
