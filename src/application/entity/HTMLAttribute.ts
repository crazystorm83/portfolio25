import {
    IAttribute,
    IListInsertAtPayload,
    IListInsertAtResult,
    IListRemoveAllResult,
    IListRemoveAtPayload,
    IListRemoveAtResult,
    IListRemovePayload,
    IListRemoveResult,
    ENTITY_DATA,
} from '../../framework';
import { $$numeric } from '../../framework/datatypes';

export class HTMLAttribute<T extends ENTITY_DATA> implements IAttribute<T> {
    add<TPayload = any, TResult = any>(payload: TPayload): TResult {
        return undefined as TResult;
    }
    insertAt<
        TPayload extends IListInsertAtPayload<T>,
        TResult extends IListInsertAtResult
    >(index: $$numeric, payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    remove<TPayload = any, TResult = any>(payload: TPayload): TResult {
        return undefined as TResult;
    }
    removeAt<
        TPayload extends IListRemoveAtPayload<T>,
        TResult extends IListRemoveAtResult<T>
    >(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    removeAll<TResult extends IListRemoveAllResult<T>>(): TResult {
        throw new Error('Method not implemented.');
    }
    has<TPayload = any, TResult = boolean>(payload: TPayload): TResult {
        return undefined as TResult;
    }
}
