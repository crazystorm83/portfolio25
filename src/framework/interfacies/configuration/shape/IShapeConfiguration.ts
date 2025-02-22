import { IPaint, IRenderer } from '../../entity';

export interface IShapeConfiguration {
    type: 'rectangle';

    get paint(): IPaint;
    set paint(value: IPaint);

    get renderer(): IRenderer;
    set renderer(value: IRenderer);
}
