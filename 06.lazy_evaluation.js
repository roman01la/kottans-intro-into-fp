/* == Lazy Evaluation == */

const add = (a, b) => a + b;

add(1, 2); // 3

class LazyFn {
  constructor(fn, args) {
    this._fn = fn;
    this._args = args;
  }
  eval() {
    const args = this._args.map(
      arg => (arg instanceof LazyFn ? arg.eval() : arg)
    );
    return this._fn(...args);
  }
}

function intoLazy(fn) {
  return (...args) => {
    return new LazyFn(add, args);
  };
}

const lazyAdd = intoLazy(add);

const thunk = lazyAdd(1, 2); // LazyFn

thunk.eval(); // 3

const thunk1 = lazyAdd(1, lazyAdd(2, 3));

thunk1.eval(); // 6

/* sample */
const list = LazyList(1, 2, 3, 4, 5, 6)
  .lazyMap(n => n * n)
  .lazyFilter(n => n % 2 === 0);

list.eval(); // List<[4, 16, 36]>
