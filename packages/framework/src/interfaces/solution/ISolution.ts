import { ISolutionIdentifier } from '../identifier';

export interface ISolution extends ISolutionIdentifier {
    run(): void;
    runAsync(): Promise<void>;
}
