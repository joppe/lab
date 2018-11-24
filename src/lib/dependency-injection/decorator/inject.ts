// tslint:disable-next-line no-import-side-effect
import 'reflect-metadata';

import { Constructor } from '@common/types/Constructor';
import { args } from '@lang/function/args';
import { Container } from '@lib/dependency-injection/Container';
import { factory } from '@lib/dependency-injection/factory';

/**
 * Class decorator
 */
export function inject<T>(constructor: Constructor<T>): Constructor<T> {
    const di: Container = factory();

    const CONSTRUCTOR_NAME: string = 'name';
    const identifier: string = constructor[CONSTRUCTOR_NAME];
    const requiredDependencies: Array<string> = args(constructor);

    di.register(
        identifier,
        // tslint:disable-next-line no-any
        (dependencies: Array<any>): T => {
            return new constructor(...dependencies);
        },
        requiredDependencies
    );

    return constructor;
}
