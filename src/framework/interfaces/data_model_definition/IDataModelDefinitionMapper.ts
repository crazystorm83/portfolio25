import { $$txt } from '@framework/datatypes';
import { IPropDefinition } from './IPropDefinition';

export interface IDataModelDefinition {
    props: IPropDefinition;
}

export type IDataModelDefinitionMapper = {
    [data_model_definition_id: $$txt]: IDataModelDefinition;
};
