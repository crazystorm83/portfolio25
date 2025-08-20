import { IDelegator } from '@framework/interfaces';
export declare class Delegator implements IDelegator {
    private eventMap;
    private onceMap;
    constructor();
    on<T = any>(eventName: string, handler: (data: T) => void): void;
    off(eventName: string, handler?: Function): void;
    emit<T = any>(eventName: string, data?: T): void;
    once<T = any>(eventName: string, handler: (data: T) => void): void;
}
//# sourceMappingURL=Delegator.d.ts.map