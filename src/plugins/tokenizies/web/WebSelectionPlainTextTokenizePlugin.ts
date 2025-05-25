import { ITokenizePlugin, IWebTokenizePayloadPlugin, IWebTokenizeResultPlugin } from "@framework/interfaces";
import { $$webtoken } from "src/modules/cursor/implements/Selection";

export interface IWebSelectionPlainTextTokenizePlugin extends ITokenizePlugin {}
export interface IWebSelectionPlainTextTokenizePluginPayload extends IWebTokenizePayloadPlugin {}
export interface IWebSelectionPlainTextTokenizePluginResult extends IWebTokenizeResultPlugin {}

export class WebSelectionPlainTextTokenizePlugin implements IWebSelectionPlainTextTokenizePlugin {
    name: string = "IWebSelectionPlainTextTokenizePlugin";

    execute(payload: IWebSelectionPlainTextTokenizePluginPayload): IWebSelectionPlainTextTokenizePluginResult {
        throw new Error("Method not implemented.");
    }
    async executeAsync(payload: IWebSelectionPlainTextTokenizePluginPayload): Promise<IWebSelectionPlainTextTokenizePluginResult> {
        const {data: request_data } = payload;

        const result_datas: $$webtoken[] = [];
        
        const div = document.createElement('div');
        div.appendChild(request_data.cloneNode(true));
        let text = div.textContent || div.innerText || '';

        result_datas.push({
            type: "text",
            styles: [],
            attributes: [],
            text: text
        });
        
        return {
            datas: result_datas,
            pluginname: this.name
        };
    }
}