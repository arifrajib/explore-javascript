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




console.log('\n\n');
console.log('*********** parseFloat *********');
/**
parseFloat: function parses an argument and returns a floating point number.
*/
console.log(parseFloat('3'));             // 3
console.log(parseFloat('3.14 five six')); // 3.14
console.log(parseFloat('seven'));         // NaN




console.log('\n\n');
console.log('*********** parseInt *********');
/**
parseInt: function parses a string argument and returns an integer of the specified radix 
*/
console.log(parseInt(4-'1.5', 10));         // 2
console.log(parseInt('3.14 five six'));     // 3
console.log(parseInt('11', 2));             // 3
console.log(parseInt('ten', 10));           // NaN




console.log('\n\n');
console.log('*********** encodeURI *********');
/**
encodeURI: function encodes a Uniform Resource Identifier (URI)
*/
var encode = encodeURI('https://arif.rajib.com/my name is rajib');
console.log(encode);   // https://arif.rajib.com/my%20name%20is%20rajib




console.log('\n\n');
console.log('*********** decodeURI *********');
/**
decodeURI: function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
*/
console.log(decodeURI(encode));   // https://arif.rajib.com/my name is rajib



