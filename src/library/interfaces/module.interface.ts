import { Feature } from './feature.interface';
import { $$txt } from '@framework/datatypes';

export interface Module {
    feature: Feature;
    initialize(): Promise<boolean>;
    getInterfaceDefinitions(): Record<$$txt, $$txt>;
    getImplementations(): Record<$$txt, any>;
}
