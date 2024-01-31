// Redeclare is not possible reassign is possible in let keyword.

// 1. Reassign
let a = 10;
console.log('a :', a);

let b = 20;
b = 30;
console.log('b :', b)

// ------------------------------------------------------------------------------------------------------------------
// 2. Block scope
// ~ Here we declare x with let key word inside the block. 
// ~ It only allow to use the variable inside the block
if (true) {
    let x = 50;
    console.log('x :', x)
}
console.log('x :', x)  // Out side access the variable, it throw error

//------------------------------------------------------------------------------------------------------------------

// Disadvantages
// 1. Reassign is possible in let keyword.
 

// CONCLUSION
// 1. Variable's declare with let key word they're only block scope.
// 2. Reassign is possible.
