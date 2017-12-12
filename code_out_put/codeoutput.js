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

/**
Write a mul function which will produce the following outputs when invoked:
console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48
*/
function mul(a){
	return function(b){
		return function(c){
			return a*b*c;
		}
	}
}

console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48