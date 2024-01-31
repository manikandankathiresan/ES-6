// Redeclare and reassign is possible in var keyword.
var a = 10;
console.log('a :', a);

var b = 20;
var b = 30;
console.log('b :', b)

// ------------------------------------------------------------------------------------------------------------------

// 2. Function scope, not block scope
// ~ Here we declare x with var key word inside the block. 
// ~ But we won't allow the variable outside the block (only allow to use inside the block)
if(true) {
    var x = 50;
    console.log('x :',x)
}
console.log('x :',x)

// ~ Here we declare y with var key word inside the function. 
// ~ But we won't allow the variable outside the block (only allow to use inside the block)
function test() {
    var y = 100;
    console.log('y :', y)
}
test();
console.log('y :', y)

// ------------------------------------------------------------------------------------------------------------------


// Disadvantages
// 1. Redeclare and reassign is possible in var keyword.
// 2. Function scope


// CONCLUSION
// 1. Variable's declare with var key word they're function scope.
// 2. Redecalre and reassign is possible.
