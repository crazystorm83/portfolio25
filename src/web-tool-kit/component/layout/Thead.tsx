import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITheadProps extends IReactNode {}

export const Thead = forwardRef<HTMLDivElement, ITheadProps>(function Thead(
    props,
    ref
) {
    const render = useCallback(() => {
        if (props.children) {
            return <thead>{props.children}</thead>;
        }

        return <thead></thead>;
    }, []);
    return render();
});
