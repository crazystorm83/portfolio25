import React from 'react';
import { forwardRef } from 'react';

export interface ICheckboxProps {}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    (props: ICheckboxProps, ref) => {
        return (
            <input
                type="checkbox"
                {...props}
                ref={ref}
            />
        );
    }
);
