import { EN_DIRECTION } from '../enums';
export type ENTITY_DATA<TData = any> = {
    data: TData;
};
export interface IENTITY_DATA<TData = any> {
    data: TData;
}
export type ENTITY_DATAMODEL<TData = any> = {
    data: TData;
};
export interface IENTITY_DATAMODEL<TData = any> {
    data: TData;
}
export type TY_DIRECTION = {
    UP: EN_DIRECTION.UP;
    DOWN: EN_DIRECTION.DOWN;
    LEFT: EN_DIRECTION.LEFT;
    RIGHT: EN_DIRECTION.RIGHT;
};
export type CV_DIRECTION = keyof TY_DIRECTION;
