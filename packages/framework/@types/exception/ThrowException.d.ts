import { ExceptionIdentifier } from '../abstracts/identifier';
import { Exception, ExceptionThrowPayload } from './Exception';
export type ThrowExceptionPayload = ExceptionIdentifier & {
    message: string;
};
export declare function throwException(
    payload: ThrowExceptionPayload,
    condition?: boolean,
): asserts condition;
export declare class ThrowException extends Exception {
    throw<TPayload extends ExceptionThrowPayload<TPayload>>(
        payload: TPayload,
    ): void;
}
