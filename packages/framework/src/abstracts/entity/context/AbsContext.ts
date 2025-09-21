import { Disposable } from "../../../implements/dispose/Disposable";

export interface IBaseContext {}

export abstract class BaseContext extends Disposable implements IBaseContext {
    dispose(): void {
        throw new Error("Method not implemented.");
    }
}
