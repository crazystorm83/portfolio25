# Framework Documentation

## 개요

이 프레임워크는 모듈화된 TypeScript 기반의 프레임워크로, 확장 가능하고 유연한 아키텍처를 제공합니다.

## 주요 기능

-   실행기(Executor) 시스템
-   이벤트 처리 시스템
-   데이터 모델링
-   미들웨어 지원
-   유효성 검사
-   예외 처리

## 상세 폴더 구조

```
src/framework/
├── abstracts/                  # 추상 클래스 정의
│   ├── identifier/            # 식별자 추상 클래스
│   │   ├── action/           # 액션 식별자
│   │   └── useraction/       # 사용자 액션 식별자
│   ├── entity/               # 엔티티 추상 클래스
│   └── shape/                # 도형 추상 클래스
│
├── implements/                 # 구현체
│   ├── events/               # 이벤트 관련 구현
│   │   ├── Observer.ts      # 옵저버 패턴 구현
│   │   └── Delegator.ts     # 이벤트 위임 구현
│   ├── network/             # 네트워크 관련 구현
│   ├── collection/          # 컬렉션 관련 구현
│   ├── behaviors/           # 동작 관련 구현
│   ├── htmlshapes/         # HTML 도형 구현
│   └── template/           # 템플릿 구현
│
├── interfacies/               # 인터페이스 정의
│   ├── identifier/           # 식별자 인터페이스
│   │   ├── action/          # 액션 식별자
│   │   ├── observer/        # 옵저버 식별자
│   │   └── useraction/      # 사용자 액션 식별자
│   ├── events/              # 이벤트 인터페이스
│   ├── data_model/          # 데이터 모델 인터페이스
│   ├── entity/              # 엔티티 인터페이스
│   ├── HTMLEntity/          # HTML 엔티티 인터페이스
│   ├── viewcontainer/       # 뷰 컨테이너 인터페이스
│   └── configuration/       # 설정 인터페이스
│
├── executor/                  # 실행기 시스템
│   ├── Executor.ts          # 기본 실행기
│   ├── UserActionExecutor.ts # 사용자 액션 실행기
│   ├── UIActionExecutor.ts  # UI 액션 실행기
│   ├── ApiActionExecutor.ts # API 액션 실행기
│   ├── CommandExecutor.ts   # 명령 실행기
│   ├── TaskExecutor.ts      # 작업 실행기
│   ├── WorkflowExecutor.ts  # 워크플로우 실행기
│   ├── InterpreterExecutor.ts # 인터프리터 실행기
│   └── PageExecutor.ts      # 페이지 실행기
│
├── enums/                     # 열거형 정의
│   └── modules/              # 모듈 관련 열거형
│       ├── EN_MODULE_POSTFIX.ts
│       ├── EN_MOUDLE_PREFIX.ts
│       └── EN_MODULE_MAJOR_VERSION.ts
│
├── middleware/                # 미들웨어
│
├── datatypes/                 # 기본 데이터 타입
│   ├── $$txt                # 텍스트 타입
│   ├── $$numeric           # 숫자 타입
│   └── $$base_tree         # 트리 구조 타입
│
├── exception/                 # 예외 처리
│
├── validator/                 # 유효성 검사
│
├── computedvalues/           # 계산된 값
│
└── decoarator/               # 데코레이터
```

## 주요 컴포넌트

### 1. Executor 시스템

실행기 시스템은 다양한 유형의 작업을 처리하기 위한 실행 컨텍스트를 제공합니다.

-   `UserActionExecutor`: 사용자 액션 처리
-   `UIActionExecutor`: UI 관련 액션 처리
-   `ApiActionExecutor`: API 호출 처리
-   `CommandExecutor`: 명령 패턴 구현
-   `TaskExecutor`: 작업 실행
-   `WorkflowExecutor`: 워크플로우 처리

### 2. 인터페이스 계층

타입 안전성과 계약을 보장하는 인터페이스 시스템을 제공합니다.

-   `identifier/`: 식별자 인터페이스
-   `events/`: 이벤트 시스템
-   `data_model/`: 데이터 모델링
-   `entity/`: 엔티티 정의
-   `HTMLEntity/`: HTML 요소 처리

### 3. 데이터 타입

기본 데이터 타입을 제공합니다.

-   `$$txt`: 텍스트 데이터 타입
-   `$$numeric`: 숫자 데이터 타입
-   `$$base_tree`: 트리 구조 데이터 타입

## 디자인 패턴

### 1. Observer 패턴

이벤트 처리와 상태 관리를 위한 Observer 패턴을 구현합니다.

```typescript
interface IObserver extends IObserverIdentifier {
    update(data?: any): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data?: any): void;
}
```

### 2. Command 패턴

작업의 캡슐화와 실행을 위한 Command 패턴을 제공합니다.

### 3. Strategy 패턴

다양한 실행 전략을 유연하게 교체할 수 있는 구조를 제공합니다.

## 확장성

### 모듈 시스템

```typescript
interface IDispatchPayload {
    prefix: EN_MOUDLE_PREFIX;
    micromodulename: $$txt;
    major_version: EN_MODULE_MAJOR_VERSION;
    minor_version: $$txt;
    patch_version: $$txt;
    postfix: EN_MODULE_POSTFIX;
}
```

### 플러그인 아키텍처

-   모듈식 확장 가능
-   느슨한 결합 구조
-   커스텀 구현 용이

## 사용 예제

### 1. 실행기 사용

```typescript
// 실행기를 통한 작업 처리
Executor.dispatch({
    prefix: EN_MOUDLE_PREFIX.CORE,
    micromodulename: 'example',
    major_version: EN_MODULE_MAJOR_VERSION.V1,
    minor_version: '0',
    patch_version: '1',
    postfix: EN_MODULE_POSTFIX.UserAction,
});
```

### 2. 이벤트 처리

```typescript
// Observer 패턴 사용
class CustomObserver implements IObserver {
    update(data: any) {
        console.log('데이터 수신:', data);
    }
}
```

## 개발 가이드라인

### 1. 코드 품질

-   가독성을 최우선으로 고려
-   중복 코드 최소화
-   단일 책임 원칙 준수
-   명확한 네이밍 규칙 준수

### 2. 확장성

-   인터페이스 기반 설계
-   모듈화된 구조 유지
-   느슨한 결합도 유지

### 3. 타입 안전성

-   TypeScript 타입 시스템 활용
-   인터페이스 계약 준수
-   제네릭 활용

## 기여 가이드

1. 코드 스타일 가이드 준수
2. 테스트 코드 작성
3. 문서화 유지보수

## 라이선스

이 프레임워크는 내부 사용 목적으로 개발되었습니다.
