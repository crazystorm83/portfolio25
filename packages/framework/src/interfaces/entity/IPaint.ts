import { ENTITY_DATA } from '../../computedvalues/ComputedValues';
import { IAttribute } from './IAttribute';
import { IClass } from './IClass';
import { IStyle } from './IStyle';

export interface IPaint<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> {
    get class(): IClass<TClassData>;
    set class(value: IClass<TClassData>);

    get style(): IStyle<TStyleData>;
    set style(value: IStyle<TStyleData>);

    get attribute(): IAttribute<TAttributeData>;
    set attribute(value: IAttribute<TAttributeData>);
}
