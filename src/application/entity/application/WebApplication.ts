import { IWebApplicationConfiguration } from './WebApplicationConfiguration';

export class WebApplication {
    protected _protocol: string = '';
    protected _domain: string = '';
    protected _port: string = '';

    //#region location properties

    /**************************************
     * domain 에 따라 자동으로 부여되는 값
     **************************************/
    protected _production?:
        | 'development'
        | 'test'
        | 'verification'
        | 'operator';

    set porotocol(value: string) {
        this._protocol = value;
    }

    set domain(value: string) {
        this._domain = value;

        if (value === 'localhost') {
            this._production = 'development';
        } else if (value === 'test.com') {
            this._production = 'test';
        } else if (value === 'verification.com') {
            this._production = 'verification';
        } else {
            this._production = 'operator';
        }
    }

    set port(value: string) {
        this._port = value;
    }

    get production() {
        if (!this._production) {
            throw new Error('domain is not set');
        }
        return this._production;
    }

    //#endregion

    constructor(
        protected _application_configuration: IWebApplicationConfiguration
    ) {
        const window_location = window.location;

        this.porotocol = window_location.protocol;
        this.domain = window_location.hostname;
        this.port = window_location.port;
    }

    public async startAsync() {
        await this._loadMenu();
    }

    protected async _loadMenu() {
        return new Promise((resolve, reject) => {
            try {
                resolve({});
            } catch (e) {
                reject(e);
            }
        });
    }
}
