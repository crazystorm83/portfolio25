import { $$txt } from '../../datatypes';
export interface IRegister<T = any> {
    has(id: $$txt): boolean;
    register(item: T): boolean;
    unregister(item: T): boolean;
    registerOnce(item: T): boolean;
}
