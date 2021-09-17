/**********************************************************************
There are times when the TypeScript SDK does not include definitions 
for a property or function already supported by some browsers. In this 
example it’s the function array.includes() which is missing. If you 
face this scenario where the missing definition is part of the basic 
TypeScript definitions, and not a part of a library, all you need to 
do is re-declare the interface and add the missing property.
**********************************************************************/

interface Array<T> {
    includes: (item: T, fromIndex?: number) => boolean;
}

interface Window {
    customProperty: boolean;
}
