import { $$txt } from '../datatypes';
import { EN_MODULE_MAJOR_VERSION, EN_MODULE_POSTFIX, EN_MOUDLE_PREFIX } from '../enums';
export interface IDispatchPayload {
    prefix: EN_MOUDLE_PREFIX;
    micromodulename: $$txt;
    major_version: EN_MODULE_MAJOR_VERSION;
    minor_version: $$txt;
    patch_version: $$txt;
    postfix: EN_MODULE_POSTFIX;
}
export declare abstract class Executor {
    protected static _map: Map<string, any>;
    private static __createId;
    static dispatch<TPayload extends IDispatchPayload, TResult = any>(payload: TPayload): TResult;
    static dispatchAsync<TPayload extends IDispatchPayload, TResult = any>(payload: TPayload): Promise<TResult>;
}
