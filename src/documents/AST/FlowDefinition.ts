//아래는 typescript 로 정의된 데이터를 흐름도로 만들어줘.

enum EN_FLOW_AST {
    Program = 'program',

    MetadataStatement = 'metadatastatement',

    IfStatement = 'ifstatement',
    CombinationStatement = 'combinationstatement',
    ResultStatement = 'resultstatement',
    BinaryExpression = 'binaryexpression',

    CallExpression = 'callexpression',

    ArrayExpression = 'arrayexpression',
    ObjectExpression = 'objectexpression',
    /*
     * objectexpression 의 key 로 사용되는 AST
     */
    PropertyExpression = 'propertyexpression',
    LiteralExpression = 'literalexpression',

    OperatorExpression = 'operatorexpression',
    BracketExpression = 'bracketexpression',
}

enum EN_BRACKET_TYPE {
    Round = 'round',
    Square = 'square',
    Angle = 'angle',
}

const EN_FLOW_PROVIDERS = {
    decimal: 'decimal' as const,
    code: 'code' as const,
    string: 'string' as const,
    date: 'date' as const,
    datetime: 'datetime' as const,
} as const;

type EN_FLOW_PROVIDER =
    (typeof EN_FLOW_PROVIDERS)[keyof typeof EN_FLOW_PROVIDERS];

const EN_FLOW_UI_PROVIDERS = {
    any: 'any' as const,
} as const;

type EN_FLOW_UI_PROVIDER =
    | (typeof EN_FLOW_UI_PROVIDERS)[keyof typeof EN_FLOW_UI_PROVIDERS]
    | EN_FLOW_PROVIDER;

const EN_FLOW_EQUAL_FUNCTIONS = {
    eq: 'eq' as const,
} as const;

const EN_FLOW_NOT_EQAUL_FUNCTIONS = {
    neq: 'neq' as const,
} as const;

type EN_FLOW_EQUAL_FUNCTION =
    (typeof EN_FLOW_EQUAL_FUNCTIONS)[keyof typeof EN_FLOW_EQUAL_FUNCTIONS];
type EN_FLOW_NOT_EQAUL_FUNCTION =
    (typeof EN_FLOW_NOT_EQAUL_FUNCTIONS)[keyof typeof EN_FLOW_NOT_EQAUL_FUNCTIONS];

type EN_FLOW_DECIMAL_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_CODE_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_STRING_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_DATE_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_DATETIME_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;

type EN_FLOW_FUNCTION =
    | EN_FLOW_DECIMAL_FUNCTION
    | EN_FLOW_CODE_FUNCTION
    | EN_FLOW_STRING_FUNCTION
    | EN_FLOW_DATE_FUNCTION
    | EN_FLOW_DATETIME_FUNCTION;

enum EN_FLOW_RETURNTYPE {
    boolean = 'boolean',
    decimal = 'decimal',
    string = 'string',
    date = 'date',
    datetime = 'datetime',
}

const LOGICAL_OPERATORS = {
    AND: '&&' as const,
    OR: '||' as const,
} as const;

const ARITHMETIC_OPERATORS = {
    MULTIPLY: '*' as const,
    DIVIDE: '/' as const,
    PLUS: '+' as const,
    MINUS: '-' as const,
} as const;

const COMPARER_OPERATORS = {
    EQUAL: '=' as const,
} as const;

// 각 연산자 그룹의 value들의 union 타입 추출
type EN_LOGICAL_OPERATOR =
    (typeof LOGICAL_OPERATORS)[keyof typeof LOGICAL_OPERATORS];
type EN_ARITHMETIC_OPERATOR =
    (typeof ARITHMETIC_OPERATORS)[keyof typeof ARITHMETIC_OPERATORS];
type EN_COMPARER_OPERATOR =
    (typeof COMPARER_OPERATORS)[keyof typeof COMPARER_OPERATORS];

// 전체 연산자 타입
type EN_OPERATOR_TYPE =
    | EN_LOGICAL_OPERATOR
    | EN_ARITHMETIC_OPERATOR
    | EN_COMPARER_OPERATOR;

// precedence와 operator를 맵핑
const OPERATOR_PRECEDENCE: Record<EN_OPERATOR_TYPE, number> = {
    [LOGICAL_OPERATORS.AND]: 1,
    [LOGICAL_OPERATORS.OR]: 1,
    [COMPARER_OPERATORS.EQUAL]: 2,
    [ARITHMETIC_OPERATORS.MULTIPLY]: 3,
    [ARITHMETIC_OPERATORS.DIVIDE]: 3,
    [ARITHMETIC_OPERATORS.PLUS]: 4,
    [ARITHMETIC_OPERATORS.MINUS]: 4,
} as const;

function operatorPrecedence(operator: EN_OPERATOR_TYPE): number {
    const precedence = OPERATOR_PRECEDENCE[operator];

    if (precedence === undefined) {
        throw new Error(`not found operator`);
    }

    return precedence;
}

enum EN_FLOW_VALUE_TYPE {
    String = 'string',
    Decimal = 'decimal',
    Any = 'any',
    Date = 'date',
    DateTime = 'datetime',
}

interface IFlowAst {
    /*
    * 각 node 의 sequence id
    sid rule: EN*FLOW_TYPE + '*' + 난수(8자리)
    */
    sid: string;
}

interface IFlowAstStatement extends IFlowAst {
    type: EN_FLOW_AST;
}

interface IFlowAstExpression extends IFlowAst {
    type: EN_FLOW_AST;
}

interface IFlowAstProgram extends IFlowAst {
    type: EN_FLOW_AST.Program;
    body: IFlowAstMetadataStatement[];
}

//statement
/*
 * 각 문단을 구분짖기 위해 사용
 */
interface IFlowAstMetadataStatement extends IFlowAstStatement {
    type: EN_FLOW_AST.MetadataStatement;
    statement: IFlowAstStatement;
}

/*
 * 조건을 나타내기 위해 사용
 */
interface IFlowAstIfStatement extends IFlowAstStatement {
    type: EN_FLOW_AST.IfStatement;
    consequent: IFlowAstStatement;
    alternate?: IFlowAstStatement;
}

/*
 * 결과를 나타내기 위해 사용
 * 단, EN_FLOW_VALUE_TYPE 이 적용되지 않는 case 에 사용
 * ex) expressions 에 명시되는 값은 모두 문자열 취급된다.
 */
interface IFlowAstCombinationStatement extends IFlowAstStatement {
    type: EN_FLOW_AST.CombinationStatement;
    expressions: IFlowAstExpression[];
}
/*
 * 결과를 나타내기 위해 사용
 * EN_FLOW_VALUE_TYPE 이 적용되는 case 에 사용
 */
interface IFlowAstResultStatement extends IFlowAstStatement {
    type: EN_FLOW_AST.ResultStatement;
    value: IFlowAstExpression;
    value_type: EN_FLOW_VALUE_TYPE;
}

//expression
interface IFlowAstBinaryExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.BinaryExpression;
    left: IFlowAstExpression;
    operator: EN_OPERATOR_TYPE;
    right: IFlowAstExpression;
}
interface IFlowAstCallExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.CallExpression;
    callee: `${EN_FLOW_UI_PROVIDER}.${EN_FLOW_FUNCTION}` | 'any';
    arguments: Record<string, any>;
    return_type: EN_FLOW_RETURNTYPE;
}
interface IFlowAstArrayExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    expressions: IFlowAstExpression[];
}
interface IFlowAstObjectExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    value: IFlowAstPropertyExpression[];
}
interface IFlowAstPropertyExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    key: IFlowAstLiteralExpression;
    value: IFlowAstExpression;
}
interface IFlowAstLiteralExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    value: IFlowAstExpression;
    value_type: EN_FLOW_VALUE_TYPE;
}
interface IFlowAstOperatorExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    kind: EN_OPERATOR_TYPE;
}
interface IFlowAstBracketExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.ResultStatement;
    kind: EN_BRACKET_TYPE;
}
