import { IAttribute } from './IAttribute';
import { IClass } from './IClass';
import { IStyle } from './IStyle';

export interface IPaint {
    get class(): IClass;
    set class(value: IClass);

    get style(): IStyle;
    set style(value: IStyle);

    get attribute(): IAttribute;
    set attribute(value: IAttribute);
}
