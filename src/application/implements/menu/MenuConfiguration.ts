import { IMenuConfiguration } from '../../interfacies';

export class MenuConfiguration implements IMenuConfiguration {
    protected _selector: string | null = null;

    //#region properties

    set selector(value: string) {
        this._selector = value;
    }
    get selector(): string {
        if (!this._selector) {
            throw new Error('selector is not set');
        }
        return this._selector;
    }

    //#endregion
}
