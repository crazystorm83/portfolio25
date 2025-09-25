import { Disposable } from '../../implements';
import { IModuleIdentifier } from '../../interfaces/module/IModuleIdentifier';
export declare abstract class AbsModule
    extends Disposable
    implements IModuleIdentifier
{
    private readonly _id;
    get id(): string;
    constructor(_id: string);
}
