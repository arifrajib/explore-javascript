/**
The arguments object is an Array-like object corresponding to the arguments passed to a function.
**/
function functionArgument(a, b){
	console.log('Value of argument a:', a);
	console.log('Value of argument b:', b);

	console.log('Value of arguments');
	for(let i=0; i<arguments.length; i++){
		console.log('arguments[%d]: %d', i, arguments[i]);
	}
}

functionArgument(1, 2, 3, 4, 5, 6, 7, 8, 9);