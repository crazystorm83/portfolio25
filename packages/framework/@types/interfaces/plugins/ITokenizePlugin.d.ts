import { IPlugin, IPluginPayload, IPluginResult } from '../plugins/IPlugin';
export interface ITokenizePlugin extends IPlugin {}
export interface ITokenizePluginPayload<TData> extends IPluginPayload<TData> {}
export interface ITokenizePluginResult<TData> extends IPluginResult<TData> {}
