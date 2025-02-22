import React from 'react';

import { forwardRef } from 'react';

export interface IImageProps {}

export const Image = forwardRef<SVGImageElement, IImageProps>(function Image(
    props,
    ref
) {
    return (
        <image
            {...props}
            ref={ref}
        />
    );
});
