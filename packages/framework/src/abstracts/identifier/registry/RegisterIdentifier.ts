import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type RegisterIdentifier = Identifier;

export function createRegisterIdentifier<TPayload>(register: string): RegisterIdentifier {
    return createIdentifier <TPayload>(register) as RegisterIdentifier;
}

export abstract class AbsRegisterIdentifier extends AbsIdentifier {}