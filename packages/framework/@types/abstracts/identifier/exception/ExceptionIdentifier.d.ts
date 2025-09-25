import { AbsIdentifier, Identifier } from '../Identifier';
export type ExceptionIdentifier = Identifier;
export declare function createExceptionIdentifier<TPayload>(
    exception: string,
): ExceptionIdentifier;
export declare abstract class AbsExceptionIdentifier extends AbsIdentifier {}
