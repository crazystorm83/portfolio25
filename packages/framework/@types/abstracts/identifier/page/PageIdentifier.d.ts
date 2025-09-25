import { AbsIdentifier, Identifier } from '../Identifier';
export type PageIdentifier = Identifier;
export declare function createPageIdentifier<TPayload>(
    page: string,
): PageIdentifier;
export declare abstract class AbsPageIdentifier extends AbsIdentifier {}
