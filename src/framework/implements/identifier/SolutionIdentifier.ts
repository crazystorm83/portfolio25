import { ISolutionIdentifier } from '@framework/interfaces/identifier/solution/ISolutionIdentifier';

export class SolutionIdentifier implements ISolutionIdentifier {
    constructor(private __id: string) {}

    get id(): string {
        return this.__id;
    }
}
