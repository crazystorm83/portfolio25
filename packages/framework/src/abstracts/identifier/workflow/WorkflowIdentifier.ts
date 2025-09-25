import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type WorkflowIdentifier = Identifier;

export function createWorkflowIdentifier<TPayload>(
    workflow: string,
): WorkflowIdentifier {
    return createIdentifier<TPayload>(workflow) as WorkflowIdentifier;
}

export abstract class AbsWorkflowIdentifier extends AbsIdentifier {}
