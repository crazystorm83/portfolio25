import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITableProps extends IReactNode {}

export const Table = forwardRef<HTMLDivElement, ITableProps>(
    ({ children }: ITableProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <table>{children}</table>;
            }
            return <table></table>;
        }, [children]);
        return render();
    }
);
