import { ITokenizePlugin } from "@framework/interfaces";
export interface IRequireData<TData> {
    data: TData;
}
export interface IOptionalData<TData> {
    data?: TData;
}
export interface IOptionalDatas<TData> {
    datas?: TData[];
}
export type $$tokenType = "unknown" | "text" | "image" | "link" | "video" | "audio" | "table" | "list" | "unordered-list" | "ordered-list" | "heading" | "paragraph" | "code" | "quote" | "enter" | "block-quote" | "code-block" | "block";
export type $$webtoken = {
    type: $$tokenType;
    styles: {
        [key: string]: string;
    }[];
    attributes: {
        [key: string]: string;
    }[];
    text: string;
};
export declare abstract class Selection {
}
export declare abstract class SelectionLexical {
    protected _config: {
        plugins: ITokenizePlugin[];
    };
    constructor(_config: {
        plugins: ITokenizePlugin[];
    });
}
//# sourceMappingURL=Selection.d.ts.map