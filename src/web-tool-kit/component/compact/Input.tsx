import React, {
    ChangeEvent, //+
    ChangeEventHandler,
    FocusEvent,
    FormEvent,
    KeyboardEvent,
    KeyboardEventHandler,
    useCallback,
} from 'react';

import { forwardRef } from 'react';
import { ClassBuilder, StyleBuilder } from '../../interfacies';

export interface IInputProps {
    onInput?: (event: InputEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;

    onClassBuilder?: ClassBuilder;
    onStyleBuilder?: StyleBuilder;

    value: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
    props,
    ref
) {
    const onInput = useCallback((event: KeyboardEvent<HTMLInputElement>) => {},
    []);
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {},
    []);
    const onFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {},
    []);
    const onBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {}, []);
    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {},
        []
    );
    const onKeyPress = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {},
        []
    );
    const onKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement>) => {},
    []);
    return (
        <input
            type="checkbox"
            value={props.value}
            onInput={onInput}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            ref={ref}
        />
    );
});
