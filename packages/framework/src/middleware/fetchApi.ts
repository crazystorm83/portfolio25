import { $$txt } from '../datatypes';

export class fetchApi {
    protected _controller?: AbortController;

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
