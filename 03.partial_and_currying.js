// == Partial application ==
function request(url, opts, onSuccess, onFail) {
  //...
}

const createUser = partial(request, "/api/users", { method: "POST" });

createUser(console.log, console.error);

createUser(saveToDB, logError);

// `partial` implementation
function partial(fn, ...args) {
  return (...restArgs) => fn(...args, ...restArgs);
}

// partial application  in plain JavaScript
const createUser = request.bind(null, "/api/users", { method: "POST" });

// == Currying ==

// simple example
const map = curry((fn, coll) => coll.map(fn));
const mapUserName = map(user => user.name);

mapUserName([{ name: "John" }, { name: "Mark" }]); // ["John", "Mark"]

// currying implementation
function curry(fn) {
  const ln = fn.length;
  return function _curry(...args) {
    if (args.length === ln) {
      return fn(...args);
    } else {
      return (...nextArgs) => _curry(...args, ...nextArgs);
    }
  };
}

/* == Principles of paramaters position for better composability ==
      first comes what's known,
      then what's unknown (or changing more frequently than other values)
 */

const filter = curry((fn, coll) => coll.filter(fn));

const filterOdd = filter(n => n % 2 === 0);

filterOdd([1, 2, 3, 4, 5]);

filterOdd([6, 3, 9, 1, 5]);
