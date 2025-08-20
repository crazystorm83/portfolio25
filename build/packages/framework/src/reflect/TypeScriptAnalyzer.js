import * as ts from 'typescript';
/**
 * TypeScript 코드 분석을 위한 클래스
 * 클래스, 메서드, 프로퍼티 등의 메타데이터를 추출합니다.
 */
class TypeScriptAnalyzer {
    // =============== 초기화 관련 메서드 ===============
    /**
     * 소스 코드로부터 SourceFile 객체를 생성합니다.
     */
    static createSourceFile(code) {
        return ts.createSourceFile('analyzed-code.ts', code, ts.ScriptTarget.Latest, true);
    }
    /**
     * SourceFile로부터 Program 객체를 생성합니다.
     */
    static createProgram(sourceFile) {
        return ts.createProgram({
            rootNames: [sourceFile.fileName],
            options: {
                target: ts.ScriptTarget.ES2020,
                module: ts.ModuleKind.CommonJS,
            },
            host: ts.createCompilerHost({}),
        });
    }
    // =============== 타입 분석 관련 메서드 ===============
    /**
     * 노드의 타입을 문자열로 변환합니다.
     */
    static getTypeAsString(typeChecker, node) {
        const type = typeChecker.getTypeAtLocation(node);
        return typeChecker.typeToString(type);
    }
    // =============== 주석 분석 관련 메서드 ===============
    /**
     * 노드의 주석을 분석하여 CommentMetadata 배열을 반환합니다.
     */
    static getComments(node, sourceFile) {
        const comments = [];
        const nodeStart = node.getFullStart();
        const nodeEnd = node.getEnd();
        // JSDoc 주석 분석
        this.analyzeJSDocComments(node, comments);
        // 일반 주석 분석
        this.analyzeRegularComments(sourceFile, nodeStart, comments);
        return comments;
    }
    /**
     * JSDoc 주석을 분석합니다.
     */
    static analyzeJSDocComments(node, comments) {
        const jsDocComments = ts.getJSDocTags(node);
        if (!jsDocComments)
            return;
        jsDocComments.forEach((tag) => {
            const commentText = this.extractJSDocCommentText(tag);
            const tags = this.extractJSDocTags(tag, commentText);
            comments.push({
                kind: 'jsdoc',
                text: commentText,
                range: { start: tag.pos, end: tag.end },
                tags,
            });
        });
    }
    /**
     * JSDoc 태그의 주석 텍스트를 추출합니다.
     */
    static extractJSDocCommentText(tag) {
        if (!tag.comment)
            return '';
        if (Array.isArray(tag.comment)) {
            return tag.comment
                .map((c) => typeof c === 'string'
                ? c
                : Array.isArray(c)
                    ? c.map((cc) => cc.text).join(' ')
                    : c.text)
                .join(' ');
        }
        if (typeof tag.comment === 'string') {
            return tag.comment;
        }
        const comment = tag.comment;
        return comment.text;
    }
    /**
     * JSDoc 태그 정보를 추출합니다.
     */
    static extractJSDocTags(tag, commentText) {
        return tag.tagName
            ? [{ tag: tag.tagName.text, text: commentText }]
            : [];
    }
    /**
     * 일반 주석을 분석합니다.
     */
    static analyzeRegularComments(sourceFile, nodeStart, comments) {
        ts.forEachLeadingCommentRange(sourceFile.text, nodeStart, (pos, end, kind) => {
            const commentText = sourceFile.text
                .substring(pos, end)
                .replace(/^\/\*\*?|\*\/$/g, '')
                .replace(/^\s*\/\/\s?|\s*\*\s?/gm, '')
                .trim();
            comments.push({
                kind: kind === ts.SyntaxKind.SingleLineCommentTrivia
                    ? 'single'
                    : 'multi',
                text: commentText,
                range: { start: pos, end },
            });
        });
    }
    // =============== 데코레이터 분석 관련 메서드 ===============
    /**
     * 데코레이터를 분석하여 DecoratorMetadata 배열을 반환합니다.
     */
    static analyzeDecorators(decorators) {
        if (!decorators)
            return [];
        return decorators.map((decorator) => {
            const expression = decorator.expression;
            if (ts.isCallExpression(expression)) {
                return {
                    name: expression.expression.text,
                    arguments: expression.arguments.map((arg) => ts.isStringLiteral(arg) ? arg.text : arg.getText()),
                };
            }
            return {
                name: expression.text,
                arguments: [],
            };
        });
    }
    // =============== 멤버 분석 관련 메서드 ===============
    /**
     * 클래스 멤버를 분석하여 MemberMetadata를 반환합니다.
     */
    static analyzeMember(typeChecker, member, sourceFile) {
        const memberMetadata = {
            kind: ts.SyntaxKind[member.kind],
            name: '',
            modifiers: this.getModifiers(member),
            comments: this.getComments(member, sourceFile),
            parameters: [],
        };
        if (ts.isPropertyDeclaration(member)) {
            return this.analyzeProperty(member, memberMetadata, typeChecker);
        }
        if (ts.isMethodDeclaration(member)) {
            return this.analyzeMethod(member, memberMetadata, typeChecker, sourceFile);
        }
        return null;
    }
    /**
     * 멤버의 수정자를 추출합니다.
     */
    static getModifiers(member) {
        var _a;
        return (((_a = member.modifiers) === null || _a === void 0 ? void 0 : _a.map((mod) => ts.SyntaxKind[mod.kind])) || []);
    }
    /**
     * 프로퍼티를 분석합니다.
     */
    static analyzeProperty(member, metadata, typeChecker) {
        metadata.name = member.name.text;
        metadata.type = this.getTypeAsString(typeChecker, member);
        if (member.decorators) {
            metadata.decorators = this.analyzeDecorators(member.decorators);
        }
        return metadata;
    }
    /**
     * 메서드를 분석합니다.
     */
    static analyzeMethod(member, metadata, typeChecker, sourceFile) {
        metadata.name = member.name.text;
        metadata.returnType = member.type
            ? this.getTypeAsString(typeChecker, member)
            : 'void';
        metadata.parameters = member.parameters.map((param) => ({
            name: param.name.text,
            type: this.getTypeAsString(typeChecker, param),
            optional: !!param.questionToken,
            decorators: param.decorators
                ? this.analyzeDecorators(param.decorators)
                : [],
            comments: this.getComments(param, sourceFile),
        }));
        if (member.decorators) {
            metadata.decorators = this.analyzeDecorators(member.decorators);
        }
        return metadata;
    }
    // =============== 클래스 분석 관련 메서드 ===============
    /**
     * 클래스를 분석하여 ClassMetadata를 반환합니다.
     */
    static analyzeClass(typeChecker, node, sourceFile) {
        if (!node.name)
            return null;
        const classMetadata = {
            name: node.name.text,
            comments: this.getComments(node, sourceFile),
            decorators: node.decorators
                ? this.analyzeDecorators(node.decorators)
                : [],
            heritage: {
                extends: [],
                implements: [],
            },
            members: [],
        };
        this.analyzeHeritageClauses(node, classMetadata);
        this.analyzeClassMembers(node, classMetadata, typeChecker, sourceFile);
        return classMetadata;
    }
    /**
     * 클래스의 상속 관계를 분석합니다.
     */
    static analyzeHeritageClauses(node, metadata) {
        if (!node.heritageClauses)
            return;
        node.heritageClauses.forEach((clause) => {
            const types = clause.types.map((t) => t.expression.getText());
            if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                metadata.heritage.extends = types;
            }
            else if (clause.token === ts.SyntaxKind.ImplementsKeyword) {
                metadata.heritage.implements = types;
            }
        });
    }
    /**
     * 클래스의 멤버들을 분석합니다.
     */
    static analyzeClassMembers(node, metadata, typeChecker, sourceFile) {
        node.members.forEach((member) => {
            const memberMetadata = this.analyzeMember(typeChecker, member, sourceFile);
            if (memberMetadata) {
                metadata.members.push(memberMetadata);
            }
        });
    }
    // =============== 공개 API ===============
    /**
     * 소스 코드를 분석하여 AnalysisResult를 반환합니다.
     */
    static analyze(sourceCode) {
        const sourceFile = this.createSourceFile(sourceCode);
        const program = this.createProgram(sourceFile);
        const typeChecker = program.getTypeChecker();
        const analysis = { classes: [] };
        function visit(node) {
            if (ts.isClassDeclaration(node)) {
                const classMetadata = TypeScriptAnalyzer.analyzeClass(typeChecker, node, sourceFile);
                if (classMetadata) {
                    analysis.classes.push(classMetadata);
                }
            }
            ts.forEachChild(node, visit);
        }
        visit(sourceFile);
        return analysis;
    }
}
export { TypeScriptAnalyzer };
// 사용 예시
const sourceCode = `
/**
 * 사용자 서비스를 처리하는 컨트롤러
 * @description REST API endpoints for user management
 * @author John Doe
 */
@Controller('/users')
class UserController {
  // 사용자 서비스 주입
  @Inject()
  private userService: UserService;

  /**
   * 특정 ID의 사용자를 조회합니다
   * @param id 사용자 ID
   * @returns 사용자 정보
   */
  @Get('/:id')
  async getUser(
    // 경로 파라미터에서 ID를 추출
    @Param('id') id: number
  ): Promise<User> {
    return this.userService.findById(id);
  }

  /* 새로운 사용자를 생성합니다 */
  @Post()
  async createUser(
    // 사용자 생성 데이터
    @Body() userData: CreateUserDto
  ): Promise<User> {
    return this.userService.create(userData);
  }
}
`;
const analysis = TypeScriptAnalyzer.analyze(sourceCode);
console.log(JSON.stringify(analysis, null, 2));
//# sourceMappingURL=TypeScriptAnalyzer.js.map