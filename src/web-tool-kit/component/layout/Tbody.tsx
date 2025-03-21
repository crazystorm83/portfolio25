import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITbodyProps extends IReactNode {}

export const Tbody = forwardRef<HTMLDivElement, ITbodyProps>(function Tbody(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <tbody>{props.children}</tbody>;
        }

        return <tbody></tbody>;
    }, []);
    return render();
});
