export interface IException {
    throw<TPayload>(payload: TPayload): void;
}
export declare abstract class Exception implements IException {
    abstract throw<TPayload>(payload: TPayload): void;
}
//# sourceMappingURL=Exception.d.ts.map