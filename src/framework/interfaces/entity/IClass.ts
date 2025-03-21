import { ENTITY_DATA } from '../../computedvalues';
import { IList } from './IList';

export interface IClass<T extends ENTITY_DATA> extends IList<T> {}
