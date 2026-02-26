# 03. Content Model (프로젝트/글 스키마)

이 사이트의 핵심은 “**코드 수정 없이 Markdown만 추가**해서 콘텐츠를 누적”하는 것입니다.

---

## 1) Project (content/projects/*.md)

### Frontmatter 필드(권장)
- `title` (string) : 카드/상세 제목
- `date` (YYYY-MM-DD) : 대표 날짜(완료일 또는 시작일)
- `status` ("in-progress" | "shipped") : 진행 상태
- `summary` (string) : 카드 한 줄 요약
- `role` (string) : 역할(예: Backend, Full-stack)
- `stack` (string[]) : 기술 스택
- `tags` (string[]) : 키워드(선택)
- `links` (object) : `github`, `demo`, `post` 등 (선택)
- `highlights` (string[]) : 핵심 성과/기여(3~5개)
- `lessons` (string[]) : 배운 점(3~5개)
- `draft` (boolean, optional) : true면 숨김

### 예시
```yaml
---
title: "Express + PostgreSQL 기반 API 서버 프로젝트"
date: "2025-05-01"
status: "shipped"
summary: "Express로 API를 구현하고 PostgreSQL 스키마/쿼리를 설계하며 FE와 협업 경험을 쌓은 프로젝트."
role: "Backend (Node.js)"
stack: ["Node.js", "Express", "PostgreSQL"]
tags: ["API", "DB", "Collaboration"]
links:
  github: "https://github.com/<your-id>/<repo>"
highlights:
  - "REST API 설계 및 구현"
  - "PostgreSQL 스키마 설계와 쿼리 최적화 경험"
  - "프론트엔드와 API 계약/커뮤니케이션"
lessons:
  - "요구사항 변경에 대응하는 라우팅/서비스 구조"
  - "DB 인덱스/쿼리 플랜의 중요성"
---
```

---

## 2) Post / Writing (content/posts/*.md)

### Frontmatter 필드(권장)
- `title` (string)
- `date` (YYYY-MM-DD)
- `summary` (string)
- `tags` (string[])
- `draft` (boolean, optional)

### 예시
```yaml
---
title: "프로젝트에서 배운 점: API 계약과 커뮤니케이션"
date: "2026-03-10"
summary: "프론트엔드와 협업하며 API 스펙을 맞추는 과정에서 배운 실전 팁 정리."
tags: ["협업", "API", "회고"]
draft: true
---
```

---

## 3) 렌더링 규칙
- 목록은 `date` 최신순 정렬
- `draft: true`는 목록/상세 라우팅에서 제외
- Markdown은 GFM(체크박스/테이블) 지원

---

## 4) 파일명 규칙
- 영문 소문자 + 하이픈 권장: `express-postgres-api.md`
- slug는 파일명에서 자동 파생
