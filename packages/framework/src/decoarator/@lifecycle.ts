import { $$txt } from '@framework/datatypes';

export function lifecycle(lifecyclename: $$txt) {
    return function lifecycle_constructor(constructor: Function) {
        console.log(`lifecycle: ${constructor.name}`);
    };
}
