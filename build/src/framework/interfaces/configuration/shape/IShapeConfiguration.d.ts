import { ENTITY_DATA } from '@framework/computedvalues';
import { IPaint, IRenderer } from '@framework/interfaces/entity';
export interface IShapeConfiguration<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA> {
    type: 'none' | 'rectangle' | 'circle' | 'ellipse' | 'line' | 'polygon';
    get paint(): IPaint<TClassData, TStyleData, TAttributeData>;
    set paint(value: IPaint<TClassData, TStyleData, TAttributeData>);
    get renderer(): IRenderer<TClassData, TStyleData, TAttributeData>;
    set renderer(value: IRenderer<TClassData, TStyleData, TAttributeData>);
}
//# sourceMappingURL=IShapeConfiguration.d.ts.map