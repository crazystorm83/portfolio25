import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type InterpreterIdentifire = Identifier;

export function createInterpreterIdentifire<TPayload>(
    interpreter: string,
): InterpreterIdentifire {
    return createIdentifier<TPayload>(interpreter) as InterpreterIdentifire;
}

export abstract class AbsInterpreterIdentifire extends AbsIdentifier {}
