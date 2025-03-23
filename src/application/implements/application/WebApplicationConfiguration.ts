import {
    IContentConofiguration,
    IFooterConfiguration,
    IHeaderConfiguration,
    IMenuConfiguration,
    IPageConfiguration,
    IRootConfiguration,
    IWebApplicationConfiguration,
} from '@application/interfaces';
import {
    ILogger,
    ISelector,
    ISolution,
    ISolutionIdentifier,
} from '@framework/interfaces';

export interface IWebSelector extends ISelector {}

export class WebApplicationConfiguration
    implements IWebApplicationConfiguration
{
    private __solution: Map<string, ISolution> = new Map();

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

    setSolution(value: ISolution) {
        this.__solution.set(value.id, value);
    }
    getSolution(key: ISolutionIdentifier | string): ISolution {
        let _key: string;

        if (typeof key !== 'string') {
            _key = key.id;
        } else {
            _key = key;
        }

        const solution: ISolution | undefined = this.__solution.get(_key);
        if (_.isUndefined(solution)) {
            throw new Error('Solution not found');
        }

        return solution;
    }
}
