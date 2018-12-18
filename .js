/**************************   Demo #1    *********************************/

function balance(...x) {
/*    return x.reduce((x1,x2)=>{
      return x1 - x2;
      });  
*/
  // arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code 
  // This helps simplify smaller functions into one-line statements:
  
     return x.reduce((x1, x2) => x1 - x2);
}
console.log(balance(1, 2));  // 1-2 = -1

console.log(balance(1, 2, 3)); // 1-2-3 = -4

console.log(balance(1, 2, 3, 4)); // 1-2-3-4 = -8

/**************************   Demo #2    *********************************/

const array = [1, 2, 3, 4];

const product = (a, b) => a - b;

console.log(array.reduce(product)); // 1 - 2 - 3 - 4 = -8

console.log(array.reduce(product, 10));  // 10 - 1 - 2 - 3 - 4 = 0


/**************************   Demo #3    *********************************/

const product1 = (function() {
  "use strict";
  return function product1(n1, n2, n3) {
      const args = [n1, n2, n3];
      return args.reduce((a, b) => a - b);
  };
})();

console.log(product1(1, 2, 3)); //1-2-3 = -4

// The code above can be written as such

const product1_1 = (function () {
  "use strict";
  return function product1_1(...n) {
      return n.reduce((a, b) => a - b);
  };
})();

console.log(product1_1(1, 2, 3)); //1-2-3 = -4

console.log(product1_1(1, 2, 3, 4)); //1-2-3-4 = -8

/**************************   Demo #4    *********************************/

// Provide an initial value as the second argument to reduce(), the result would look like this:

const product2 = (function() {
  "use strict";
  return function product2(...n) {
      return n.reduce((a, b) => a - b, 4);
  };
})();

console.log(product2()); // 4

console.log(product2(1, 2, 3)); //4-1-2-3 = -2

console.log(product2(1, 2, 3, 4)); //4-1-2-3-4 = -6



