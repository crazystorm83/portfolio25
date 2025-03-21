import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITrProps extends IReactNode {}

export const Tr = forwardRef<HTMLTableRowElement, ITrProps>(
    ({ children }: ITrProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <tr>{children}</tr>;
            }
            return <tr></tr>;
        }, [children]);
        return render();
    }
);
