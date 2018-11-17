import { Dictionary } from '@common/types/Dictionary';
import { Factory } from '@common/types/Factory';
import { Definition } from '@lib/dependency-injection/Definition';

export class Container {
    // tslint:disable-next-line no-any
    private readonly registry: Dictionary<Definition<any>>;

    constructor() {
        this.registry = {};
    }

    public register<T>(identifier: string, factory: Factory<T>): void {
        this.registry[identifier] = new Definition(identifier, factory);
    }

    public resolve<T>(identifier: string): T {
        if (!this.has(identifier)) {
            throw new Error(`Container,resolve, unknown identifier: "${identifier}"`);
        }

        const definition: Definition<T> = this.registry[identifier];

        definition.argumentNames.forEach((argumentName: string): void => {
            definition.setArgumentValue(argumentName, this.resolve(argumentName));
        });

        return definition.invoke();
    }

    public has(identifier: string): boolean {
        return this.registry[identifier] !== undefined;
    }
}
