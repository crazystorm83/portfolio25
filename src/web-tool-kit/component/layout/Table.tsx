import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface ITableProps extends IReactNode {}

export const Table = forwardRef<HTMLDivElement, ITableProps>(function Table(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <table>{props.children}</table>;
        }

        return <table></table>;
    }, []);
    return render();
});
