import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface ITdProps extends IReactNode {}

export const Td = forwardRef<HTMLDivElement, ITdProps>(function Td(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <td>{props.children}</td>;
        }

        return <td></td>;
    }, []);
    return render();
});
