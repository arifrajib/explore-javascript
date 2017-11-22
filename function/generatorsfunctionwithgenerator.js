function* anotherGenerator(){
	yield 2;
	yield 3;
}

function* generator(){
	yield 1;
	yield* anotherGenerator();
	yield 4; 
}


var iterator = generator();   // Generator { }

console.log(iterator.next()); // {value: 1, done: false} 
console.log(iterator.next()); // {value: 2, done: false} 
console.log(iterator.next()); // {value: 3, done: false} 
console.log(iterator.next()); // {value: 4, done: false} 
console.log(iterator.next()); // {value: undefined, done: true} 