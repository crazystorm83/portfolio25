import { $$txt } from '@framework/datatypes';
import { IIdentifier } from '@framework/interfaces/identifier';
export declare abstract class Identifier implements IIdentifier {
    protected _id: $$txt;
    constructor(_id: $$txt);
    set id(value: $$txt);
    get id(): $$txt;
}
