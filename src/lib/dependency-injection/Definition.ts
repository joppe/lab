import { Dictionary } from '@common/types/Dictionary';
import { Factory } from '@common/types/Factory';
import { args } from '@lang/function/args';

export class Definition<T> {
    private readonly _argumentNames: Array<string>;
    private readonly _factory: Factory<T>;
    private readonly _identifier: string;
    private _isInvoked: boolean = false;
    // tslint:disable-next-line no-any
    private readonly _arguments: Dictionary<any> = {};
    private _result: T;

    get argumentNames(): Array<string> {
        return this._argumentNames;
    }

    get isInvoked(): boolean {
        return this._isInvoked;
    }

    constructor(identifier: string, factory: Factory<T>) {
        this._identifier = identifier;
        this._factory = factory;
        this._argumentNames = args(this._factory);
    }

    // tslint:disable-next-line no-any
    public setArgumentValue(name: string, value: any): void {
        this._arguments[name] = value;
    }

    // tslint:disable-next-line no-any
    public getArgumentValue(name: string): any {
        if (!this.isArgumentDefined(name)) {
            throw new Error(`Definition.getArgumentValue, argument with name "${name}" not defined`);
        }

        return this._arguments[name];
    }

    public isArgumentDefined(name: string): boolean {
        return this._arguments[name] !== undefined;
    }

    public invoke(): T {
        if (!this._isInvoked) {
            // tslint:disable-next-line no-any
            const values: Array<any> = this._argumentNames
                .reduce(
                    // tslint:disable-next-line no-any
                    (acc: Array<any>, arg: string) => {
                        return acc.concat(this.getArgumentValue(arg));
                    },
                    []
                );

            this._result = this._factory(...values);
            this._isInvoked = true;
        }

        return this._result;
    }
}
