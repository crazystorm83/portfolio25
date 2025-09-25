import { Disposable } from '../../implements';
import { IIdentifier } from '../../interfaces/identifier/IIdentifier';
export type Identifier = {
    type: string;
};
export declare function createIdentifier<TPayload>(command: string): Identifier;
export declare abstract class AbsIdentifier
    extends Disposable
    implements IIdentifier
{
    protected _id: string;
    constructor(_id: string);
    set id(value: string);
    get id(): string;
}
