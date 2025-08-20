import { BaseList } from '../collection/base/BaseList';
export class List extends BaseList {
    constructor() {
        super(...arguments);
        this.__list = [];
    }
    add(payload) {
        return this.insertAt(this.__list.length, payload);
    }
    insertAt(index, payload) {
        this.__list.splice(index, 0, payload.data);
        return { success: true };
    }
    remove(payload) {
        const index = this.__list.indexOf(payload.data);
        return this.removeAt({ index });
    }
    removeAt(payload) {
        const { index } = payload;
        const removed_data = this.__list.splice(index, 1);
        if (removed_data.length === 0) {
            return { success: false };
        }
        return { success: true, removed_data: removed_data[0] };
    }
    removeAll() {
        const removed_data = this.__list.splice(0, this.__list.length);
        return { success: true, removed_data };
    }
    has(payload) {
        const result = this.__list.includes(payload.data);
        return { success: result };
    }
}
