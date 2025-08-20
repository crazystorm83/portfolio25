export interface IShapeMoveLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult;
    move<TPayload, TResult>(payload: TPayload): TResult;
    complete<TPayload, TResult>(payload: TPayload): TResult;
}
//# sourceMappingURL=IShapeMoveLifecycle.d.ts.map