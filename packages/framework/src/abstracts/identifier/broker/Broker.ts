import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type Broker = Identifier;

export function createBroker<TPayload>(broker: string): Broker {
    return createIdentifier <TPayload>(broker) as Broker;
}

export abstract class AbsBroker extends AbsIdentifier {}