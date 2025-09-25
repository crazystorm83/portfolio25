import { $$txt } from '../../../datatypes';
import { Disposable } from '../../../implements/dispose/Disposable';
import { IKeyValue } from '../../../interfaces/entity/IKeyValue';

export abstract class AbsKeyValue extends Disposable implements IKeyValue {
    abstract add<TPayload = any, TResult = any>(
        key: $$txt,
        value: TPayload,
    ): TResult;
    abstract remove<TPayload = any, TResult = any>(
        key: $$txt,
        value: TPayload,
    ): TResult;
    abstract has<TPayload = any, TResult = boolean>(
        key: $$txt,
        value: TPayload,
    ): TResult;

    dispose(): void {
        throw new Error('Method not implemented.');
    }
}
