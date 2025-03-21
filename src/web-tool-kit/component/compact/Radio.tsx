import React from 'react';
import { forwardRef } from 'react';

export interface IRadioProps {}
export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
    (props: IRadioProps, ref) => {
        return (
            <input
                type="radio"
                {...props}
                ref={ref}
            />
        );
    }
);
