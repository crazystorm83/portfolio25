import { IObserver, ISubject } from '@framework/interfaces/events/IObserver';
import { Identifier } from '@framework/abstracts';
export declare class Subject implements ISubject {
    private observers;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data?: any): void;
}
export declare abstract class Observer extends Identifier implements IObserver {
    protected subject?: Subject | undefined;
    constructor(subject?: Subject | undefined);
    abstract update(data?: any): void;
}
