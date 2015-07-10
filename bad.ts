/// <reference path="lodash.d.ts" />

import { pad } from 'lodash'

console.log(pad('abc', 8));
console.log(_.pad('abc', 8)); // BAD: This line shouldn't compile, but tsc doesn't catch it
