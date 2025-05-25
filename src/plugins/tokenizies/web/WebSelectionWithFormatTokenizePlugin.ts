import { ITokenizePlugin, IWebTokenizePayloadPlugin, IWebTokenizeResultPlugin } from "@framework/interfaces";
import { $$webtoken } from "src/modules/cursor/implements/Selection";

export interface IWebSelectionWithFormatTokenizePlugin extends ITokenizePlugin {}
export interface IWebSelectionWithFormatTokenizePluginPayload extends IWebTokenizePayloadPlugin {}
export interface IWebSelectionWithFormatTokenizePluginResult extends IWebTokenizeResultPlugin {}

export class WebSelectionWithFormatTokenizePlugin implements IWebSelectionWithFormatTokenizePlugin {
    name: string = "IWebSelectionWithFormatTokenizePlugin";

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
      
    private __extractImportantStyles(node) {
        const important = {};
        try {
          const computedStyle = window.getComputedStyle(node);
          const props = [
            'fontWeight', 'fontStyle', 'textDecoration',
            'color', 'backgroundColor', 'fontSize', 'fontFamily'
          ];
          
          props.forEach(prop => {
            const value = computedStyle[prop];
            if (value && value !== 'normal' && value !== 'none' && 
                value !== 'rgb(0, 0, 0)' && value !== 'rgba(0, 0, 0, 0)') {
              important[prop] = value;
            }
          });
        } catch (e) {
          // 스타일 접근 실패 시 무시
        }
        
        return important;
    }
    
    private __extractImportantAttributes(node) {
        const important = {};
        const attrs = ['href', 'src', 'alt', 'title'];
        
        attrs.forEach(attr => {
            const value = node.getAttribute(attr);
            if (value) {
            important[attr] = value;
            }
        });
        
        return important;
    }
}