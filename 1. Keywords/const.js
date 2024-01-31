// Redeclare Reassign both are not possible in const keyword.

// 1. Redeclare not possible
const a = 10;
// const a = 20  throw error right away

// ------------------------------------------------------------------------------------------------------------------

// 2. Reassign not possible
const x = 30
x=40;  // TypeError: Assignment to constant variable.

console.log(x)


// CONCLUSION
// const represent constant (not change anywhere)
// 1. Variable's declare with const key word they're block scope.
// 2. Redeclare and Reassign both are not possible.
