inComms Markup check tool (with gulp)
===================

![gulp](http://www.onlinewerk.info/wp-content/uploads/2014/11/gulp.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![npm Node package manager tutorial](http://realityonweb.com/wp-content/uploads/2015/06/npm.logo_.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![npm Node package manager tutorial](https://newrelic.com/assets/pages/application_monitoring/logos/lang_nodejs.png)

마크업 결과에 대한 검수/검토를 자동화하여 코드품질(code quality) 향상에 그 목적이 있습니다.

- 해당 자동화 검수툴은 **프론트엔드 태스트 관리도구 gulp** 를 기반으로, `HTMLhint`, `CSSLint` 를 사용하여 코드 검수/검토를 자동화
- `HTMLhint`, `CSSLint`의 규칙(Rule)은 별도의 `.json` 파일로 Customizing


## 사전준비
----------------------
git, node.js, gulp 설치유무 확인 필요

``
확인 방법
``

| 구분  | 명령어  | 예시 결과 |
| :------------ |:---------------|:---------------|
| git      | $ git --version | git version 2.7.0.windows.1 |
| node.js  | $ node -v       | v4.4.5                      |
| gulp     | $ gulp -v       | [16:33:37] CLI version 1.2.2/[16:33:37] Local version 3.9.1         |


## 설치 및 사용방법
----------------------

### 환경세팅 및 설치
- git 설치 : https://git-scm.com/downloads
- node.js설치(x64) : http://nodejs.org/download/
- gulp 설치 : https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

### 사용방법
- 마크업 코드는 src 폴더 내부에 위치.
- git 저장소의 tool을 local pc에 download 및 clone.

```
$ git clone http://gitlab2.uit.nhncorp.com/ParkSangHun/gulp_task.git
```

- 사용 module 설치 (npm install)

```
$ npm install
```

- Report Thema 적용

> `reporter_thema/gulp-hint-web-reporter/lib/templates` 파일을 설치된 **node_modules/gulp-hint-web-reporter/lib/templates** 에 copy & paste

- 해당 툴(HTMLhint, CSSLint)의 실행은 `gulp`(default) 명령어 입력.

```
$ gulp
```

- logs (src 폴더와 동일 level) 폴더로 실행결과 report 파일일 생성/확인.
	- 실행결과 HTMLhint, CSSLint 각각의 결과 파일이 생성됨.
	- HTMLhint(htmlhint-log.html) , CSSLint(csslint-log.html)
	- 실행결과 `오류(error)`가 없는 파일은 log파일에 기록되지 않음(src 내 모든 파일에 이상이 없을 경우, 파일 미생성) 
	- `.gitignore` 내 logs 폴더 미설정(default)

### Check rule

* HTMLhint Rule https://github.com/yaniswang/HTMLHint/wiki/Rules

|division |Level    |Rule     |Reason   |example    |
|:--------|:--------|:--------|:--------|:----------|
| Standard(표준) | **`error`**    | tagname-lowercase           | 태그 이름은 소문자여야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Tagname-lowercase) |
|          | **`error`**   | attr-lowercase              | 속성 이름은 소문자여야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Attr-lowercase) |
|          | **`error`**    | attr-value-double-quotes    | 속성의 값은 따옴표로 감싸야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Attr-value-double-quotes) |
|          | warning | attr-value-not-empty        | 속성의 값은 비어있지 않고 설정해야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Attr-value-not-empty) |
|          | **`error`**    | attr-no-duplication         | 속성은 중복되지 않아야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/attr-no-duplication) |
|          | **`error`**    | doctype-first               | DOCTYPE 먼저 선언해야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Doctype-first) |
|          | **`error`**    | tag-pair                    | 태그는 쌍을 이루어야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Tag-pair) |
|          | warning | tag-self-close              | self tag 는 스스로 닫혀야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Tag-self-close) |
|          | **`error`**    | spec-char-escape            | 특수문자는 이스케이프(escape)해야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Spec-char-escape) |
|          | **`error`**    | id-unique                   | 아이디는 고유해야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Id-unique) |
|          | **`error`**    | src-not-empty               | img, script, link 등의 src 는 값이 있어야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Src-not-empty) |
| Performance(성능) | warning | head-script-disabled     | scirpt 는 태그는 head 태그안에 있지 않아야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Head-script-disabled) |
| Accessibility(접근성) | warning | img-alt-require     | img 태그의 alt 값은 있어야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/alt-require) |
| Specification(특성) | warning | doctype-html5     | Doctype 은 html5 로 해야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Doctype-html5) |
|                     | warning | id-class-value    | id 와 class 는 underline , dash , hump(헝가리안표기법) 등의 룰을 따라야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/Id-class-value) |
|                     | warning | style-disabled    | style 태그는 사용될 수 없다. link 태그 사용 | [Link](https://github.com/yaniswang/HTMLHint/wiki/Style-disabled) |
|                     | warning | space-tab-mixed-disabled | 공백과 탭은 라인 앞에 혼합해서 사용 할 수 없다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/space-tab-mixed-disabled) |
|                     | warning | id-class-ad-disabled | adblock software 때문에 막혀서 id 와 class 에는 ad 키워드를 사용할 수 없다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/id-class-ad-disabled) |
|                     | warning | href-abs-or-rel | href 는 절대경로나 상대경로여야 한다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/href-abs-or-rel) |
|                     | warning | attr-unsafe-chars | 속성값에는 불안정한 문자를 사용할 수 없다. | [Link](https://github.com/yaniswang/HTMLHint/wiki/attr-unsafe-chars) |

* CSSLint Rule https://github.com/CSSLint/csslint/wiki/

|division |Level    |Rule     |Reason   |example    |
|:--------|:--------|:--------|:--------|:----------|
|Possible Errors(발생가능 오류) | **`error`** | box-model                 | 박스모델 사이즈에 대한 주의 | [Link](https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size) |
|                               |             | display-property-grouping | display와 함께 쓸 수 없는 속성 | [Link](https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display) |
|                               |             | duplicate-properties      | 중복 속성 | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties) |
|                               |             | empty-rules               | 공백 규칙 | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules) |
|                               |             | known-properties          | 알려진 속성의 사용 | [Link](https://github.com/CSSLint/csslint/wiki/Require-use-of-known-properties) |
| Compatibility(호환성) | warning | adjoining-classes          | 다중 선택자(다중 클래스) 문제 - IE6 이하 | [Link](https://github.com/CSSLint/csslint/wiki/Rules) |
|                       |         | box-sizing                 | box sizing 속성의 사용 -  IE6, IE7 이하  | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-box-sizing)  |
|                       |         | compatible-vendor-prefixes | 벤더 프리픽스의 사용                     | [Link](https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix)  |
|                       |         | gradients                  | CSS gradient의 적용                      | [Link](https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions)  |
|                       |         | text-indent                | text-indent를 이용한 숨김 텍스트 관련 주의점 | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent)  |
|                       |         | vendor-prefix              | 벤더 프리픽스와 표준 속성의 입력             | [Link](https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix)  |
|                       |         | fallback-colors            | color 속성의 적용 - IE8 이하                 | [Link](https://github.com/CSSLint/csslint/wiki/Require-fallback-colors)  |
|                       |         | star-property-hack         | Star(*) hack의 사용 - IE8 이하               | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-star-hack)  |
|                       |         | underscore-property-hack   | _ hack의 사용 - only IE7                     | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-underscore-hack)  |
|                       |         | bulletproof-font-face      | 웹폰트 사용시 IE6~IE8 404 에러               | [Link](https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face)  |
| Performance(성능)     | warning | font-faces                 | 지나치게 많은 웹폰트의 사용 - 5개 이하       | [Link](https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-web-fonts)  |
|                       |         | import                     | @import의 사용                               | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-%40import)  |
|                       |         | regex-selectors            | 정규표현식과 유사한 선택자의 사용            | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-selectors-that-look-like-regular-expressions)  |
|                       |         | universal-selector         | 전체 선택자의 사용                           | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector)  |
|                       |         | unqualified-attributes     | 부적격 선택자의 사용                         | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors)  |
|                       |         | zero-units                 | 값이 0인 경우 단위 제거                      | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values)  |
|                       |         | overqualified-elements     | 필요이상의 한정자(Qualifier) 사용            | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements)  |
|                       |         | shorthand                  | 축약형 표현 사용                             | [Link](https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties)  |
|                       |         | duplicate-background-images| 배경 이미지 주소의 반복적인 입력             | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images)  |
| Maintainability & Duplication(유지&보수) | warning  | floats          | float 속성의 잦은 사용          | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats)  |
|                                          |          | font-sizes      | 지나치게 많은 font-size 선언    | [Link](https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations)  |
|                                          |          | ids             | 선택자에 ID 사용                | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors)  |
|                                          |          | important       | !important의 사용               | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-%21important)  |
| Accessibility(접근성)                    | warning  | outline-none    | outline:none의 사용             | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-outline%3Anone)  |
| OOCSS(객체지향CSS)                       | warning  | qualified-headings | 헤딩에 한정자 사용                   | [Link](https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings)  |
|                                          |          | unique-headings    | 헤딩에 관한 규칙은 한 번만 정의      | [Link](https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once)  |


## 참고자료 Ⅰ
----------------------
![gulp](https://raw.githubusercontent.com/BrowserSync/browsersync.github.io/master/public/img/logo-gh.png)
- https://github.com/browsersync/browser-sync
- https://www.browsersync.io/