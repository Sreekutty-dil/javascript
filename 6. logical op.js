// logical operators
/*
operator                   description

&& (AND)                  Returns true if both operands are true

|| (OR)                   Returns true if either of the operands is true

! (NOT)                   Reverses the logical state of the operand
*/
// && and operator
var a = 10;
var b = 20;
document.write(a == 10 && b == 20); //true
document.write(`<br>`);
document.write(a ==20 && b == 10); //false
// || or operator

var c = 10;
var d = 20;
document.write(`<br>`);
document.write(c == 10 || d == 20); //true
document.write(`<br>`);
document.write(c == 20 || d == 10); //false

// ! NOT operator 

var a = 10;
var b = 20;
document.write(`<br>`);
document.write(!(b==10)); //true
document.write(`<br>`);
document.write(!(b==20)); //false

