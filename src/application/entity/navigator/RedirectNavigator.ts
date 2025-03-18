import {
    AbsNavigator,
    INavigatorMoveAsyncPayload,
    INavigatorMovePayload,
} from './AbsNavigator';

export class RedirectNavigator extends AbsNavigator {
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

        window.location.href = navigationPath;

        return null as TResult;
    }
}
