import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { IList } from './IList';
import { IPosition } from './IPosition';
import { ISize } from './ISize';
export interface IStyle<T extends ENTITY_DATA> extends IList<T>, IPosition, ISize, ISerializer, IDeserializer {
}
