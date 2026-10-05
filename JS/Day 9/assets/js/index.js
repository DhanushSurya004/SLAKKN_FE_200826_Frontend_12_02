// TASK 1
let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";
    console.log(company);
    console.log(employee);
}

showEmployee();
try {
    console.log(employee);
} catch (e) {
    console.log(e.message);
}


// TASK 2
if (true) {
    let age1 = 25;
    const city1 = "Chennai";
    console.log(age1);
    console.log(city1);
}
try {
    console.log(age1);
    console.log(city1);
} catch (e) {
    console.log(e.message);
}

if (true) {
    var age2 = 25;
    const city2 = "Chennai";
    console.log(age2);
    console.log(city2);
}
console.log(age2);
try {
    console.log(city2);
} catch (e) {
    console.log(e.message);
}


// TASK 3
console.log(num1);
var num1 = 10;

try {
    console.log(num2);
    let num2 = 20;
} catch (e) {
    console.log(e.message);
}

greet();
function greet() {
    console.log("Welcome to JavaScript");
}


// TASK 4
function createCounter() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = createCounter();
counter();
counter();
counter();


// TASK 5
function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(20, 10, add);
calculate(20, 10, subtract);