/**
    type TEnum = 'round' | 'ceil' | 'floor';
    let a: $$enum<TEnum>;
    a = 'round'
 */
export const $$enum = '$$enum';
export type $$enum<T> = T;
