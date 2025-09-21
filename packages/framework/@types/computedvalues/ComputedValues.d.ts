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
    UP: EN_DIRECTION.Up;
    DOWN: EN_DIRECTION.Down;
    LEFT: EN_DIRECTION.Left;
    RIGHT: EN_DIRECTION.Right;
};
export type CV_DIRECTION = keyof TY_DIRECTION;
