/**
What will be the output of the code below?
*/


var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
console.log(y);
/**
Output will be "1undefined"
*/


var k = 1;
  if (1) {
    eval(function foo(){});
    k += typeof foo;
  }
console.log(k);
/**
Output will be "1undefined"
*/


var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
console.log(k);
/**
Output will be "1function"
*/
