export function methodHook(
    target: any,
    propertyKey: any,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`메서드 호출: ${propertyKey}, 매개변수: ${args}`);
        const result = originalMethod.apply(this, args);
        return result;
    };
}
