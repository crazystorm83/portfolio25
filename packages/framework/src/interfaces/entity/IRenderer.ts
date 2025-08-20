import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { IPaint } from './IPaint';

export interface IRenderer<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA,
    TPayload = any,
    UPayload = any
> extends IPaint<TClassData, TStyleData, TAttributeData> {
    draw<TResult = void>(target: TPayload, dest: UPayload): TResult;
}
