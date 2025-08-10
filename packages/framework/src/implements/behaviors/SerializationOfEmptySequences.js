function serializationOfEmptySequences(payload) {
    //빈순번 직렬화
    const { datas } = payload;

    debugger;
    if (Array.isArray(datas)) {
        const clone_datas = Object.assign([], datas);
        const found_datas = datas.filter(
            (data) => data.paths.join('/') === datas[0].paths.join('/')
        );
        if (datas.length === found_datas.length && datas[0].depth > 0) {
            //전체가 같은 depth이면 초기화
            datas.forEach((data) => {
                data.depth = 0;
            });
            return;
        }

        for (const data of datas) {
            processingOfEmptySerializationSingletons({
                data: data,
                allData: clone_datas,
            });
        }
    } else {
        datas.depth = 0;
    }
}

function processingOfEmptySerializationSingletons(payload) {
    //빈순번 직렬화 단건 처리
    const { data, allData } = payload;

    if (data.depth === 0) {
        return;
    }

    const paths = [...data.paths];

    for (let i = paths.length - 1; i >= 0; i--) {
        const path = paths[i];
        const found_datas = allData.filter(
            (data) => data.paths.indexOf(path) > -1
        );
        /**************************************
         * 본인만 있으면 하위의 depth 다시 찾기
         **************************************/
        if (found_datas.length === 1) continue;

        const min_depth = Math.min(...found_datas.map((data) => data.depth));
        data.depth = min_depth;
        break;
    }
}

/**
 * input depth: [0, 0, 0]
 * outpu depth: [0, 0, 0]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_2',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 0 ? 'success' : 'fail'
    );
})('case1');

/**
 * input depth: [1, 1, 1]
 * outpu depth: [0, 0, 0]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_2',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 0 ? 'success' : 'fail'
    );
})('case2');

/**
 * input depth: [1, 1, 1, 1, 1, 1, 1]
 * outpu depth: [0, 0, 0, 0, 0, 0, 0]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_2',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 4번째 결과: %s',
        name,
        data[3].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 5번째 결과: %s',
        name,
        data[4].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 6번째 결과: %s',
        name,
        data[5].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 7번째 결과: %s',
        name,
        data[6].depth === 0 ? 'success' : 'fail'
    );
})('case2-1');

/**
 * input depth: [1, 0, 1]
 * outpu depth: [0, 0, 0]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_2',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_2'],
        },
        {
            parent_sid: null,
            sid: 'sid_2',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_3',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_3'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 0 ? 'success' : 'fail'
    );
})('case3');

/**
 * input depth: [1, 0, 2, 1, 2]
 * outpu depth: [0, 0, 1, 1, 1]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_x_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_x_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_100',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_z_1',
            depth: 2,
            paths: ['group_sid_1', 'group_sid_y_1', 'group_sid_z_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_4',
            group_sid: 'group_sid_y_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_y_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_5',
            group_sid: 'group_sid_v_1',
            depth: 2,
            paths: ['group_sid_1', 'group_sid_y_1', 'group_sid_v_1'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 4번째 결과: %s',
        name,
        data[3].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 5번째 결과: %s',
        name,
        data[4].depth === 1 ? 'success' : 'fail'
    );
})('case4');

/**
 * input depth: [1, 0, 8, 1, 2]
 * outpu depth: [0, 0, 1, 1, 1]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_x_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_x_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_100',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_d_1',
            depth: 8,
            paths: [
                'group_sid_1',
                'group_sid_y_1',
                'group_sid_z_1',
                'group_sid_a_1',
                'group_sid_b_1',
                'group_sid_c_1',
                'group_sid_d_1',
            ],
        },
        {
            parent_sid: null,
            sid: 'sid_4',
            group_sid: 'group_sid_y_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_y_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_5',
            group_sid: 'group_sid_v_1',
            depth: 2,
            paths: ['group_sid_1', 'group_sid_y_1', 'group_sid_v_1'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 4번째 결과: %s',
        name,
        data[3].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 5번째 결과: %s',
        name,
        data[4].depth === 1 ? 'success' : 'fail'
    );
})('case5');

/**
 * input depth: [1, 1, 1, 0, 8, 1, 2]
 * outpu depth: [1, 1, 1, 0, 1, 1, 1]
 */
((name) => {
    const data = [
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_x_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_x_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_x_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_x_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_1',
            group_sid: 'group_sid_x_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_x_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_100',
            group_sid: 'group_sid_1',
            depth: 0,
            paths: ['group_sid_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_3',
            group_sid: 'group_sid_d_1',
            depth: 8,
            paths: [
                'group_sid_1',
                'group_sid_y_1',
                'group_sid_z_1',
                'group_sid_a_1',
                'group_sid_b_1',
                'group_sid_c_1',
                'group_sid_d_1',
            ],
        },
        {
            parent_sid: null,
            sid: 'sid_4',
            group_sid: 'group_sid_y_1',
            depth: 1,
            paths: ['group_sid_1', 'group_sid_y_1'],
        },
        {
            parent_sid: null,
            sid: 'sid_5',
            group_sid: 'group_sid_v_1',
            depth: 2,
            paths: ['group_sid_1', 'group_sid_y_1', 'group_sid_v_1'],
        },
    ];

    serializationOfEmptySequences({ datas: data });
    console.log(
        '%s 1번째 결과: %s',
        name,
        data[0].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 2번째 결과: %s',
        name,
        data[1].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 3번째 결과: %s',
        name,
        data[2].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 4번째 결과: %s',
        name,
        data[3].depth === 0 ? 'success' : 'fail'
    );
    console.log(
        '%s 5번째 결과: %s',
        name,
        data[4].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 6번째 결과: %s',
        name,
        data[5].depth === 1 ? 'success' : 'fail'
    );
    console.log(
        '%s 7번째 결과: %s',
        name,
        data[6].depth === 1 ? 'success' : 'fail'
    );
})('case6');
