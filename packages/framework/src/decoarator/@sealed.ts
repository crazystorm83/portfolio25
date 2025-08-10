export function sealed() {
    return function sealed_constructor(constructor: Function) {
        console.log(`sealed: ${constructor.name}`);
    };
}
