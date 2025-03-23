import { IContentConofiguration } from './IContentConofiguration';
import { IFooterConfiguration } from './IFooterConfiguration';
import { IHeaderConfiguration } from './IHeaderConfiguration';
import { IRootConfiguration } from './IRootConfiguration';

export interface IPageConfiguration {
    set root(root: IRootConfiguration);
    get root(): Readonly<IRootConfiguration>;

    set header(header: IHeaderConfiguration);
    get header(): Readonly<IHeaderConfiguration>;

    set content(content: IContentConofiguration);
    get content(): Readonly<IContentConofiguration>;

    set footer(footer: IFooterConfiguration);
    get footer(): Readonly<IFooterConfiguration>;
}
