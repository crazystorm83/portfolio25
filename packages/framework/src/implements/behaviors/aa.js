/**
 * input: A && B || C && 1 + 2 = 3 || D || 10 * 11 + 12 || E
 * output: 
 * {
 *      type: 'BinaryExpression',
 *      left: {
 *          type: 'TargetExpression',
 *          prop_id: 'A'
 *          data_id: '',
 *      },
 *      operator: '&&',
 *      right: {
 *          type: 'BinaryExpression',
 *          left: {
 *              type: 'TargetExpression',
 *              prop_id: 'B'
 *              data_id: '',
 *          },
 *          operator: '||',
 *          right: {
 *              type: 'BinaryExpression',
 *              left: {
 *                  type: 'TargetExpression',
 *                  prop_id: 'C'
 *                  data_id: '',
 *              },
 *              operator: '&&',
 *              right: {
 *                  type: 'BinaryExpression',
 *                  left: {
 *                      type: 'Literal',
 *                      value: '1',
 *                      value_type: 'decimal'
 *                  },
 *                  operator: '+',
 *                  right: {
 *                      type: 'BinaryExpression',
 *                      left: {
 *                          type: 'Literal',
 *                          value: '2',
 *                          value_type: 'decimal'
 *                      },
 *                      operator: '=',
 *                      right: {
 *                          type: 'Literal',
 *                          value: '3',
 *                          value_type: 'decimal'
 *                      }
 *                  }
 *              }
 *          }
 *      }
 * }
 */
(() => {
    const data = [
        {
            flow_type: 'target',
            value: 'A',
            depth: 0,
        },
        {
            flow_type: 'operator',
            value: '&&',
            depth: 0,
        },
        {
            flow_type: 'target',
            value: 'B',
            depth: 0,
        },
        {
            flow_type: 'operator',
            value: '||',
            depth: 0,
        },
        {
            flow_type: 'target',
            value: 'C',
            depth: 0,
        },
        {
            flow_type: 'operator',
            value: '&&',
            depth: 0,
        },
        {
            flow_type: 'literal',
            value: '1',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '+',
            depth: 0,
        },
        {
            flow_type: 'literal',
            value: '2',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '=',
            depth: 0,
        },
        {
            flow_type: 'literal',
            value: '3',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '||',
            depth: 0,
        },
        {
            flow_type: 'target',
            value: 'D',
            depth: 0,
        },
        {
            flow_type: 'operator',
            value: '||',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'literal',
            value: '10',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '*',
            depth: 0,
        },
        {
            flow_type: 'literal',
            value: '11',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '+',
            depth: 0,
        },
        {
            flow_type: 'literal',
            value: '12',
            depth: 0,
            value_type: 'decimal',
        },
        {
            flow_type: 'operator',
            value: '||',
            depth: 0,
        },
        {
            flow_type: 'target',
            value: 'E',
            depth: 0,
        },
    ];
})();
