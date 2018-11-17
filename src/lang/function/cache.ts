export function cache<T>(func: Function): () => T {
    let result: T;
    let isInvoked: boolean = false;

    return (): T => {
        if (isInvoked === false) {
            result = func();
            isInvoked = true;
        }

        return result;
    };
}
