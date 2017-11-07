/* == JavaScript's primitive value types are immutable == */

// Number is immutable
const x = 1;

x + 1; // 2

x; // 1

// String is immutable
const s = "John";

s + "Doe"; // "John Doe"

s; // "John"

/* == Doing immutable updates in JS == */

// Array
const arr = [1, 2];

[...arr, 3]; // [1, 2, 3]
[0, ...arr]; // [0, 1, 2]

const arr1 = [...arr];
arr1[0] = 10;
arr1; // [10, 2]

// Object
const obj = { a: 1 };

Object.assign({}, obj, { b: 2 }); // { a: 1, b: 2 }

// Immutable.js, better API
// https://facebook.github.io/immutable-js/

const m = Immutable.Map({ a: { b: { c: 1 } } });

m1.updateIn(["a", "b", "c"], n => n + 1); // Immutable.Map({ a: { b: { c: 2 } } })

/* == Optimizations in immutable data structures
 1. Lazy evaluation
 2. Memoization
 3. Objects pooling
*/

// Learning materials: https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf
