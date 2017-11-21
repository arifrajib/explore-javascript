/**
Declare the function
**/
function changeCar(carArray){
	carArray = ['Porsche', 'Tesla', 'Ferrari'];
	// this will print Porsche, Tesla, Ferrari
	console.log(carArray.toString());
}


/**
My Car Array
**/
var myCar = ['Honda', 'Toyota', 'Audi'];

/**
print the Car
**/
// this will print Honda, Toyota, Audi
console.log(myCar.toString());


/**
Pass Array to the function
**/
changeCar(myCar);

/**
print the car
**/
// this will print Honda, Toyota, Audi
console.log(myCar.toString());
