import { AbsIdentifier, Identifier } from '../Identifier';
export type RegisterIdentifier = Identifier;
export declare function createRegisterIdentifier<TPayload>(register: string): RegisterIdentifier;
export declare abstract class AbsRegisterIdentifier extends AbsIdentifier {
}
