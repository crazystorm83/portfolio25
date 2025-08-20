export interface IShapeResizeLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult;
    move<TPayload, TResult>(payload: TPayload): TResult;
    complete<TPayload, TResult>(payload: TPayload): TResult;
}
//# sourceMappingURL=IShapeResizeLifecycle.d.ts.map