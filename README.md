# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to loose equality (==) and its unexpected behavior when dealing with null values.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version using strict equality (===).

The issue arises from the fact that loose equality performs type coercion, potentially leading to incorrect comparisons. This example highlights the importance of using strict equality to avoid such issues.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected null output even when one argument is a number.
4. Compare the output to `bugSolution.js` to see the correct behavior using strict equality.