//****************Function declaration******************//

// Function declarations are hoisted
hoisted();


function hoisted(){
	console.log('Function declarations are hoisted');
}

//****************Function expression******************//

// TypeError: notHoisted is not a function
//notHoisted();


var notHoisted = function (){
	console.log('Function expression are not hoisted');
}