export function tfoot() {
    
}import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface ITfootProps extends IReactNode {}

export const Tfoot = forwardRef<HTMLDivElement, ITfootProps>(function Tfoot(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <tfoot>{props.children}</tfoot>;
        }

        return <tfoot></tfoot>;
    }, []);
    return render();
});
