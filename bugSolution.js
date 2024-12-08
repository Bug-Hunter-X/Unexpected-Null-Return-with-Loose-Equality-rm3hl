function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
//In this corrected example, we use the strict equality operator (===), which prevents type coercion and ensures accurate comparison.  This prevents the function from incorrectly returning null when a falsy value is passed instead of null.