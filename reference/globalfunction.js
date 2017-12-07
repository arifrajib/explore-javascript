/**
eval: evaluates JavaScript code represented as a string.
*/
var x = 5, y = 6;

console.log(eval('x+y'));  // 11

// If you define mutiple values then the last value is returned.
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420;} else z = 0;";
console.log('x is ', eval(str)); // z is 42 x is 420


