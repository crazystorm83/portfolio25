import { ISolutionIdentifier } from '../identifier/solution/ISolutionIdentifier';

export interface ISolution extends ISolutionIdentifier {
    run(): void;
    runAsync(): Promise<void>;
}
