function* reGenerator() {
  yield* [1, 2, 3];
  return 'other generator';
}

var result;

function* generator() {
  result = yield* reGenerator();
}

var iterator = generator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}, 
                              // reGenerator() returned {value: 'other generator', done: true} at this point

console.log(result);          // "other generator"