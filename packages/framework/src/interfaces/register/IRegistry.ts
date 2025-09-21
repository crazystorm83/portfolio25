import { $$numeric, $$txt } from "../../datatypes";

export interface IRegistry<T = any> {
    add(id: $$txt, listener: Function): () => void;
    remove(id: $$txt, listener?: Function): void;
    sort(id: $$txt, sort: (a: Function, b: Function) => $$numeric): void;
    emit(id: $$txt, ...args: any[]): void;
    emitAsync(id: $$txt, ...args: any[]): Promise<void>;
}