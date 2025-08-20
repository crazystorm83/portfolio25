import { Exception } from '../Exception';
export declare class ScriptException extends Exception {
    throw<TPayload>(payload: TPayload): void;
}
