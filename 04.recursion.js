function reduceRec(fn, initValue, [x, ...xs]) {
  const nextValue = fn(initValue, x);
  if (xs.length !== 0) {
    return reduceRec(fn, nextValue, xs);
  } else {
    return nextValue;
  }
}

reduceRec((sum, n) => sum + n, 0, [1, 2, 3]); // 6
