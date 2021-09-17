/******************************************************************
include here modules that don't have their own declaration files and 
also there are none on Definitely Typed github.
(https://github.com/DefinitelyTyped/DefinitelyTyped)
make sure this file is included in tsconfig typings
*******************************************************************/

declare module 'my-awesome-js-library' {
    type SomeCustomType = string | boolean;
    const someFunction: () => SomeCustomType;

    export { someFunction, SomeCustomType };
    export default someFunction;
}
