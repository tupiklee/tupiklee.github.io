# 의상 디자이너 포트폴리오 (정적 사이트)

Adri Fluid Dark 스타일의 단일 페이지 포트폴리오입니다. HTML, CSS, JavaScript만 사용합니다.

## 로컬에서 보기

`file://`로 열면 폰트·경로 이슈가 날 수 있으므로 간단한 정적 서버를 사용하세요.

```bash
npx --yes serve .
```

브라우저에서 표시된 주소(보통 `http://localhost:3000`)로 접속합니다.

VS Code **Live Server** 확장을 써도 됩니다.

## 배포 전 교체 목록

[`자기소개서.md`](./자기소개서.md) 교체 목록과 맞춰 `index.html`을 수정합니다.

- [x] 성명 — **제시카 리**
- [ ] `[이메일]`, `[휴대전화]` (`index.html` 연락·폼·푸터)
- [ ] `○○%`, `○○건`, `○○브랜드` (성과·프로젝트 문구)
- [ ] 포트폴리오 링크 (`#contact` 섹션)
- [ ] `assets/images/` — 현재 Unsplash 스톡(미리보기). 본인 사진·룩북으로 교체 권장 ([출처](./assets/images/ATTRIBUTION.md))

## GitHub Pages 배포

1. GitHub에 저장소를 만들고 이 폴더 내용을 `main` 브랜치 루트에 push합니다. (`index.html`이 루트에 있어야 합니다.)
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 **Deploy from a branch**로 설정합니다.
3. Branch: **main**, Folder: **/ (root)** 를 선택하고 Save합니다.
4. 1–2분 후 사이트에서 확인합니다.

**이 프로젝트:** [https://tupiklee.github.io/](https://tupiklee.github.io/) · 저장소 [tupiklee/tupiklee.github.io](https://github.com/tupiklee/tupiklee.github.io)

루트에 `.nojekyll` 파일이 있어 Jekyll 처리를 건너뜁니다.

## 파일 구조

```
index.html
css/styles.css
js/main.js
assets/images/
```
