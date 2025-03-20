import { WebApplication } from './entity/application/WebApplication';
import { WebApplicationConfiguration } from './entity/application/WebApplicationConfiguration';

export async function applicationStarter() {
    const app_config = new WebApplicationConfiguration();
    const application = new WebApplication(app_config);

    await application.startAsync();
}
