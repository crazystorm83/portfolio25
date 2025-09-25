import {
    IOptionalData,
    IOptionalDatas,
    IRequireData,
} from '../data_model/IDataModel';
export interface IPluginPayload<TData> extends IRequireData<TData> {}
export interface IPluginResult<TData>
    extends IOptionalData<TData>,
        IOptionalDatas<TData> {
    pluginname: string;
}
export interface IPlugin {
    get name(): string;
    execute(payload: IPluginPayload<any>): IPluginResult<any>;
    executeAsync(payload: IPluginPayload<any>): Promise<IPluginResult<any>>;
}
