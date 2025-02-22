import { Exception } from '../Exception';

export class ScriptException extends Exception {
    throw<TPayload>(payload: TPayload): void {
        throw new Error('Method not implemented.');
    }
}
