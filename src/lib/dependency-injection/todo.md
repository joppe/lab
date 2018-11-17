DependencyInjectionContainer
- singleton
- api
    - register (identifier: string, function: Function)
    - resolve <T>(identifier: string): T
    - has (identifier: string): boolean
    
function
    - get args
        - get name/identifier
    - wrapper that can hold result



decorators
- injectable, class decorator
- inject, resolve a dependency by it's identifier

/**
 * https://source.coveo.com/2016/02/04/typescript-injection-decorator/
 * https://codeburst.io/typescript-decorators-angular2-dependency-injection-d2e2a1403162
 * https://www.typescriptlang.org/docs/handbook/decorators.html
 *
 * https://netbasal.com/create-and-test-decorators-in-javascript-85e8d5cf879c
 * https://www.spectory.com/blog/A%20deep%20dive%20into%20TypeScript%20decorators
 *
 */
