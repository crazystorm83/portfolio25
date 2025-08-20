import { ENTITY_DATA } from '@framework/computedvalues';
import { IPaint, IRenderer, IShapeConfiguration, IShapeDrawLifecycle, IShapeMoveLifecycle, IShapeResizeLifecycle } from '@framework/interfaces';
export declare abstract class Shape<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA> {
    protected _configuration: IShapeConfiguration<TClassData, TStyleData, TAttributeData>;
    protected _draw: IShapeDrawLifecycle<TClassData, TStyleData, TAttributeData> | undefined;
    protected _move: IShapeMoveLifecycle | undefined;
    protected _resize: IShapeResizeLifecycle | undefined;
    protected _paint: IPaint<TClassData, TStyleData, TAttributeData> | undefined;
    protected _renderer: IRenderer<TClassData, TStyleData, TAttributeData> | undefined;
    protected _state: any;
    constructor(configuration: IShapeConfiguration<TClassData, TStyleData, TAttributeData>);
    get draw(): any;
    set draw(value: any);
    get move(): any;
    set move(value: any);
    get resize(): any;
    set resize(value: any);
}
