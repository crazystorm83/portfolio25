import _ from 'lodash';
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
    static async dispatchAsync(payload) {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }
        return {};
    }
}
Executor._map = new Map();
