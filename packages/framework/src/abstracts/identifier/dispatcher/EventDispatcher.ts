import { AbsDispatcher, createDispatcher, Dispatcher } from "./Dispatcher";

export type EventDispatcher = Dispatcher;

export function createEventDispatcher<TPayload>(eventDispatcher: string): EventDispatcher {
    return createDispatcher <TPayload>(eventDispatcher) as EventDispatcher;
}

export abstract class AbsEventDispatcher extends AbsDispatcher {}