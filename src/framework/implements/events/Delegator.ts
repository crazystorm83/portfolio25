import { IDelegator } from '@framework/interfaces';

type EventHandler = (data: any) => void;

export class Delegator implements IDelegator {
    private eventMap: Map<string, Set<EventHandler>>;
    private onceMap: Map<string, Set<EventHandler>>;

    constructor() {
        this.eventMap = new Map();
        this.onceMap = new Map();
    }

    public on<T = any>(eventName: string, handler: (data: T) => void): void {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, new Set());
        }
        this.eventMap.get(eventName)!.add(handler);
    }

    public off(eventName: string, handler?: Function): void {
        if (!handler) {
            // 이벤트의 모든 핸들러 제거
            this.eventMap.delete(eventName);
            this.onceMap.delete(eventName);
            return;
        }

        // 특정 핸들러만 제거
        this.eventMap.get(eventName)?.delete(handler as EventHandler);
        this.onceMap.get(eventName)?.delete(handler as EventHandler);
    }

    public emit<T = any>(eventName: string, data?: T): void {
        // 일반 이벤트 핸들러 실행
        this.eventMap.get(eventName)?.forEach((handler) => {
            handler(data);
        });

        // once 이벤트 핸들러 실행 및 제거
        if (this.onceMap.has(eventName)) {
            const handlers = this.onceMap.get(eventName)!;
            handlers.forEach((handler) => {
                handler(data);
            });
            this.onceMap.delete(eventName);
        }
    }

    public once<T = any>(eventName: string, handler: (data: T) => void): void {
        if (!this.onceMap.has(eventName)) {
            this.onceMap.set(eventName, new Set());
        }
        this.onceMap.get(eventName)!.add(handler);
    }
}
