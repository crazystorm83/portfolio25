import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type UserActionIdentifier = Identifier;

export function createUserActionIdentifier<TPayload>(userAction: string): UserActionIdentifier {
    return createIdentifier <TPayload>(userAction) as UserActionIdentifier;
}

export abstract class AbsUserActionIdentifier extends AbsIdentifier {}
