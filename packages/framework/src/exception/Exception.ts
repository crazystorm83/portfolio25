import { Disposable } from '../implements';

export interface IException {
    throw<TPayload extends ExceptionThrowPayload<TPayload>>(
        payload: TPayload,
    ): void;
}

export type ExceptionThrowPayload<TPayload> = {
    message: string;
};

export abstract class Exception extends Disposable implements IException {
    constructor() {
        super();
    }

    dispose(): void {
        throw new Error('Method not implemented.');
    }

    abstract throw<TPayload extends ExceptionThrowPayload<TPayload>>(
        payload: TPayload,
    ): void;
}
