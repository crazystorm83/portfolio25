export interface IException {
    throw<TPayload>(payload: TPayload): void;
}

export abstract class Exception implements IException {
    abstract throw<TPayload>(payload: TPayload): void;
}
