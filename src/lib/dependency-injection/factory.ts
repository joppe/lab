import { cache } from '@lang/function/cache';
import { Container } from '@lib/dependency-injection/Container';

export const factory: () => Container = cache((): Container => {
    return new Container();
});
