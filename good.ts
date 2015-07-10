/// <reference path="lodash.d.ts" />

import _ = require('lodash');

console.log(_.pad('abc', 8));
console.log(pad('abc', 8)); // GOOD: This line doesn't compile, and that's correct
