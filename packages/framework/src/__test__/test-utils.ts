import { describe, test } from '@jest/globals';
/**
 * 패키지별 테스트 결과를 관리하는 클래스
 */
export class PackageTestReporter {
  private static instance: PackageTestReporter;
  private packageResults: Map<string, PackageTestResult> = new Map();

  static getInstance(): PackageTestReporter {
    if (!PackageTestReporter.instance) {
      PackageTestReporter.instance = new PackageTestReporter();
    }
    return PackageTestReporter.instance;
  }

  /**
   * 패키지별 테스트 결과 추가
   */
  addPackageResult(packageName: string, folderPath: string, testName: string, status: 'PASS' | 'FAIL', message?: string, duration: number = 0): void {
    if (!this.packageResults.has(packageName)) {
      this.packageResults.set(packageName, {
        name: packageName,
        groups: new Map(),
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        totalDuration: 0
      });
    }

    const packageResult = this.packageResults.get(packageName)!;
    
    // 폴더 경로를 기반으로 그룹 생성
    if (!packageResult.groups.has(folderPath)) {
      packageResult.groups.set(folderPath, {
        name: folderPath,
        tests: [],
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        totalDuration: 0
      });
    }

    const group = packageResult.groups.get(folderPath)!;
    const testResult = {
      name: testName,
      status,
      message,
      duration,
      timestamp: new Date().toISOString()
    };

    group.tests.push(testResult);
    group.totalTests++;
    group.totalDuration += duration;
    
    if (status === 'PASS') {
      group.passedTests++;
    } else {
      group.failedTests++;
    }

    // 패키지 전체 통계 업데이트
    packageResult.totalTests++;
    packageResult.totalDuration += duration;
    
    if (status === 'PASS') {
      packageResult.passedTests++;
    } else {
      packageResult.failedTests++;
    }
  }

  /**
   * 패키지별 결과 출력
   */
  printPackageResults(): void {
    console.log('\n📦 패키지별 테스트 결과 요약:');
    console.log('='.repeat(80));
    
    this.packageResults.forEach((packageResult, packageName) => {
      console.log(`\n📦 ${packageName} (${packageResult.passedTests}/${packageResult.totalTests} 성공)`);
      console.log('-'.repeat(60));
      
      packageResult.groups.forEach((group, folderPath) => {
        console.log(`  📁 ${folderPath} (${group.passedTests}/${group.totalTests} 성공)`);
        
        group.tests.forEach(test => {
          const icon = test.status === 'PASS' ? '✅' : '❌';
          const duration = test.duration > 0 ? ` (${test.duration.toFixed(2)}ms)` : '';
          console.log(`    ${icon} ${test.name}${duration}`);
          
          if (test.message) {
            console.log(`      └─ ${test.message}`);
          }
          
          if (test.duration > 10) {
            console.log(`      ⚠️  성능 개선 필요 (10ms 초과)`);
          }
        });
      });
      
      const avgDuration = packageResult.totalTests > 0 ? packageResult.totalDuration / packageResult.totalTests : 0;
      console.log(`  📊 평균 실행 시간: ${avgDuration.toFixed(2)}ms`);
    });
    
    // 전체 통계
    const totalTests = Array.from(this.packageResults.values()).reduce((sum, pkg) => sum + pkg.totalTests, 0);
    const totalPassed = Array.from(this.packageResults.values()).reduce((sum, pkg) => sum + pkg.passedTests, 0);
    const totalFailed = Array.from(this.packageResults.values()).reduce((sum, pkg) => sum + pkg.failedTests, 0);
    
    console.log('\n' + '='.repeat(80));
    console.log(`📊 전체 통계: 총 ${totalTests}개 테스트 | 성공: ${totalPassed} | 실패: ${totalFailed}`);
  }

  /**
   * 특정 패키지 결과 가져오기
   */
  getPackageResult(packageName: string): PackageTestResult | undefined {
    return this.packageResults.get(packageName);
  }

  /**
   * 모든 패키지 결과 가져오기
   */
  getAllPackageResults(): Map<string, PackageTestResult> {
    return this.packageResults;
  }

  /**
   * 결과 초기화
   */
  clear(): void {
    this.packageResults.clear();
  }
}

/**
 * 성능 측정 유틸리티
 */
export const measurePerformance = async <T>(
  packageName: string,
  folderPath: string,
  testName: string,
  fn: () => Promise<T> | T
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    
    // 성능 임계값 체크 (10ms 이상이면 경고)
    if (duration > 10) {
      console.warn(`⚠️  ${packageName}/${folderPath}/${testName}: ${duration.toFixed(2)}ms (성능 개선 필요)`);
    }
    
    PackageTestReporter.getInstance().addPackageResult(packageName, folderPath, testName, 'PASS', undefined, duration);
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    PackageTestReporter.getInstance().addPackageResult(
      packageName, 
      folderPath, 
      testName, 
      'FAIL', 
      error instanceof Error ? error.message : String(error), 
      duration
    );
    throw error;
  }
};

/**
 * 패키지별 테스트 그룹 생성
 */
export const describePackage = (packageName: string, folderPath: string, tests: () => void) => {
  describe(`📦 ${packageName} - 📁 ${folderPath}`, tests);
};

/**
 * 개별 테스트 케이스 생성
 */
export const testCase = (packageName: string, folderPath: string, testName: string, testFn: () => Promise<void> | void) => {
  test(`🔍 ${testName}`, async () => {
    await measurePerformance(packageName, folderPath, testName, testFn);
  });
};

/**
 * 폴더 경로에서 패키지명과 상대 경로 추출
 */
export const extractPackageInfo = (filePath: string): { packageName: string; folderPath: string } => {
  const pathParts = filePath.split('/');
  const packagesIndex = pathParts.indexOf('packages');
  
  if (packagesIndex === -1 || packagesIndex + 1 >= pathParts.length) {
    return { packageName: 'unknown', folderPath: 'unknown' };
  }
  
  const packageName = pathParts[packagesIndex + 1];
  const folderPath = pathParts.slice(packagesIndex + 2, -1).join('/') || 'root';
  
  return { packageName, folderPath };
};

/**
 * 모킹 데이터 생성 유틸리티
 */
export const createMockData = <T>(template: Partial<T>): T => {
  return template as T;
};

/**
 * 비동기 테스트를 위한 유틸리티
 */
export const waitFor = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// 타입 정의
export interface TestResult {
  name: string;
  status: 'PASS' | 'FAIL';
  message?: string;
  duration: number;
  timestamp: string;
}

export interface TestGroup {
  name: string;
  tests: TestResult[];
  totalTests: number;
  passedTests: number;
  failedTests: number;
  totalDuration: number;
}

export interface PackageTestResult {
  name: string;
  groups: Map<string, TestGroup>;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  totalDuration: number;
}
