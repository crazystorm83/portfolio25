export function lifecycle(lifecyclename: string) {
    return function lifecycle_constructor(constructor: Function) {
        console.log(`lifecycle: ${constructor.name}`);
    };
}
