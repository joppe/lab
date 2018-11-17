import { cache } from '@lang/function/cache';

describe('function cache', (): void => {
    it('cache the result of a function', (): void => {
        const inc: () => number = cache(((): () => number => {
            let i: number = 0;

            return (): number => {
                i += 1;

                return i;
            };
        })());

        expect(inc()).toEqual(1);
        expect(inc()).toEqual(1);
        expect(inc()).toEqual(1);
        expect(inc()).toEqual(1);
    });
});
