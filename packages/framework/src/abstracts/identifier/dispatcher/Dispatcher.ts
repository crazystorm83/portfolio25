import { AbsIdentifier, createIdentifier, Identifier } from "../Identifier";

export type Dispatcher = Identifier;

export function createDispatcher<TPayload>(dispatcher: string): Dispatcher {
    return createIdentifier <TPayload>(dispatcher) as Dispatcher;
}

export abstract class AbsDispatcher extends AbsIdentifier {}