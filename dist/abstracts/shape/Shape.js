export class Shape {
    constructor(configuration) {
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
