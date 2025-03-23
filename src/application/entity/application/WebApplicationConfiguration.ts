import {
    IContentConofiguration,
    IFooterConfiguration,
    IHeaderConfiguration,
    IMenuConfiguration,
    IRootConfiguration,
} from '@application/interfaces';
import { ILogger, ISelector } from '@framework/interfaces';

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

    set logger(logger: ILogger);
    get logger(): Readonly<ILogger>;
}

export class WebApplicationConfiguration
    implements IWebApplicationConfiguration
{
    set logger(logger: ILogger) {
        throw new Error('Method not implemented.');
    }
    get logger(): ILogger {
        throw new Error('Method not implemented.');
    }

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
