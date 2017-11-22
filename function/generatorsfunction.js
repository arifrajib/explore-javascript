function* generator(){
	yield 10;
	yield 20;
	yield 30;
}


var gen = generator();   // Generator { }

console.log(gen.next()); // {value: 10, done: false}
console.log(gen.next()); // {value: 20, done: false}
console.log(gen.next()); // {value: 30, done: false}
console.log(gen.next()); // {value: undefined, done: true}