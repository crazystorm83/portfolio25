import { $$txt } from '../../datatypes';
import { Disposable } from '../../implements';
export declare class Fetch extends Disposable {
    static _controller?: AbortController;
    constructor();
    [Symbol.dispose](): void;
    private static callAsync;
    static getAsync(url: $$txt): Promise<any>;
    static postAsync(url: $$txt, body: any): Promise<any>;
    static putAsync(url: $$txt, body: any): Promise<any>;
    static deleteAsync(url: $$txt): Promise<any>;
    static patchAsync(url: $$txt, body: any): Promise<any>;
    static abort(): void;
}
