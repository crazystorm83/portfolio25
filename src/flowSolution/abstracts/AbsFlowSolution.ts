import { AbsSolution } from '@framework/abstracts/solution/AbsSolution';
import { SolutionIdentifier } from '@framework/implements';

export abstract class AbsFlowSolution extends AbsSolution {
    constructor() {
        super(new SolutionIdentifier('IFlowSolution'));
    }

    override run(): void {}

    override runAsync(): Promise<void> {
        return Promise.resolve();
    }
}
