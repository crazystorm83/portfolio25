import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type TaskIdentifier = Identifier;

export function createTaskIdentifier<TPayload>(task: string): TaskIdentifier {
    return createIdentifier <TPayload>(task) as TaskIdentifier;
}

export abstract class AbsTaskIdentifier extends AbsIdentifier {}
