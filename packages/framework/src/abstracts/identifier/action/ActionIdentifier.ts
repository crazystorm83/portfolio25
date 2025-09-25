import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type ActionIdentifier = Identifier;

export function createActionIdentifier<TPayload>(
    action: string,
): ActionIdentifier {
    return createIdentifier<TPayload>(action) as ActionIdentifier;
}

export abstract class AbsActionIdentifier extends AbsIdentifier {}
