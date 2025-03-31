import { $$tf, $$txt } from '@framework/datatypes';

export interface Feature {
    id: $$txt;
    name: $$txt;
    version: $$txt;
    dependencies?: $$txt[];
    required?: $$tf;
}
