export interface IDeserializer {
    deserialize<TResult = any>(): TResult;
}
