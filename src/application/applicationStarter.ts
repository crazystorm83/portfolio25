import { IWebApplication, WebApplication } from './entity/application/WebApplication';
import { WebApplicationConfiguration } from './entity/application/WebApplicationConfiguration';

export async function applicationStarter() {
    const app_config = new WebApplicationConfiguration();
    const application: IWebApplication = new WebApplication(app_config);

    await application.startAsync();
}
