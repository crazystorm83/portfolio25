//아래는 typescript 로 정의된 데이터를 흐름도로 만들어줘.

import { $$numeric, $$txt } from '@framework/datatypes';

enum EN_FLOW_AST {
    Program = 'program',

    MetadataStatement = 'metadatastatement',

    IfStatement = 'ifstatement',
    CombinationStatement = 'combinationstatement',
    ResultStatement = 'resultstatement',

    TargetExpression = 'targetexpression',
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

const enum EN_FLOW_PROVIDERS {
    decimal = 'decimal',
    code = 'code',
    string = 'string',
    date = 'date',
    datetime = 'datetime',
}

type EN_FLOW_PROVIDER =
    (typeof EN_FLOW_PROVIDERS)[keyof typeof EN_FLOW_PROVIDERS];

const enum EN_FLOW_UI_PROVIDERS {
    any = 'any',
}

type EN_FLOW_UI_PROVIDER =
    | (typeof EN_FLOW_UI_PROVIDERS)[keyof typeof EN_FLOW_UI_PROVIDERS]
    | EN_FLOW_PROVIDER;

const EN_FLOW_EQUAL_FUNCTIONS = {
    eq: 'eq' as const,
} as const;

const EN_FLOW_NOT_EQAUL_FUNCTIONS = {
    neq: 'neq' as const,
} as const;

const EN_FLOW_IS_EMPTY_FUNCTIONS = {
    isEmpty: 'isEmpty' as const,
} as const;

const EN_FLOW_IS_NOT_EMPTY_FUNCTIONS = {
    isNotEmpty: 'isNotEmpty' as const,
} as const;

const EN_FLOW_CONTAINS_TIME_FUNCTIONS = {
    containsTime: 'containsTime' as const,
} as const;

type EN_FLOW_EQUAL_FUNCTION =
    (typeof EN_FLOW_EQUAL_FUNCTIONS)[keyof typeof EN_FLOW_EQUAL_FUNCTIONS];
type EN_FLOW_NOT_EQAUL_FUNCTION =
    (typeof EN_FLOW_NOT_EQAUL_FUNCTIONS)[keyof typeof EN_FLOW_NOT_EQAUL_FUNCTIONS];

type EN_FLOW_IS_EMPTY_FUNCTION =
    (typeof EN_FLOW_IS_EMPTY_FUNCTIONS)[keyof typeof EN_FLOW_IS_EMPTY_FUNCTIONS];

type EN_FLOW_IS_NOT_EMPTY_FUNCTION =
    (typeof EN_FLOW_IS_NOT_EMPTY_FUNCTIONS)[keyof typeof EN_FLOW_IS_NOT_EMPTY_FUNCTIONS];

type EN_FLOW_CONTAINS_TIME_FUNCTION =
    (typeof EN_FLOW_CONTAINS_TIME_FUNCTIONS)[keyof typeof EN_FLOW_CONTAINS_TIME_FUNCTIONS];

type EN_FLOW_DECIMAL_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_CODE_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_STRING_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION
    | EN_FLOW_IS_EMPTY_FUNCTION
    | EN_FLOW_IS_NOT_EMPTY_FUNCTION;
type EN_FLOW_DATE_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION;
type EN_FLOW_DATETIME_FUNCTION =
    | EN_FLOW_EQUAL_FUNCTION
    | EN_FLOW_NOT_EQAUL_FUNCTION
    | EN_FLOW_CONTAINS_TIME_FUNCTION;

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
    NOT_EQUAL: '!=' as const,
    GREATER_THAN: '>' as const,
    LESS_THAN: '<' as const,
    GREATER_THAN_OR_EQUAL: '>=' as const,
    LESS_THAN_OR_EQUAL: '<=' as const,
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
const OPERATOR_PRECEDENCE: Record<EN_OPERATOR_TYPE, $$numeric> = {
    [LOGICAL_OPERATORS.AND]: 1,
    [LOGICAL_OPERATORS.OR]: 1,
    [COMPARER_OPERATORS.EQUAL]: 2,
    [COMPARER_OPERATORS.NOT_EQUAL]: 2,
    [COMPARER_OPERATORS.GREATER_THAN]: 2,
    [COMPARER_OPERATORS.LESS_THAN]: 2,
    [COMPARER_OPERATORS.GREATER_THAN_OR_EQUAL]: 2,
    [COMPARER_OPERATORS.LESS_THAN_OR_EQUAL]: 2,
    [ARITHMETIC_OPERATORS.MULTIPLY]: 3,
    [ARITHMETIC_OPERATORS.DIVIDE]: 3,
    [ARITHMETIC_OPERATORS.PLUS]: 4,
    [ARITHMETIC_OPERATORS.MINUS]: 4,
} as const;

function operatorPrecedence(operator: EN_OPERATOR_TYPE): $$numeric {
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
    sid rule: EN_FLOW_TYPE + '_' + 난수(8자리)
    */
    sid: $$txt;
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

interface IFlowAstTargetExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.TargetExpression;
    data_id: $$txt;
    prop_id: $$txt;
}

interface IFlowAstBinaryExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.BinaryExpression;
    left: IFlowAstExpression;
    operator: EN_OPERATOR_TYPE;
    right: IFlowAstExpression;
}
interface IFlowAstCallExpression extends IFlowAstExpression {
    type: EN_FLOW_AST.CallExpression;
    callee: `${EN_FLOW_UI_PROVIDER}.${EN_FLOW_FUNCTION}` | 'any';
    arguments:
        | DecimalEqualFunctionArgumentsSpecification
        | DecimalNotEqualFunctionArgumentsSpecification
        | CodeEqualFunctionArgumentsSpecification
        | CodeNotEqualFunctionArgumentsSpecification
        | StringEqualFunctionArgumentsSpecification
        | StringNotEqualFunctionArgumentsSpecification
        | StringIsEmptyFunctionArgumentsSpecification
        | StringIsNotEmptyFunctionArgumentsSpecification
        | DateEqualFunctionArgumentsSpecification
        | DateNotEqualFunctionArgumentsSpecification
        | DateTimeEqualFunctionArgumentsSpecification
        | DateTimeNotEqualFunctionArgumentsSpecification;
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

//함수 스펙 정의할 수 있는 데이터타입 정의해줘
type FunctionSpecification = {
    [K in `${EN_FLOW_PROVIDER}.${EN_FLOW_FUNCTION}`]: {
        value: string | number;
        format?: string;
        codes?: string[];
    };
};

type DecimalEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type DecimalNotEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type CodeEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type CodeNotEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type StringEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type StringNotEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type StringIsEmptyFunctionArgumentsSpecification = {
    target: IFlowAstExpression;
};

type StringIsNotEmptyFunctionArgumentsSpecification = {
    target: IFlowAstExpression;
};

type DateEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type DateNotEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type DateTimeEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type DateTimeNotEqualFunctionArgumentsSpecification = {
    left: IFlowAstExpression;
    right: IFlowAstExpression;
};

type DateTimeContainsTimeFunctionArgumentsSpecification = {
    target: IFlowAstExpression;
    time: IFlowAstExpression;
};

//AST Item

/**
 * IFlowAstItem 은 ITargetExpression 에 선택될 수 있는 항목의 목록이다.
 * IFlowAstItem 은 ICallExpression 의 args 에 선택될 수 있는 항목의 목록이다.
 *
 * IFlowAstItem 의 유일한 키는 data_id + '.' + prop_id 이다.
 *
 * 예)
 * [
 *  prop_id: $$txt
 *  attributes: [
 *      {
 *          prop_id: $$txt;
 *          attr_id: renderer_attrs.data_id;
 *          attr_type: EN_ATTR_TYPE.Renderer;
 *          data: $$txt;
 *      }
 *      {
 *          prop_id: $$txt;
 *          attr_id: renderer_attrs.codes;
 *          attr_type: EN_ATTR_TYPE.Renderer;
 *          data: $$multicode;
 *      }
 * ]
 */
interface IFlowAstItem {
    parent_id: IFlowAstBusinessItem['id'] | IFlowAstPropertyItem['id'];

    prop_id: $$txt;
    prop_name: $$txt;
    /**
     * renderer.data_id 를 필수로 가져야 한다.
     */
    attributes: IAttribute[];
}

interface IFlowAstBusinessItem {
    parent_id: IFlowAstPropertyItem['id'];

    id: EN_FLOW_BUSINESS_ITEM;
    resx: $$txt;
}

interface IFlowAstPropertyItem {
    parent_id: $$txt | null;

    id: $$txt;
    resx: $$txt;
}

interface IAttribute<T = any> {
    prop_id: $$txt;
    attr_id: $$txt;
    attr_type: EN_ATTR_TYPE;
    data: T;
}

const enum EN_FLOW_BUSINESS_ITEM {
    //정보불러오기
    LoadInformation = 'loadinformation',
}

const enum EN_ATTR_TYPE {
    Initializer = 'initializer',
    Information = 'information',
    Renderer = 'renderer',
    Validator = 'validator',
}

const renderer_attrs = {
    data_id: 'data_id',
    codes: 'codes',
    digit: 'digit',
    unit: 'unit',
} as const;

const flow_ast_items: IFlowAstItem[] = [
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'decimal',
        prop_name: '숫자',
        attributes: [
            {
                prop_id: 'decimal',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'string',
        prop_name: '문자',
        attributes: [
            {
                prop_id: 'string',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'code',
        prop_name: '코드',
        attributes: [
            {
                prop_id: 'code',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'date',
        prop_name: '일자',
        attributes: [
            {
                prop_id: 'date',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'datetime',
        prop_name: '일시',
        attributes: [
            {
                prop_id: 'datetime',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'date_format',
        prop_name: '일자포맷',
        attributes: [
            {
                prop_id: 'date_format',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
        ],
    },
    {
        parent_id: EN_FLOW_BUSINESS_ITEM.LoadInformation,
        prop_id: 'serial',
        prop_name: '시리얼',
        attributes: [
            {
                prop_id: 'serial',
                attr_id: renderer_attrs.data_id,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 'current',
            },
            {
                prop_id: 'serial',
                attr_id: renderer_attrs.digit,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 2,
            },
            {
                prop_id: 'serial',
                attr_id: renderer_attrs.unit,
                attr_type: EN_ATTR_TYPE.Renderer,
                data: 1,
            },
        ],
    },
];

/*
항목
    표현식: (TARGET)
    의미: IFlowAstItem 항목을 의미함.

함수
    표현식: (CALL:date.eq)(arg1, arg2)
    의미
        CAll: IFlowAstCallExpression 항목을 의미함.
        date: EN_FLOW_PROVIDER
        eq: EN_FLOW_FUNCTION
        arg1: IFlowAstItem
        arg2: IFlowAstItem | IFlowAstLiteralExpression

문자
    표현식: (LITERAL)값
    의미
        LITERAL: IFlowAstLiteralExpression 항목을 의미함.
        값: 쌍따옴표가 있으면 문자열, 없으면 숫자


//논리연산 case1
요구사항1 아래의 값을 AST 로 변환 후 JSON 형태로 만들어줘
case1
조건1: (TARGET)string AND (TARGET)string
참: 1

case2
조건1: (CALL:string.eq)((TARGET)string, '20250401') AND (TARGET)string
참: 1

case3
조건1: (CALL:string.isEmpty)((TARGET)string)
참: 1 

case4
결과: (TARGET)decimal

case5
결과: (LITERAL)1234567890

case6
결과: (LITERAL)"1234567890"


*/
