import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface IDivProps extends IReactNode {}

export const Div = forwardRef<HTMLDivElement, IDivProps>(
    ({ children }: IDivProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <div>{children}</div>;
            }
            return <div></div>;
        }, [children]);
        return render();
    }
);
