import { IDisposable } from "../../interfaces/dispose";

export abstract class Disposable implements IDisposable {
    abstract dispose(): void;
}