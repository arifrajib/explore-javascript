/**
My Car object
**/
var myCar = {
	brand: 'Honda',
	model: 'Accord',
	year: '2017'
};

/**
print the model
**/
console.log(myCar.model);

/**
Pass object reference to the function
**/

changeCarModel(myCar);

/**
print the changed model
**/
console.log(myCar.model);


/**
Declare the function
**/
function changeCarModel(carObject){
	carObject.model = 'Civic';
}
