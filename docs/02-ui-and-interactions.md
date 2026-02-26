# 02. UI & Interactions (디자인/인터랙션 가이드)

## 디자인 원칙
- 읽기 쉬운 타이포 + 충분한 여백
- “정보를 빠르게 훑을 수 있는” 카드 중심 레이아웃
- 과한 장식/애니메이션 금지 (미세한 hover 정도만)

## 다크모드
- 라이트/다크/시스템 모드 지원
- 테마 전환 시 깜빡임 최소화

## 컴포넌트 목록
### Button
- variants: primary / secondary / ghost
- sizes: sm / md
- hover: 살짝 translate(-1px) + shadow 강화

### Card
- 프로젝트/글 목록에 공용 사용
- hover: border/outline 강조 + 살짝 lift

### Tag / Badge
- status: in-progress / shipped
- tech tags: Node.js, Express, PostgreSQL 등

### SectionHeader
- 섹션 제목 + 짧은 설명 + “more” 링크

### ThemeToggle
- 아이콘 + 접근성(aria-label), 키보드 포커스 가능

## 반응형 레이아웃
- Mobile: 단일 컬럼
- Tablet: 2 컬럼 그리드
- Desktop: 3 컬럼 그리드(프로젝트), 글은 2 컬럼 가능

## 애니메이션 룰
- transition: 150~250ms
- motion-reduce 고려 (`prefers-reduced-motion`)

## 접근성(필수)
- 모든 버튼/링크는 focus-visible 스타일 제공
- 색 대비(라이트/다크 모두)
