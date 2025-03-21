import { IObserver, ISubject } from '../../interfaces/events/IObserver';
import { $$txt } from '../../datatypes';
import { Identifier } from '../../abstracts';

export class Subject implements ISubject {
    private observers: Map<$$txt, IObserver> = new Map();

    public attach(observer: IObserver): void {
        this.observers.set(observer.id, observer);
    }

    public detach(observer: IObserver): void {
        this.observers.delete(observer.id);
    }

    public notify(data?: any): void {
        for (const observer of this.observers.values()) {
            observer.update(data);
        }
    }
}

export abstract class Observer extends Identifier implements IObserver {
    constructor(protected subject?: Subject) {
        super('');
        if (subject) {
            subject.attach(this);
        }
    }

    public abstract update(data?: any): void;
}
