export function middleware() {
    return (request, next) => {
        next();
    };
}
