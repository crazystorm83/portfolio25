import { IClass } from '../../framework';

export class HTMLClass implements IClass {
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
