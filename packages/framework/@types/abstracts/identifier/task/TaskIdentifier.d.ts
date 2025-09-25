import { AbsIdentifier, Identifier } from '../Identifier';
export type TaskIdentifier = Identifier;
export declare function createTaskIdentifier<TPayload>(
    task: string,
): TaskIdentifier;
export declare abstract class AbsTaskIdentifier extends AbsIdentifier {}
