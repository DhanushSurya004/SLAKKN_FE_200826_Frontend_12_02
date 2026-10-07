// TASK 1
let numbers1 = [10, 20, 30, 40, 50];
let doubled = numbers1.map(n => n * 2);
console.log(doubled);


// TASK 2
let numbers2 = [10, 15, 20, 25, 30, 35, 40];
let evenNumbers = numbers2.filter(n => n % 2 === 0);
console.log(evenNumbers);


// TASK 3
let numbers3 = [10, 25, 35, 50, 60];
let firstAbove30 = numbers3.find(n => n > 30);
console.log(firstAbove30);


// TASK 4
let students = [
    { id: 1, name: "Dhanush", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];
let foundStudent = students.find(s => s.id === 2);
console.log(foundStudent);


// TASK 5
let employees = [
    { name: "Dhanush", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];
let highSalary = employees.filter(e => e.salary >= 30000);
console.log(highSalary);


// TASK 6
let employeeNames = employees.map(e => e.name);
console.log(employeeNames);


// TASK 7
let prices = [100, 200, 300, 400];
let totalPrice = prices.reduce((sum, p) => sum + p, 0);
console.log(totalPrice);


// TASK 8
let marks = [75, 80, 35, 90, 65];
let hasBelow40 = marks.some(m => m < 40);
let allAbove35 = marks.every(m => m >= 35);
console.log(hasBelow40);
console.log(allAbove35);


// TASK 9
let skills = ["HTML", "CSS", "JavaScript", "React"];
for (let skill of skills) {
    console.log(skill);
}


// TASK 10
let studentInfo = {
    name: "Dhanush",
    age: 23,
    course: "JavaScript",
    city: "Chennai"
};
for (let key in studentInfo) {
    console.log(key, studentInfo[key]);
}