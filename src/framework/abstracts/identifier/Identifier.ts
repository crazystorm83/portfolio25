import { $$txt } from '../../datatypes';
import { IIdentifier } from '../../interfacies/identifier';

export abstract class Identifier implements IIdentifier {
    constructor(protected _id: $$txt) {}

    set id(value: $$txt) {
        this._id = value;
    }
    get id(): $$txt {
        return this._id;
    }
}
