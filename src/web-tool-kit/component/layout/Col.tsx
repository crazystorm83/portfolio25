import React from 'react';

import { forwardRef } from 'react';

export interface IColProps {}

export const Col = forwardRef<HTMLTableColElement, IColProps>(function Col(
    props,
    ref
) {
    return <col></col>;
});
