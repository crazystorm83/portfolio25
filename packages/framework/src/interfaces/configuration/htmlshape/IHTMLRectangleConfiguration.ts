import { ENTITY_DATA } from '../../../computedvalues';
import { IShapeConfiguration } from '../shape/IShapeConfiguration';

export interface IHTMLRectangleConfiguration<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> extends IShapeConfiguration<TClassData, TStyleData, TAttributeData> {}
