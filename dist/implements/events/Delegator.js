export class Delegator {
    constructor() {
        this.eventMap = new Map();
        this.onceMap = new Map();
    }
    on(eventName, handler) {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, new Set());
        }
        this.eventMap.get(eventName).add(handler);
    }
    off(eventName, handler) {
        var _a, _b;
        if (!handler) {
            // 이벤트의 모든 핸들러 제거
            this.eventMap.delete(eventName);
            this.onceMap.delete(eventName);
            return;
        }
        // 특정 핸들러만 제거
        (_a = this.eventMap.get(eventName)) === null || _a === void 0 ? void 0 : _a.delete(handler);
        (_b = this.onceMap.get(eventName)) === null || _b === void 0 ? void 0 : _b.delete(handler);
    }
    emit(eventName, data) {
        var _a;
        // 일반 이벤트 핸들러 실행
        (_a = this.eventMap.get(eventName)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
            handler(data);
        });
        // once 이벤트 핸들러 실행 및 제거
        if (this.onceMap.has(eventName)) {
            const handlers = this.onceMap.get(eventName);
            handlers.forEach((handler) => {
                handler(data);
            });
            this.onceMap.delete(eventName);
        }
    }
    once(eventName, handler) {
        if (!this.onceMap.has(eventName)) {
            this.onceMap.set(eventName, new Set());
        }
        this.onceMap.get(eventName).add(handler);
    }
}
