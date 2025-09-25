import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type ServiceIdentifier = Identifier;

export function createServiceIdentifier<TPayload>(
    service: string,
): ServiceIdentifier {
    return createIdentifier<TPayload>(service) as ServiceIdentifier;
}

export abstract class AbsServiceIdentifier extends AbsIdentifier {}
