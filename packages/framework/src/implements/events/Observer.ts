import { $$txt } from '../../datatypes';
import { Disposable } from '../../implements/dispose/Disposable';
import { IObserver, ISubject } from '../../interfaces/events/IObserver';

export class Subject extends Disposable implements ISubject {
    private observers: Map<$$txt, IObserver> = new Map();

    constructor() {
        super();
    }

    dispose(): void {
        throw new Error('Method not implemented.');
    }

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

export abstract class Observer extends Disposable implements IObserver {
    constructor(protected subject?: Subject) {
        super();

        if (subject) {
            subject.attach(this);
        }
    }
    abstract get id(): string;

    dispose(): void {
        throw new Error('Method not implemented.');
    }

    public abstract update(data?: any): void;
}
