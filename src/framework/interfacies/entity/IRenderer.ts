import { IPaint } from './IPaint';

export interface IRenderer<TPayload = any, UPayload = any> extends IPaint {
    draw<TResult = void>(target: TPayload, dest: UPayload): TResult;
}
