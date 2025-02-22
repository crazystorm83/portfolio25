export interface IList {
    add<TPayload = any, TResult = any>(payload: TPayload): TResult;
    remove<TPayload = any, TResult = any>(payload: TPayload): TResult;
    has<TPayload = any, TResult = boolean>(payload: TPayload): TResult;
}
