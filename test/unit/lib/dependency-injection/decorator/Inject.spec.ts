import { Container } from '@lib/dependency-injection/Container';
import { inject } from '@lib/dependency-injection/decorator/inject';
import { factory } from '@lib/dependency-injection/factory';

describe('inject', (): void => {
    it('resolve value from di container', (): void => {
        const di: Container = factory();

        di.register<number>(
            'a',
            () => {
                return 16;
            }
        );

        @inject
        class Adder {
            private _a: number;

            constructor(a: number) {
                this._a = a;
            }

            public add(b: number): number {
                return this._a + b;
            }
        }

        const adder: Adder = di.resolve<Adder>('Adder');

        expect(adder.add(3)).toBe(19);
    });
});
