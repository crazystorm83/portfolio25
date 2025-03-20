import { ISelector } from '../../../framework';
import { IMenuConfiguration } from '../../interfacies/menu/IMenuConfiguration';
import { IContentConofiguration } from '../../interfacies/page/IContentConofiguration';
import { IFooterConfiguration } from '../../interfacies/page/IFooterConfiguration';
import { IHeaderConfiguration } from '../../interfacies/page/IHeaderConfiguration';
import { IRootConfiguration } from '../../interfacies/page/IRootConfiguration';

export interface IWebSelector extends ISelector {}

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

export interface IWebApplicationConfiguration {
    set menu(menu: IMenuConfiguration);
    get menu(): Readonly<IMenuConfiguration>;

    set page(page: IPageConfiguration);
    get page(): Readonly<IPageConfiguration>;
}

export class WebApplicationConfiguration
    implements IWebApplicationConfiguration
{
    set menu(menu: IMenuConfiguration) {}
    get menu(): Readonly<IMenuConfiguration> {
        throw new Error('Method not implemented.');
    }

    set page(page: IPageConfiguration) {
        throw new Error('Method not implemented.');
    }
    get page(): Readonly<IPageConfiguration> {
        throw new Error('Method not implemented.');
    }
}
