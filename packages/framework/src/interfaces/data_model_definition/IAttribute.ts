import { ENTITY_DATA } from '@framework/computedvalues';
import { $$numeric, $$txt } from '@framework/datatypes';
import { EN_ATTR_TYPE } from '@framework/enums';

export interface IAttribute<T> extends ENTITY_DATA<T> {
    prop_id: $$txt;
    attr_id: $$txt;
    attr_type: EN_ATTR_TYPE;
}

const attr: IAttribute<$$numeric> = {
    prop_id: 'prop_id',
    attr_id: 'attr_id',
    attr_type: EN_ATTR_TYPE.Information,
    data: 1,
};
