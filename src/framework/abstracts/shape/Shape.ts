import { ENTITY_DATA } from '../../computedvalues';
import {
    IPaint,
    IRenderer,
    IShapeConfiguration,
    IShapeDrawLifecycle,
    IShapeMoveLifecycle,
    IShapeResizeLifecycle,
} from '../../interfacies';

export abstract class Shape<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> {
    protected _configuration: IShapeConfiguration<
        TClassData,
        TStyleData,
        TAttributeData
    >;
    protected _draw:
        | IShapeDrawLifecycle<TClassData, TStyleData, TAttributeData>
        | undefined;
    protected _move: IShapeMoveLifecycle | undefined;
    protected _resize: IShapeResizeLifecycle | undefined;
    protected _paint:
        | IPaint<TClassData, TStyleData, TAttributeData>
        | undefined;
    protected _renderer:
        | IRenderer<TClassData, TStyleData, TAttributeData>
        | undefined;
    protected _state: any;

    constructor(
        configuration: IShapeConfiguration<
            TClassData,
            TStyleData,
            TAttributeData
        >
    ) {
        this._configuration = configuration;
    }
    get draw() {
        if (!this._draw) {
            throw new Error('not assign draw');
        }
        return this._draw;
    }
    set draw(value) {
        this._draw = value;
    }
    get move() {
        if (!this._move) {
            throw new Error('not assign move');
        }
        return this._move;
    }
    set move(value) {
        this._move = value;
    }
    get resize() {
        if (!this._resize) {
            throw new Error('not assign resize');
        }
        return this._resize;
    }
    set resize(value) {
        this._resize = value;
    }
}
