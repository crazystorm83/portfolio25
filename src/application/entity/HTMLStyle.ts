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

export class HTMLStyle<T extends ENTITY_DATA> implements IStyle<T> {
    protected _top: number;
    protected _left: number;
    protected _width: number;
    protected _height: number;

    constructor() {
        this._top = -1;
        this._left = -1;
        this._width = -1;
        this._height = -1;
    }

    get top(): number {
        return this._top;
    }
    set top(value: number) {
        this._top = value;
    }
    get left(): number {
        return this._left;
    }
    set left(value: number) {
        this._left = value;
    }
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
    }

    add<TPayload = any, TResult = any>(payload: TPayload): TResult {
        return undefined as TResult;
    }
    insertAt<
        TPayload extends IListInsertAtPayload<T>,
        TResult extends IListInsertAtResult
    >(index: number, payload: TPayload): TResult {
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
            top: number;
            left: number;
            width: number;
            height: number;
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
