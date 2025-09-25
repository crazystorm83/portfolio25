import { AbsIdentifier, Identifier } from '../Identifier';
export type WorkflowIdentifier = Identifier;
export declare function createWorkflowIdentifier<TPayload>(
    workflow: string,
): WorkflowIdentifier;
export declare abstract class AbsWorkflowIdentifier extends AbsIdentifier {}
