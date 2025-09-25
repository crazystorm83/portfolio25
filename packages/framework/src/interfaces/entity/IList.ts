import { $$numeric, $$tf } from '../../datatypes';

export interface IListAddPayload<T> {
    data: T;
}
export interface IListAddResult {
    success: boolean;
}

export interface IListInsertAtPayload<T> {
    data: T;
}
export interface IListInsertAtResult {
    success: boolean;
}

export interface IListRemovePayload<T> {
    data: T;
}
export interface IListRemoveResult<T> {
    removed_data: T;
    success: boolean;
}

export interface IListRemoveAtPayload<T> {
    index: $$numeric;
}
export interface IListRemoveAtResult<T> {
    removed_data: T;
    success: boolean;
}

export interface IListRemoveAllResult<T> {
    removed_data: T[];
    success: boolean;
}

export interface IList<T> {
    /**
     * 목록에 항목 추가하기
     * @param data
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.getAll()); // [1]
     * ```
     */
    add<TResult extends IListAddResult>(data: T): TResult;
    /**
     * 목록의 특정 위치에 항목 추가하기
     * @param index
     * @param data
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.insertAt(0, 1);
     * console.log(list.getAll()); // [1]
     * ```
     */
    insertAt<TResult extends IListInsertAtResult>(
        index: $$numeric,
        data: T,
    ): TResult;
    /**
     * 목록에서 항목 제거하기
     * @param data
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * list.remove(1);
     * console.log(list.getAll()); // []
     * ```
     */
    remove<TResult extends IListRemoveResult<T>>(data: T): TResult;
    /**
     * 목록의 특정 위치에 항목 제거하기
     * @param index
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * list.removeAt(0);
     * console.log(list.getAll()); // []
     * ```
     */
    removeAt<TResult extends IListRemoveAtResult<T>>(index: $$numeric): TResult;
    /**
     * 목록에서 모든 항목 제거하기
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * list.removeAll();
     * console.log(list.getAll()); // []
     * ```
     */
    removeAll<TResult extends IListRemoveAllResult<T>>(): TResult;
    /**
     * 목록에 항목이 있는지 확인하기
     * @param data
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.has(1)); // true
     * ```
     */
    has(data: T): $$tf;
    /**
     * 목록에서 모든 항목 가져오기
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.getAll()); // [1]
     * ```
     */
    getAll(): T[];
    /**
     * 목록에서 항목 개수 가져오기
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.getLength()); // 1
     * ```
     */
    get length(): $$numeric;
    /**
     * 목록에서 특정 위치의 항목 가져오기
     * @param index
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.getByIndex(0)); // 1
     * ```
     */
    getByIndex(index: $$numeric): T;
    /**
     * 목록에서 특정 위치의 항목 가져오기
     * 해당 위치에 항목이 없으면 예외 발생
     * @param index
     * @example
     * ```typescript
     * const list = new List<number>();
     * list.add(1);
     * console.log(list.getByIndexOrThrow(0)); // 1
     * ```
     */
    getByIndexOrThrow(index: $$numeric): T;
}
