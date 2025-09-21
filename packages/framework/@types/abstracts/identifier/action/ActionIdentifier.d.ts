import { AbsIdentifier, Identifier } from '../Identifier';
export type ActionIdentifier = Identifier;
export declare function createActionIdentifier<TPayload>(action: string): ActionIdentifier;
export declare abstract class AbsActionIdentifier extends AbsIdentifier {
}
