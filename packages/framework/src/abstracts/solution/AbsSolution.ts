import { ISolutionIdentifier } from '../../interfaces/identifier/solution/ISolutionIdentifier';
import { ISolution } from '../../interfaces/solution/ISolution';

export abstract class AbsSolution implements ISolution {
    constructor(private __id: ISolutionIdentifier) {}
    abstract run(): void;
    abstract runAsync(): Promise<void>;

    get id(): string {
        return this.__id.id;
    }
}
