export interface IKeyValue {
    add<TPayload = any, TResult = any>(key: string, value: TPayload): TResult;
    remove<TPayload = any, TResult = any>(
        key: string,
        value: TPayload
    ): TResult;
    has<TPayload = any, TResult = boolean>(
        key: string,
        value: TPayload
    ): TResult;
}
