export class fetchApi {
    async fetchApiAsync(payload) {
        this._controller = new AbortController();
        const signal = this._controller.signal;
        const { url, ...restArgs } = payload;
        try {
            await fetch(url, { signal });
        }
        catch (err) { }
    }
    abort() {
        var _a;
        (_a = this._controller) === null || _a === void 0 ? void 0 : _a.abort();
    }
}
