export interface ISerializer {
    serialize<TResult = any>(): TResult;
}
