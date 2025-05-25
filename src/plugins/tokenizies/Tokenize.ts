import { $$webtoken } from "src/modules/cursor/implements/Selection";

export abstract class Tokenize {
    protected _tokenize(data: HTMLElement): { data: $$webtoken } {
        const result_data: $$webtoken = {
            type: "unknown",
            styles: [],
            attributes: [],
            text: ""
        };

        switch (data.tagName) {
            case 'div':
                result_data.type = "block";
                result_data.styles = this.__extractStyles(data);
                result_data.attributes = this.__extractAttributes(data);
                result_data.text = data.textContent || data.innerText || "";
                break;
        }

        return { data: result_data};
    }
      
    private __extractStyles(node) {
        const important: { key: string, value: any }[] = [];
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
                important.push({
                    key: prop,
                    value: value
                })
            }
          });
        } catch (e) {
          // 스타일 접근 실패 시 무시
        }
        
        return important;
    }
    
    private __extractAttributes(node) {
        const important: { key: string, value: any }[] = [];
        const attrs = ['href', 'src', 'alt', 'title'];
        
        attrs.forEach(attr => {
            const value = node.getAttribute(attr);
            if (value) {
                important.push({
                    key: attr,
                    value: value
                })
            }
        });
        
        return important;
    }
}