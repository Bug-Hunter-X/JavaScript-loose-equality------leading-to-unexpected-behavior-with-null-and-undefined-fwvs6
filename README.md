# JavaScript Loose Equality Pitfall

This repository demonstrates a common JavaScript error involving loose equality (`==`) and its interaction with `null` and `undefined`.

The `bug.js` file contains the problematic code, which uses `==` for comparison. This leads to `undefined` being coerced to `0` in the addition resulting in `NaN` which can be hard to debug.

The `bugSolution.js` file provides the corrected code, utilizing strict equality (`===`) to prevent type coercion and ensure accurate comparisons.