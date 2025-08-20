import { $$null } from '../../datatypes';
export class Fetch {
    static async callAsync(url, method, body) {
        this._controller = new AbortController();
        const signal = this._controller.signal;
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            signal,
        })
            .then((response) => {
            // 응답 처리 (HTTP 상태 확인)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // JSON으로 파싱
        })
            .catch((error) => {
            throw new Error(error);
        });
    }
    static async getAsync(url) {
        return await Fetch.callAsync(url, 'GET', $$null);
    }
    static async postAsync(url, body) {
        return await Fetch.callAsync(url, 'POST', body);
    }
    static async putAsync(url, body) {
        return await Fetch.callAsync(url, 'PUT', body);
    }
    static async deleteAsync(url) {
        return await Fetch.callAsync(url, 'DELETE', $$null);
    }
    static async patchAsync(url, body) {
        return await Fetch.callAsync(url, 'PATCH', body);
    }
    static abort() {
        var _a;
        (_a = Fetch._controller) === null || _a === void 0 ? void 0 : _a.abort();
    }
}
