/**
How to empty an array in JavaScript?
*/
// Method 1
console.log('Method: assign empty array');

var arrayList = ['a', 'b', 'c', 'd', 'e'];

var arrayReference = arrayList;

arrayList = [];

console.log(arrayList);       // ['']
console.log(arrayReference);  // [ 'a', 'b', 'c', 'd', 'e' ]


// Method 2
console.log('Method: empty length');

arrayList = ['a', 'b', 'c', 'd', 'e'];

arrayReference = arrayList;

arrayList.length = 0;

console.log(arrayList);       // ['']
console.log(arrayReference);  // [ '']


//Method 3
console.log('Method: concat');

arrayList = ['a', 'b', 'c', 'd', 'e'];

arrayReference = arrayList;

arrayList.splice(0, arrayList.length);

console.log(arrayList);       // ['']
console.log(arrayReference);  // [ '']



//Method 4
console.log('Method: pop');

arrayList = ['a', 'b', 'c', 'd', 'e'];

arrayReference = arrayList;

while(arrayList.length){
	arrayList.pop();
}

console.log(arrayList);       // ['']
console.log(arrayReference);  // [ '']


