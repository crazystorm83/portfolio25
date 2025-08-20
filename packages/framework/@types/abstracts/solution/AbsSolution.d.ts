import { ISolutionIdentifier } from '../../interfaces/identifier/solution/ISolutionIdentifier';
import { ISolution } from '../../interfaces/solution/ISolution';
export declare abstract class AbsSolution implements ISolution {
    private __id;
    constructor(__id: ISolutionIdentifier);
    abstract run(): void;
    abstract runAsync(): Promise<void>;
    get id(): string;
}
