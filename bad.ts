/// <reference path="lodash.d.ts" />

import { pad } from 'lodash'

console.log(pad('abc', 8));
console.log(_.pad('abc', 8)); // ERROR: This line shouldn't compile