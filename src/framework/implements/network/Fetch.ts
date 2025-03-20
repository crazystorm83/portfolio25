export class Fetch {
    private static async callAsync(url: string, method: string, body: any) {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
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

    static async getAsync(url: string) {
        return await Fetch.callAsync(url, 'GET', null);
    }

    static async postAsync(url: string, body: any) {
        return await Fetch.callAsync(url, 'POST', body);
    }

    static async putAsync(url: string, body: any) {
        return await Fetch.callAsync(url, 'PUT', body);
    }

    static async deleteAsync(url: string) {
        return await Fetch.callAsync(url, 'DELETE', null);
    }

    static async patchAsync(url: string, body: any) {
        return await Fetch.callAsync(url, 'PATCH', body);
    }
}
