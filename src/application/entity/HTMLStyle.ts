import {
    IListInsertAtPayload,
    IListInsertAtResult,
    IListRemoveAllResult,
    IListRemoveAtPayload,
    IListRemoveAtResult,
    IListRemovePayload,
    IListRemoveResult,
    IStyle,
    ENTITY_DATA,
} from '../../framework';
import { $$numeric } from '../../framework/datatypes';

export class HTMLStyle<T extends ENTITY_DATA> implements IStyle<T> {
    protected _top: $$numeric;
    protected _left: $$numeric;
    protected _width: $$numeric;
    protected _height: $$numeric;

    constructor() {
        this._top = -1;
        this._left = -1;
        this._width = -1;
        this._height = -1;
    }

    get top(): $$numeric {
        return this._top;
    }
    set top(value: $$numeric) {
        this._top = value;
    }
    get left(): $$numeric {
        return this._left;
    }
    set left(value: $$numeric) {
        this._left = value;
    }
    get width(): $$numeric {
        return this._width;
    }
    set width(value: $$numeric) {
        this._width = value;
    }
    get height(): $$numeric {
        return this._height;
    }
    set height(value: $$numeric) {
        this._height = value;
    }

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
    serialize<
        TResult = {
            top: $$numeric;
            left: $$numeric;
            width: $$numeric;
            height: $$numeric;
        }
    >(): TResult {
        return {
            top: this._top,
            left: this._left,
            width: this._width,
            height: this._height,
        } as TResult;
    }
    deserialize<TResult = any>(): TResult {
        throw new Error('Method not implemented.');
    }
}
