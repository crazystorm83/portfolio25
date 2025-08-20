import { AnalysisResult } from './interfaces';
/**
 * TypeScript 코드 분석을 위한 클래스
 * 클래스, 메서드, 프로퍼티 등의 메타데이터를 추출합니다.
 */
declare class TypeScriptAnalyzer {
    /**
     * 소스 코드로부터 SourceFile 객체를 생성합니다.
     */
    private static createSourceFile;
    /**
     * SourceFile로부터 Program 객체를 생성합니다.
     */
    private static createProgram;
    /**
     * 노드의 타입을 문자열로 변환합니다.
     */
    private static getTypeAsString;
    /**
     * 노드의 주석을 분석하여 CommentMetadata 배열을 반환합니다.
     */
    private static getComments;
    /**
     * JSDoc 주석을 분석합니다.
     */
    private static analyzeJSDocComments;
    /**
     * JSDoc 태그의 주석 텍스트를 추출합니다.
     */
    private static extractJSDocCommentText;
    /**
     * JSDoc 태그 정보를 추출합니다.
     */
    private static extractJSDocTags;
    /**
     * 일반 주석을 분석합니다.
     */
    private static analyzeRegularComments;
    /**
     * 데코레이터를 분석하여 DecoratorMetadata 배열을 반환합니다.
     */
    private static analyzeDecorators;
    /**
     * 클래스 멤버를 분석하여 MemberMetadata를 반환합니다.
     */
    private static analyzeMember;
    /**
     * 멤버의 수정자를 추출합니다.
     */
    private static getModifiers;
    /**
     * 프로퍼티를 분석합니다.
     */
    private static analyzeProperty;
    /**
     * 메서드를 분석합니다.
     */
    private static analyzeMethod;
    /**
     * 클래스를 분석하여 ClassMetadata를 반환합니다.
     */
    private static analyzeClass;
    /**
     * 클래스의 상속 관계를 분석합니다.
     */
    private static analyzeHeritageClauses;
    /**
     * 클래스의 멤버들을 분석합니다.
     */
    private static analyzeClassMembers;
    /**
     * 소스 코드를 분석하여 AnalysisResult를 반환합니다.
     */
    static analyze(sourceCode: string): AnalysisResult;
}
export { TypeScriptAnalyzer };
