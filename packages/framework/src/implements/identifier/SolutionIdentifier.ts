import { Disposable } from '../../implements/dispose/Disposable';
import { ISolutionIdentifier } from '../../interfaces/identifier/solution/ISolutionIdentifier';

export class SolutionIdentifier
    extends Disposable
    implements ISolutionIdentifier
{
    constructor(private __id: string) {
        super();
    }

    dispose(): void {
        throw new Error('Method not implemented.');
    }

    get id(): string {
        return this.__id;
    }
}
