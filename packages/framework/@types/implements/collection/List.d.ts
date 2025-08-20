import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { $$numeric } from '../../datatypes';
import { IListAddPayload, IListAddResult, IListHasPayload, IListHasResult, IListInsertAtPayload, IListInsertAtResult, IListRemoveAllResult, IListRemoveAtPayload, IListRemoveAtResult, IListRemovePayload, IListRemoveResult } from '../../interfaces/entity/IList';
import { BaseList } from '../collection/base/BaseList';
export declare class List<T extends ENTITY_DATA> extends BaseList<T> {
    private __list;
    add<TPayload extends IListAddPayload<T>, TResult extends IListAddResult>(payload: TPayload): TResult;
    insertAt<TPayload extends IListInsertAtPayload<T>, TResult extends IListInsertAtResult>(index: $$numeric, payload: TPayload): TResult;
    remove<TPayload extends IListRemovePayload<T>, TResult extends IListRemoveResult<T>>(payload: TPayload): TResult;
    removeAt<TPayload extends IListRemoveAtPayload<T>, TResult extends IListRemoveAtResult<T>>(payload: TPayload): TResult;
    removeAll<TResult extends IListRemoveAllResult<T>>(): TResult;
    has<TPayload extends IListHasPayload<T>, TResult extends IListHasResult>(payload: TPayload): TResult;
}
