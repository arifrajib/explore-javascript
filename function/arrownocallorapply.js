/**
Arrow functions do not have their own this, the methods call() or apply() can only pass in parameters. thisArg is ignored.
**/

var adder = {
	base : 1,
	add: function(a){
		var arrowFunction = (a) => a+this.base;

		return arrowFunction(a);
	},
	addThroughCall: function(a){
		var arrowFunction = (a) => a+this.base;

		var obj = {
			base: 2
		};

		return arrowFunction.call(obj, a);
	},
	addThroughApply: function(a){
		var arrowFunction = (a) => a+this.base;

		var obj = {
			base: 3
		};

		return arrowFunction.apply(obj, [a]);
	}
};

console.log(adder.add(5));               // 6
console.log(adder.addThroughCall(5));    // 6
console.log(adder.addThroughApply(5));   // 6