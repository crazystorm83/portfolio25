import { ENTITY_DATA } from '@framework/computedvalues';
import { IList } from './IList';
export interface IAttribute<T extends ENTITY_DATA> extends IList<T> {
}
