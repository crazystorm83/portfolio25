export interface IDelegator {
    /**
     * 이벤트 핸들러 등록
     */
    on<T = any>(eventName: string, handler: (data: T) => void): void;
    /**
     * 이벤트 핸들러 제거
     */
    off(eventName: string, handler?: Function): void;
    /**
     * 이벤트 발생
     */
    emit<T = any>(eventName: string, data?: T): void;
    /**
     * 한 번만 실행되는 이벤트 핸들러 등록
     */
    once<T = any>(eventName: string, handler: (data: T) => void): void;
}
//# sourceMappingURL=IDelegator.d.ts.map