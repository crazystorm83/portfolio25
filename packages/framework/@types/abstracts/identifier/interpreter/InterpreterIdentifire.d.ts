import { AbsIdentifier, Identifier } from '../Identifier';
export type InterpreterIdentifire = Identifier;
export declare function createInterpreterIdentifire<TPayload>(
    interpreter: string,
): InterpreterIdentifire;
export declare abstract class AbsInterpreterIdentifire extends AbsIdentifier {}
