import React, {
    ChangeEventHandler,
    FocusEvent,
    FormEventHandler,
    KeyboardEventHandler,
} from 'react';
import { forwardRef } from 'react';
import { ClassBuilder, StyleBuilder } from '../../interfaces';

export interface IInputProps {
    onInput?: FormEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;

    onClassBuilder?: ClassBuilder;
    onStyleBuilder?: StyleBuilder;

    value: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            value,
            onInput,
            onChange,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            ...rest
        }: IInputProps,
        ref
    ) => {
        return (
            <input
                type="text"
                value={value}
                onInput={onInput}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
                {...rest}
                ref={ref}
            />
        );
    }
);
