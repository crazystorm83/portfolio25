//bracketexprssion in ast
const bracketexpressionInASTData = {
    type: 'program',
    sid: 'program_12345678',
    body: [
        // case1: A AND B
        {
            type: 'metadatastatement',
            sid: 'meta_12345601',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345601',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345601',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345601',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345602',
                        value: 'B',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345601',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345603',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case2: A AND B OR C
        {
            type: 'metadatastatement',
            sid: 'meta_12345602',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345602',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345602',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345603',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345604',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345605',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345606',
                        value: 'C',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345602',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345607',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case3: A AND B OR C AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345603',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345603',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345604',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345605',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345608',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345609',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345606',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345610',
                            value: 'C',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345611',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345603',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345612',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case4: (A AND B) OR (C AND D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345604',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345604',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345607',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345608',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345613',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345614',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345609',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345615',
                            value: 'C',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345616',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345604',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345617',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case5: A AND (B OR C) AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345605',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345605',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345610',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345611',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345618',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345612',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345619',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345620',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345621',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345605',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345622',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case6: (A AND B) OR C
        {
            type: 'metadatastatement',
            sid: 'meta_12345606',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345606',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345612',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345613',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345623',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345624',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: 'C',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345606',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case7: (A AND B AND C) OR D
        {
            type: 'metadatastatement',
            sid: 'meta_12345607',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345607',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345614',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345615',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345616',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345627',
                                value: 'A',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345628',
                                value: 'B',
                                value_type: 'string',
                            },
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345629',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345630',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345607',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345631',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case8: ((A AND B) OR C) AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345608',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345608',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345617',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345618',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345619',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345632',
                                value: 'A',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345633',
                                value: 'B',
                                value_type: 'string',
                            },
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345634',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345635',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345608',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345636',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case9: A AND (B OR C)
        {
            type: 'metadatastatement',
            sid: 'meta_12345609',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345609',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345620',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345637',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345621',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345638',
                            value: 'B',
                            value_type: 'string',
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345639',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345609',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345640',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case10: A AND (B OR C OR D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345610',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345610',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345622',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345641',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345623',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345624',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345642',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345643',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345644',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345610',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345645',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case11: A AND ((B OR C) AND D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345611',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345611',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345625',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345646',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345626',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345627',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345647',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345648',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345649',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345611',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345650',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
    ],
};

//flow_display_value
const flow_display_value = {
    meta_12345601: {},
    meta_12345602: {},
    meta_12345603: {},
    meta_12345604: {
        binary_12345608: {
            create_bracket: true,
        },
        binary_12345609: {
            create_bracket: true,
        },
    },
    meta_12345605: {
        binary_12345612: {
            create_bracket: true,
        },
    },
    meta_12345606: {
        binary_12345613: {
            create_bracket: true,
        },
    },
    meta_12345607: {
        binary_12345615: {
            create_bracket: true,
        },
    },
    meta_12345608: {
        binary_12345618: {
            create_bracket: true,
        },
    },
    meta_12345609: {
        binary_12345621: {
            create_bracket: true,
        },
    },
    meta_12345610: {
        binary_12345623: {
            create_bracket: true,
        },
    },
    meta_12345611: {
        binary_12345626: {
            create_bracket: true,
        },
        binary_12345627: {
            create_bracket: true,
        },
    },
};

//delete bracketexpression in ast
const deletebracketexpressionInASTData = {
    type: 'program',
    sid: 'program_12345678',
    body: [
        // case1: A AND B
        {
            type: 'metadatastatement',
            sid: 'meta_12345601',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345601',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345601',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345601',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345602',
                        value: 'B',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345601',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345603',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case2: A AND B OR C
        {
            type: 'metadatastatement',
            sid: 'meta_12345602',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345602',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345602',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345603',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345604',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345605',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345606',
                        value: 'C',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345602',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345607',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case3: A AND B OR C AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345603',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345603',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345604',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345605',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345608',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345609',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345606',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345610',
                            value: 'C',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345611',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345603',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345612',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case4: (A AND B) OR (C AND D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345604',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345604',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345607',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345608',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345613',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345614',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345609',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345615',
                            value: 'C',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345616',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345604',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345617',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case5: A AND (B OR C) AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345605',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345605',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345610',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345611',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345618',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345612',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345619',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345620',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345621',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345605',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345622',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case6: (A AND B) OR C
        {
            type: 'metadatastatement',
            sid: 'meta_12345606',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345606',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345612',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345613',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345623',
                            value: 'A',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345624',
                            value: 'B',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: 'C',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345606',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case7: (A AND B AND C) OR D
        {
            type: 'metadatastatement',
            sid: 'meta_12345607',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345607',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345614',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345615',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345616',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345627',
                                value: 'A',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345628',
                                value: 'B',
                                value_type: 'string',
                            },
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345629',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345630',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345607',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345631',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case8: ((A AND B) OR C) AND D
        {
            type: 'metadatastatement',
            sid: 'meta_12345608',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345608',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345617',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345618',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345619',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345632',
                                value: 'A',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345633',
                                value: 'B',
                                value_type: 'string',
                            },
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345634',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                    operator: '&&',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345635',
                        value: 'D',
                        value_type: 'string',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345608',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345636',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case9: A AND (B OR C)
        {
            type: 'metadatastatement',
            sid: 'meta_12345609',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345609',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345620',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345637',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345621',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345638',
                            value: 'B',
                            value_type: 'string',
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345639',
                            value: 'C',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345609',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345640',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case10: A AND (B OR C OR D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345610',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345610',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345622',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345641',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345623',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345624',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345642',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345643',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                        operator: '||',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345644',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345610',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345645',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case11: A AND ((B OR C) AND D)
        {
            type: 'metadatastatement',
            sid: 'meta_12345611',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345611',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345625',
                    left: {
                        type: 'literalexpression',
                        sid: 'literal_12345646',
                        value: 'A',
                        value_type: 'string',
                    },
                    operator: '&&',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345626',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345627',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345647',
                                value: 'B',
                                value_type: 'string',
                            },
                            operator: '||',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345648',
                                value: 'C',
                                value_type: 'string',
                            },
                        },
                        operator: '&&',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345649',
                            value: 'D',
                            value_type: 'string',
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345611',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345650',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
    ],
};
