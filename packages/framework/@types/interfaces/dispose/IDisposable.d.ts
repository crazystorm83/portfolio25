export interface IDisposable {
    [Symbol.dispose](): void;
}
