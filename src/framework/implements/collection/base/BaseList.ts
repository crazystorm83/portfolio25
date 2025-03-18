import { AbsList } from '../../../abstracts/entity/collection/AbsList';
import { ENTITY_DATA } from '../../../computedvalues';

export abstract class BaseList<T extends ENTITY_DATA> extends AbsList<T> {}
