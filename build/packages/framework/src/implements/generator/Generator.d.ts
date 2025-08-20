import { AbsGenerator } from '@framework/abstracts';
import { IGenerator } from '@framework/interfaces/generator';
export declare abstract class Generator extends AbsGenerator implements IGenerator {
    abstract generate<TPayload = any, TResult = any>(payload: TPayload): TResult;
    abstract generateAsync<TPayload = any, TResult = any>(payload: TPayload): Promise<TResult>;
}
//# sourceMappingURL=Generator.d.ts.map