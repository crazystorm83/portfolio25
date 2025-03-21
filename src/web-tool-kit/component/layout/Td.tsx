import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITdProps extends IReactNode {}

export const Td = forwardRef<HTMLDivElement, ITdProps>(
    ({ children }: ITdProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <td>{children}</td>;
            }
            return <td></td>;
        }, [children]);
        return render();
    }
);
