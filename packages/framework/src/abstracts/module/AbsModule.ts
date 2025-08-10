import { IModuleIdentifier } from '../../interfaces';

export abstract class AbsModule implements IModuleIdentifier {
    get id(): string {
        return this.id;
    }

    constructor(private readonly _id: string) {}
}
