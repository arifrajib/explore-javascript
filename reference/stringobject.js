console.log('*********** String.length *********');
/**
String.length: This property returns the number of code units in the string
*/
var name = 'Md Ariful Islam Rajib';
console.log(name.length);   // 21



console.log('*********** str.charAt *********');
/**
charAt: method returns the specified character from a string.
*/
console.log(name.charAt());    // M
console.log(name.charAt(3));   // A
console.log(name.charAt(99));  // ''



console.log('*********** str.concat *********');
/**
concat: method combines the text of one or more strings and returns a new string.
*/
console.log('Hello! '.concat('how ', 'are ', 'you.'));    // Hello! how are you.



console.log('*********** str.endsWith *********');
/**
endsWith: method determines whether a string ends with the characters of a specified string
*/
console.log(name.endsWith('Rajib'));       // true
console.log(name.endsWith('rajib'));       // false
console.log(name.endsWith('Ariful', 9));   // true



console.log('*********** str.indexOf *********');
/**
indexOf: method returns the index within the calling String of the first occurrence of the specified value
*/
var search = 'First index last index';
console.log(search.indexOf('index'));       // 6
console.log(search.indexOf('search'));      // -1
console.log(search.indexOf('index', 10));   // 17



console.log('*********** str.lastIndexOf *********');
/**
lastIndexOf: method returns the index within the calling String object of the last occurrence of the specified value
*/
var search = 'First index last index';
console.log(search.lastIndexOf('index'));       // 17
console.log(search.lastIndexOf('search'));      // -1
console.log(search.lastIndexOf('index', 10));   // 6



console.log('*********** str.padStart *********');
/**
padStart: method pads the current string with another string
*/
console.log('abc'.padStart(7));             // '    abc'
console.log('abc'.padStart(5, 'foo'));      // 'foabc'
console.log('abc'.padStart(1, '*'));        // 'abc'



console.log('*********** str.padEnd *********');
/**
padEnd: method pads the current string with another string
*/
console.log('abc'.padEnd(7));             // 'abc    '
console.log('abc'.padEnd(5, 'foo'));      // 'abcfo'
console.log('abc'.padEnd(1, '*'));        // 'abc'



console.log('*********** str.repeat *********');
/**
repeat: method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
*/
console.log('abc'.repeat(1));      // 'abcfo'
console.log('abc'.repeat(0));      // ''
console.log('abc'.repeat(2.5));    // 'abc'
