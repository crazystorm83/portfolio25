import React, { useCallback } from 'react';

import { forwardRef } from 'react';
import { IReactNode } from '../../interfacies';

export interface IAnchorProps extends IReactNode {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
}

export const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>(
    function Anchor(props, ref) {
        const render = useCallback(() => {
            if (props.children) {
                return (
                    <a
                        {...props}
                        ref={ref}>
                        ${props.children}
                    </a>
                );
            }

            <a
                {...props}
                ref={ref}></a>;
        }, []);

        return render();
    }
);
