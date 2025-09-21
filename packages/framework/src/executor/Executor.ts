import _ from 'lodash';
import { $$txt } from '../datatypes';
import {
    EN_MODULE_MAJOR_VERSION,
    EN_MODULE_POSTFIX,
    EN_MOUDLE_PREFIX,
} from '../enums';
import { Disposable } from '../implements';

export interface IDispatchPayload {
    prefix: EN_MOUDLE_PREFIX;
    micromodulename: $$txt;
    major_version: EN_MODULE_MAJOR_VERSION;
    minor_version: $$txt;
    patch_version: $$txt;
    postfix: EN_MODULE_POSTFIX;
}

export abstract class Executor extends Disposable {
    protected static _map = new Map<$$txt, any>();

    constructor() {
        super();
    }

    dispose(): void {
        throw new Error("Method not implemented.");
    }

    private static __createId(payload: IDispatchPayload): $$txt {
        const {
            prefix,
            micromodulename,
            major_version,
            minor_version,
            patch_version,
            postfix,
        } = payload;

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

    static dispatch<TPayload extends IDispatchPayload, TResult = any>(
        payload: TPayload
    ): TResult {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }

        return {} as TResult;
    }
    static async dispatchAsync<
        TPayload extends IDispatchPayload,
        TResult = any
    >(payload: TPayload): Promise<TResult> {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }

        return {} as TResult;
    }
}

// 식별자 체계
interface IIdentifier {
    readonly id: $$txt;
}

interface IUserActionIdentifier extends IIdentifier {}
