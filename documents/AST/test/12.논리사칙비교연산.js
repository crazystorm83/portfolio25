const bracketexpressionInASTData = {
    type: 'program',
    sid: 'program_12345678',
    body: [
        {
            //case8: 1 + ((2 * 3) / 4) - 5 = 10 OR (A AND B) OR (C AND D AND E)
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
                                        sid: 'literal_12345601',
                                        value: '1',
                                        value_type: 'decimal',
                                    },
                                    operator: '+',
                                    right: {
                                        type: 'binaryexpression',
                                        sid: 'binary_12345606',
                                        left: {
                                            type: 'binaryexpression',
                                            sid: 'binary_12345607',
                                            left: {
                                                type: 'literalexpression',
                                                sid: 'literal_12345602',
                                                value: '2',
                                                value_type: 'decimal',
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
                                },
                                operator: '-',
                                right: {
                                    type: 'literalexpression',
                                    sid: 'literal_12345605',
                                    value: '5',
                                    value_type: 'decimal',
                                },
                            },
                            operator: '=',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345606',
                                value: '10',
                                value_type: 'decimal',
                            },
                        },
                        operator: '||',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345608',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345607',
                                value: 'A',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345608',
                                value: 'B',
                                value_type: 'string',
                            },
                        },
                    },
                    operator: '||',
                    right: {
                        type: 'binaryexpression',
                        sid: 'binary_12345609',
                        left: {
                            type: 'literalexpression',
                            sid: 'literal_12345609',
                            value: 'C',
                            value_type: 'string',
                        },
                        operator: '&&',
                        right: {
                            type: 'binaryexpression',
                            sid: 'binary_12345610',
                            left: {
                                type: 'literalexpression',
                                sid: 'literal_12345610',
                                value: 'D',
                                value_type: 'string',
                            },
                            operator: '&&',
                            right: {
                                type: 'literalexpression',
                                sid: 'literal_12345611',
                                value: 'E',
                                value_type: 'string',
                            },
                        },
                    },
                },
                consequent: {
                    type: 'resultstatement',
                    sid: 'result_12345601',
                    value: {
                        type: 'literalexpression',
                        sid: 'literal_12345612',
                        value: '1',
                        value_type: 'decimal',
                    },
                },
            },
        },
    ],
};

const flow_display_value = {};

const deletebracketexpressionInASTData = {};
