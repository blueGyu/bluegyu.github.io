# 10. Deployment (배포)

## 권장: Vercel
- Next.js 정적/SSR 모두 지원
- GitHub 연결 후 자동 배포

### 체크리스트
- 빌드 커맨드: `npm run build`
- output/라우팅이 정상인지 확인
- OG/파비콘 확인

## 대안: 정적 Export + GitHub Pages
- 사이트가 완전 정적(SSG)일 때 가능
- Next.js 설정에 따라 export 지원 여부가 달라질 수 있으므로,
  “정적만 유지”하는 설계가 필요

## 배포 전 확인
- 모바일/데스크탑 레이아웃 확인
- 다크모드 유지/전환 확인
- posts가 0개일 때 Empty state 확인
