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
import {
    IListAddPayload,
    IListAddResult,
    IPosition,
    IRenderer,
    ISize,
} from '../../interfacies';
import { ENTITY_DATA } from '../../computedvalues';
import { $$txt } from '../../datatypes';

export class HTMLRectangle<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> extends Shape<TClassData, TStyleData, TAttributeData> {
    constructor(
        configuration: IHTMLRectangleConfiguration<
            TClassData,
            TStyleData,
            TAttributeData
        >
    ) {
        super(configuration);

        this._configuration.type = 'rectangle';

        const draw = new HTMLRectangleDraw(
            this._configuration.paint,
            this._configuration.renderer
        );
        const move = new HTMLRectangleMove();
        const resize = new HTMLRectangleResize();

        this.draw = draw;
        this.move = move;
        this.resize = resize;
    }
}

type THTMLRectangleDrawLifecycleState = {
    state: 'none' | 'prepare' | 'drawing' | 'complete';
};

@sealed()
@lifecycle('IShapeDrawLifecycle')
export class HTMLRectangleDraw<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA,
    TState extends THTMLRectangleDrawLifecycleState
> implements IShapeDrawLifecycle<TClassData, TStyleData, TAttributeData>
{
    protected _state: TState = {
        state: 'none',
    } as TState;

    constructor(
        protected _paint: IPaint<TClassData, TStyleData, TAttributeData>,
        protected _renderer: IRenderer<TClassData, TStyleData, TAttributeData>
    ) {}

    @methodHook
    prepare<
        TPayload extends TClassData & TStyleData & TAttributeData,
        TResult = any
    >(payload: TPayload): TResult {
        this._state.state = 'prepare';

        return {} as TResult;
    }
    @methodHook
    create<
        TPayload extends TClassData & TStyleData & TAttributeData,
        TResult = any
    >(payload: TPayload): TResult {
        this._paint.style.add({
            data: payload,
        });
        this._renderer.draw(null, null);

        return undefined as TResult;
    }
    @methodHook
    draw<
        TPayload extends TClassData & TStyleData & TAttributeData,
        TResult = any
    >(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }
    @methodHook
    complete<
        TPayload extends TClassData & TStyleData & TAttributeData,
        TResult = any
    >(payload: TPayload): TResult {
        throw new Error('Method not implemented.');
    }

    set paint(value: IPaint<TClassData, TStyleData, TAttributeData>) {
        this._paint = value;

        if (this._renderer === undefined) return;

        if (this._paint) {
            this._renderer.attribute = this._paint.attribute;
            this._renderer.class = this._paint.class;
            this._renderer.style = this._paint.style;
        }
    }

    set renderer(value: IRenderer<TClassData, TStyleData, TAttributeData>) {
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

    protected _setState<TKey extends _.PropertyPath = $$txt, TPayload = any>(
        path: TKey,
        value: TPayload
    ) {
        _.set(this._state, path, value);
    }
}

type TShapeMoveLifecycleKeys = keyof IShapeMoveLifecycle;

export class HTMLRectangleMove implements IShapeMoveLifecycle {
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

export class HTMLRectangleResize implements IShapeResizeLifecycle {
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
