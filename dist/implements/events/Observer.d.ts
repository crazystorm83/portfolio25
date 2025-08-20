import { Identifier } from '../../abstracts/identifier/Identifier';
import { IObserver, ISubject } from '../../interfaces/events/IObserver';
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
