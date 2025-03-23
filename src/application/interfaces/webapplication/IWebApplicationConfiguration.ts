import { ILogger } from '@framework/interfaces';
import { IMenuConfiguration } from '../menu';
import { IPageConfiguration } from '../page';

export interface IWebApplicationConfiguration {
    set menu(menu: IMenuConfiguration);
    get menu(): Readonly<IMenuConfiguration>;

    set page(page: IPageConfiguration);
    get page(): Readonly<IPageConfiguration>;

    set logger(logger: ILogger);
    get logger(): Readonly<ILogger>;
}
