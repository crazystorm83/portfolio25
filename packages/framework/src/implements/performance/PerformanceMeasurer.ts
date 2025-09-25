// 퍼포먼스 측정 결과 타입
export interface PerformanceResult {
    functionName: string;
    executionTime: number; // 밀리초
    memoryUsage?: {
        before: number;
        after: number;
        difference: number;
    };
    iterations?: number;
    averageTime?: number;
}

// 벤치마크 옵션 타입
export interface BenchmarkOptions {
    iterations?: number;
    warmup?: number;
    measureMemory?: boolean;
    logResults?: boolean;
}

/**
 * 성능 측정 클래스
 * 단일 함수 측정, 벤치마크, 여러 함수 비교, 데코레이터 사용
 * 
 * @example
 ```typescript
    // 기본 사용
    const measurer = new PerformanceMeasurer();

    // 단일 함수 측정
    const result = await measurer.measure(
        (n: number) => fibonacci(n), 
        [30], 
        'fibonacci'
    );

    // 벤치마크
    await measurer.benchmark(
        (arr: number[]) => arr.sort(), 
        [[...randomArray]], 
        'arraySort',
        { iterations: 100, warmup: 10 }
    );

    // 여러 함수 비교
    await measurer.compare([
        { fn: quickSort, name: 'QuickSort', args: [data] },
        { fn: mergeSort, name: 'MergeSort', args: [data] },
        { fn: bubbleSort, name: 'BubbleSort', args: [data] }
    ]);

    // 데코레이터 사용
    class Calculator {
        @measurer.measureDecorator()
        heavyCalculation(n: number) {
            // 무거운 계산
        }
    }
  ```
 */
export class PerformanceMeasurer {
    private results: PerformanceResult[] = [];

    /**
     * 단일 함수 실행 시간 측정
     */
    async measure<T extends any[], R>(
        fn: (...args: T) => R | Promise<R>,
        args: T = [] as unknown as T,
        functionName: string = fn.name || 'anonymous',
        options: { measureMemory?: boolean } = {},
    ): Promise<PerformanceResult> {
        const startTime = performance.now();
        let memoryBefore = 0;
        let memoryAfter = 0;

        // 메모리 측정 (Node.js 환경에서만)
        if (
            options.measureMemory &&
            typeof process !== 'undefined' &&
            process.memoryUsage
        ) {
            memoryBefore = process.memoryUsage().heapUsed;
        }

        try {
            const result = await fn(...args);
            const endTime = performance.now();

            if (
                options.measureMemory &&
                typeof process !== 'undefined' &&
                process.memoryUsage
            ) {
                memoryAfter = process.memoryUsage().heapUsed;
            }

            const performanceResult: PerformanceResult = {
                functionName,
                executionTime: endTime - startTime,
                ...(options.measureMemory && {
                    memoryUsage: {
                        before: memoryBefore,
                        after: memoryAfter,
                        difference: memoryAfter - memoryBefore,
                    },
                }),
            };

            this.results.push(performanceResult);
            return performanceResult;
        } catch (error) {
            console.error(`Error measuring ${functionName}:`, error);
            throw error;
        }
    }

    /**
     * 함수 벤치마크 (여러 번 실행하여 평균 계산)
     */
    async benchmark<T extends any[], R>(
        fn: (...args: T) => R | Promise<R>,
        args: T = [] as unknown as T,
        functionName: string = fn.name || 'anonymous',
        options: BenchmarkOptions = {},
    ): Promise<PerformanceResult> {
        const {
            iterations = 100,
            warmup = 10,
            measureMemory = false,
            logResults = true,
        } = options;

        // 워밍업 실행
        for (let i = 0; i < warmup; i++) {
            await fn(...args);
        }

        const executionTimes: number[] = [];
        let totalMemoryDiff = 0;
        let memoryMeasurements = 0;

        // 실제 벤치마크 실행
        for (let i = 0; i < iterations; i++) {
            const result = await this.measure(
                fn,
                args,
                `${functionName}_iteration_${i}`,
                { measureMemory },
            );
            executionTimes.push(result.executionTime);

            if (result.memoryUsage) {
                totalMemoryDiff += result.memoryUsage.difference;
                memoryMeasurements++;
            }
        }

        const averageTime =
            executionTimes.reduce((sum, time) => sum + time, 0) / iterations;
        const minTime = Math.min(...executionTimes);
        const maxTime = Math.max(...executionTimes);

        const benchmarkResult: PerformanceResult = {
            functionName,
            executionTime: maxTime, // 최대 시간을 기본 실행시간으로
            iterations,
            averageTime,
            ...(measureMemory &&
                memoryMeasurements > 0 && {
                    memoryUsage: {
                        before: 0,
                        after: 0,
                        difference: totalMemoryDiff / memoryMeasurements, // 평균 메모리 사용량
                    },
                }),
        };

        if (logResults) {
            console.log(`\n📊 Benchmark Results for ${functionName}:`);
            console.log(`   Iterations: ${iterations}`);
            console.log(`   Average Time: ${averageTime.toFixed(3)}ms`);
            console.log(`   Min Time: ${minTime.toFixed(3)}ms`);
            console.log(`   Max Time: ${maxTime.toFixed(3)}ms`);
            if (benchmarkResult.memoryUsage) {
                console.log(
                    `   Average Memory Usage: ${(benchmarkResult.memoryUsage.difference / 1024 / 1024).toFixed(2)}MB`,
                );
            }
        }

        this.results.push(benchmarkResult);
        return benchmarkResult;
    }

    /**
     * 여러 함수들의 성능 비교
     */
    async compare<T extends any[]>(
        functions: Array<{
            fn: (...args: T) => any | Promise<any>;
            name: string;
            args?: T;
        }>,
        options: BenchmarkOptions = {},
    ): Promise<PerformanceResult[]> {
        console.log('\n🏁 Starting Performance Comparison...\n');

        const results: PerformanceResult[] = [];

        for (const { fn, name, args } of functions) {
            const result = await this.benchmark(
                fn,
                args || ([] as unknown as T),
                name,
                {
                    ...options,
                    logResults: false,
                },
            );
            results.push(result);
        }

        // 결과 정렬 (평균 시간 기준)
        results.sort(
            (a, b) =>
                (a.averageTime || a.executionTime) -
                (b.averageTime || b.executionTime),
        );

        // 비교 결과 출력
        console.log('\n📈 Performance Comparison Results:');
        console.log('═'.repeat(60));
        results.forEach((result, index) => {
            const time = result.averageTime || result.executionTime;
            const fastest = results[0].averageTime || results[0].executionTime;
            const ratio = time / fastest;

            console.log(`${index + 1}. ${result.functionName}`);
            console.log(
                `   Time: ${time.toFixed(3)}ms (${ratio.toFixed(2)}x ${index === 0 ? 'fastest' : 'slower'})`,
            );
            if (result.memoryUsage) {
                console.log(
                    `   Memory: ${(result.memoryUsage.difference / 1024 / 1024).toFixed(2)}MB`,
                );
            }
            console.log();
        });

        return results;
    }

    /**
     * 데코레이터로 함수 자동 측정
     */
    measureDecorator(
        options: { measureMemory?: boolean; logResults?: boolean } = {},
    ) {
        return <T extends any[], R>(
            target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<(...args: T) => R | Promise<R>>,
        ) => {
            const originalMethod = descriptor.value!;

            descriptor.value = async function (...args: T) {
                const measurer = new PerformanceMeasurer();
                const result = await measurer.measure(
                    // @ts-ignore
                    originalMethod.bind(this),
                    args,
                    `${target.constructor.name}.${propertyKey}`,
                    options,
                );

                if (options.logResults !== false) {
                    console.log(
                        `⚡ ${result.functionName}: ${result.executionTime.toFixed(3)}ms`,
                    );
                }

                // @ts-ignore
                return originalMethod.apply(this, args);
            } as any;

            return descriptor;
        };
    }

    /**
     * 모든 측정 결과 반환
     */
    getAllResults(): PerformanceResult[] {
        return [...this.results];
    }

    /**
     * 결과 초기화
     */
    clearResults(): void {
        this.results = [];
    }

    /**
     * 결과를 JSON으로 내보내기
     */
    exportResults(): string {
        return JSON.stringify(this.results, null, 2);
    }

    /**
     * 통계 정보 출력
     */
    printSummary(): void {
        if (this.results.length === 0) {
            console.log('No performance measurements recorded.');
            return;
        }

        console.log('\n📊 Performance Summary:');
        console.log('═'.repeat(50));

        this.results.forEach((result) => {
            const time = result.averageTime || result.executionTime;
            console.log(`${result.functionName}: ${time.toFixed(3)}ms`);
            if (result.iterations) {
                console.log(`  (${result.iterations} iterations)`);
            }
        });
    }
}
