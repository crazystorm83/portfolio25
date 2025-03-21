import { IObserverIdentifier } from '../identifier';

export interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data?: any): void;
}

export interface IObserver extends IObserverIdentifier {
    update(data?: any): void;
}
