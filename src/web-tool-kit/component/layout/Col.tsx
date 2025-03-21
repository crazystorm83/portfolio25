import React from 'react';
import { forwardRef } from 'react';

export interface IColProps {}

export const Col = forwardRef<HTMLTableColElement, IColProps>(
    (_props: IColProps, _ref) => {
        return <col></col>;
    }
);
