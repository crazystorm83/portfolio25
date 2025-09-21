import { Disposable } from '../../implements';
import { IObserver, ISubject } from '../../interfaces/events/IObserver';
export declare class Subject extends Disposable implements ISubject {
    private observers;
    constructor();
    [Symbol.dispose](): void;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data?: any): void;
}
export declare abstract class Observer extends Disposable implements IObserver {
    protected subject?: Subject;
    constructor(subject?: Subject);
    abstract get id(): string;
    [Symbol.dispose](): void;
    abstract update(data?: any): void;
}
