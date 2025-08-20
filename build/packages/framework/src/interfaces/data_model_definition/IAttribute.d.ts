import { ENTITY_DATA } from '@framework/computedvalues';
import { $$txt } from '@framework/datatypes';
import { EN_ATTR_TYPE } from '@framework/enums';
export interface IAttribute<T> extends ENTITY_DATA<T> {
    prop_id: $$txt;
    attr_id: $$txt;
    attr_type: EN_ATTR_TYPE;
}
//# sourceMappingURL=IAttribute.d.ts.map