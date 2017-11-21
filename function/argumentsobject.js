/**
Declare the function
**/
function changeCarModel(carObject){
	carObject.model = 'Civic';
}


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
// this will print Accord
console.log(myCar.model);


/**
Pass object reference to the function
**/
changeCarModel(myCar);

/**
print the changed model
**/
// this will print Civic
console.log(myCar.model);
