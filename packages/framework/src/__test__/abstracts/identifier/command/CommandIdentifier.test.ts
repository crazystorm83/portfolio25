/// <reference types="jest" />
import {
  PackageTestReporter,
  describePackage,
  measurePerformance,
  testCase
} from '../../../../../../../__test__/test-utils';
import { AbsCommandIdentifire } from '../../../../abstracts/identifier/command/CommandIdentifire';

// 테스트용 구체 클래스 생성
class TestCommandIdentifier extends AbsCommandIdentifire {
  dispose(): void {
    console.log('TestCommandIdentifier disposed');
  }
  
  constructor(id: string) {
    super(id);
  }
}

describePackage('framework', 'src/abstracts/identifier/command', () => {
  let testInstance: TestCommandIdentifier;
  const testId = 'test-command-123';

  beforeEach(() => {
    testInstance = new TestCommandIdentifier(testId);
  });

  afterEach(() => {
    PackageTestReporter.getInstance().clear();
  });

  testCase('framework', 'src/abstracts/identifier/command', 'ID 설정 및 조회 테스트', async () => {
    await measurePerformance('framework', 'src/abstracts/identifier/command', 'ID 설정 및 조회', async () => {
      // ID 설정 테스트
      testInstance.id = 'new-command-id';
      expect(testInstance.id).toBe('new-command-id');
      
      // 원래 ID로 복원
      testInstance.id = testId;
      expect(testInstance.id).toBe(testId);
    });
  });

  testCase('framework', 'src/abstracts/identifier/command', '생성자에서 ID 초기화 테스트', async () => {
    await measurePerformance('framework', 'src/abstracts/identifier/command', '생성자 ID 초기화', async () => {
      const newInstance = new TestCommandIdentifier('initial-id');
      expect(newInstance.id).toBe('initial-id');
    });
  });

  testCase('framework', 'src/abstracts/identifier/command', '빈 ID 처리 테스트', async () => {
    await measurePerformance('framework', 'src/abstracts/identifier/command', '빈 ID 처리', async () => {
      const emptyInstance = new TestCommandIdentifier('');
      expect(emptyInstance.id).toBe('');
      
      emptyInstance.id = 'non-empty';
      expect(emptyInstance.id).toBe('non-empty');
    });
  });

  testCase('framework', 'src/abstracts/identifier/command', '긴 ID 문자열 처리 테스트', async () => {
    await measurePerformance('framework', 'src/abstracts/identifier/command', '긴 ID 문자열 처리', async () => {
      const longId = 'a'.repeat(1000);
      const longInstance = new TestCommandIdentifier(longId);
      expect(longInstance.id).toBe(longId);
    });
  });

  testCase('framework', 'src/abstracts/identifier/command', '특수문자 포함 ID 테스트', async () => {
    await measurePerformance('framework', 'src/abstracts/identifier/command', '특수문자 ID 처리', async () => {
      const specialId = 'test-command_123@#$%^&*()';
      testInstance.id = specialId;
      expect(testInstance.id).toBe(specialId);
    });
  });
});
