import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts', // 번들링할 진입점 파일
    output: {
        file: 'build/bundle.js', //번들된 파일 출력 위치
        format: 'umd', // 즉시 실행 함수 형태(브라우저에서 사용하기 위함)
        name: 'nh', // 전역 변수 이름을 설정 (이름은 원하는 대로 변경 가능)
        sourcemap: true, // 소스 맵 생성
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.json', // tsconfig.json 파일을 사용하도록 지정
        }), // Typescript 플러그인 사용
    ],
};
