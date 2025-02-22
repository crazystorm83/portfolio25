import {
    EN_MOUDLE_PREFIX,
    EN_MODULE_POSTFIX,
    EN_MODULE_VERSION,
} from '../enums';
import { IUserAction } from '../useraction';

export interface IIdentifier {
    prefix: EN_MOUDLE_PREFIX;
    micromodulename: string;
    version?: EN_MODULE_VERSION;
    postfix: EN_MODULE_POSTFIX;
}

export abstract class Executor {
    protected _map = new Map<string, IUserAction>();

    private __createId(payload: IIdentifier): string {
        const { prefix, micromodulename, version, postfix } = payload;

        let id = `I${prefix}${micromodulename}`;

        if (version) {
            id = `${id}${version}`;
        }

        id = `${id}${postfix}`;

        return id;
    }

    dispatch<TPayload extends IIdentifier, TResult = any>(
        payload: TPayload
    ): TResult {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }

        return {} as TResult;
    }
    async dispatchAsync<TPayload extends IIdentifier, TResult = any>(
        payload: TPayload
    ): Promise<TResult> {
        const id = this.__createId(payload);
        const action = this._map.get(id);
        if (!action) {
            throw new Error(`Action with id ${id} not found`);
        }

        return {} as TResult;
    }
}
