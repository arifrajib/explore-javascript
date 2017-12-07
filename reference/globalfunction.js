/**
eval: evaluates JavaScript code represented as a string.
*/
var x = 5, y = 6;

console.log(eval('x+y'));  // 11

// If you define mutiple values then the last value is returned.
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420;} else z = 0;";
console.log('x is ', eval(str)); // z is 42 x is 420



/**
isFinite: determines whether the passed value is a finite number.
*/
console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN));       // false
console.log(isFinite('value'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite(-910));       // true

console.log(isFinite(null));      // true,
console.log(isFinite('0'));       // true


