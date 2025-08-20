import { ENTITY_DATA } from '../../../computedvalues/ComputedValues';
import { IHTMLRectangleConfiguration } from './IHTMLRectangleConfiguration';
import { IPaint } from '../../entity/IPaint';
import { IRenderer } from '../../entity/IRenderer';
export declare class HTMLRectangleConfiguration<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA> implements IHTMLRectangleConfiguration<TClassData, TStyleData, TAttributeData> {
    type: 'none' | 'rectangle' | 'circle' | 'ellipse' | 'line' | 'polygon';
    constructor();
    get paint(): IPaint<TClassData, TStyleData, TAttributeData>;
    set paint(value: IPaint<TClassData, TStyleData, TAttributeData>);
    get renderer(): IRenderer<TClassData, TStyleData, TAttributeData, any, any>;
    set renderer(value: IRenderer<TClassData, TStyleData, TAttributeData, any, any>);
}
