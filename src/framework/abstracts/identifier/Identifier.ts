import { IIdentifier } from '../../interfacies/identifier';

export abstract class Identifier implements IIdentifier {
    constructor(protected _id: string) {}

    set id(value: string) {
        this._id = value;
    }
    get id(): string {
        return this._id;
    }
}
