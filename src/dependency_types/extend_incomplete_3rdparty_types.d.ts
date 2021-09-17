/**********************************************************************
Extend 3rd party library types like this, for example: react ol element
types doesn't have 'type' attribute to it.

Notice how we’re importing the React library despite not using it. If we 
don’t import it first, our module declaration overrides the module declared 
in React’s index.d.ts definitions file, which breaks everything else. We 
also cannot extend the interface by omitting the module declaration and just 
importing the interface and extending it like this:

import { OlHTMLAttributes } from 'react'; 
interface OlHTMLAttributes<T> { ... })

The above won’t work because it’s not part of the TypeScript SDK, but rather 
it’s from an existing library (React) with existing definitions, and so 
it must be treated slightly differently.

The step-by-step process to get to that definition is started by adding a 
property that does exist, and going to the definitions of that, which opens 
up React’s index.d.ts file, found in /node_modules/@types/react/. In the 
DOM example above, the 
color

 property works, but it’s a property that’s shared among several different DOM elements.

interface HTMLAttributes<T> extends DOMAttributes<T> {
    color?: string;        
}

You can then search the file for HTMLAttributes and find the following definition:

interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    start?: number;}

If instead of choosing 
color
 we had chosen 
start
 as the property to dig into, we would’ve gotten there from the beginning.

Seeing the above interface, and knowing we only want to add 
type
 to the ordered list element, we can write the definition declared above.
**********************************************************************/

import 'react';

declare module 'react' {
    interface OlHTMLAttributes<_T> {
        type?: '1' | 'a' | 'A' | 'i' | 'I';
    }
}
