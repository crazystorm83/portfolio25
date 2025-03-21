import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface IColgroupProps extends IReactNode {}

export const Colgroup = forwardRef<any, IColgroupProps>(
    ({ children }: IColgroupProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <colgroup>{children}</colgroup>;
            }
            return <colgroup></colgroup>;
        }, [children]);
        return render();
    }
);
