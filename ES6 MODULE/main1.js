// ES6 MODULE - An external file that contains reusable code that can be imported into other js files.

import {PI,getCircumference,getArea} from './circle.js'

console.log(PI);
const circumference = getCircumference(10);
console.log(circumference);
const area = getArea(10);
console.log(area);