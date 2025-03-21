import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ISelectProps extends IReactNode {}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
    ({ children, ...rest }: ISelectProps, ref) => {
        const render = useCallback(() => {
            if (children) {
                return (
                    <select
                        {...rest}
                        ref={ref}>
                        {children}
                    </select>
                );
            }
            return (
                <select
                    {...rest}
                    ref={ref}>
                    <option></option>
                </select>
            );
        }, [children, rest, ref]);
        return render();
    }
);
