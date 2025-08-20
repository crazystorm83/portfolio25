import { ISolution, ISolutionIdentifier } from '@framework/interfaces';
export declare abstract class AbsSolution implements ISolution {
    private __id;
    constructor(__id: ISolutionIdentifier);
    abstract run(): void;
    abstract runAsync(): Promise<void>;
    get id(): string;
}
//# sourceMappingURL=AbsSolution.d.ts.map