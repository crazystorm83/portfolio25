import { IList } from '../../../../interfacies';

export abstract class BaseList implements IList {
    abstract add<TPayload = any, TResult = any>(payload: TPayload): TResult;
    abstract remove<TPayload, TResult>(payload: TPayload): TResult;
    abstract has<TPayload, TResult = boolean>(payload: TPayload): TResult;
}
