import { $$txt } from '@framework/datatypes';
import { IKeyValue } from '@framework/interfaces';

export abstract class AbsKeyValue implements IKeyValue {
    abstract add<TPayload = any, TResult = any>(
        key: $$txt,
        value: TPayload
    ): TResult;
    abstract remove<TPayload = any, TResult = any>(
        key: $$txt,
        value: TPayload
    ): TResult;
    abstract has<TPayload = any, TResult = boolean>(
        key: $$txt,
        value: TPayload
    ): TResult;
}
