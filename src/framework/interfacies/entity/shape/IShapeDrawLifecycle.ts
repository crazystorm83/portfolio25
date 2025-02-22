import { IPosition } from '../IPosition';
import { ISize } from '../ISize';

export interface IShapeDrawLifecycle {
    prepare<TPayload = any, TResult = any>(payload: TPayload): TResult;
    create<TPayload extends IPosition & ISize = any, TResult = any>(
        payload: TPayload
    ): TResult;
    draw<TPayload extends IPosition & ISize = any, TResult = any>(
        payload: TPayload
    ): TResult;
    complete<TPayload = any, TResult = any>(payload: TPayload): TResult;
}
