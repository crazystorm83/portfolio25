import { $$null, $$txt } from '@framework/datatypes';

export class Fetch {
    static _controller?: AbortController;

    private static async callAsync(url: $$txt, method: $$txt, body: any) {
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
                    throw new Error(
                        'Network response was not ok ' + response.statusText
                    );
                }
                return response.json(); // JSON으로 파싱
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    static async getAsync(url: $$txt) {
        return await Fetch.callAsync(url, 'GET', $$null);
    }

    static async postAsync(url: $$txt, body: any) {
        return await Fetch.callAsync(url, 'POST', body);
    }

    static async putAsync(url: $$txt, body: any) {
        return await Fetch.callAsync(url, 'PUT', body);
    }

    static async deleteAsync(url: $$txt) {
        return await Fetch.callAsync(url, 'DELETE', $$null);
    }

    static async patchAsync(url: $$txt, body: any) {
        return await Fetch.callAsync(url, 'PATCH', body);
    }
    static abort() {
        Fetch._controller?.abort();
    }
}
