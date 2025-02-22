import {
    $$code,
    $$date,
    $$datetime,
    $$decimal,
    $$enum,
    $$multicode,
    $$numeric,
    $$tf,
    $$txt,
} from './primitive_datatypes';
import {
    $$date_range,
    $$datetime_range,
    $$decimal_range,
    $$numeric_range,
    $$txt_range,
} from './range_datatypes';

export type $$primitive_datatypes =
    | $$code
    | $$date
    | $$datetime
    | $$decimal
    | $$enum<any>
    | $$multicode
    | $$numeric
    | $$tf
    | $$txt
    | $$date_range
    | $$datetime_range
    | $$decimal_range
    | $$numeric_range
    | $$txt_range;

export const $$primitive_datatypes = {
    $$code: '$$code',
    $$date: '$$date',
    $$datetime: '$$datetime',
    $$decimal: '$$decimal',
    $$enum: '$$enum',
    $$multicode: '$$multicode',
    $$numeric: '$$numeric',
    $$tf: '$$tf',
    $$txt: '$$txt',

    $$date_range: '$$date_range',
    $$datetime_range: '$$datetime_range',
    $$decimal_range: '$$decimal_range',
    $$numeric_range: '$$numeric_range',
    $$txt_range: '$$txt_range',
};
