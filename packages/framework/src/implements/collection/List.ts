import { $$numeric, $$tf } from '../../datatypes';
import {
    IListAddResult,
    IListInsertAtResult,
    IListRemoveAllResult,
    IListRemoveAtResult,
    IListRemoveResult
} from '../../interfaces/entity/IList';
import { BaseList } from '../collection/base/BaseList';

export class List<T> extends BaseList<T> {
    private __list: T[] = [];

    add<TResult extends IListAddResult>(
        data: T
    ): TResult {
        return this.insertAt(this.__list.length, data);
    }
    insertAt<
        TResult extends IListInsertAtResult
    >(index: $$numeric, data: T): TResult {
        this.__list.splice(index, 0, data);

        return { success: true } as TResult;
    }
    remove<
        TResult extends IListRemoveResult<T>
    >(data: T): TResult {
        const index = this.__list.indexOf(data);

        return this.removeAt(index);
    }
    removeAt<
        TResult extends IListRemoveAtResult<T>
    >(index: $$numeric): TResult {
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
    has(
        data: T
    ): $$tf {
        return this.__list.includes(data);
    }
    getAll(): T[] {
        return this.__list;
    }
    get length(): $$numeric {
        return this.__list.length;
    }
    getByIndex(index: $$numeric): T {
        return this.__list[index];
    }
    getByIndexOrThrow(index: $$numeric): T {
        const item = this.getByIndex(index);
        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    }
}
