// if statement
/*
// conditional statements
// condttion -> true -> execute code

if(condttion) {
    // execute code;
    }
*/
var a = 10;
if(a>0) {
    document.write("positive Number");
}
document.write("<br>");

// else statements
var a = -10;
if(a>0) {
    document.write("Positive Number");
} else {
    document.write("Negative Number")
}
document.write("<br>");
// else if statements

var a = 0;
if(a>0) {
    document.write("Positive Number");
} else if(a<0) {
    document.write("Negative Number")
} else {
    document.write("Zero Number")
}
document.write("<br>");
document.write("<br>");
// display a "Good Day" greeting if the hour is less than 18:00

let hour = new Date().getHours();
if(hour<18) {
    document.write("Good Day");
} else if(hour>=18) {
    document.write("Good Evening");
} else {
    document.write("Good Night");
}
document.write("<br>");
document.write("<br>");
// determing the grade based on score
var score = 85;
if(score > 95) {
    document.write("Grade A");
} else if(score > 85) {
    document.write("Grade B");
} else { 
    document.write("Grade C");
}
document.write("<br>");
document.write("<br>");

// age for access
 let age = 20;
 if(age >= 21) {
    document.write("you can enter the club");
 } else if(age>=18) {
    document.write("you can enter the event but not drink alcohol");
 } else {
    document.write("you cannot enter the event");
 }

 // checking lnventory status
 let inventory = 10;
 if(inventory > 20) {
    document.write("in stock");
 } else if(inventory < 20) {
    document.write("low of stock");
 } else {
    document.write("out of stock");
 }