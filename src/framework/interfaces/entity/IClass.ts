import { ENTITY_DATA } from '@framework/computedvalues';
import { IList } from './IList';

export interface IClass<T extends ENTITY_DATA> extends IList<T> {}
