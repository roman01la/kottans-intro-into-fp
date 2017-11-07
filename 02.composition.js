/* == Composition == */

/* Functional programming style is all about composition */

// A ____________________ > B

// A ____ > A1 ___ > A1.1 _____ > A2 ____ B

// Simple event handler
function handleChange1(event) {
  const value = event.target.value;
  console.log(value);
}

// Event handler with value processing logic
function handleChange2(event) {
  event.preventDefault();
  let value = event.target.value;
  value = parseInt(value);
  console.log(value);
}

// Composition

const targetValue = event => event.target.value;

const withPreventDefault = event => {
  event.preventDefault();
  return event;
};

const handleChange3 = event => {
  console.log(parseInt(targetValue(withPreventDefault(event))));
};

const handleChange4 = compose(
  console.log,
  parseInt,
  targetValue,
  withPreventDefault
);

// `compose` implementation
function compose(...fns) {
  const [f, ...fs] = fns.reverse();
  return (...args) => fs.reduce((ret, f) => f(ret), f(...args));
}
