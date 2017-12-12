/**
The closure has access to variables in three scopes:
	Variables declared in their own scope
	Variables declared in a parent function scope
	Variables declared in the global namespace
*/

// global variable
var globalVariable = 'Global Variable';

// parent function
(function outerFunction(parentArg){
	//Parent Variable
	var parentVar = 'Parent Variable';

	//child function
	(function innerFunction(childArg){
		//Child Variable
		var childVar = 'Child Variable';
		
		//access global variable
		console.log(globalVariable);

		//access Parent VAriable
		console.log(parentVar);
		//access Parent Arguments
		console.log(parentArg);

		//access own variable
		console.log(childVar);
		//access Child Argument
		console.log(childArg);

	})('Child Argument');
})('Parent Argument');

