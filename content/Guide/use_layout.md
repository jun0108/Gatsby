---
title: "📚 레이아웃 수정 방법"
date: 2023-10-05 08:47:13
author: "jun0"
subtitle: "레이아웃 수정 방법을 알아보아요."
category: "Guide"
draft: false
---

### 1. pagination 수정하기

`src/constants/page.js` 파일에서 pagination 관련 정보를 수정 할 수 있습니다.

```
export const PAGE = {
  SIBLINGCOUNT: 1,
  PAGESIZE: 3,
};
```

### 2. 전역 스타일 파일 수정하기

`src/styles/` 폴더 내부 `scss` 파일로 전역 스타일을 수정/추가 할 수 있습니다.

- `common.scss` : 전역으로 사용할 클래스가 들어가는 파일입니다.

- `variables.scss` : 전역으로 사용할 변수가 들어가는 파일입니다.

- `mixins.scss` : 전역으로 사용할 mixin 패턴이 들어가는 파일입니다.

### 3. 컴포넌트 스타일 파일 수정하기

`src/` 폴더 내부 각 `scss` 파일로 컴포넌트 별 스타일을 수정/추가 할 수 있습니다.

### 4. `navbar`에 카테고리 추가하기

`/content` 폴더 내부에 카테고리 명으로 새로운 폴더를 만들면 자동 생성 됩니다.

> 카테고리 폴더 내부에 폴더를 추가하면 하위 depth 카테고리를 만들 수 있습니다.

```
content
├── Guide => 카테고리 명 폴더
  └── index.md => Guide 카테고리 내부 문서명
  └── child depth => 하위 depth 카테고리 폴더
    └── index.md
└── 새로 추가할 카테고리 폴더명
```
