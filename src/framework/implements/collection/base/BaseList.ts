import { AbsList } from '@framework/abstracts/entity/collection/AbsList';
import { ENTITY_DATA } from '@framework/computedvalues';

export abstract class BaseList<T extends ENTITY_DATA> extends AbsList<T> {}
