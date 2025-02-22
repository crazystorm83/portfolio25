import {
    HTMLRectangleDrawLifecycle,
    IHTMLRendererDestinationPayload,
    IHTMLRendererTargetPayload,
    IShapeDrawLifecycle,
} from '../../framework';
import { HTMLRenderer } from './HTMLRenderer';

export class HTMLRectangleRenderer extends HTMLRenderer {
    protected _renderer: IShapeDrawLifecycle = new HTMLRectangleDrawLifecycle(
        this,
        this
    );

    draw<IHTMLRendererResult>(
        target: IHTMLRendererTargetPayload,
        dest: IHTMLRendererDestinationPayload
    ): IHTMLRendererResult {
        this._renderer.draw(this.style.serialize());
        return undefined as IHTMLRendererResult;
    }
}
