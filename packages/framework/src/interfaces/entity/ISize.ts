import { $$numeric } from '../../datatypes';

export interface ISize {
    get width(): $$numeric;
    set width(value: $$numeric);

    get height(): $$numeric;
    set height(value: $$numeric);
}
