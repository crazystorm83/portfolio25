import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface IDivProps extends IReactNode {}

export const Div = forwardRef<HTMLDivElement, IDivProps>(function Div(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <div>{props.children}</div>;
        }

        return <div></div>;
    }, []);
    return render();
});
