import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface ISelectProps extends IReactNode {
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
    function Select(props, ref) {
        const render = useCallback(() => {
            if (props.children) {
                return (
                    <select
                        {...props}
                        ref={ref}>
                        ${props.children}
                    </select>
                );
            }

            <select
                {...props}
                ref={ref}>
                <option></option>
            </select>;
        }, []);
        return render();
    }
);
