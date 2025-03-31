const bracketexpressionInASTData = {
    type: 'program',
    sid: 'program_12345678',
    body: [
        // case1: 1 + 2 = 10
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
                        type: 'binaryexpression',
                        sid: 'binary_12345602',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345601',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345602',
                            value: '2',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345603',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345601',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345604',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case2: (1 + 2) * 3 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345602',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345602',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345603',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345604',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345605',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345605',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345606',
                                value: '2',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345607',
                            value: '3',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345608',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345602',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345609',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case3: (1 + 2 - 3) * 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345603',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345603',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345606',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345607',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345608',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345609',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345610',
                                    value: '1',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345611',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '-',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345612',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345613',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345614',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345603',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345615',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case4: 1 * (2 + 3) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345604',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345604',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345610',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345611',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345616',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '*',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345612',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345617',
                                value: '2',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345618',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345619',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345604',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345620',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case5: 1 * (2 + 3) / 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345605',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345605',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345613',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345614',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345615',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345621',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '*',
                            right: {
                                type: 'binaryexpression',
                                sid: 'binary_12345616',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345622',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345623',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                        },
                        operator: '/',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345624',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345605',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case6: ((1 + 2) * 3) / 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345606',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345606',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345601',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345602',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345603',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345604',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345601',
                                    value: '1',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345602',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '*',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345603',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                        operator: '/',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345604',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345605',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345606',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345606',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case7: 1 + ((2 * 3) / 4) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345607',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345607',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345605',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345606',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345607',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345607',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345608',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345608',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                                operator: '*',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345609',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '/',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345610',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345611',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345607',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345612',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case8: ((1 + 2) * 3) / 4 + 10 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345608',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345608',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345609',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345610',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345611',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345612',
                                left: {
                                    type: 'binaryexpression',
                                    sid: 'binary_12345613',
                                    left: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345613',
                                        value: '1',
                                        value_type: 'decimal',
                                    },
                                    operator: '+',
                                    right: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345614',
                                        value: '2',
                                        value_type: 'decimal',
                                    },
                                },
                                operator: '*',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345615',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '/',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345616',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                        operator: '+',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345617',
                            value: '10',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345618',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345608',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345619',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case9: 1 + ((2 * 3) / 4) * 10 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345609',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345609',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345614',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345615',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345620',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345616',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345617',
                                left: {
                                    type: 'binaryexpression',
                                    sid: 'binary_12345618',
                                    left: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345621',
                                        value: '2',
                                        value_type: 'decimal',
                                    },
                                    operator: '*',
                                    right: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345622',
                                        value: '3',
                                        value_type: 'decimal',
                                    },
                                },
                                operator: '/',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345623',
                                    value: '4',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '*',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345624',
                                value: '10',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345609',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case10: (1 + 2) * (3 - 4) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345610',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345610',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345619',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345620',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345621',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345627',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345628',
                                value: '2',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345622',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345629',
                                value: '3',
                                value_type: 'decimal',
                            },
                            operator: '-',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345630',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345631',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345610',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345632',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
    ],
};

const flow_display_value = {
    meta_12345601: {},
    meta_12345602: {
        binary_12345605: {
            create_bracket: true,
        },
    },
    meta_12345603: {
        binary_12345608: {
            create_bracket: true,
        },
    },
    meta_12345604: {
        binary_12345612: {
            create_bracket: true,
        },
    },
    meta_12345605: {
        binary_12345616: {
            create_bracket: true,
        },
    },
    meta_12345606: {
        binary_12345604: {
            create_bracket: true,
        },
        binary_12345603: {
            create_bracket: true,
        },
    },
    meta_12345607: {
        binary_12345607: {
            create_bracket: true,
        },
        binary_12345608: {
            create_bracket: true,
        },
    },
    meta_12345608: {
        binary_12345613: {
            create_bracket: true,
        },
        binary_12345612: {
            create_bracket: true,
        },
    },
    meta_12345609: {
        binary_12345618: {
            create_bracket: true,
        },
        binary_12345617: {
            create_bracket: true,
        },
    },
    meta_12345610: {
        binary_12345621: {
            create_bracket: true,
        },
        binary_12345622: {
            create_bracket: true,
        },
    },
};

//delete bracketexpression in ast
const deletebracketexpressionInASTData = {
    type: 'program',
    sid: 'program_12345678',
    body: [
        // case1: 1 + 2 = 10
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
                        type: 'binaryexpression',
                        sid: 'binary_12345602',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345601',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345602',
                            value: '2',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345603',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345601',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345604',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case2: (1 + 2) * 3 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345602',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345602',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345603',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345604',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345605',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345605',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345606',
                                value: '2',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345607',
                            value: '3',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345608',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345602',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345609',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case3: (1 + 2 - 3) * 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345603',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345603',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345606',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345607',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345608',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345609',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345610',
                                    value: '1',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345611',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '-',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345612',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345613',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345614',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345603',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345615',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case4: 1 * (2 + 3) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345604',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345604',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345610',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345611',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345616',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '*',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345612',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345617',
                                value: '2',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345618',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345619',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345604',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345620',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case5: 1 * (2 + 3) / 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345605',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345605',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345613',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345614',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345615',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345621',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '*',
                            right: {
                                type: 'binaryexpression',
                                sid: 'binary_12345616',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345622',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345623',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                        },
                        operator: '/',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345624',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345605',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case6: ((1 + 2) * 3) / 4 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345606',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345606',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345601',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345602',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345603',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345604',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345601',
                                    value: '1',
                                    value_type: 'decimal',
                                },
                                operator: '+',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345602',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '*',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345603',
                                value: '3',
                                value_type: 'decimal',
                            },
                        },
                        operator: '/',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345604',
                            value: '4',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345605',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345606',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345606',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case7: 1 + ((2 * 3) / 4) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345607',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345607',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345605',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345606',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345607',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345607',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345608',
                                left: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345608',
                                    value: '2',
                                    value_type: 'decimal',
                                },
                                operator: '*',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345609',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '/',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345610',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345611',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345607',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345612',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case8: ((1 + 2) * 3) / 4 + 10 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345608',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345608',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345609',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345610',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345611',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345612',
                                left: {
                                    type: 'binaryexpression',
                                    sid: 'binary_12345613',
                                    left: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345613',
                                        value: '1',
                                        value_type: 'decimal',
                                    },
                                    operator: '+',
                                    right: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345614',
                                        value: '2',
                                        value_type: 'decimal',
                                    },
                                },
                                operator: '*',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345615',
                                    value: '3',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '/',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345616',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                        operator: '+',
                        right: {
                            type: 'literalexpression',
                            sid: 'literal_12345617',
                            value: '10',
                            value_type: 'decimal',
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345618',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345608',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345619',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case9: 1 + ((2 * 3) / 4) * 10 = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345609',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345609',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345614',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345615',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345620',
                            value: '1',
                            value_type: 'decimal',
                        },
                        operator: '+',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345616',
                            left: {
                                type: 'binaryexpression',
                                sid: 'binary_12345617',
                                left: {
                                    type: 'binaryexpression',
                                    sid: 'binary_12345618',
                                    left: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345621',
                                        value: '2',
                                        value_type: 'decimal',
                                    },
                                    operator: '*',
                                    right: {
                                        type: 'literalexpression',
                                        sid: 'literal_12345622',
                                        value: '3',
                                        value_type: 'decimal',
                                    },
                                },
                                operator: '/',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345623',
                                    value: '4',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '*',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345624',
                                value: '10',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345625',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345609',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345626',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
        // case10: (1 + 2) * (3 - 4) = 10
        {
            type: 'metadatastatement',
            sid: 'meta_12345610',
            statement: {
                type: 'ifstatement',
                sid: 'if_12345610',
                test: {
                    type: 'binaryexpression',
                    sid: 'binary_12345619',
                    left: {
                        type: 'binaryexpression',
                        sid: 'binary_12345620',
                        left: {
                            type: 'binaryexpression',
                            sid: 'binary_12345621',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345627',
                                value: '1',
                                value_type: 'decimal',
                            },
                            operator: '+',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345628',
                                value: '2',
                                value_type: 'decimal',
                            },
                        },
                        operator: '*',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345622',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345629',
                                value: '3',
                                value_type: 'decimal',
                            },
                            operator: '-',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345630',
                                value: '4',
                                value_type: 'decimal',
                            },
                        },
                    },
                    operator: '=',
                    right: {
                        type: 'literalexpression',
                        sid: 'literal_12345631',
                        value: '10',
                        value_type: 'decimal',
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345610',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345632',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
    ],
};
