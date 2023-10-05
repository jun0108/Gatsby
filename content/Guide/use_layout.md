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

### 2. layout 사이즈 조절하기

레이아웃 요소(`footer`/`header` 높이)는 `src/styles/_size.scss` 파일의 변수로 수정 가능합니다.

```
$footer-height: 60px;
$navbar-width-bigScreen: 240px;
$navbar-height-smallScreen: 60px;
$innerContainer-width: 150px;
...
```
