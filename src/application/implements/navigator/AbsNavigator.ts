import {
    EN_MENU,
    EN_MENU_MICROMODULE,
    EN_MENU_MODULE,
} from '../../../framework';
import { $$txt } from '../../../framework/datatypes';

export interface INavigatorMovePayload {
    module: EN_MENU_MODULE;
    micromodule?: EN_MENU_MICROMODULE;
    menu: EN_MENU;
    version: $$txt;
}
export interface INavigatorMoveAsyncPayload extends INavigatorMovePayload {}

export interface INavigator {
    move(payload: INavigatorMovePayload): void;
    moveAsync(payload: INavigatorMoveAsyncPayload): Promise<void>;
}

export abstract class AbsNavigator implements INavigator {
    protected _fetch(payload: { url: $$txt }) {
        const { url } = payload;

        fetch(url)
            .then((response) => {
                // 응답 처리 (HTTP 상태 확인)
                if (!response.ok) {
                    throw new Error(
                        'Network response was not ok ' + response.statusText
                    );
                }
                return response.json(); // JSON으로 파싱
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        return Promise.resolve();
    }

    protected async _fetchAsync(payload: {
        url: $$txt;
    }): Promise<Record<$$txt, any>> {
        const { url } = payload;
        return await fetch(url)
            .then((response) => {
                // 응답 처리 (HTTP 상태 확인)
                if (!response.ok) {
                    throw new Error(
                        'Network response was not ok ' + response.statusText
                    );
                }
                return response.json(); // JSON으로 파싱
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    abstract move(payload: INavigatorMovePayload): void;
    abstract moveAsync<TResult = any>(
        payload: INavigatorMoveAsyncPayload
    ): Promise<TResult>;
}
