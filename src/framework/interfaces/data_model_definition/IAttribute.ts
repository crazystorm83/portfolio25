import { ENTITY_DATA } from '../../computedvalues';
import { $$numeric, $$txt } from '../../datatypes';
import { EN_ATTR_TYPE } from '../../enums';

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