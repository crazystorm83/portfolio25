import React from 'react';

import { forwardRef } from 'react';

export interface IRadioProps {}

export const Radio = forwardRef<HTMLInputElement, IRadioProps>(function Radio(
    props,
    ref
) {
    return (
        <input
            type="radio"
            {...props}
            ref={ref}
        />
    );
});
