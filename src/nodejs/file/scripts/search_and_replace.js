const fs = require('fs').promises;
const path = require('path');
const {
    Worker,
    isMainThread,
    parentPort,
    workerData,
} = require('worker_threads');
const os = require('os');

// 설정 값
const folderPath = 'D:\\nodejs\\datas'; // 검색할 폴더 경로
const searchKeyword = 'changefilename'; // 검색할 키워드
const replaceKeyword = 'changefilename2'; // 변경할 키워드

// 파일 확장자 필터링 설정
const includeExtensions = ['.txt', '.html', '.css']; // 검색할 파일 확장자 (빈 배열이면 제외 확장자만 적용)
const excludeExtensions = ['.exe', '.dll', '.js', '.png', '.pdf']; // 검색에서 제외할 파일 확장자

const shouldModifyFiles = true; // true: 파일 내용 변경, false: 검색만 수행
const exactMatch = false; // true: 정확히 일치하는 경우만 검색, false: 키워드가 포함된 경우 검색
const maxWorkers = os.cpus().length; // 사용할 최대 워커 스레드 수 (CPU 코어 수만큼)

// 결과 출력 옵션
const options = {
    showFileList: true, // true: 검색된 파일 목록 표시, false: 표시 안함
    showFullPath: true, // true: 파일 경로 전체 표시, false: 파일명만 표시
    saveResultToFile: false, // true: 결과를 파일로 저장, false: 콘솔에만 출력
    resultFilePath: 'D:\\검색결과.txt', // 결과를 저장할 파일 경로
};

/**
 * 정규식 특수문자를 이스케이프합니다
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 워커 스레드 코드
if (!isMainThread) {
    const {
        filePath,
        searchKeyword,
        replaceKeyword,
        exactMatch,
        shouldModifyFiles,
    } = workerData;

    (async () => {
        try {
            // 파일 내용 읽기
            const content = await fs.readFile(filePath, 'utf8');

            // 키워드 검색 (정확히 일치 또는 포함된 텍스트)
            let found = false;
            const regexPattern = exactMatch
                ? new RegExp(`\\b${escapeRegExp(searchKeyword)}\\b`, 'g')
                : new RegExp(escapeRegExp(searchKeyword), 'g');

            found = regexPattern.test(content);

            if (!found) {
                parentPort.postMessage({ found: false });
                return;
            }

            // 키워드가 포함된 줄 찾기
            const lines = content.split('\n');
            let lineNumber = 0;
            let modifiedContent = '';
            let fileModified = false;
            let results = [];

            for (const line of lines) {
                lineNumber++;
                let modifiedLine = line;

                let lineFound = false;
                regexPattern.lastIndex = 0; // Reset regex state
                lineFound = regexPattern.test(line);

                if (lineFound) {
                    regexPattern.lastIndex = 0; // Reset regex state again
                    modifiedLine = line.replace(regexPattern, replaceKeyword);

                    results.push({
                        lineNumber,
                        originalLine: line.trim(),
                        modifiedLine: modifiedLine.trim(),
                        changed: modifiedLine !== line,
                    });

                    if (modifiedLine !== line) {
                        fileModified = true;
                    }
                }

                modifiedContent += modifiedLine + '\n';
            }

            // 파일 내용이 변경되었고 파일 수정 옵션이 활성화된 경우 파일 저장
            if (fileModified && shouldModifyFiles) {
                await fs.writeFile(filePath, modifiedContent);
            }

            parentPort.postMessage({
                found: true,
                filePath,
                results,
                fileModified,
                modifiedContent:
                    shouldModifyFiles && fileModified ? modifiedContent : null,
                matchCount: results.length,
            });
        } catch (err) {
            parentPort.postMessage({
                error: true,
                filePath,
                message: err.message,
            });
        }
    })();
}
// 메인 스레드 코드
else {
    /**
     * 파일 처리 함수 - 워커 스레드 생성
     */
    function processFile(filePath) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {
                workerData: {
                    filePath,
                    searchKeyword,
                    replaceKeyword,
                    exactMatch,
                    shouldModifyFiles,
                },
            });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }

    /**
     * 파일 확장자가 포함/제외 필터에 맞는지 확인합니다
     */
    function isFileExtensionAllowed(filename) {
        const ext = path.extname(filename).toLowerCase();

        // 제외 목록에 있으면 무조건 제외
        if (excludeExtensions.length > 0 && excludeExtensions.includes(ext)) {
            return false;
        }

        // 포함 목록이 비어있으면 모든 파일 포함 (제외 목록에 없는 한)
        if (includeExtensions.length === 0) {
            return true;
        }

        // 포함 목록에 있으면 포함
        return includeExtensions.includes(ext);
    }

    /**
     * 파일 경로를 옵션에 따라 포맷팅합니다
     */
    function formatFilePath(filePath) {
        return options.showFullPath ? filePath : path.basename(filePath);
    }

    /**
     * 폴더 내의 모든 파일 경로를 재귀적으로 수집합니다 (리프 노드까지)
     */
    async function getAllFiles(directory, fileList = []) {
        try {
            const items = await fs.readdir(directory);

            await Promise.all(
                items.map(async (item) => {
                    const itemPath = path.join(directory, item);

                    try {
                        const stats = await fs.stat(itemPath);

                        if (stats.isDirectory()) {
                            // 하위 폴더인 경우 재귀적으로 탐색
                            await getAllFiles(itemPath, fileList);
                        } else {
                            // 파일인 경우 확장자 필터링 후 목록에 추가
                            if (isFileExtensionAllowed(item)) {
                                fileList.push(itemPath);
                            }
                        }
                    } catch (error) {
                        console.error(
                            `"${itemPath}" 접근 오류: ${error.message}`
                        );
                    }
                })
            );
        } catch (err) {
            console.error(
                `"${directory}" 폴더 스캔 중 오류 발생: ${err.message}`
            );
        }

        return fileList;
    }

    /**
     * 병렬 처리를 위해 파일 목록을 청크로 나눕니다
     */
    function chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    /**
     * 문자열을 파일에 추가합니다
     */
    async function appendToFile(filePath, content) {
        try {
            await fs.appendFile(filePath, content);
        } catch (err) {
            console.error(`파일에 결과 저장 중 오류 발생: ${err.message}`);
        }
    }

    /**
     * 결과를 출력합니다 (콘솔 또는 파일)
     */
    async function outputResult(content) {
        console.log(content);

        if (options.saveResultToFile) {
            await appendToFile(options.resultFilePath, content + '\n');
        }
    }

    /**
     * 검색 및 변경 실행 함수
     */
    async function startSearchAndReplace() {
        console.time('총 실행 시간');
        const matchType = exactMatch ? '정확히 일치하는' : '포함된';
        const actionText = shouldModifyFiles ? '검색 및 변경' : '검색';

        // 결과 파일 초기화
        if (options.saveResultToFile) {
            try {
                await fs.writeFile(options.resultFilePath, ''); // 파일 내용 초기화
            } catch (err) {
                console.error(`결과 파일 초기화 중 오류 발생: ${err.message}`);
            }
        }

        await outputResult(
            `"${folderPath}" 폴더에서 "${searchKeyword}"와 ${matchType} 텍스트 ${actionText} 중... (모든 하위 폴더 포함)`
        );

        if (shouldModifyFiles) {
            await outputResult(
                `"${searchKeyword}"를 "${replaceKeyword}"로 변경합니다.`
            );
        }

        // 확장자 필터링 정보 출력
        if (includeExtensions.length > 0) {
            await outputResult(
                `검색할 파일 확장자: ${includeExtensions.join(', ')}`
            );
        }
        if (excludeExtensions.length > 0) {
            await outputResult(
                `제외할 파일 확장자: ${excludeExtensions.join(', ')}`
            );
        }

        await outputResult(
            `병렬 처리를 위해 ${maxWorkers}개의 워커 스레드를 사용합니다.\n`
        );

        try {
            // 1. 모든 파일 경로 수집 (리프 노드까지)
            console.time('파일 스캔 시간');
            const allFiles = await getAllFiles(folderPath);
            console.timeEnd('파일 스캔 시간');
            await outputResult(
                `총 ${allFiles.length}개 파일을 처리합니다...\n`
            );

            // 2. 파일 처리를 위한 병렬 실행
            console.time('파일 처리 시간');

            let foundCount = 0;
            let modifiedCount = 0;
            let errorCount = 0;
            let totalMatchCount = 0;
            let foundFiles = [];

            // 동시에 처리할 파일 수 제한 (최대 워커 수만큼 병렬 처리)
            const fileChunks = chunkArray(allFiles, maxWorkers);

            for (const chunk of fileChunks) {
                const results = await Promise.all(
                    chunk.map((filePath) => processFile(filePath))
                );

                for (const result of results) {
                    if (result.error) {
                        await outputResult(
                            `  [오류] ${formatFilePath(
                                result.filePath
                            )} 파일 처리 오류: ${result.message}`
                        );
                        errorCount++;
                        continue;
                    }

                    if (result.found) {
                        await outputResult(
                            `[파일 발견] ${formatFilePath(result.filePath)}`
                        );
                        foundCount++;
                        foundFiles.push(result.filePath);
                        totalMatchCount += result.matchCount || 0;

                        // 결과 출력
                        for (const line of result.results) {
                            await outputResult(
                                `  [줄: ${line.lineNumber}] 원본: ${line.originalLine}`
                            );
                            if (line.changed) {
                                await outputResult(
                                    `  [줄: ${line.lineNumber}] 변경: ${line.modifiedLine}`
                                );
                            }
                        }

                        if (result.fileModified && shouldModifyFiles) {
                            await outputResult(
                                `  [파일 수정] ${path.basename(
                                    result.filePath
                                )} 파일이 수정되었습니다.`
                            );
                            modifiedCount++;
                        }

                        await outputResult(''); // 각 파일 결과 사이 빈 줄 추가
                    }
                }
            }

            console.timeEnd('파일 처리 시간');

            // 3. 결과 요약
            if (foundCount === 0) {
                await outputResult(
                    `"${searchKeyword}"와 ${matchType} 텍스트 검색 결과가 없습니다.`
                );
            } else {
                if (shouldModifyFiles) {
                    await outputResult(
                        `검색 및 변경 완료: ${foundCount}개 파일에서 "${searchKeyword}"를 "${replaceKeyword}"로 변경했습니다.`
                    );
                    await outputResult(`  - 변경된 파일: ${modifiedCount}개`);
                    await outputResult(
                        `  - 총 변경 항목: ${totalMatchCount}개`
                    );
                } else {
                    await outputResult(
                        `검색 완료: ${foundCount}개 파일에서 "${searchKeyword}"와 ${matchType} 텍스트 발견됨.`
                    );
                    await outputResult(
                        `  - 총 발견 항목: ${totalMatchCount}개`
                    );
                }
            }

            if (errorCount > 0) {
                await outputResult(`  - 오류 발생: ${errorCount}개 파일`);
            }

            // 4. 파일 목록 출력 (옵션이 활성화된 경우)
            if (options.showFileList && foundFiles.length > 0) {
                await outputResult('\n===== 검색된 파일 목록 =====');
                foundFiles.forEach(async (file, index) => {
                    await outputResult(`${index + 1}. ${formatFilePath(file)}`);
                });
            }

            // 5. 파일로 저장된 경우 안내
            if (options.saveResultToFile) {
                console.log(
                    `\n검색 결과가 ${options.resultFilePath} 파일에 저장되었습니다.`
                );
            }
        } catch (err) {
            await outputResult(`처리 중 오류 발생: ${err.message}`);
        }

        console.timeEnd('총 실행 시간');
    }

    // 실행
    startSearchAndReplace();
}
