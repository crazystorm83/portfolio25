import { ITokenizePlugin, IWebTokenizePayloadPlugin, IWebTokenizeResultPlugin } from "@framework/interfaces";
import { $$webtoken } from "src/modules/cursor/implements/Selection";
import { Tokenize } from "../Tokenize";

export interface IWebSelectionWithFormatTokenizePlugin extends ITokenizePlugin {}
export interface IWebSelectionWithFormatTokenizePluginPayload extends IWebTokenizePayloadPlugin {}
export interface IWebSelectionWithFormatTokenizePluginResult extends IWebTokenizeResultPlugin {}

export class WebSelectionWithFormatTokenizePlugin extends Tokenize implements IWebSelectionWithFormatTokenizePlugin {
    name: string = "IWebSelectionWithFormatTokenizePlugin";

    private __regexps: {
        [key in 'blockTagRegexp' | 'attributeRegexp' | 'styleTagRegexp' | 'textNodeRegexp' | 'tableTagRegexp' | 'tableRowTagRegexp' | 'tableCellTagRegexp' | 'listTagRegexp' | 'listItemTagRegexp' | 'onlyTextRegexp']: RegExp;
    } = {
        /**
         * input
         *  <div class="align-left valign-bottom font-12" id="test"><span class="label-primary">가나</span></div>
         * output
         *  [0]: div
         *  [1]: class="align-left valign-bottom font-12" id="test"
         *  [2]: <span class="label-primary">가나</span>
         * execute
         *  blockTagRegexp.exec('<div class="align-left valign-bottom font-12" id="test"><span class="label-primary">가나</span></div>')
         */
        blockTagRegexp: /^<(div|p|span|h1|h2|h3|h4|h5|h6)\s*([^>]*)>(.*?)<\/\1>/g,

        /**
         * input
         *  <table class="table-1"><tr><td>가나</td><td>다라</td></tr></table>
         * output
         *  [0]: <table class="table-1"><tr><td>가나</td><td>다라</td></tr></table>
         *  [1]: table
         *  [2]: class="table-1"
         *  [3]: <tr><td>가나</td><td>다라</td></tr>
         */
        tableTagRegexp: /^<(table)\s*([^>]*)>(.*?)<\/\1>/g,

        /**
         * input
         *  <tr class="table-row-1" data-key="row1"><td>가나</td><td>다라</td></tr>
         * output
         *  [0]: <tr class="table-row-1" data-key="row1"><td>가나</td><td>다라</td></tr>
         *  [1]: tr
         *  [2]: class="table-row-1" data-key="row1"
         *  [3]: <td class="table-cell-1">가나</td><td class="table-cell-2">다라</td>
         */
        tableRowTagRegexp: /^<(tr)\s*([^>]*)>(.*?)<\/\1>/g,

        /**
         * input
         *  <td class="table-cell-1">가나</td><td class="table-cell-2">다라</td>
         * output
         *  [0]: <td class="table-cell-1">가나</td>
         *  [0]: td
         *  [1]: class="table-cell-1"
         *  [2]: 가나
         */
        tableCellTagRegexp: /^<(t[d|h])\s*([^>]*)>(.*?)<\/\1>/g,

        listTagRegexp: /^<([u|o]l)\s*([^>]*)>(.*?)<\/\1>/g,
        listItemTagRegexp: /^<(li)\s*([^>]*)>(.*?)<\/\1>/g,

        /**
         * input
         *  class="align-left valign-bottom font-12" id="test"
         * output
         *  [0]: class="align-left valign-bottom font-12" id="test"
         *  [1]: class
         *  [2]: align-left valign-bottom font-12
         * execute
         *  attributeRegexp.exec('class="align-left valign-bottom font-12" id="test"')
         */
        attributeRegexp: /^([a-zA-Z-]+)=["']([^"']*?)["']/g,

        /**
         * input
         *  <b>다라마<u>바사아자차</u></b>카타파하
         * 
         * output
         *  [0]: <b>다라마<u>바사아자차</u></b>
         *  [1]: b
         *  [2]: 다라마<u>바사아자차</u>
         */
        styleTagRegexp: /^<([b|i|u|strong|em])>(.*?)<\/\1>/g,

        /**
         * input
         *  가나<b>다라마바사아자차</b>카타파하
         * output
         *  [0]: 가나
         * execute
         *  text_tag.exec("가나<b>다라마바사아자차</b>카타파하")
         * 
         * input
         *  카타파하
         * output
         *  [0]: 카타파하
         * execute
         *  text_tag.exec("카타파하")
         */
        textNodeRegexp: /^([^<]+?)(?=<|$)/g,

        /**
         * input
         *  <h1>제목</h1><p>이것은 <strong>중요한</strong> 문단입니다.</p>
         * output
         *  [0]: 제목이것은 중요한 문단입니다.
         * execute
         *  "<h1>제목</h1><p>이것은 <strong>중요한</strong> 문단입니다.</p>".replace(onlyTextRegexp, "")
         */
        onlyTextRegexp: /<[^>]*>/g
    };

    execute(payload: IWebSelectionWithFormatTokenizePluginPayload): IWebSelectionWithFormatTokenizePluginResult {
        throw new Error("Method not implemented.");
    }

    async executeAsync(payload: IWebSelectionWithFormatTokenizePluginPayload): Promise<IWebSelectionWithFormatTokenizePluginResult> {
        const {data: request_data } = payload;
        
        const result_datas: $$webtoken[] = [];

        const div = document.createElement('div');
        div.appendChild(request_data.cloneNode(true));
        
        const walker = document.createTreeWalker(
            div,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null
        );
        
        let node;
        let textOffset = 0;
        
        while (node = walker.nextNode()) {
            const new_data: $$webtoken = {
                type: "unknown",
                styles: [],
                attributes: [],
                text: ""
            };
            
            if (node.nodeType === Node.TEXT_NODE) {
                new_data.type = "text";
                new_data.text += node.textContent;
                textOffset += node.textContent.length;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const tagName = node.tagName.toLowerCase();
                
                // const formatInfo = {
                //     position: textOffset,
                //     tag: tagName,
                //     styles: this.__extractImportantStyles(node),
                //     attributes: this.__extractImportantAttributes(node)
                // };
                
                // if (Object.keys(formatInfo.styles).length > 0 || 
                //     Object.keys(formatInfo.attributes).length > 0 ||
                //     ['strong', 'em', 'b', 'i', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
                //     result_datas.push(formatInfo);
                // }
            }
        }

        return {
            datas: result_datas,
            pluginname: this.name
        };
    }
}