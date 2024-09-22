// comparison operators or relational operators
/*
operator                  description
1. ==                   equal to
2. ===                  strict equal to
3.!=                   not equal to
4.>                      greater than
5. <                      less than
6. >=                   greater than or equal to
7. <=                   less than or equal to
*/

// == operator (equal to)
var a = 10;
var b = 20;
document.write(a == b); // false
var a = 10; // value only checking
var b = 10;
document.write(`<br>`);
document.write(a == b); // true

// === operator (strict equal to or identical operator)
var a = "20"; // value and datatype checking
var b = 20;
document.write(`<br>`);
document.write(a === b); // false
var a = "10";
var b = "10";
document.write(`<br>`);
document.write(a === b); // true

// != operator (not equal to)
var a = 10;
var b = 20;
document.write(`<br>`);
document.write(a!= b); // true
var a = 10;
var b = 10;
document.write(`<br>`);
document.write(a!== b); // false

// > operator (greater than)
var a = 30;
var b = 20;
document.write(`<br>`);
document.write(a > b); // true
var a = 20;
 var b = 30;
 document.write(`<br>`);
 document.write(a > b); // false

// < operator (less than)
var a = 20;
var b = 30;
document.write(`<br>`);
document.write(a < b); // true
var a = 30;
var b = 20;
document.write(`<br>`);
document.write(a < b); // false
 
// >= operator (greater than or equal to)
 var a = 30;
 var b = 20;
 document.write(`<br>`);
 document.write(a >= b); // true
 var a = 20;
 var b = 30;
 document.write(`<br>`);
 document.write(a >= b); // false
 
 // <= operator (less than or equal to)
 var a = 20;
 var b = 30;
 document.write(`<br>`);
 document.write(a <= b); // true
 var a = 30;
 var b = 20;
 document.write(`<br>`);
 document.write(a <= b); // false