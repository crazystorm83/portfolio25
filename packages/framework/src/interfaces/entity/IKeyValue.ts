import { $$txt } from '@framework/datatypes';

export interface IKeyValue {
    add<TPayload = any, TResult = any>(key: $$txt, value: TPayload): TResult;
    remove<TPayload = any, TResult = any>(key: $$txt, value: TPayload): TResult;
    has<TPayload = any, TResult = boolean>(
        key: $$txt,
        value: TPayload
    ): TResult;
}
