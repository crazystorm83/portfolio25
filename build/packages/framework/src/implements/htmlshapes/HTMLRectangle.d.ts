import * as _ from 'lodash';
import { IPaint } from '../../interfaces/entity/IPaint';
import { IShapeDrawLifecycle } from '../../interfaces/entity/shape/IShapeDrawLifecycle';
import { IShapeMoveLifecycle } from '../../interfaces/entity/shape/IShapeMoveLifecycle';
import { IShapeResizeLifecycle } from '../../interfaces/entity/shape/IShapeResizeLifecycle';
import { IHTMLRectangleConfiguration } from '../../interfaces/configuration/htmlshape/IHTMLRectangleConfiguration';
import { Shape } from '../../abstracts/shape/Shape';
import { IRenderer } from '../../interfaces';
import { ENTITY_DATA } from '../../computedvalues';
import { $$txt } from '../../datatypes';
export declare class HTMLRectangle<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA> extends Shape<TClassData, TStyleData, TAttributeData> {
    constructor(configuration: IHTMLRectangleConfiguration<TClassData, TStyleData, TAttributeData>);
}
type THTMLRectangleDrawLifecycleState = {
    state: 'none' | 'prepare' | 'drawing' | 'complete';
};
export declare class HTMLRectangleDraw<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA, TState extends THTMLRectangleDrawLifecycleState> implements IShapeDrawLifecycle<TClassData, TStyleData, TAttributeData> {
    protected _paint: IPaint<TClassData, TStyleData, TAttributeData>;
    protected _renderer: IRenderer<TClassData, TStyleData, TAttributeData>;
    protected _state: TState;
    constructor(_paint: IPaint<TClassData, TStyleData, TAttributeData>, _renderer: IRenderer<TClassData, TStyleData, TAttributeData>);
    prepare<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    create<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    draw<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    complete<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    set paint(value: IPaint<TClassData, TStyleData, TAttributeData>);
    set renderer(value: IRenderer<TClassData, TStyleData, TAttributeData>);
    get state(): TState;
    protected _setState<TKey extends _.PropertyPath = $$txt, TPayload = any>(path: TKey, value: TPayload): void;
}
export declare class HTMLRectangleMove implements IShapeMoveLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult;
    move<TPayload, TResult>(payload: TPayload): TResult;
    complete<TPayload, TResult>(payload: TPayload): TResult;
}
export declare class HTMLRectangleResize implements IShapeResizeLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult;
    move<TPayload, TResult>(payload: TPayload): TResult;
    complete<TPayload, TResult>(payload: TPayload): TResult;
}
export {};
//# sourceMappingURL=HTMLRectangle.d.ts.map