import { IAttribute, IClass, IPaint, IStyle } from '../../framework';

export class HTMLPaint implements IPaint {
    constructor(
        protected _class: IClass,
        protected _style: IStyle,
        protected _attribute: IAttribute
    ) {}

    get class(): IClass {
        return this._class;
    }
    set class(value: IClass) {
        throw new Error('Method not implemented.');
    }
    get style(): IStyle {
        return this._style;
    }
    set style(value: IStyle) {
        throw new Error('Method not implemented.');
    }
    get attribute(): IAttribute {
        return this._attribute;
    }
    set attribute(value: IAttribute) {
        throw new Error('Method not implemented.');
    }
}
