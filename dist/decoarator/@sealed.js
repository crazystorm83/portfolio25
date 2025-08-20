export function sealed() {
    return function sealed_constructor(constructor) {
        console.log(`sealed: ${constructor.name}`);
    };
}
