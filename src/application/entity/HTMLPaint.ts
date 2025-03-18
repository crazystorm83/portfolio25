import {
    IAttribute,
    IClass,
    IPaint,
    IStyle,
    ENTITY_DATA,
} from '../../framework';

export class HTMLPaint<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> implements IPaint<TClassData, TStyleData, TAttributeData>
{
    constructor(
        protected _class: IClass<TClassData>,
        protected _style: IStyle<TStyleData>,
        protected _attribute: IAttribute<TAttributeData>
    ) {}

    get class(): IClass<TClassData> {
        return this._class;
    }
    set class(value: IClass<TClassData>) {
        throw new Error('Method not implemented.');
    }
    get style(): IStyle<TStyleData> {
        return this._style;
    }
    set style(value: IStyle<TStyleData>) {
        throw new Error('Method not implemented.');
    }
    get attribute(): IAttribute<TAttributeData> {
        return this._attribute;
    }
    set attribute(value: IAttribute<TAttributeData>) {
        throw new Error('Method not implemented.');
    }
}
