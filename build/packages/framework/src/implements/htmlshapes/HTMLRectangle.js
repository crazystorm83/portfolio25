var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h;
import * as _ from 'lodash';
import { sealed } from '../../decoarator/@sealed';
import { lifecycle } from '../../decoarator/@lifecycle';
import { methodHook } from '../../decoarator/@methodHook';
import { Shape } from '../../abstracts/shape/Shape';
import { $$null } from '../../datatypes';
export class HTMLRectangle extends Shape {
    constructor(configuration) {
        super(configuration);
        this._configuration.type = 'rectangle';
        const draw = new HTMLRectangleDraw(this._configuration.paint, this._configuration.renderer);
        const move = new HTMLRectangleMove();
        const resize = new HTMLRectangleResize();
        this.draw = draw;
        this.move = move;
        this.resize = resize;
    }
}
let HTMLRectangleDraw = class HTMLRectangleDraw {
    constructor(_paint, _renderer) {
        this._paint = _paint;
        this._renderer = _renderer;
        this._state = {
            state: 'none',
        };
    }
    prepare(payload) {
        this._state.state = 'prepare';
        return {};
    }
    create(payload) {
        this._paint.style.add({
            data: payload,
        });
        this._renderer.draw($$null, $$null);
        return undefined;
    }
    draw(payload) {
        throw new Error('Method not implemented.');
    }
    complete(payload) {
        throw new Error('Method not implemented.');
    }
    set paint(value) {
        this._paint = value;
        if (this._renderer === undefined)
            return;
        if (this._paint) {
            this._renderer.attribute = this._paint.attribute;
            this._renderer.class = this._paint.class;
            this._renderer.style = this._paint.style;
        }
    }
    set renderer(value) {
        this._renderer = value;
        if (this._renderer === undefined)
            return;
        if (this._paint) {
            this._renderer.attribute = this._paint.attribute;
            this._renderer.class = this._paint.class;
            this._renderer.style = this._paint.style;
        }
    }
    get state() {
        return this._state;
    }
    _setState(path, value) {
        _.set(this._state, path, value);
    }
};
__decorate([
    methodHook,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof TPayload !== "undefined" && TPayload) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof TResult !== "undefined" && TResult) === "function" ? _b : Object)
], HTMLRectangleDraw.prototype, "prepare", null);
__decorate([
    methodHook,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof TPayload !== "undefined" && TPayload) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof TResult !== "undefined" && TResult) === "function" ? _d : Object)
], HTMLRectangleDraw.prototype, "create", null);
__decorate([
    methodHook,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof TPayload !== "undefined" && TPayload) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof TResult !== "undefined" && TResult) === "function" ? _f : Object)
], HTMLRectangleDraw.prototype, "draw", null);
__decorate([
    methodHook,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof TPayload !== "undefined" && TPayload) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof TResult !== "undefined" && TResult) === "function" ? _h : Object)
], HTMLRectangleDraw.prototype, "complete", null);
HTMLRectangleDraw = __decorate([
    sealed(),
    lifecycle('IShapeDrawLifecycle'),
    __metadata("design:paramtypes", [Object, Object])
], HTMLRectangleDraw);
export { HTMLRectangleDraw };
export class HTMLRectangleMove {
    prepare(payload) {
        throw new Error('Method not implemented.');
    }
    move(payload) {
        throw new Error('Method not implemented.');
    }
    complete(payload) {
        throw new Error('Method not implemented.');
    }
}
export class HTMLRectangleResize {
    prepare(payload) {
        throw new Error('Method not implemented.');
    }
    move(payload) {
        throw new Error('Method not implemented.');
    }
    complete(payload) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=HTMLRectangle.js.map