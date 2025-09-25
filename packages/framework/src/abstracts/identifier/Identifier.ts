import { Disposable } from '../../implements';
import { IIdentifier } from '../../interfaces/identifier/IIdentifier';

export type Identifier = {
    type: string;
};

export function createIdentifier<TPayload>(command: string): Identifier {
    return { type: command };
}

export abstract class AbsIdentifier extends Disposable implements IIdentifier {
    constructor(protected _id: string) {
        super();
    }

    set id(value: string) {
        this._id = value;
    }
    get id(): string {
        return this._id;
    }
}
