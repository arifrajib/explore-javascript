let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;

console.log(f());  // 6