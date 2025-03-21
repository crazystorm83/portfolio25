import { $$null, $$txt } from '../../../framework/datatypes';
import { IMenuConfiguration } from '../../interfacies';

export class MenuConfiguration implements IMenuConfiguration {
    protected _selector: $$txt | $$null = $$null;

    //#region properties

    set selector(value: $$txt) {
        this._selector = value;
    }
    get selector(): $$txt {
        if (!this._selector) {
            throw new Error('selector is not set');
        }
        return this._selector;
    }

    //#endregion
}
