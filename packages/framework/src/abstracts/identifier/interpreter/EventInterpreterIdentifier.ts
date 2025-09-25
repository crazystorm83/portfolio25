import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type EventInterpreterIdentifier = Identifier;

export function createEventInterpreterIdentifier<TPayload>(
    event: string,
): EventInterpreterIdentifier {
    return createIdentifier<TPayload>(event) as EventInterpreterIdentifier;
}

export abstract class AbsEventInterpreterIdentifier extends AbsIdentifier {}
