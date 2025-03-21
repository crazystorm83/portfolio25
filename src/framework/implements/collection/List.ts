import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { $$numeric } from '../../datatypes';
import {
    IListAddPayload,
    IListAddResult,
    IListHasPayload,
    IListHasResult,
    IListInsertAtPayload,
    IListInsertAtResult,
    IListRemoveAllResult,
    IListRemoveAtPayload,
    IListRemoveAtResult,
    IListRemovePayload,
    IListRemoveResult,
} from '../../interfaces';
import { BaseList } from './base/BaseList';

export class List<T extends ENTITY_DATA> extends BaseList<T> {
    private __list: T[] = [];

    add<TPayload extends IListAddPayload<T>, TResult extends IListAddResult>(
        payload: TPayload
    ): TResult {
        return this.insertAt(this.__list.length, payload);
    }
    insertAt<
        TPayload extends IListInsertAtPayload<T>,
        TResult extends IListInsertAtResult
    >(index: $$numeric, payload: TPayload): TResult {
        this.__list.splice(index, 0, payload.data);

        return { success: true } as TResult;
    }
    remove<
        TPayload extends IListRemovePayload<T>,
        TResult extends IListRemoveResult<T>
    >(payload: TPayload): TResult {
        const index = this.__list.indexOf(payload.data);

        return this.removeAt({ index });
    }
    removeAt<
        TPayload extends IListRemoveAtPayload<T>,
        TResult extends IListRemoveAtResult<T>
    >(payload: TPayload): TResult {
        const { index } = payload;

        const removed_data = this.__list.splice(index, 1);

        if (removed_data.length === 0) {
            return { success: false } as TResult;
        }

        return { success: true, removed_data: removed_data[0] } as TResult;
    }
    removeAll<TResult extends IListRemoveAllResult<T>>(): TResult {
        const removed_data = this.__list.splice(0, this.__list.length);

        return { success: true, removed_data } as TResult;
    }
    has<TPayload extends IListHasPayload<T>, TResult extends IListHasResult>(
        payload: TPayload
    ): TResult {
        const result = this.__list.includes(payload.data);

        return { success: result } as TResult;
    }
}
