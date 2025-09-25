import { Exception } from '../Exception';

export type TimeoutExceptionPayload = {
    message: string;
};

export function throwTimeoutException(payload: TimeoutExceptionPayload) {
    throw new Error(payload.message);
}

export class TimeoutException extends Exception {
    throw<TPayload extends TimeoutExceptionPayload>(payload: TPayload): void {
        throw new Error(payload.message);
    }
}
