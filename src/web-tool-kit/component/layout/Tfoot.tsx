import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export function tfoot() {}

export interface ITfootProps extends IReactNode {}

export const Tfoot = forwardRef<HTMLDivElement, ITfootProps>(
    ({ children }: ITfootProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <tfoot>{children}</tfoot>;
            }
            return <tfoot></tfoot>;
        }, [children]);
        return render();
    }
);
