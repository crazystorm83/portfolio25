import * as _ from 'lodash';

import { IPaint } from '../../interfacies/entity/IPaint';
import { IShapeDrawLifecycle } from '../../interfacies/entity/shape/IShapeDrawLifecycle';
import { IShapeMoveLifecycle } from '../../interfacies/entity/shape/IShapeMoveLifecycle';
import { IShapeResizeLifecycle } from '../../interfacies/entity/shape/IShapeResizeLifecycle';
import { IHTMLRectangleConfiguration } from '../../interfacies/configuration/htmlshape/IHTMLRectangleConfiguration';
import { sealed } from '../../decoarator/@sealed';
import { lifecycle } from '../../decoarator/@lifecycle';
import { methodHook } from '../../decoarator/@methodHook';
import { Shape } from '../../abstracts/shape/Shape';
import { IPosition, IRenderer, ISize } from '../../interfacies';

export class HTMLRectangle extends Shape {
    constructor(configuration: IHTMLRectangleConfiguration) {
        super(configuration);

        this._configuration.type = 'rectangle';

        const drawLifecycle = new HTMLRectangleDrawLifecycle(
            this._configuration.paint,
            this._configuration.renderer
        );
        const moveLifecycle = new HTMLRectangleMoveLifecycle();
        const resizeLifecycle = new HTMLRectangleResizeLifecycle();

        this.drawLifecycle = drawLifecycle;
        this.moveLifecycle = moveLifecycle;
        this.resizeLifecycle = resizeLifecycle;
    }
}

type THTMLRectangleDrawLifecycleState = {
    state: 'none' | 'prepare' | 'drawing' | 'complete';
};

@sealed()
@lifecycle('IShapeDrawLifecycle')
export class HTMLRectangleDrawLifecycle<
    TState extends THTMLRectangleDrawLifecycleState
> implements IShapeDrawLifecycle
{
    protected _state: TState = {
        state: 'none',
    } as TState;

    constructor(protected _paint: IPaint, protected _renderer: IRenderer) {}

    set paint(value: IPaint) {
        this._paint = value;

        if (this._renderer === undefined) return;

        if (this._paint) {
            this._renderer.attribute = this._paint.attribute;
            this._renderer.class = this._paint.class;
            this._renderer.style = this._paint.style;
        }
    }

    set renderer(value: IRenderer) {
        this._renderer = value;

        if (this._renderer === undefined) return;

        if (this._paint) {
            this._renderer.attribute = this._paint.attribute;
            this._renderer.class = this._paint.class;
            this._renderer.style = this._paint.style;
        }
    }

    get state(): TState {
        return this._state;
    }

    protected _setState<TKey extends _.PropertyPath = string, TPayload = any>(
        path: TKey,
        value: TPayload
    ) {
        _.set(this._state, path, value);
    }

    @methodHook
    prepare<TPayload, TResult>(payload: TPayload): TResult {
        this._state.state = 'prepare';

        return {} as TResult;
    }
    @methodHook
    create<TPayload extends IPosition & ISize, TResult = any>(
        payload: TPayload
    ): TResult {
        this._paint.style.add<IPosition & ISize, void>(payload);
        this._renderer.draw(null, null);

        return undefined as TResult;
    }
    @methodHook
    draw<TPayload extends IPosition & ISize, TResult>(
        payload: TPayload
    ): TResult {
        this._state.state = 'drawing';

        console.log(this._state.state);

        this._paint.style.add<IPosition & ISize, void>(payload);
        this._renderer.draw(null, null);

        return {} as TResult;
    }
    @methodHook
    complete<TPayload, TResult>(payload: TPayload): TResult {
        this._state.state = 'complete';

        console.log(this._state.state);

        return {} as TResult;
    }
}

type TShapeMoveLifecycleKeys = keyof IShapeMoveLifecycle;

export class HTMLRectangleMoveLifecycle implements IShapeMoveLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    move<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    complete<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
}

export class HTMLRectangleResizeLifecycle implements IShapeResizeLifecycle {
    prepare<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    move<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    complete<TPayload, TResult>(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
}
