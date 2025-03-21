import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITbodyProps extends IReactNode {}

export const Tbody = forwardRef<HTMLDivElement, ITbodyProps>(
    ({ children }: ITbodyProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <tbody>{children}</tbody>;
            }
            return <tbody></tbody>;
        }, [children]);
        return render();
    }
);
