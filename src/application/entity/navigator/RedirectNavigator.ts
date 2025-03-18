import {
    AbsNavigator,
    INavigatorMoveAsyncPayload,
    INavigatorMovePayload,
} from './AbsNavigator';

export abstract class RedirectNavigator extends AbsNavigator {
    move(payload: INavigatorMovePayload): void {}
    async moveAsync(payload: INavigatorMoveAsyncPayload): Promise<void> {
        //https://github.com/TypeStrong/ts-node/issues/100
        const { module, micromodule, menu, version } = payload;

        let navigationPath = `${module}`;

        if (micromodule) {
            navigationPath = `${navigationPath}/${micromodule}`;
        }

        navigationPath = `${navigationPath}/${menu}`;

        if (version) {
            navigationPath = `${navigationPath}?ver=${version}`;
        }

        window.location.href = `${navigationPath}`;
    }
}
