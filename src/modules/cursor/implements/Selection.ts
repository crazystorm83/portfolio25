export interface ISelectionGetPlainTextPayload<TData> extends IRequireData<TData> {}
export interface ISelectionGetPlainTextResult<TData> extends IOptionalData<TData>, IOptionalDatas<TData> {}

export interface ISelectionGetStructuredPayload<TData> extends IRequireData<TData> {}
export interface ISelectionGetStructuredResult<TData> extends IOptionalData<TData>, IOptionalDatas<TData> {}

export interface IRequireData<TData> {
    data: TData;
}

export interface IOptionalData<TData> {
    data?: TData;
}

export interface IOptionalDatas<TData> {
    datas?: TData[];
}

export interface IPluginPayload {}
export interface IPluginResult extends IOptionalData<any>, IOptionalDatas<any> {
    pluginname: string;
}

export interface IPlugin {
    get name(): string;

    execute(payload: IPluginPayload): IPluginResult;
    executeAsync(payload: IPluginPayload): Promise<IPluginResult>;
}

export type $$tokenType = "text" | "image" | "link" | "video" | "audio" | "table" | "list" | "unordered-list" | "ordered-list" | "heading" | "paragraph" | "code" | "quote" | "enter" | "block-quote" | "code-block";

export type $$webtoken = {
    type: $$tokenType,
    styles: { [key: string]: string}[],
    attributes: { [key: string]: string}[],
    text: string
}

export abstract class Selection {
}

export abstract class SelectionLexical {

    constructor(protected _config: {
        plugins: IPlugin[]
      }) {
        
      }
    }