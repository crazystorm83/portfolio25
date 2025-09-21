import { AbsIdentifier, Identifier } from '../Identifier';
export type CommandIdentifire = Identifier;
export declare function createCommandIdentifire<TPayload>(command: string): CommandIdentifire;
export declare abstract class AbsCommandIdentifire extends AbsIdentifier {
    constructor(command: string);
}
