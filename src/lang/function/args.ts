const ARGUMENTS_RE: RegExp = /^function(?:\s+[\w$]+)?\s*\(([\w$,\s]*)\)\s*{|\(([\w$,\s]*)\)\s*=>|([\w$,\s]*)\s*=>/im;

const ARGUMENT_SEPARATOR: string = ',';

export function args(func: Function): Array<string> {
    const result: Array<string> = func
        .toString()
        .match(ARGUMENTS_RE)
        .filter((arg: string): boolean => arg !== undefined);

    if (result.length !== 2) {
        return [];
    }

    return result[1]
        .split(ARGUMENT_SEPARATOR)
        .map((arg: string): string => arg.trim())
        .filter((arg: string): boolean => arg !== '');
}
