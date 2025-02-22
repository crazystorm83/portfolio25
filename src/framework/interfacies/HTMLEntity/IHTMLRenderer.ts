import { IRenderer } from '../entity';

export interface IHTMLRendererTargetPayload {
    el: HTMLElement;
}
export interface IHTMLRendererDestinationPayload {}

export interface IHTMLRendererResult {}

export interface IHTMLRenderer
    extends IRenderer<
        IHTMLRendererTargetPayload,
        IHTMLRendererDestinationPayload
    > {}

