import React, { useCallback } from 'react';
import { forwardRef } from 'react';
import { IReactNode } from '../../interfaces';

export interface ITheadProps extends IReactNode {}

export const Thead = forwardRef<HTMLDivElement, ITheadProps>(
    ({ children }: ITheadProps, _ref) => {
        const render = useCallback(() => {
            if (children) {
                return <thead>{children}</thead>;
            }
            return <thead></thead>;
        }, [children]);
        return render();
    }
);
