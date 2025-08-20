import { Exception } from '../Exception';
export class ScriptException extends Exception {
    throw(payload) {
        throw new Error('Method not implemented.');
    }
}
