import { Definition } from '@lib/dependency-injection/Definition';

describe('Definition', (): void => {
    it('get a list of the argument names of the wrapped function', (): void => {
        const d: Definition<number> = new Definition(
            'add',
            // tslint:disable-next-line typedef
            (a, b) => {
                return a + b;
            }
        );

        expect(d.argumentNames).toEqual(['a', 'b']);
    });

    it('is initially not invoked', (): void => {
        const d: Definition<string> = new Definition(
            'foo',
            // tslint:disable-next-line typedef
            () => {
                return 'foo';
            }
        );

        expect(d.argumentNames).toEqual([]);
        expect(d.isInvoked).toEqual(false);
    });

    it('get and set the value of an argument', (): void => {
        const d: Definition<number> = new Definition(
            'add',
            // tslint:disable-next-line typedef
            (a, b) => {
                return a + b;
            }
        );

        d.setArgumentValue('a', 100);

        expect(d.getArgumentValue('a')).toEqual(100);
    });

    it('throw an error when getting a argument that is not set', (): void => {
        const d: Definition<number> = new Definition(
            'add',
            // tslint:disable-next-line typedef
            (a, b) => {
                return a + b;
            }
        );

        expect((): void => {
            d.getArgumentValue('a');
        }).toThrow();
    });

    it('check if an arguments value is defined', (): void => {
        const d: Definition<number> = new Definition(
            'add',
            // tslint:disable-next-line typedef
            (a, b) => {
                return a + b;
            }
        );

        expect(d.isArgumentDefined('a')).toBe(false);

        d.setArgumentValue('a', 2);

        expect(d.isArgumentDefined('a')).toBe(true);
    });

    it('the wrapped function is called when calling invoke', (): void => {
        const d: Definition<number> = new Definition(
            'add',
            // tslint:disable-next-line typedef
            (a, b) => {
                return a + b;
            }
        );

        d.setArgumentValue('a', 2);
        d.setArgumentValue('b', 23);

        const result: number = d.invoke();

        expect(result).toBe(25);
    });

    it('the result is cached', (): void => {
        const d: Definition<{ result: number }> = new Definition(
            'store',
            // tslint:disable-next-line typedef
            (a, b) => {
                return {
                    result: a + b
                };
            }
        );

        d.setArgumentValue('a', 2);
        d.setArgumentValue('b', 23);

        const r1: { result: number } = d.invoke();
        const r2: { result: number } = d.invoke();

        expect(r1.result).toBe(25);
        expect(r1).toEqual(r2);
    });
});
