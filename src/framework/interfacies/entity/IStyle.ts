import { IDeserializer, ISerializer } from './base';
import { IList } from './IList';
import { IPosition } from './IPosition';
import { ISize } from './ISize';

export interface IStyle
    extends IList,
        IPosition,
        ISize,
        ISerializer,
        IDeserializer {}
