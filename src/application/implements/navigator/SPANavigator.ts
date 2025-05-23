import { $$null } from '../../../framework/datatypes';
import {
    AbsNavigator,
    INavigatorMoveAsyncPayload,
    INavigatorMovePayload,
} from './AbsNavigator';

export class SPANavigator extends AbsNavigator {
    move(payload: INavigatorMovePayload): void {}
    async moveAsync<TResult = any>(
        payload: INavigatorMoveAsyncPayload
    ): Promise<TResult> {
        const { module, micromodule, menu, version } = payload;

        let navigationPath = `${module}`;

        if (micromodule) {
            navigationPath = `${navigationPath}/${micromodule}`;
        }

        navigationPath = `${navigationPath}/${menu}`;

        if (version) {
            navigationPath = `${navigationPath}?ver=${version}`;
        }

        const jsonData = await this._fetchAsync({ url: navigationPath });

        console.log(jsonData);

        return $$null as TResult;
    }
}
