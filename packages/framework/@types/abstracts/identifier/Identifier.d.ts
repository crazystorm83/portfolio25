import { $$txt } from '../../datatypes';
import { IIdentifier } from '../../interfaces/identifier/IIdentifier';
export declare abstract class Identifier implements IIdentifier {
    protected _id: $$txt;
    constructor(_id: $$txt);
    set id(value: $$txt);
    get id(): $$txt;
}
