import {
    IAttribute,
    IClass,
    IDeserializer,
    IHTMLRenderer,
    IHTMLRendererDestinationPayload,
    IHTMLRendererTargetPayload,
    ISerializer,
    IStyle,
} from '../../framework';
import { HTMLAttribute } from './HTMLAttribute';
import { HTMLClass } from './HTMLClass';
import { HTMLStyle } from './HTMLStyle';

export abstract class HTMLRenderer implements IHTMLRenderer {
    protected _class: IClass = new HTMLClass();
    protected _style: IStyle = new HTMLStyle();
    protected _attribute: IAttribute = new HTMLAttribute();

    get class(): IClass {
        throw new Error('Method not implemented.');
    }
    set class(value: IClass) {
        throw new Error('Method not implemented.');
    }
    get style(): IStyle {
        throw new Error('Method not implemented.');
    }
    set style(value: IStyle) {
        throw new Error('Method not implemented.');
    }
    get attribute(): IAttribute {
        throw new Error('Method not implemented.');
    }
    set attribute(value: IAttribute) {
        throw new Error('Method not implemented.');
    }

    abstract draw<IHTMLRendererResult>(
        target: IHTMLRendererTargetPayload,
        dest: IHTMLRendererDestinationPayload
    ): IHTMLRendererResult;
}
