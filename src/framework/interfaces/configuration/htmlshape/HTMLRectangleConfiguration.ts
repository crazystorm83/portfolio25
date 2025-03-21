import { ENTITY_DATA } from '../../../computedvalues';
import { IPaint, IRenderer } from '../../entity';
import { IHTMLRectangleConfiguration } from './IHTMLRectangleConfiguration';

export class HTMLRectangleConfiguration<
    TClassData extends ENTITY_DATA,
    TStyleData extends ENTITY_DATA,
    TAttributeData extends ENTITY_DATA
> implements
        IHTMLRectangleConfiguration<TClassData, TStyleData, TAttributeData>
{
    type: 'none' | 'rectangle' | 'circle' | 'ellipse' | 'line' | 'polygon';

    constructor() {
        this.type = 'rectangle';
    }

    get paint(): IPaint<TClassData, TStyleData, TAttributeData> {
        throw new Error('Method not implemented.');
    }
    set paint(value: IPaint<TClassData, TStyleData, TAttributeData>) {
        throw new Error('Method not implemented.');
    }
    get renderer(): IRenderer<
        TClassData,
        TStyleData,
        TAttributeData,
        any,
        any
    > {
        throw new Error('Method not implemented.');
    }
    set renderer(
        value: IRenderer<TClassData, TStyleData, TAttributeData, any, any>
    ) {
        throw new Error('Method not implemented.');
    }
}
