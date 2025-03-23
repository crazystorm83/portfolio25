import {
    IWebApplication,
    WebApplication,
} from './implements/application/WebApplication';
import { WebApplicationConfiguration } from './implements/application/WebApplicationConfiguration';

export async function applicationStart() {
    console.log('applicationStart');

    const app_config = new WebApplicationConfiguration();
    const application: IWebApplication = new WebApplication(app_config);

    await application.startAsync();
}
