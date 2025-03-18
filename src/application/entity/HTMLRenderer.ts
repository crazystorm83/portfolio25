import {
    IAttribute,
    IClass,
    IDeserializer,
    IHTMLRenderer,
    IHTMLRendererDestinationPayload,
    IHTMLRendererTargetPayload,
    ISerializer,
    IStyle,
    ENTITY_DATA,
} from '../../framework';
import { HTMLAttribute } from './HTMLAttribute';
import { HTMLClass } from './HTMLClass';
import { HTMLStyle } from './HTMLStyle';

export abstract class HTMLRenderer<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> implements IHTMLRenderer<TClassData, TStyleData, TAttributeData>
{
    protected _class: IClass<TClassData> = new HTMLClass();
    protected _style: IStyle<TStyleData> = new HTMLStyle();
    protected _attribute: IAttribute<TAttributeData> = new HTMLAttribute();

    get class(): IClass<TClassData> {
        throw new Error('Method not implemented.');
    }
    set class(value: IClass<TClassData>) {
        throw new Error('Method not implemented.');
    }
    get style(): IStyle<TStyleData> {
        throw new Error('Method not implemented.');
    }
    set style(value: IStyle<TStyleData>) {
        throw new Error('Method not implemented.');
    }
    get attribute(): IAttribute<TAttributeData> {
        throw new Error('Method not implemented.');
    }
    set attribute(value: IAttribute<TAttributeData>) {
        throw new Error('Method not implemented.');
    }

    abstract draw<IHTMLRendererResult>(
        target: IHTMLRendererTargetPayload,
        dest: IHTMLRendererDestinationPayload
    ): IHTMLRendererResult;
}
