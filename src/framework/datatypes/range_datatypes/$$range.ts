import { $$date } from '../primitive_datatypes/$$date';
import { $$datetime } from '../primitive_datatypes/$$datetime';
import { $$txt } from '../primitive_datatypes/$$txt';

export const $$range = '$$range';
export type $$range<TFrom, TTo> = {
    from: TFrom;
    to: TTo;
};
