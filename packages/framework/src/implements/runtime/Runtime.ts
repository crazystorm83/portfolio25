import { Disposable } from "../dispose/Disposable";

export class Runtime extends Disposable {    
    constructor() {
        super();
    }

    dispose(): void {
        throw new Error("Method not implemented.");
    }
}