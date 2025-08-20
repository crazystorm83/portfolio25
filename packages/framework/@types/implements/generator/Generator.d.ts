import { AbsGenerator } from '../../abstracts/generator/AbsGenerator';
import { IGenerator } from '../../interfaces/generator/IGenerator';
export declare abstract class Generator extends AbsGenerator implements IGenerator {
    abstract generate<TPayload = any, TResult = any>(payload: TPayload): TResult;
    abstract generateAsync<TPayload = any, TResult = any>(payload: TPayload): Promise<TResult>;
}
