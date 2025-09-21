import { $$txt } from "../../../datatypes";
import { Disposable } from "../../../implements";
import { IKeyValue } from "../../../interfaces/entity/IKeyValue";
export declare abstract class AbsKeyValue extends Disposable implements IKeyValue {
    abstract add<TPayload = any, TResult = any>(key: $$txt, value: TPayload): TResult;
    abstract remove<TPayload = any, TResult = any>(key: $$txt, value: TPayload): TResult;
    abstract has<TPayload = any, TResult = boolean>(key: $$txt, value: TPayload): TResult;
    [Symbol.dispose](): void;
}
