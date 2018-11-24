/*
function required(target: any, key: string, index: number) {
    var metadataKey = `__required_${key}_parameters`;

    console.log('required');
    console.log(target);
    console.log(key);
    console.log(index);

    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
function validate(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        var metadataKey = `__required_${key}_parameters`;
        var indices = target[metadataKey];
        for (var i = 0; i < args.length; i++) {
            if (requiredDependencies[i] == undefined) {
                throw 'missing required parameter'
            }
        }
        var result = originalMethod.apply(this, args);
        return result;
    }
    return descriptor;
}
class Calculator {
    constructor(@required c: number) {
        console.log(c);
    }

    @validate
    add(@required a: number, @required b: number) {
        return a + b;
    }
}
const c = new Calculator(undefined);
console.log(`result is: ${c.add(2,3)}`); // result is: 5
console.log(`result is: ${c.add(2,undefined)}`); // throw 'missing required parameter'
*/
