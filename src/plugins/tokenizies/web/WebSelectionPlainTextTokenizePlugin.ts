import { ITokenizePlugin, IWebTokenizePayloadPlugin, IWebTokenizeResultPlugin } from "@framework/interfaces";
import { $$webtoken } from "src/modules/cursor/implements/Selection";
import { Tokenize } from "../Tokenize";

export interface IWebSelectionPlainTextTokenizePlugin extends ITokenizePlugin {}
export interface IWebSelectionPlainTextTokenizePluginPayload extends IWebTokenizePayloadPlugin {}
export interface IWebSelectionPlainTextTokenizePluginResult extends IWebTokenizeResultPlugin {}

export class WebSelectionPlainTextTokenizePlugin extends Tokenize implements IWebSelectionPlainTextTokenizePlugin {
    name: string = "IWebSelectionPlainTextTokenizePlugin";

    execute(payload: IWebSelectionPlainTextTokenizePluginPayload): IWebSelectionPlainTextTokenizePluginResult {
        throw new Error("Method not implemented.");
    }
    async executeAsync(payload: IWebSelectionPlainTextTokenizePluginPayload): Promise<IWebSelectionPlainTextTokenizePluginResult> {
        const {data: request_data } = payload;

        const result_datas: $$webtoken[] = [];
        
        const div = document.createElement('div');
        div.appendChild(request_data.cloneNode(true));

        const { data: result_data } = this._tokenize(div);        
        result_datas.push(result_data);
        
        return {
            datas: result_datas,
            pluginname: this.name
        };
    }
}