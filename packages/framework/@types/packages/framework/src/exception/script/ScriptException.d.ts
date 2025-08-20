import { Exception } from '@framework/exception/Exception';
export declare class ScriptException extends Exception {
    throw<TPayload>(payload: TPayload): void;
}
