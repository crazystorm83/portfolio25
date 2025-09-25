import { Disposable } from '../../../implements/dispose/Disposable';

export interface IBaseLogger {}

export abstract class BaseLogger extends Disposable implements IBaseLogger {
    dispose(): void {
        throw new Error('Method not implemented.');
    }
}
