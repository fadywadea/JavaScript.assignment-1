// first question
var exampleOne = prompt("Enter a number: ");

exampleOne = Number(exampleOne);

if (Number(exampleOne)) {
  console.log(exampleOne);
} else if (!Number.isFinite(exampleOne)) {
  console.log("not allowed input string");
} else {
  console.log("invalid");
}

/*--------------------------------------------------------------------------------*/
// sec question
var exampleTwo = prompt("Enter a number can divide by 3 and 4");

exampleTwo = Number(exampleTwo);

if (!Number.isFinite(exampleTwo)) {
  console.log("not allowed input string");
} else if (Number(exampleTwo) % 3 == 0 && Number(exampleTwo) % 4 == 0) {
  console.log("yes");
} else {
  console.log("no");
}

/*--------------------------------------------------------------------------------*/
// third question
var num1 = prompt("Enter the first integer: ");
var num2 = prompt("Enter the second integer: ");

num1 = Number(num1);
num2 = Number(num2);

if (Number(num1) > Number(num2)) {
  console.log("The max of the 2 integers is ==> ", num1);
} else if (Number(num1) < Number(num2)) {
  console.log("The max of the 2 integers is ==> ", num2);
} else if (Number(num1) === Number(num2)) {
  console.log("equal ");
} else if (!Number.isFinite(num1) && !Number.isFinite(num2)) {
  console.log("not allowed input string");
} else {
  console.log("invalid");
}

/*--------------------------------------------------------------------------------*/
// fourth question
var integerNum = prompt("Enter an integer: ");

integerNum = Number(integerNum);

if (integerNum > 0) {
  console.log("Positive");
} else if (!Number.isFinite(fifthQuestionNum1)) {
  console.log("not allowed input string");
} else {
  console.log("Negative");
}

/*--------------------------------------------------------------------------------*/
// fifth question
var fifthQuestionNum1 = prompt("Enter the first integer: ");
var fifthQuestionNum2 = prompt("Enter the second integer: ");
var fifthQuestionNum3 = prompt("Enter the third integer: ");

fifthQuestionNum1 = Number(fifthQuestionNum1);
fifthQuestionNum2 = Number(fifthQuestionNum2);
fifthQuestionNum3 = Number(fifthQuestionNum3);

var max = fifthQuestionNum1;
if (max < fifthQuestionNum2) {
  max = fifthQuestionNum2;
}

if (max < fifthQuestionNum3) {
  max = fifthQuestionNum3;
}

var min = fifthQuestionNum1;
if (min > fifthQuestionNum2) {
  min = fifthQuestionNum2;
}
if (min > fifthQuestionNum3) {
  min = fifthQuestionNum3;
}

if (
  !Number.isFinite(fifthQuestionNum1) && !Number.isFinite(fifthQuestionNum2) && !Number.isFinite(fifthQuestionNum3)) {
  console.log("not allowed input string");
} else {
  console.log("The max of the 3 integers is ==> ", max);
  console.log("The max of the 3 integers is ==> ", min);
}

/*--------------------------------------------------------------------------------*/
// Sixth question
var SixthQuestionNum = prompt("Enter a number: ");

SixthQuestionNum = Number(SixthQuestionNum);

if (!Number.isFinite(SixthQuestionNum)) {
  console.log("not allowed input string");
} else if (SixthQuestionNum % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

/*--------------------------------------------------------------------------------*/
// Eighth question
var character = prompt("Enter a character: ");

if (character === "e" || character === "i" || character === "a" || character === "o" || character === "u") {
  console.log("The character is a vowel.");
} else {
  console.log("The character is a consonant.");
}

/*--------------------------------------------------------------------------------*/
//  Question nine
var num9 = prompt("Enter a numebr: ");

num9 = Number(num9);

for (var i = 1; i <= num9; i++) {
  console.log(i);
}

/*--------------------------------------------------------------------------------*/
//  Question ten
var num10 = prompt("Enter a number: ");

num10 = Number(num10);

for (var i = 1; i <= 12; i++) {
  console.log(num10 * i);
}

/*--------------------------------------------------------------------------------*/
//  Eleventh question
var numb11 = prompt("Enter a number :");

numb11 = Number(numb11);

for (var i = 2; i <= numb11; i++) {
  if (i % 2 == 0) {
    console.log("Even number ==> " + i);
  }
}

/*--------------------------------------------------------------------------------*/
//  Twelfth question
var num12 = prompt("Enter the first number: ");
var num22 = prompt("Enter the second number: ");
var result = 1;

num12 = Number(num12);
num22 = Number(num22);

for (var i = 0; i < num22; i++) {
  result = result * num12;
}
console.log(result);

/*--------------------------------------------------------------------------------*/
// Question thirteen
var num13 = prompt("Enter the first number: ");
var num23 = prompt("Enter the second number: ");
var num33 = prompt("Enter the third number: ");
var num43 = prompt("Enter the fourth  number: ");
var num53 = prompt("Enter the fifth number: ");

num13 = Number(num13);
num23 = Number(num23);
num33 = Number(num33);
num43 = Number(num43);
num53 = Number(num53);

var totalMarks = num13 + num23 + num33 + num43 + num53;
var averageMarks = totalMarks / 5;
var percentage = ((totalMarks / 100) * 100);

console.log("Total marks = " + totalMarks);
console.log("Average marks = " + averageMarks);
console.log("percentage = " + percentage + "%");

/*--------------------------------------------------------------------------------*/
// Question Fourteen

var num14 = prompt("Enter the month number: ");

num14 = Number(num14);

if (num14 === 1 || num14 === 3 || num14 === 5 || num14 === 7 || num14 === 8 || num14 === 10 || num14 === 12) {
  console.log("31 days");
} else if (num14 === 4 || num14 === 6 || num14 === 9 || num14 === 11) {
  console.log("30 days");
} else if (num14 === 2) {
  console.log("28 or 29 days");
} else {
  console.log("Invalid month number");
}

/*--------------------------------------------------------------------------------*/
// Question fifteen
var physics = prompt("Enter a number of the subject physics :");
var chemistry = prompt("Enter a number of the subject chemistry :");
var biology = prompt("Enter a number of the subject biology :");
var mathematics = prompt("Enter a number of the subject mathematics :");
var computer = prompt("Enter a number of the subject computer :");

physics = Number(physics);
chemistry = Number(chemistry);
biology = Number(biology);
mathematics = Number(mathematics);
computer = Number(computer);

var totalMarksSubjects = (physics + chemistry + biology + mathematics + computer);

// The total marks of one subject is 100 marks
var averageMarksSubjects = ((totalMarksSubjects / 500) * 100);

if (averageMarksSubjects >= 90) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is A");
} else if (averageMarksSubjects >= 80) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is B");
} else if (averageMarksSubjects >= 70) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is C");
} else if (averageMarksSubjects >= 60) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is D");
} else if (averageMarksSubjects >= 40) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is E");
} else if (averageMarksSubjects < 40) {
  console.log("Percentage is " + averageMarksSubjects + "% and Grad is F");
} else {
  console.log("invalid");
}

/********************************* Using switch case********************************/
// Sixteenth question
var numMonth = prompt("Enter the month number: ");
switch (numMonth) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 or 29 days");
    break;
  default:
    console.log("Invalid month number");
    break;
}

/*--------------------------------------------------------------------------------*/
// Question seventeen
var letter = prompt("Enter a letter: ");

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("The letter is a vowel.");
    break;
  default:
    console.log("The letter is a consonant.");
    break;
}

/*--------------------------------------------------------------------------------*/
// Question eighteen
var num118 = prompt("Enter the first number: ");
var num218 = prompt("Enter the second number: ");
switch (num118 > num2) {
  case true:
    console.log("The maximum number is " + num118);
    break;
  case false:
    console.log("The maximum number is " + num218);
    break;
}

/*--------------------------------------------------------------------------------*/
// Question nineteen
var num119 = prompt("Enter a number: ");
switch (num119 % 2) {
  case 0:
    console.log("The number is even.");
    break;
  case 1:
    console.log("The number is odd.");
    break;
}

/*--------------------------------------------------------------------------------*/
// Question twenty
var num200 = prompt("Enter a number: ");
switch (num200) {
  case 0:
    console.log("The number is zero.");
    break;
  case num200 > 0:
    console.log("The number is positive.");
    break;
  case num200 < 0:
    console.log("The number is negative.");
    break;
}

/*--------------------------------------------------------------------------------*/
// Last question :-)
var num120 = prompt("Enter the first number: ");
var num220 = prompt("Enter the second number: ");
var operator = prompt("Enter the operator (+, -, *, /): ");

num120 = Number(num120);
num220 = Number(num220);

switch (operator) {
  case "+":
    var res = num120 + num220;
    console.log("The result is " + res);
    break;
  case "-":
    var res = num120 - num220;
    console.log("The result is " + res);
    break;
  case "*":
    var res = num120 * num220;
    console.log("The result is " + res);
    break;
  case "/":
    var res = num120 / num220;
    console.log("The result is " + res);
    break;
  default:
    console.log("Invalid operator");
    break;
}
