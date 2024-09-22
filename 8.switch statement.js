/*
switch statement

// Syntax:

switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}
*/
var a = "C";
switch(a) {
    case "A":
        document.write("Apple");
        break;
    case "B":
        document.write("Ball");
        break;
    case "C":
        document.write("Cat");
        break;
        default:
            document.write("Invalid Letter");   
}

document.write("<br>");

var x = 3;
switch(x) {
    case 1 :
        document.write("Monday");
        break;
    case 2 :
        document.write("Tuesday");
        break;
    case 3 :
        document.write("Wednesday");
        break;
    case 4 :
        document.write("Thursday");
        break;
    case 5 :
        document.write("Friday");
        break;
    case 6 :
        document.write("Saturday");
        break;
    case 7 :
        document.write("Sunday");
        break;
    default:
        document.write("Invalid Day");
}