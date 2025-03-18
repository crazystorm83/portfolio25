import {
    HTMLRectangleDraw,
    IHTMLRendererDestinationPayload,
    IHTMLRendererTargetPayload,
    IShapeDrawLifecycle,
    ENTITY_DATA,
} from '../../framework';
import { HTMLRenderer } from './HTMLRenderer';

export class HTMLRectangleRenderer<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> extends HTMLRenderer<TClassData, TStyleData, TAttributeData> {
    protected _renderer: IShapeDrawLifecycle<
        TClassData,
        TStyleData,
        TAttributeData
    > = new HTMLRectangleDraw(this, this);

    draw<IHTMLRendererResult>(
        target: IHTMLRendererTargetPayload,
        dest: IHTMLRendererDestinationPayload
    ): IHTMLRendererResult {
        this._renderer.draw(this.style.serialize());
        return undefined as IHTMLRendererResult;
    }
}
