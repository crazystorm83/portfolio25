import { AbsIdentifier, Identifier } from '../Identifier';
export type Dispatcher = Identifier;
export declare function createDispatcher<TPayload>(
    dispatcher: string,
): Dispatcher;
export declare abstract class AbsDispatcher extends AbsIdentifier {}
