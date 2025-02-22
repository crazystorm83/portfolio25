import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface ITrProps extends IReactNode {}

export const Tr = forwardRef<HTMLTableRowElement, ITrProps>(function Tr(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <tr>{props.children}</tr>;
        }

        return <tr></tr>;
    }, []);
    return render();
});
