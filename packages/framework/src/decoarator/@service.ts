export type Klass<TInstance> = new (...args: any[]) => TInstance;

export function service() {
    return function <T extends Klass<any>>(target: T) {
        console.log(`service: ${target.name}`);
    };
}
