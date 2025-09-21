import { Disposable } from '../../implements';
import { IDelegator } from '../../interfaces/events/IDelegator';
export declare class Delegator extends Disposable implements IDelegator {
    private eventMap;
    private onceMap;
    constructor();
    [Symbol.dispose](): void;
    on<T = any>(eventName: string, handler: (data: T) => void): void;
    off(eventName: string, handler?: Function): void;
    emit<T = any>(eventName: string, data?: T): void;
    once<T = any>(eventName: string, handler: (data: T) => void): void;
}
