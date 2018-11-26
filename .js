function balance(...x) {
  return x.reduce((x1, x2) => x1-x2);
   // return x.reduce((x1,x2)=>{
   // return x1 - x2;
 // });
}
console.log(balance(1, 2));  // 1-2 = -1

console.log(balance(1, 2, 3)); // 1-2-3 = -4

console.log(balance(1, 2, 3, 4)); // 1-2-3-4 = -8
