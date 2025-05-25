import { $$webtoken, IPlugin, ISelectionGetPlainTextPayload, ISelectionGetPlainTextResult, ISelectionGetStructuredPayload, ISelectionGetStructuredResult, Selection, SelectionLexical } from "./Selection";

export class WebSelectionLexical extends SelectionLexical {
  constructor(protected override _config: {
    plugins: IPlugin[]
  }) {
    super(_config);
  }

  tokenizeSelection() {
    for (const plugin of this._config.plugins) {
      const data = this.__getSelctionData();
      if (data === null) {
        continue;
      }

      const result = plugin.execute({ data });
      console.log('pluginname: {0}, data: {1}, datas: {2}', result.pluginname, result.data, result.datas);
    }
  }

  async tokenizeSelectionAsync() {
    const promises = this._config.plugins.map(plugin => {
      const data = this.__getSelctionData();
      if (data === null) {
        return null;
      }

      return plugin.executeAsync({ data });
    }).filter((plugin) => plugin !== null);

    /**
     * 설정된 plugins 의 개수와 실행된 플러그인의 개수가 다르면 오류 발생
     */
    if (this._config.plugins.length !== promises.length) {
      throw new Error('plugins 의 개수와 실행된 플러그인의 개수가 다릅니다.');
    }

    /**
     * 병렬처리로 시간 단축을 위해 사용
     */
    const results = await Promise.all(promises);

    for (const result of results) {
      console.log('pluginname: {0}, data: {1}, datas: {2}', result.pluginname, result.data, result.datas);
    }

    return results;
  }

  private __getSelctionData() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      //notify error
      return null;
    }

    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents();

    return fragment
  }
}