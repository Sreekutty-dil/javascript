// functions
/* javascript functions are used to perform operations.We can call javascript function many times to resuse the code.

// syntax:-

function keyword function name() {
// code
}
function calling() 

// example

// function basic pgm

function greeting() {
    document.write("Hello World");
}
greeting();

*/

// function parameters or arguments
// function function name(parameter or argument) {
/*function greeting(name) {
    document.write("Hello World : " + name + "<br>");
}
// calling function(parameter value)
greeting("javascript");
*/
/*
// argument using sum

function sum(a,b) {
    document.write(a + b);
   // document.write("Sum : " + (a + b) + "<br>");
}
sum(10,20); 
*/
// return using code
function sum(a,b) {
    return a + b;
}

var result = sum(10,20);

document.write("Sum : " + result);

