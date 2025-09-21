import { AbsIdentifier, Identifier } from '../Identifier';
export type EventInterpreterIdentifier = Identifier;
export declare function createEventInterpreterIdentifier<TPayload>(event: string): EventInterpreterIdentifier;
export declare abstract class AbsEventInterpreterIdentifier extends AbsIdentifier {
}
