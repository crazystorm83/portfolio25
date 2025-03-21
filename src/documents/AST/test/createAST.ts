import { $$numeric, $$txt } from '../../../framework/datatypes';

/**
 * 토큰 타입 정의
 */
enum TokenType {
    NUMBER,
    IDENTIFIER,
    OPERATOR,
    LOGICAL_OPERATOR,
    EQUALS,
    LEFT_PAREN,
    RIGHT_PAREN,
    EOF,
}

/**
 * 토큰 클래스
 */
class Token {
    constructor(
        public type: TokenType,
        public value: $$txt,
        public position: $$numeric
    ) {}
}

/**
 * AST 노드 타입 정의
 */
interface ASTNode {
    type: $$txt;
    sid: $$txt;
}

interface Program extends ASTNode {
    type: 'program';
    body: MetadataStatement[];
}

interface MetadataStatement extends ASTNode {
    type: 'metadatastatement';
    statement: IfStatement;
}

interface IfStatement extends ASTNode {
    type: 'ifstatement';
    test: Expression;
    consequent: ResultStatement;
}

interface ResultStatement extends ASTNode {
    type: 'resultstatement';
    value: LiteralExpression;
}

interface LiteralExpression extends ASTNode {
    type: 'literalexpression';
    value: $$txt;
    value_type: 'decimal' | 'string';
}

interface BinaryExpression extends ASTNode {
    type: 'binaryexpression';
    left: Expression;
    operator: $$txt;
    right: Expression;
}

type Expression = LiteralExpression | BinaryExpression;

/**
 * 토큰화를 담당하는 Lexer 클래스
 */
class Lexer {
    private position: $$numeric = 0;
    private tokens: Token[] = [];

    constructor(private input: $$txt) {}

    tokenize(): Token[] {
        while (this.position < this.input.length) {
            const char = this.input[this.position];

            // 공백 무시
            if (char === ' ') {
                this.position++;
                continue;
            }

            // 숫자 처리
            if (
                /[0-9]/.test(char) ||
                (char === '-' && /[0-9]/.test(this.input[this.position + 1])) ||
                (char === '.' && /[0-9]/.test(this.input[this.position + 1]))
            ) {
                let value = '';

                // 음수 부호 처리
                if (char === '-') {
                    value += char;
                    this.position++;
                }

                // 정수 부분 처리
                while (
                    this.position < this.input.length &&
                    /[0-9]/.test(this.input[this.position])
                ) {
                    value += this.input[this.position];
                    this.position++;
                }

                // 소수점 처리
                if (
                    this.position < this.input.length &&
                    this.input[this.position] === '.'
                ) {
                    value += '.';
                    this.position++;

                    while (
                        this.position < this.input.length &&
                        /[0-9]/.test(this.input[this.position])
                    ) {
                        value += this.input[this.position];
                        this.position++;
                    }
                }

                // 지수 표기법 처리
                if (
                    this.position < this.input.length &&
                    /[eE]/.test(this.input[this.position])
                ) {
                    value += this.input[this.position];
                    this.position++;

                    if (
                        this.position < this.input.length &&
                        /[+-]/.test(this.input[this.position])
                    ) {
                        value += this.input[this.position];
                        this.position++;
                    }

                    while (
                        this.position < this.input.length &&
                        /[0-9]/.test(this.input[this.position])
                    ) {
                        value += this.input[this.position];
                        this.position++;
                    }
                }

                this.tokens.push(
                    new Token(
                        TokenType.NUMBER,
                        value,
                        this.position - value.length
                    )
                );
                continue;
            }

            // 식별자와 논리 연산자 처리
            if (/[A-Za-z]/.test(char)) {
                let value = '';
                while (
                    this.position < this.input.length &&
                    /[A-Za-z]/.test(this.input[this.position])
                ) {
                    value += this.input[this.position];
                    this.position++;
                }

                if (value === 'AND' || value === 'OR') {
                    this.tokens.push(
                        new Token(
                            TokenType.LOGICAL_OPERATOR,
                            value,
                            this.position - value.length
                        )
                    );
                } else {
                    this.tokens.push(
                        new Token(
                            TokenType.IDENTIFIER,
                            value,
                            this.position - value.length
                        )
                    );
                }
                continue;
            }

            // 등호 처리
            if (char === '=') {
                this.tokens.push(
                    new Token(TokenType.EQUALS, char, this.position)
                );
                this.position++;
                continue;
            }

            // 산술 연산자 처리
            if (/[+\-*/]/.test(char)) {
                this.tokens.push(
                    new Token(TokenType.OPERATOR, char, this.position)
                );
                this.position++;
                continue;
            }

            // 괄호 처리
            if (char === '(') {
                this.tokens.push(
                    new Token(TokenType.LEFT_PAREN, char, this.position)
                );
                this.position++;
                continue;
            }
            if (char === ')') {
                this.tokens.push(
                    new Token(TokenType.RIGHT_PAREN, char, this.position)
                );
                this.position++;
                continue;
            }

            throw new Error(`Unknown character: ${char}`);
        }

        this.tokens.push(new Token(TokenType.EOF, '', this.position));
        return this.tokens;
    }
}

/**
 * AST 생성을 담당하는 Parser 클래스
 */
class Parser {
    private position: $$numeric = 0;
    private sidCounter: $$numeric = 12345601;

    constructor(private tokens: Token[]) {}

    parse(): Program {
        return this.createProgram();
    }

    private createProgram(): Program {
        return {
            type: 'program',
            sid: 'program_12345678',
            body: [this.createMetadataStatement()],
        };
    }

    private createMetadataStatement(): MetadataStatement {
        return {
            type: 'metadatastatement',
            sid: `meta_${this.sidCounter++}`,
            statement: this.createIfStatement(),
        };
    }

    private createIfStatement(): IfStatement {
        return {
            type: 'ifstatement',
            sid: `if_${this.sidCounter++}`,
            test: this.parseExpression(),
            consequent: this.createResultStatement(),
        };
    }

    private createResultStatement(): ResultStatement {
        return {
            type: 'resultstatement',
            sid: `result_${this.sidCounter++}`,
            value: {
                type: 'literalexpression',
                sid: `literal_${this.sidCounter++}`,
                value: '1',
                value_type: 'decimal',
            },
        };
    }

    private parseExpression(): Expression {
        return this.parseLogical();
    }

    private parseLogical(): Expression {
        let expr = this.parseEquality();

        while (this.match(TokenType.LOGICAL_OPERATOR)) {
            const operator = this.previous().value === 'AND' ? '&&' : '||';
            const right = this.parseEquality();
            expr = {
                type: 'binaryexpression',
                sid: `binary_${this.sidCounter++}`,
                left: expr,
                operator,
                right,
            };
        }

        return expr;
    }

    private parseEquality(): Expression {
        let expr = this.parseAdditive();

        if (this.match(TokenType.EQUALS)) {
            const operator = '=';
            const right = this.parseAdditive();
            expr = {
                type: 'binaryexpression',
                sid: `binary_${this.sidCounter++}`,
                left: expr,
                operator,
                right,
            };
        }

        return expr;
    }

    private parseAdditive(): Expression {
        let expr = this.parseMultiplicative();

        while (
            this.match(TokenType.OPERATOR) &&
            ['+', '-'].includes(this.previous().value)
        ) {
            const operator = this.previous().value;
            const right = this.parseMultiplicative();
            expr = {
                type: 'binaryexpression',
                sid: `binary_${this.sidCounter++}`,
                left: expr,
                operator,
                right,
            };
        }

        return expr;
    }

    private parseMultiplicative(): Expression {
        let expr = this.parsePrimary();

        while (
            this.match(TokenType.OPERATOR) &&
            ['*', '/'].includes(this.previous().value)
        ) {
            const operator = this.previous().value;
            const right = this.parsePrimary();
            expr = {
                type: 'binaryexpression',
                sid: `binary_${this.sidCounter++}`,
                left: expr,
                operator,
                right,
            };
        }

        return expr;
    }

    private parsePrimary(): Expression {
        if (this.match(TokenType.NUMBER)) {
            return {
                type: 'literalexpression',
                sid: `literal_${this.sidCounter++}`,
                value: this.previous().value,
                value_type: 'decimal',
            };
        }

        if (this.match(TokenType.IDENTIFIER)) {
            return {
                type: 'literalexpression',
                sid: `literal_${this.sidCounter++}`,
                value: this.previous().value,
                value_type: 'string',
            };
        }

        if (this.match(TokenType.LEFT_PAREN)) {
            const expr = this.parseExpression();
            this.consume(TokenType.RIGHT_PAREN, "Expect ')' after expression");
            return expr;
        }

        throw new Error('Unexpected token');
    }

    private match(type: TokenType): boolean {
        if (this.check(type)) {
            this.position++;
            return true;
        }
        return false;
    }

    private check(type: TokenType): boolean {
        if (this.isAtEnd()) return false;
        return this.peek().type === type;
    }

    private peek(): Token {
        return this.tokens[this.position];
    }

    private previous(): Token {
        return this.tokens[this.position - 1];
    }

    private isAtEnd(): boolean {
        return this.peek().type === TokenType.EOF;
    }

    private consume(type: TokenType, message: $$txt): Token {
        if (this.check(type)) return this.tokens[this.position++];
        throw new Error(message);
    }
}

// 사용 예시
const expression = '1 + ((2 * 3) / 4) - 5 = 10 OR (A AND B) OR (C AND D AND E)';
const lexer = new Lexer(expression);
const tokens = lexer.tokenize();
const parser = new Parser(tokens);
const ast = parser.parse();
