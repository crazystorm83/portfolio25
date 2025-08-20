var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $$null } from '@framework/datatypes';
export class Fetch {
    static callAsync(url, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    static getAsync(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Fetch.callAsync(url, 'GET', $$null);
        });
    }
    static postAsync(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Fetch.callAsync(url, 'POST', body);
        });
    }
    static putAsync(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Fetch.callAsync(url, 'PUT', body);
        });
    }
    static deleteAsync(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Fetch.callAsync(url, 'DELETE', $$null);
        });
    }
    static patchAsync(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Fetch.callAsync(url, 'PATCH', body);
        });
    }
    static abort() {
        var _a;
        (_a = Fetch._controller) === null || _a === void 0 ? void 0 : _a.abort();
    }
}
//# sourceMappingURL=Fetch.js.map