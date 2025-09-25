import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type ExceptionIdentifier = Identifier;

export function createExceptionIdentifier<TPayload>(
    exception: string,
): ExceptionIdentifier {
    return createIdentifier<TPayload>(exception) as ExceptionIdentifier;
}

export abstract class AbsExceptionIdentifier extends AbsIdentifier {}
