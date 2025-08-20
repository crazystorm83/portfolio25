import { $$txt } from '../../datatypes';
export declare class Fetch {
    static _controller?: AbortController;
    private static callAsync;
    static getAsync(url: $$txt): Promise<any>;
    static postAsync(url: $$txt, body: any): Promise<any>;
    static putAsync(url: $$txt, body: any): Promise<any>;
    static deleteAsync(url: $$txt): Promise<any>;
    static patchAsync(url: $$txt, body: any): Promise<any>;
    static abort(): void;
}
