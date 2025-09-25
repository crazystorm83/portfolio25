import { $$numeric, $$tf } from '../../../datatypes';
import { Disposable } from '../../../implements/dispose/Disposable';
import {
    IList,
    IListAddResult,
    IListInsertAtResult,
    IListRemoveAllResult,
    IListRemoveAtResult,
    IListRemoveResult,
} from '../../../interfaces/entity/IList';

export abstract class AbsList<T> extends Disposable implements IList<T> {
    abstract add<TResult extends IListAddResult>(data: T): TResult;
    abstract insertAt<TResult extends IListInsertAtResult>(
        index: $$numeric,
        data: T,
    ): TResult;
    abstract remove<TResult extends IListRemoveResult<T>>(data: T): TResult;
    abstract removeAt<TResult extends IListRemoveAtResult<T>>(
        index: $$numeric,
    ): TResult;
    abstract removeAll<TResult extends IListRemoveAllResult<T>>(): TResult;
    abstract has(data: T): $$tf;
    abstract getAll(): T[];
    abstract get length(): $$numeric;
    abstract getByIndex(index: $$numeric): T;
    abstract getByIndexOrThrow(index: $$numeric): T;

    dispose(): void {
        throw new Error('Method not implemented.');
    }
}
