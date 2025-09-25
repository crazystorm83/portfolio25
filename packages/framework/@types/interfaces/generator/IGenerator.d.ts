export interface IGenerator {
    generate<TPayload = any, TResult = any>(payload: TPayload): TResult;
    generateAsync<TPayload = any, TResult = any>(
        payload: TPayload,
    ): Promise<TResult>;
}
