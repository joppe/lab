import { Container } from '@lib/dependency-injection/Container';
import { factory } from '@lib/dependency-injection/factory';

describe('dependency injection factory', (): void => {
    it('create only once a container', (): void => {
        const a: Container = factory();
        const b: Container = factory();

        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(a).toBe(b);
    });
});
