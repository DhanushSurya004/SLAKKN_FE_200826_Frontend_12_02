// TASK 1
let salary = 20000;
salary = 25000;
console.log(salary);


// TASK 2
const country = "India";
console.log(`My Country is ${country}`);


// TASK 3
let name1 = "Arun";
let age1 = 25;
console.log(`My name is ${name1} and I am ${age1} years old.`);


// TASK 4
let price = 500;
let quantity = 4;
let total = price * quantity;
console.log(`Total Price = ${total}`);


// TASK 5
function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}

greet("Arun");
greet();


// TASK 6
const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);


// TASK 7
const student = {
    name: "Arun",
    age: 20,
    city: "Chennai"
};
const { name, age, city } = student;
console.log(name);
console.log(age);
console.log(city);


// TASK 8
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];
console.log(newNumbers);


// TASK 9
function showNumbers(...values) {
    console.log(values);
}

showNumbers(10, 20, 30, 40);


// TASK 10
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));