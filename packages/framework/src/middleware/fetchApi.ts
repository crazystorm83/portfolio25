import { $$txt } from '../datatypes';
import { Disposable } from '../implements/dispose/Disposable';

export class FetchApi extends Disposable {
    protected _controller?: AbortController;

    constructor() {
        super();
    }

    dispose(): void {
        throw new Error("Method not implemented.");
    }

    async fetchApiAsync(payload: { url: $$txt }) {
        this._controller = new AbortController();
        const signal = this._controller.signal;

        const { url, ...restArgs } = payload;

        try {
            await fetch(url, { signal });
        } catch (err) {}
    }

    abort() {
        this._controller?.abort();
    }
}
