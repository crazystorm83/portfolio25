import { IAttribute } from '../../framework';

export class HTMLAttribute implements IAttribute {
    add<TPayload = any, TResult = any>(payload: TPayload): TResult {
        return undefined as TResult;
    }
    remove<TPayload = any, TResult = any>(payload: TPayload): TResult {
        return undefined as TResult;
    }
    has<TPayload = any, TResult = boolean>(payload: TPayload): TResult {
        return undefined as TResult;
    }
}
