export function middleware() {
    return (request: any, next: () => {}) => {
        next();
    };
}
