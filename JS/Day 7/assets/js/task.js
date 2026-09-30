// TASK 1
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// TASK 2
let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1] = "Black";
console.log(colors);

// TASK 3
let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// TASK 4
let marks = [80, 70, 90, 60, 85];
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
console.log("Total =", total);

// TASK 5
let numbers = [2, 4, 6, 8, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// TASK 6
let student = {
  name: "Arun",
  age: 21,
  course: "MCA",
  city: "Chennai"
};
console.log(student.name);
console.log(student.course);

// TASK 7
let employee = {
  name: "Arun",
  salary: 25000,
  role: "Developer"
};
employee.salary = 30000;
console.log(employee);

// TASK 8
let product = {
  name: "Laptop",
  price: 50000
};
product.brand = "Dell";
console.log(product.name);
console.log(product.price);
console.log(product.brand);

// TASK 9
let car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2025
};
for (let key in car) {
  console.log(key, car[key]);
}

// TASK 10
let studentList = [
  { name: "Arun", mark: 80 },
  { name: "Priya", mark: 90 },
  { name: "Kumar", mark: 75 }
];
for (let i = 0; i < studentList.length; i++) {
  console.log(studentList[i].name + " - " + studentList[i].mark);
}