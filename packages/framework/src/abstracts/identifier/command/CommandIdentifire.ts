import { AbsIdentifier, createIdentifier, Identifier } from '../Identifier';

export type CommandIdentifire = Identifier;

export function createCommandIdentifire<TPayload>(command: string): CommandIdentifire {
    return createIdentifier <TPayload>(command) as CommandIdentifire;
}

export abstract class AbsCommandIdentifire extends AbsIdentifier {
    constructor(command: string) {
        super(command);
    }
}
