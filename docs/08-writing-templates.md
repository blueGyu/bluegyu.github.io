# 08. Writing Templates (글/프로젝트 템플릿)

## 1) 프로젝트 템플릿 (추천)

```md
---
title: "프로젝트 제목"
date: "2026-02-26"
status: "in-progress" # or shipped
summary: "한 줄 요약 (문제/해결/가치)"
role: "Backend / Full-stack"
stack: ["Node.js", "Express", "PostgreSQL"]
tags: ["API", "Automation"]
links:
  github: "https://github.com/<id>/<repo>"
  demo: ""
  post: "" # 관련 회고 글 링크(선택)
highlights:
  - "내가 한 일/성과 1"
  - "내가 한 일/성과 2"
lessons:
  - "배운 점 1"
  - "배운 점 2"
---

## 문제 정의
- 어떤 문제를 풀었는가?
- 사용자는 누구이며, 어떤 가치가 있었는가?

## 내가 맡은 역할
- 책임 범위(서버/DB/배포/협업 등)
- 의사결정(트레이드오프 포함)

## 구현 요약
- 아키텍처 다이어그램(선택)
- 핵심 흐름(요청→처리→저장→응답)

## 기술적 포인트
- API 설계
- DB 스키마/쿼리
- 테스트/배포/자동화

## 결과 & 다음 단계
- 성과(정량/정성)
- 남은 작업/개선 아이디어
```

---

## 2) 글 템플릿(회고/기술)

```md
---
title: "글 제목"
date: "2026-02-26"
summary: "요약 1~2문장"
tags: ["회고", "Node.js"]
draft: true
---

## 한 줄 결론
- 결론을 먼저 쓴다.

## 배경
- 왜 이 글을 쓰는가?

## 문제/상황
- 어떤 맥락에서 문제가 발생했는가?

## 시도한 해결
- 옵션 A/B 비교
- 선택 이유와 트레이드오프

## 배운 점
- 다음에 같은 상황이면 어떻게 할 것인가?
```
