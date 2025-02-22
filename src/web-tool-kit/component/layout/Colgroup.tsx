import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface IColgroupProps extends IReactNode {}

export const Colgroup = forwardRef<any, IColgroupProps>(function Colgroup(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <colgroup>{props.children}</colgroup>;
        }

        return <colgroup></colgroup>;
    }, []);

    return render();
});
