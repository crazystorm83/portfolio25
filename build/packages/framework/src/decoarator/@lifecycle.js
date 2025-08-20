export function lifecycle(lifecyclename) {
    return function lifecycle_constructor(constructor) {
        console.log(`lifecycle: ${constructor.name}`);
    };
}
//# sourceMappingURL=@lifecycle.js.map