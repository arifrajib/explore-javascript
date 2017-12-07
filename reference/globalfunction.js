console.log('*********** eval *********');
/**
eval: evaluates JavaScript code represented as a string.
*/
var x = 5, y = 6;

console.log(eval('x+y'));  // 11

// If you define mutiple values then the last value is returned.
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420;} else z = 0;";
console.log('x is ', eval(str)); // z is 42 x is 420


console.log('\n\n');
console.log('*********** isFinite *********');
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



console.log('\n\n');
console.log('*********** isNaN *********');
/**
isNaN: function determines whether a value is NaN or not.
*/
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

// strings
console.log(isNaN('37'));      // false




