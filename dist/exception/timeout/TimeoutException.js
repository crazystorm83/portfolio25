import { Exception } from '../Exception';
export class TimeoutException extends Exception {
    throw(payload) {
        throw new Error('Method not implemented.');
    }
}
