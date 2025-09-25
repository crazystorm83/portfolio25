import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { IRenderer } from '../entity/IRenderer';
export interface IHTMLRendererTargetPayload {
    el: HTMLElement;
}
export interface IHTMLRendererDestinationPayload {}
export interface IHTMLRendererResult {}
export interface IHTMLRenderer<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA,
> extends IRenderer<
        TClassData,
        TStyleData,
        TAttributeData,
        IHTMLRendererTargetPayload,
        IHTMLRendererDestinationPayload
    > {}
