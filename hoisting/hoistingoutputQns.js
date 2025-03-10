// 1) Variable Hoisting with var

console.log(x);
var x = 10;
console.log(x);

//Output undefined 10 
//Explanation In Javascript, var declarations are hoisted to the top of their scope but are initialized with undefined

// 2. Hoisting with Function Declaration

console.log(foo());

function foo() {
    return "Hello!";
}

//Output => Hello
//Explanation: Function declarations are hoisted entirely

// 3. Hoisting with let and const

// console.log(a);
// let a = 5;

//output: ReferenceError: Cannot access 'a' before initialization
//Explanation: Variables declared with let and const are hoisted but not initialized they will enter temporal dead zone(TDZ) from the start of the block until they initialized.

// 4. Hoisting with var inside a Function

function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}

test();

//output: undefined 10

// 5. Hoisting with Multiple var Declarations
console.log(a);
var a = 10;
var a = 20;
console.log(a);

//Output: undefined 20

// 6. Hoisting with Function Expressions

console.log(foo);

var foo = function() {
    return "Hello!";
};

console.log(foo());

//Output: undefined Hello!
//Explanation: In this case, foo is declared using a function expression. The variable foo is hoisted to the top and initialized with undefined.

// 7. Hoisting with const Declaration

// console.log(b);
// const b = 30;

//output: ReferenceError: Cannot access 'b' before initialization

// 8. Hoisting with Function Declarations and Variable Declarations

function hoist() {
    console.log(a);
    var a = 10;
    console.log(a);
}

var a = 20;
hoist();
console.log(a);
 

//Rearranged version of the function after hoisting
var a;
function hoist() {
    var a;
    console.log(a); //undefined
    a = 10;
    console.log(a); //10
}

a = 20;
hoist();
console.log(a); //20

//output: undefined 10 20 

// 9. Hoisting with Arrow Functions

console.log(foo);

var foo = () => {
    return "Arrow Function!";
};

console.log(foo());

//output: undefined ArrowFunction

// 10. Hoisting with let and var in Loops

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}

//output: 3 3 3    0 1 2
// //Explanation: For var i, the variable i is hoisted and shared across all iterations. By the time the setTimeout callback runs, the loop is done and i has the value 3.
// For let j, let is block-scoped, so each iteration of the loop gets a new copy of j. Therefore, when the setTimeout callback runs, it prints the correct values (0, 1, 2).

// 11. Hoisting with Functions and var Declaration in the Same Name

var foo = 10;

function foo() {
    console.log('I am a function');
}

console.log(foo);

//output: 10

//Explanation: When both a variable and a function are declared with the same name, the function declaration is hoisted first, but the variable assignment takes precedence during execution. So, the variable foo holds the value 10 and not the function.

// 12. Hoisting with Functions inside if Statements
if (true) {
    function test() {
        console.log('Inside function');
    }
}

test();

//output: Inside function

//Explanation: In most JavaScript engines, function declarations inside blocks (if, for, etc.) are hoisted to the top of their enclosing scope, making them available outside of the block. So, even though test() is declared inside an if block, it is hoisted and accessible outside the block.

// 13. Hoisting and Class Declarations

// const obj = new MyClass();

// class MyClass {
//     constructor() {
//         this.name = 'JavaScript';
//     }
// }

//output: ReferenceError: Cannot access 'MyClass' before initialization
// Explanation:
// Unlike functions, class declarations are not hoisted. They behave more like variables declared with let or const, where they are in a temporal dead zone until fully initialized. Accessing a class before its declaration will throw a ReferenceError.

// 14. Hoisting and Named Function Expressions

var foo = function bar() {
    console.log(typeof bar);
};

foo();
console.log(typeof bar);

//output:function undefined
// Explanation:
// This example uses a named function expression. Inside the function expression, the name bar is available and refers to the function itself, but bar is not hoisted or available in the outer scope. So, typeof bar inside the function returns "function", while outside it returns undefined.

// 15. Hoisting with Async/Await and var

async function asyncTest() {
    console.log(a);
    var a = 10;
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(a);
}

asyncTest();

//output: undefined 10

// 16. Hoisting with var and Immediately Invoked Function Expressions (IIFE)

var a = 1;

(function() {
    console.log(a);
    var a = 2;
    console.log(a);
})();

console.log(a);

//output: undefined 2 1

// 17. Hoisting and Function Expression inside a Block

{
    var a = function() {
        return 'I am a function';
    };
}

console.log(a());

//output: I am a function

