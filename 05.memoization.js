/* == Memoization == */

/* If something was computed once,
   there's no point in doing this exact
   computation again
*/

function expensiveComputation(n) {
  const start = performance.now();
  let result = 0;
  while (n-- > 0) {
    result += n / Math.random() * n;
  }
  console.log(`${Math.round(performance.now() - start)}ms`);
  return result;
}

expensiveComputation(100000000);

function memoize(fn) {
  const cache = {};
  return n => {
    const result = cache[n];
    if (result !== undefined) {
      return result;
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const memoizedExpensiveComputation = memoize(expensiveComputation);
