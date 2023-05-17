

// Printing the Math Objects

var m = Math;
console.log(m);

// Printing the contrants from Math Objects

console.log('The value of Math.E is .',Math.E);
console.log('The value of Math.LN2 is .',Math.LN2);
console.log('The value of Math.LN10 is .',Math.LN10);
console.log('The value of Math.LOG2E is .',Math.LOG2E);
console.log('The value of Math.PI is .',Math.PI);
console.log('The value of Math.SQRT2 is .',Math.SQRT2);

// Printing the functions of Math Objects
 
var g = 56.789;
var h = 9.79;
console.log('The value of a and b is',g,h);
console.log('The value of a and b is',Math.round(g),Math.round(h));

// How I can square ?
console.log('3 raised the power of 2 is ',Math.pow(3,2));
console.log('6 raised the power of 2 is ',Math.pow(6,2));
console.log('9 raised the power of 2 is ',Math.pow(9,2));

// How I can square root ?
console.log('The square root of 36',Math.sqrt(36));
console.log('The square root of 92',Math.sqrt(92));
console.log('The square root of 78',Math.sqrt(78));

// Ceil and Floor

console.log('5.8 rounded up to the nearest integer',Math.ceil(5.8));
console.log('5.8 rounded down to the nearest integer',Math.floor(5.8));

// Abs function

console.log('The absolute value of 5.8 is  ',Math.abs(5.8));
console.log('The absolute value of -5.8 is  ',Math.abs(-5.8));

// Trinometric functions

console.log('The value of tan(pi) is ',Math.tan(Math.PI/2));
console.log('The value of cos(pi) is ',Math.cos(Math.PI/2));
console.log('The value of sin(pi) is ',Math.sin(Math.PI/2));

// very important function 

// min and max function

console.log('The minimum value of 2 ,5 ,6 ,7 is',Math.min(2,5,6,7));
console.log('The minimum value of 2 ,5 ,6 ,7 is',Math.min(28,57,86,77));

console.log('The maxmum value of 2 ,5 ,6 ,7 is',Math.max(26,53,646,97));
console.log('The maximum value of 2 ,5 ,6 ,7 is',Math.max(24,55,67,37));

// Generating a random number
var ran = Math.random();
console.log('The value of random number  is ',ran);

// Generating a number b/t (a,b) = a1 + (b1 -a1)*Math.random();
var a1 = 1;
var b1 = 100;
var ran1_100 = a1 + (b1-a1)*Math.random();
console.log('The value of ran1_100 is ',ran1_100);




