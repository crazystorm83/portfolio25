import { IKeyValue } from '../../../../interfacies';

export abstract class BaseKeyValue implements IKeyValue {
    abstract add<TPayload = any, TResult = any>(
        key: string,
        value: TPayload
    ): TResult;
    abstract remove<TPayload = any, TResult = any>(
        key: string,
        value: TPayload
    ): TResult;
    abstract has<TPayload = any, TResult = boolean>(
        key: string,
        value: TPayload
    ): TResult;
}
