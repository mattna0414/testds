# @common/design-system

- 공통 디자인 시스템 (shadcn/ui 기반)

---

## 📁 프로젝트 구조

```
company-design-system/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx          # 컴포넌트
│   │   │   ├── Button.stories.tsx  # 스토리북
│   │   │   └── index.ts            # export
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Card/
│   │   └── Avatar/
│   ├── styles/
│   │   └── globals.css             # CSS 변수 (테마)
│   ├── lib/
│   │   └── utils.ts                # cn() 유틸
│   └── index.ts                    # 전체 export
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── .github/
    └── workflows/
        ├── publish.yml             # npm 자동 배포
        └── storybook.yml           # 스토리북 자동 배포
```

---

## 🚀 처음 세팅하는 법 (디자인 시스템 담당자)

### 1단계 - GitHub Repository 생성

```
GitHub에서 새 repo 생성: company-design-system
Organization repo로 만들면 @your-company/design-system 패키지명 사용 가능
```

### 2단계 - 로컬에서 초기 세팅

```bash
# repo clone
git clone https://github.com/your-company/design-system.git
cd design-system

# 의존성 설치
npm install

# 스토리북 실행 확인
npm run storybook
# http://localhost:6006 에서 확인
```

### 3단계 - package.json에서 회사명 변경

```json
{
  "name": "@your-company/design-system",  ← GitHub 조직명으로 변경
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 4단계 - GitHub Pages 활성화 (스토리북 배포용)

```
GitHub repo → Settings → Pages
Source: Deploy from a branch
Branch: gh-pages / root
```

### 5단계 - 첫 배포

```bash
# 버전 태그 붙이고 push → GitHub Actions가 자동으로 npm publish
git add .
git commit -m "feat: 초기 컴포넌트 세팅"
git push origin main

git tag v1.0.0
git push origin v1.0.0
# → GitHub Actions가 자동으로 npm publish 실행!
```

---

## 📦 다른 프로젝트에서 설치하는 법

### 1단계 - .npmrc 파일 생성 (프로젝트 루트에)

```
# .npmrc
@your-company:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> **GitHub Token 발급 방법**
> GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
> 권한: `read:packages` 만 체크하면 됨

### 2단계 - 설치

```bash
npm install @your-company/design-system
```

### 3단계 - CSS 변수 추가 (프로젝트의 globals.css 또는 index.css에)

```css
/* 프로젝트의 globals.css 또는 index.css */
@import "@your-company/design-system/dist/styles.css";

/* 공통 테마: --primary 하나만 바꾸면 primary 계열 스타일이 전체 반영됨 */
:root {
  --primary: 221 83% 53%;
}
```

예시:

```css
/* 브랜드 블루 */
:root { --primary: 221 83% 53%; }

/* 브랜드 그린 */
:root { --primary: 160 84% 39%; }
```

### 4단계 - 사용

```tsx
import { Button, Input, Badge, Card } from "@your-company/design-system"

export default function MyPage() {
  return (
    <div>
      <Button variant="default">클릭</Button>
      <Input label="이메일" placeholder="example@company.com" />
      <Badge variant="success">완료</Badge>
    </div>
  )
}
```

---

## 🔄 버전 업데이트 흐름

```bash
# 디자인 시스템 담당자가
npm version patch   # 1.0.0 → 1.0.1 (버그 수정)
npm version minor   # 1.0.0 → 1.1.0 (기능 추가)
npm version major   # 1.0.0 → 2.0.0 (Breaking change)

git push origin main --tags
# → GitHub Actions 자동 실행 → npm publish
```

```bash
# 각 프로젝트에서 업데이트 받으려면
npm update @your-company/design-system
```

---

## 🧑‍💻 로컬 개발

```bash
npm run storybook      # 스토리북 실행 (http://localhost:6006)
npm run build          # 빌드
npm run build-storybook # 스토리북 빌드
```

---

## 📋 컴포넌트 목록

| 컴포넌트 | 설명 |
|---------|------|
| `Button` | variant(6종), size(4종), isLoading 지원 |
| `Input` | label, error, hint, leftIcon, rightIcon 지원 |
| `Badge` | variant(6종) 지원 |
| `Card` | CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| `Avatar` | src, fallback, size(4종) 지원 |
