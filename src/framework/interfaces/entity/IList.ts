import { ENTITY_DATA } from '@framework/computedvalues';
import { $$numeric } from '@framework/datatypes';

export interface IListAddPayload<T extends ENTITY_DATA> {
    data: T;
}
export interface IListAddResult {
    success: boolean;
}

export interface IListInsertAtPayload<T extends ENTITY_DATA> {
    data: T;
}
export interface IListInsertAtResult {
    success: boolean;
}

export interface IListRemovePayload<T extends ENTITY_DATA> {
    data: T;
}
export interface IListRemoveResult<T extends ENTITY_DATA> {
    removed_data: T;
    success: boolean;
}

export interface IListRemoveAtPayload<T extends ENTITY_DATA> {
    index: $$numeric;
}
export interface IListRemoveAtResult<T extends ENTITY_DATA> {
    removed_data: T;
    success: boolean;
}

export interface IListRemoveAllResult<T extends ENTITY_DATA> {
    removed_data: T[];
    success: boolean;
}

export interface IListHasPayload<T extends ENTITY_DATA> {
    data: T;
}
export interface IListHasResult {
    success: boolean;
}

export interface IList<T extends ENTITY_DATA> {
    add<TPayload extends IListAddPayload<T>, TResult extends IListAddResult>(
        payload: TPayload
    ): TResult;
    insertAt<
        TPayload extends IListInsertAtPayload<T>,
        TResult extends IListInsertAtResult
    >(
        index: $$numeric,
        payload: TPayload
    ): TResult;
    remove<
        TPayload extends IListRemovePayload<T>,
        TResult extends IListRemoveResult<T>
    >(
        payload: TPayload
    ): TResult;
    removeAt<
        TPayload extends IListRemoveAtPayload<T>,
        TResult extends IListRemoveAtResult<T>
    >(
        payload: TPayload
    ): TResult;
    removeAll<TResult extends IListRemoveAllResult<T>>(): TResult;
    has<TPayload extends IListHasPayload<T>, TResult extends IListHasResult>(
        payload: TPayload
    ): TResult;
}
