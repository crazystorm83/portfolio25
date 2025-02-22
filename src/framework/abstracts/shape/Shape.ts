import {
    IPaint,
    IRenderer,
    IShapeDrawLifecycle,
    IShapeMoveLifecycle,
    IShapeResizeLifecycle,
} from '../../interfacies';

export class Shape {
    protected _configuration: any;
    protected _drawLifecycle: IShapeDrawLifecycle | undefined;
    protected _moveLifecycle: IShapeMoveLifecycle | undefined;
    protected _resizeLifecycle: IShapeResizeLifecycle | undefined;
    protected _paint: IPaint | undefined;
    protected _renderer: IRenderer | undefined;
    protected _state: any;

    constructor(configuration: any) {
        this._configuration = configuration;
    }
    get drawLifecycle() {
        if (!this._drawLifecycle) {
            throw new Error('not assign drawLifecycle');
        }
        return this._drawLifecycle;
    }
    set drawLifecycle(value) {
        this._drawLifecycle = value;
    }
    get moveLifecycle() {
        if (!this._moveLifecycle) {
            throw new Error('not assign moveLifecycle');
        }
        return this._moveLifecycle;
    }
    set moveLifecycle(value) {
        this._moveLifecycle = value;
    }
    get resizeLifecycle() {
        if (!this._resizeLifecycle) {
            throw new Error('not assign resizeLifecycle');
        }
        return this._resizeLifecycle;
    }
    set resizeLifecycle(value) {
        this._resizeLifecycle = value;
    }
}
