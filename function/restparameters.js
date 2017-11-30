function multiply(multiplyer, ...numbers){
	return numbers.map(element=>multiplyer*element);
}

console.log(multiply(2, 1,2,3));