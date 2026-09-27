// TASK 1 - SIMPLE CALCULATOR
let a = 20;
let b = 10;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// TASK 2 - EVEN OR ODD
let number = 15;
if (number % 2 === 0) {
  console.log(number, "is Even");
} else {
  console.log(number, "is Odd");
}

// TASK 3 - POSITIVE, NEGATIVE OR ZERO
let num = -5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// TASK 4 - VOTING ELIGIBILITY
let age = 20;
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

// TASK 5 - LARGEST OF TWO NUMBERS
let x = 40;
let y = 25;
if (x > y) {
  console.log(x, "is Largest");
} else if (y > x) {
  console.log(y, "is Largest");
} else {
  console.log("Both numbers are equal");
}

// TASK 6 - STUDENT GRADE
let mark = 78;
if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else if (mark >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// TASK 7 - PRINT 1 TO 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// TASK 8 - PRINT EVEN NUMBERS
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// TASK 9 - MULTIPLICATION TABLE
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// TASK 10 - SUM OF 1 TO 10
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log("Total =", total);