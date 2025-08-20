var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Executor {
    static __createId(payload) {
        const { prefix, micromodulename, major_version, minor_version, patch_version, postfix, } = payload;
        let id = `I${prefix}${micromodulename}${major_version}`;
        if (minor_version) {
            id = `${id}${minor_version}`;
        }
        if (patch_version) {
            if (_.isUndefined(minor_version)) {
                throw new Error('Minor version is required for patch version');
            }
            id = `${id}${patch_version}`;
        }
        id = `${id}${postfix}`;
        return id;
    }
    static dispatch(payload) {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }
        return {};
    }
    static dispatchAsync(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.__createId(payload);
            const action = this._map.get(id);
            if (!action) {
                throw new Error(`Action with id ${id} not found`);
            }
            return {};
        });
    }
}
Executor._map = new Map();
//# sourceMappingURL=Executor.js.map