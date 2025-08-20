import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { IList } from './IList';

export interface IAttribute<T extends ENTITY_DATA> extends IList<T> {}
