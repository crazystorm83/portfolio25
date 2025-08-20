import { $$txt } from '@framework/datatypes';
export declare class fetchApi {
    protected _controller?: AbortController;
    fetchApiAsync(payload: {
        url: $$txt;
    }): Promise<void>;
    abort(): void;
}
