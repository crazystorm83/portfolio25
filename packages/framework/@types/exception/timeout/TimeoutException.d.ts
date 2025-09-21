import { Exception } from '../Exception';
export type TimeoutExceptionPayload = {
    message: string;
};
export declare function throwTimeoutException(payload: TimeoutExceptionPayload): void;
export declare class TimeoutException extends Exception {
    throw<TPayload extends TimeoutExceptionPayload>(payload: TPayload): void;
}
