// array
/*
// JavaScript array is an object that repersents a collection of similar type of elements.

        var arrayname = [value1,value2,.......,valueN];
*/
var course = ["html","css","javascript","react"];
document.writeln(course);
document.write("<br>");
document.write("<br>");

// index value print
var course = ["html","css","javascript","react"];
document.writeln(course[0]);
document.write("<br>");
document.write("<br>");

// replacing value
var course = ["html","css","javascript","react"];
document.writeln(course + "<br>");
course[0] = "java";
document.writeln(course);
document.write("<br>");

// element length
var course = ["html","css","javascript","react"];
var x = course.length;
document.write("<br>Array length: " + x);
document.write("<br>");
document.write("<br>");

// for loop using length
var course = ["html","css","javascript","react"];
var x = course.length;
for(var i = 0; i < x; i++) {
    document.write(course[i] + "<br>");
}
document.write("<br>");

// adding element
var course = ["html","css","javascript","react"];
course[5] = "php";
course.push("java"); // 5 array java
document.write(course + "<br>");
document.write("<br>");
document.write("<br>");

//deleting array or removing element
var course = ["html","css","javascript","react"];
course.shift(); // remove first element html
course.pop(); // remove last element
document.write(course + "<br>");
document.write( "<br>");

// splice method

var course = ["html","css","javascript","react"]; course.splice(2,2);
document.write(course + "<br>");
document.write("<br>");
