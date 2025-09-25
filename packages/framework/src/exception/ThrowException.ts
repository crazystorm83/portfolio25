import { ExceptionIdentifier } from '../abstracts/identifier';
import { Exception, ExceptionThrowPayload } from './Exception';

export type ThrowExceptionPayload = ExceptionIdentifier & {
    message: string;
};

/**
 * @param payload
 * @param condition if false, throw exception
 */
export function throwException(
    payload: ThrowExceptionPayload,
    condition?: boolean,
): asserts condition {
    if (condition) {
        return;
    }
    throw new Error(payload.message);
}

export class ThrowException extends Exception {
    throw<TPayload extends ExceptionThrowPayload<TPayload>>(payload: TPayload) {
        throw new Error(payload.message);
    }
}
