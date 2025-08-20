export class Identifier {
    constructor(_id) {
        this._id = _id;
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
}
