import { ISolutionIdentifier } from '../../interfaces/identifier/solution/ISolutionIdentifier';
export declare class SolutionIdentifier implements ISolutionIdentifier {
    private __id;
    constructor(__id: string);
    get id(): string;
}
