import { Disposable } from '../../implements';
import { ISolutionIdentifier } from '../../interfaces/identifier/solution/ISolutionIdentifier';
export declare class SolutionIdentifier extends Disposable implements ISolutionIdentifier {
    private __id;
    constructor(__id: string);
    [Symbol.dispose](): void;
    get id(): string;
}
