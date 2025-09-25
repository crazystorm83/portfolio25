import { IDisposable } from '../../interfaces/dispose';
export declare abstract class Disposable implements IDisposable {
    abstract [Symbol.dispose](): void;
}
