import { ENTITY_DATA } from '../../../computedvalues/ComputedValues';
export interface IShapeDrawLifecycle<TClassData extends ENTITY_DATA, TStyleData extends ENTITY_DATA, TAttributeData extends ENTITY_DATA> {
    prepare<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    create<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    draw<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
    complete<TPayload extends TClassData & TStyleData & TAttributeData, TResult = any>(payload: TPayload): TResult;
}
