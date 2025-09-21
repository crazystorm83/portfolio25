import { Disposable } from "../implements";
export interface IException {
    throw<TPayload extends ExceptionThrowPayload<TPayload>>(payload: TPayload): void;
}
export type ExceptionThrowPayload<TPayload> = {
    message: string;
};
export declare abstract class Exception extends Disposable implements IException {
    constructor();
    [Symbol.dispose](): void;
    abstract throw<TPayload extends ExceptionThrowPayload<TPayload>>(payload: TPayload): void;
}
