import { ISolution, ISolutionIdentifier } from '@framework/interfaces';

export abstract class AbsSolution implements ISolution {
    constructor(private __id: ISolutionIdentifier) {}

    get id(): string {
        return this.__id.id;
    }
}
