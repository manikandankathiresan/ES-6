// ARROW FUNCTION

// An arrow function expression,
// is a compact alternative to a traditional function expression, 
// with some semantic differences and deliberate limitations in usage.

// Synatx
() => expressions;  // ONE LINE DEFANITION

() => {
    statement
}

param => expression;  // ONE LINE WITH ONE PARAM

(param1, param2) => expression;  // ONE LINE WITH TWO PARAM

(param1, param2) => {  // MULTIPLE STATEMENT WITH TWO PARAM
    statement
}


// functions
// ~ This is a general function declaration with a function key word and greet as a function name.
function greet() {
    console.log('Hi Manikandan')
};

greet(); //function calling


// Arrow function
// ~ Introduce arrow => after () ------- like () =>
// ~ No need to mention the function key word.
const greet = () => {
    console.log('Hi, Manikandan')
}


// ------------------------------------------------------------------------------------------------------------------

// one parameter
function add(a) {
    console.log(a + 5)
}


const add = (a) => {
    console.log(a + 5)
}


// No need to mention ()
const add = a => {
    console.log(a + 5)
}


// If it is one line of function definition, write it in the same line.
const add = a => console.log(a + 5)


// ------------------------------------------------------------------------------------------------------------------

// Two parameters
function multiply(a, b) {
    console.log(a * b)
}


const multiply = (a, b) => {
    console.log(a * b)
}