function foo(x) {
  if (x === null) {
    return 0;
  }
  if (x === undefined){
    return 0;
  }
  return x + 1;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0