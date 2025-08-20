export function methodHook(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`메서드 호출: ${propertyKey}, 매개변수: ${args}`);
        const result = originalMethod.apply(this, args);
        return result;
    };
}
//# sourceMappingURL=@methodHook.js.map