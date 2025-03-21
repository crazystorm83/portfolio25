import { ENTITY_DATA } from '../../../computedvalues';
import { $$numeric } from '../../../datatypes';
import {
    IList,
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
} from '../../../interfacies';

export abstract class AbsList<T extends ENTITY_DATA> implements IList<T> {
    abstract add<
        TPayload extends IListAddPayload<T>,
        TResult extends IListAddResult
    >(payload: TPayload): TResult;
    abstract insertAt<
        TPayload extends IListInsertAtPayload<T>,
        TResult extends IListInsertAtResult
    >(index: $$numeric, payload: TPayload): TResult;
    abstract remove<
        TPayload extends IListRemovePayload<T>,
        TResult extends IListRemoveResult<T>
    >(payload: TPayload): TResult;
    abstract removeAt<
        TPayload extends IListRemoveAtPayload<T>,
        TResult extends IListRemoveAtResult<T>
    >(payload: TPayload): TResult;
    abstract removeAll<TResult extends IListRemoveAllResult<T>>(): TResult;
    abstract has<
        TPayload extends IListHasPayload<T>,
        TResult extends IListHasResult
    >(payload: TPayload): TResult;
}
