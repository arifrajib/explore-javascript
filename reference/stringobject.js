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