import { AbsIdentifier, Identifier } from '../Identifier';
export type Broker = Identifier;
export declare function createBroker<TPayload>(broker: string): Broker;
export declare abstract class AbsBroker extends AbsIdentifier {}
