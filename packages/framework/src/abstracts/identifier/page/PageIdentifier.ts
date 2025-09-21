import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type PageIdentifier = Identifier;

export function createPageIdentifier<TPayload>(page: string): PageIdentifier {
    return createIdentifier <TPayload>(page) as PageIdentifier;
}

export abstract class AbsPageIdentifier extends AbsIdentifier {}
