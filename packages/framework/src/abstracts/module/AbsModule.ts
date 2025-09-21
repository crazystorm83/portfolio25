import { Disposable } from '../../implements/dispose/Disposable';
import { IModuleIdentifier } from '../../interfaces/module/IModuleIdentifier';

export abstract class AbsModule extends Disposable implements IModuleIdentifier {
    get id(): string {
        return this.id;
    }

    constructor(private readonly _id: string) {
        super();
    }
}
