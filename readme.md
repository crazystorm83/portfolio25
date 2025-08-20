# Packages Test Environment

packages/\* 전체를 테스트할 수 있는 실시간 테스트 환경입니다.

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
npm install
```

### 2. 테스트 실행

#### 모든 패키지 테스트 실행

```bash
npm test
```

#### 패키지별 테스트만 실행

```bash
npm run test:packages
```

#### 실시간 감시 모드

```bash
npm run test:watch
```

#### 패키지별 감시 모드

```bash
npm run test:packages:watch
```

#### 커버리지 포함 테스트

```bash
npm run test:coverage
```

#### 상세 모드

```bash
npm run test:ui
```

### 3. 웹 인터페이스 실행

```bash
# test-runner.html 파일을 브라우저에서 열기
open test-runner.html
```

## 📁 테스트 구조

```
├── test-setup.ts                    # 전역 테스트 환경 설정
├── test-utils.ts                   # 패키지별 테스트 유틸리티
├── test-runner.html                # 웹 인터페이스
├── jest.config.js                  # Jest 설정
└── packages/
    ├── framework/
    │   └── src/
    │       └── __test__/
    │           ├── abstracts/
    │           │   └── identifier/
    │           │       └── command/
    │           │           └── CommandIdentifier.test.ts
    │           └── integration/
    │               └── framework.test.ts
    └── [other-packages]/
        └── src/
            └── __test__/
                └── [test-files]
```

## 🛠️ 테스트 유틸리티

### PackageTestReporter

패키지별 테스트 결과를 관리하는 클래스입니다.

```typescript
import { PackageTestReporter } from "./test-utils";

const reporter = PackageTestReporter.getInstance();
reporter.addPackageResult(
  "framework",
  "src/abstracts",
  "테스트 이름",
  "PASS",
  undefined,
  5.2
);
reporter.printPackageResults();
```

### measurePerformance

성능을 측정하고 10ms 이상 실행되는 테스트에 대해 경고를 표시합니다.

```typescript
import { measurePerformance } from "./test-utils";

await measurePerformance(
  "framework",
  "src/abstracts",
  "테스트 이름",
  async () => {
    // 테스트 로직
  }
);
```

### describePackage

패키지별 테스트 그룹을 생성합니다.

```typescript
import { describePackage } from "./test-utils";

describePackage("framework", "src/abstracts/identifier/command", () => {
  // 테스트 케이스들
});
```

### testCase

개별 테스트 케이스를 생성합니다.

```typescript
import { testCase } from "./test-utils";

testCase("framework", "src/abstracts", "테스트 설명", async () => {
  // 테스트 로직
});
```

## 📊 테스트 결과 확인

### 콘솔 출력

테스트 실행 시 다음과 같은 정보를 확인할 수 있습니다:

```
📦 패키지별 테스트 결과 요약:
================================================================================

📦 framework (4/5 성공)
------------------------------------------------------------
  📁 src/abstracts/identifier/command (3/3 성공)
    ✅ ID 설정 및 조회 테스트 (2.5ms)
    ✅ 생성자에서 ID 초기화 테스트 (1.8ms)
    ✅ 빈 ID 처리 테스트 (3.2ms)
  📁 src/integration (1/2 성공)
    ✅ 프레임워크 모듈 로드 테스트 (15.5ms)
    ❌ 예외 처리 시스템 테스트 (8.2ms)
      └─ Exception 클래스를 찾을 수 없습니다
  📊 평균 실행 시간: 6.24ms

================================================================================
📊 전체 통계: 총 5개 테스트 | 성공: 4 | 실패: 1
```

### 웹 인터페이스

`test-runner.html` 파일을 브라우저에서 열어 실시간으로 패키지별 테스트 결과를 확인할 수 있습니다.

## 🔧 설정 파일

### jest.config.js

Jest 설정 파일로 다음을 포함합니다:

- packages/\* 전체 테스트 지원
- TypeScript 지원
- 패키지별 프로젝트 설정
- 커버리지 설정
- 타임아웃 설정

### package.json 스크립트

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ui": "jest --watch --verbose",
    "test:packages": "jest --testPathPattern=packages",
    "test:packages:watch": "jest --testPathPattern=packages --watch"
  }
}
```

## 📈 성능 모니터링

테스트 실행 시 10ms 이상 걸리는 테스트는 자동으로 경고가 표시됩니다:

```
⚠️  framework/src/integration/프레임워크 모듈 로드 테스트: 15.5ms (성능 개선 필요)
```

## 🧪 테스트 작성 가이드

### 1. 테스트 파일 명명 규칙

- `*.test.ts` 또는 `*.spec.ts`
- `__test__` 폴더 내에 위치
- 패키지 구조를 반영한 폴더 경로

### 2. 테스트 구조

```typescript
import { beforeEach, afterEach, expect } from "@jest/globals";
import {
  PackageTestReporter,
  describePackage,
  measurePerformance,
  testCase,
} from "../../../../../test-utils";

describePackage("framework", "src/abstracts/identifier/command", () => {
  beforeEach(() => {
    // 테스트 전 설정
  });

  afterEach(() => {
    // 테스트 후 정리
  });

  testCase(
    "framework",
    "src/abstracts/identifier/command",
    "테스트 설명",
    async () => {
      await measurePerformance(
        "framework",
        "src/abstracts/identifier/command",
        "성능 측정",
        async () => {
          // 테스트 로직
          expect(result).toBe(expected);
        }
      );
    }
  );
});
```

### 3. 새로운 패키지 추가

새로운 패키지를 추가할 때는 `jest.config.js`의 projects 배열에 추가:

```javascript
projects: [
  {
    displayName: "framework",
    testMatch: ["<rootDir>/packages/framework/**/*.test.ts"],
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  },
  {
    displayName: "new-package",
    testMatch: ["<rootDir>/packages/new-package/**/*.test.ts"],
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  },
];
```

## 🚨 문제 해결

### 테스트가 실행되지 않는 경우

1. 의존성이 설치되었는지 확인: `npm install`
2. TypeScript 컴파일 오류가 있는지 확인
3. Jest 설정 파일이 올바른지 확인
4. 패키지 경로가 올바른지 확인

### 성능 경고가 많이 나오는 경우

1. 테스트 로직을 최적화
2. 불필요한 비동기 작업 제거
3. 모킹을 사용하여 외부 의존성 제거

### 웹 인터페이스가 작동하지 않는 경우

1. 브라우저에서 JavaScript가 활성화되어 있는지 확인
2. 파일 경로가 올바른지 확인
3. 로컬 서버를 사용하여 실행

## 📝 추가 정보

- **Jest 공식 문서**: https://jestjs.io/
- **TypeScript 테스트 가이드**: https://jestjs.io/docs/getting-started#using-typescript
- **성능 최적화 팁**: https://jestjs.io/docs/troubleshooting#tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server
