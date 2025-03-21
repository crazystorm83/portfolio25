import { $$txt } from '../../datatypes';
import { $$primitive_datatypes } from '../../datatypes/$$primitive_datatypes';

export interface IPropDefinition {
    prop_id: $$txt;
    data_value_id: $$txt;
    data_type: $$primitive_datatypes;
}
