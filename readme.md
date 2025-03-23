# TypeScript Framework

TypeScript 기반의 프레임워크 프로젝트입니다.

## 프로젝트 구조

```
src/
├── framework/           # 프레임워크 코어
│   ├── abstracts/      # 추상 클래스
│   ├── attrs/         # 속성 관련
│   ├── computedvalues/# 계산된 값
│   ├── datatypes/     # 데이터 타입
│   ├── decoarator/    # 데코레이터
│   ├── enums/         # 열거형
│   ├── implements/    # 구현체
│   ├── interfaces/    # 인터페이스
│   ├── security/      # 보안 관련
│   └── validator/     # 검증 관련
├── application/       # 애플리케이션 로직
│   ├── abstracts/     # 추상 클래스
│   ├── entity/       # 엔티티
│   ├── implements/   # 구현체
│   ├── interfacies/  # 인터페이스
│   └── policy/       # 정책
└── web-tool-kit/     # UI 컴포넌트
    ├── component/    # 컴포넌트
    └── interfaces/   # 인터페이스
```

## 주요 기능

### 1. 프레임워크 코어

-   추상화된 데이터 모델
-   이벤트 시스템 (Observer 패턴)
-   컬렉션 관리 (List, Tree)
-   HTML 엔티티 처리
-   보안 및 검증 기능
-   Executor 시스템

### 2. 애플리케이션

-   웹 애플리케이션 설정
-   HTML 렌더링
-   메뉴 및 페이지 관리
-   정책 기반 실행

### 3. UI 컴포넌트

-   레이아웃 컴포넌트
-   컴팩트 컴포넌트
-   스타일 및 클래스 빌더

## 기술 스택

-   TypeScript
-   React (UI 컴포넌트)
-   데코레이터 패턴
-   옵저버 패턴
-   제네릭 프로그래밍

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## Path Alias

프로젝트는 다음과 같은 Path Alias를 사용합니다:

-   `@framework/*`: 프레임워크 관련 모듈
-   `@application/*`: 애플리케이션 관련 모듈
-   `@web-tool-kit/*`: UI 컴포넌트 관련 모듈

## 사용 예제

### 1. Executor 시스템 사용

```typescript
import { Executor } from '@framework/executor/Executor';
import { EN_EXECUTOR_TYPE } from '@framework/enums';

// 실행기 초기화
const executor = new Executor();

// 사용자 액션 실행
executor.dispatch({
    prefix: EN_MODULE_PREFIX.CORE,
    micromodulename: 'userAction',
    major_version: EN_MODULE_MAJOR_VERSION.V1,
    minor_version: '0',
    patch_version: '1',
    postfix: EN_MODULE_POSTFIX.UserAction,
});

// API 액션 실행
executor.dispatch({
    prefix: EN_MODULE_PREFIX.CORE,
    micromodulename: 'apiAction',
    major_version: EN_MODULE_MAJOR_VERSION.V1,
    minor_version: '0',
    patch_version: '1',
    postfix: EN_MODULE_POSTFIX.ApiAction,
});

// 워크플로우 실행
executor.dispatch({
    prefix: EN_MODULE_PREFIX.CORE,
    micromodulename: 'workflow',
    major_version: EN_MODULE_MAJOR_VERSION.V1,
    minor_version: '0',
    patch_version: '1',
    postfix: EN_MODULE_POSTFIX.Workflow,
});
```

### 2. 컬렉션 사용

```typescript
import { List } from '@framework/implements/collection/List';
import { Tree } from '@framework/implements/collection/Tree';

// List 사용
const list = new List<string>();
list.add({ data: 'item1' });
list.add({ data: 'item2' });

// Tree 사용
const tree = new Tree<string>();
tree.add({ data: 'root' });
tree.add({ data: 'child1', parent: 'root' });
```

### 3. 이벤트 시스템 사용

```typescript
import { Subject, Observer } from '@framework/implements/events/Observer';

// 옵저버 생성
const observer = new Observer();
observer.update = (data) => console.log('데이터 수신:', data);

// 주제 생성 및 옵저버 등록
const subject = new Subject();
subject.attach(observer);

// 이벤트 발생
subject.notify({ message: 'Hello!' });
```

### 4. UI 컴포넌트 사용

```typescript
import { Div, Table, Tr } from '@web-tool-kit/component/layout';
import { Input, Select, Checkbox } from '@web-tool-kit/component/compact';

// 레이아웃 컴포넌트
const layout = (
    <Div>
        <Table>
            <Tr>
                <td>컨텐츠</td>
            </Tr>
        </Table>
    </Div>
);

// 컴팩트 컴포넌트
const form = (
    <Div>
        <Input type="text" />
        <Select>
            <option>옵션 1</option>
            <option>옵션 2</option>
        </Select>
        <Checkbox />
    </Div>
);
```

## Executor 시스템

Executor 시스템은 다양한 유형의 작업을 처리하기 위한 실행 컨텍스트를 제공합니다.

### 주요 Executor 유형

1. **UserActionExecutor**

    - 사용자 인터랙션 처리
    - 버튼 클릭, 폼 제출 등의 이벤트 처리

2. **UIActionExecutor**

    - UI 관련 작업 처리
    - 컴포넌트 렌더링, 상태 업데이트

3. **ApiActionExecutor**

    - API 호출 처리
    - HTTP 요청/응답 처리

4. **CommandExecutor**

    - 명령 패턴 구현
    - 작업의 캡슐화 및 실행

5. **TaskExecutor**

    - 일반 작업 실행
    - 비동기 작업 처리

6. **WorkflowExecutor**

    - 워크플로우 처리
    - 복잡한 작업 흐름 관리

7. **InterpreterExecutor**

    - 스크립트 해석
    - 동적 코드 실행

8. **PageExecutor**
    - 페이지 처리
    - 라우팅 및 페이지 전환

### Executor 사용 예시

```typescript
// UI 액션 실행기
const uiActionExecutor = new UIActionExecutor();
uiActionExecutor.execute({
    type: 'render_component',
    data: {
        componentId: 'userList',
        props: { users: userData },
    },
});

// API 액션 실행기
const apiActionExecutor = new ApiActionExecutor();
apiActionExecutor.execute({
    type: 'get_data',
    data: { endpoint: '/api/users' },
});

// 워크플로우 실행기
const workflowExecutor = new WorkflowExecutor();
workflowExecutor.execute({
    type: 'process_order',
    data: { orderId: '123' },
});
```

## Interpreter 시스템

Interpreter 시스템은 동적 스크립트 실행과 코드 해석을 위한 기능을 제공합니다.

### 주요 기능

1. **스크립트 해석**

    - JavaScript/TypeScript 코드의 동적 실행
    - 안전한 컨텍스트에서의 코드 실행
    - 스코프 관리 및 격리

2. **컨텍스트 관리**

    - 전역 및 로컬 변수 관리
    - 함수 및 객체 접근 제어
    - 보안 정책 적용

3. **에러 처리**
    - 구문 오류 감지
    - 런타임 에러 처리
    - 스택 트레이스 제공

### 보안 기능

1. **실행 제한**

    - 허용된 API만 접근 가능
    - 시스템 리소스 접근 제한
    - 네트워크 요청 제어

2. **스코프 격리**

    - 전역 객체 격리
    - 모듈 시스템 격리
    - 메모리 사용량 제한

3. **에러 처리**
    - 타임아웃 처리
    - 메모리 누수 방지
    - 예외 상황 복구

### 사용 사례

1. **동적 UI 생성**

```typescript
const uiScript = `
    const component = {
        render() {
            return {
                type: 'div',
                props: {
                    className: 'dynamic-component',
                    children: '동적으로 생성된 컴포넌트'
                }
            };
        }
    };
    return component;
`;

const result = interpreter.execute(uiScript);
```

2. **데이터 변환**

```typescript
const transformScript = `
    function transform(data) {
        return data.map(item => ({
            id: item.id,
            name: item.name.toUpperCase(),
            value: item.value * 2
        }));
    }
    return transform(inputData);
`;

const transformedData = interpreter.executeWithContext(transformScript, {
    variables: {
        inputData: [...]
    }
});
```

3. **비즈니스 로직 실행**

```typescript
const businessLogic = `
    function calculateDiscount(price, userType) {
        switch(userType) {
            case 'VIP':
                return price * 0.8;
            case 'REGULAR':
                return price * 0.9;
            default:
                return price;
        }
    }
    return calculateDiscount(100, 'VIP');
`;

const discount = interpreter.execute(businessLogic);
```

## 개발 가이드라인

### 코드 품질

-   모든 코드는 가독성을 최우선으로 작성
-   중복 코드는 최소화하고 재사용 가능한 함수나 클래스로 분리
-   모든 함수와 메서드는 단일 책임 원칙을 준수
-   변수와 함수 이름은 명확하고 의미있게 작성
-   하드코딩된 값은 상수로 분리

### 코드 스타일

-   들여쓰기는 4칸 공백 사용
-   세미콜론(;)은 필수
-   중괄호는 같은 줄에 배치
-   한 줄의 최대 길이는 100자
-   파일 끝에는 빈 줄 하나 포함

### 네이밍 컨벤션

-   클래스: PascalCase (예: `UserService`)
-   인터페이스: PascalCase, 'I' 접두사 사용 (예: `IUser`)
-   변수/함수: camelCase (예: `getUserData`)
-   상수: UPPER_SNAKE_CASE (예: `MAX_RETRY_COUNT`)
-   타입: PascalCase (예: `UserType`)
-   함수 인자: lower_snake_case (예: `user_id`, `first_name`)

### 주석 작성

-   복잡한 로직에는 반드시 주석 추가
-   JSDoc 형식의 문서화 주석 사용
-   TODO, FIXME 등의 특별한 주석은 이슈로 변환 권장

### 테스트

-   단위 테스트 작성 필수
-   테스트 커버리지 80% 이상 유지
-   테스트는 독립적이고 반복 가능해야 함

## 기여 가이드라인

### 이슈 제기

-   버그 리포트는 재현 가능한 최소한의 예제 포함
-   기능 요청은 구체적인 사용 사례와 함께 제시
-   이슈 제목은 명확하고 설명적이어야 함

### 풀 리퀘스트

-   PR 제목은 변경 사항을 명확히 설명
-   PR 설명에는 변경 사항의 목적과 영향 범위 포함
-   관련 이슈가 있다면 링크 추가
-   모든 테스트가 통과해야 함

### 코드 리뷰

-   코드 리뷰어의 의견을 존중하고 적극적으로 반영
-   논의가 필요한 부분은 명확히 표시
-   리뷰 완료 후 스스로 코드를 다시 검토

### 코드 스타일 가이드 준수

-   ESLint 규칙 준수
-   Prettier 포맷팅 규칙 준수
-   TypeScript 스타일 가이드 준수
-   일관된 코드 스타일 유지
-   자동 포맷팅 도구 활용

### 테스트 코드 작성

-   단위 테스트 작성 필수
-   통합 테스트 추가
-   테스트 케이스 문서화
-   테스트 커버리지 유지
-   테스트 코드 품질 관리

### 문서화 유지보수

-   README.md 업데이트
-   API 문서화
-   코드 주석 관리
-   변경 이력 관리
-   사용 예제 추가

### 커밋 메시지

-   커밋 메시지는 명령형 현재 시제 사용
-   첫 줄은 50자 이내로 작성
-   본문은 72자 이내로 작성
-   관련 이슈 번호 포함

## 라이선스

이 프레임워크는 내부 사용 목적으로 개발되었습니다
