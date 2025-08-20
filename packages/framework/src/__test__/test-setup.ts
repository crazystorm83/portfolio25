// 전역 테스트 환경 설정
/// <reference types="jest" />
/// <reference types="node" />

// 전역 테스트 설정
beforeAll(() => {
  console.log('🧪 테스트 환경 초기화 중...');
});

afterAll(() => {
  console.log('✅ 모든 테스트 완료');
});

// 테스트 타임아웃 설정
jest.setTimeout(10000);

// 전역 모킹 설정
global.console = {
  ...console,
  // 테스트 중 불필요한 로그 숨기기
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
